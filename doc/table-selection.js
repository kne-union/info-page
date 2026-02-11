const { TableView } = _InfoPage;
const { Flex, Radio, Space, Button, Tag, Avatar } = antd;
const { useState } = React;

const dataSource = [
  { id: 'C20240115001', name: '张三', company: '腾讯科技', contact: '138-0013-8000', amount: 50000, status: '已签约' },
  { id: 'C20240115002', name: '李四', company: '华为技术', contact: '139-0014-9000', amount: 85000, status: '跟进中' },
  { id: 'C20240115003', name: '王五', company: '阿里巴巴', contact: '137-0015-7000', amount: 120000, status: '已签约' },
  { id: 'C20240115004', name: '赵六', company: '字节跳动', contact: '136-0016-6000', amount: 65000, status: '待跟进' },
  { id: 'C20240115005', name: '钱七', company: '百度在线', contact: '135-0017-5000', amount: 95000, status: '已签约' }
];

const columns = [
  { name: 'id', title: '客户编号' },
  { name: 'name', title: '联系人' },
  { name: 'company', title: '所属公司' },
  { name: 'contact', title: '联系电话' },
  { name: 'amount', title: '签约金额(元)' },
  { name: 'status', title: '状态' }
];

const BaseExample = () => {
  const [selectionType, setSelectionType] = useState('none');
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  // 复选框选择示例
  const CheckboxExample = () => {
    const [keys, setKeys] = useState([]);
    const totalAmount = keys.reduce((sum, id) => sum + (dataSource.find(d => d.id === id)?.amount || 0), 0);
    return (
      <div>
        <Flex justify="space-between" align="center" style={{ marginBottom: 12 }}>
          <span>已选 <strong style={{ color: '#1890ff' }}>{keys.length}</strong> 位客户，总金额 <strong style={{ color: '#52c41a' }}>¥{totalAmount.toLocaleString()}</strong></span>
          <Space>
            <Button size="small" onClick={() => setKeys(dataSource.filter(d => d.status === '已签约').map(d => d.id))}>
              选已签约
            </Button>
            <Button size="small" onClick={() => setKeys([])}>清空</Button>
          </Space>
        </Flex>
        <TableView
          dataSource={dataSource}
          columns={columns}
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: keys,
            onChange: setKeys
          }}
        />
      </div>
    );
  };

  // 全选状态示例
  const SelectAllExample = () => {
    const [keys, setKeys] = useState([]);
    const [isSelectedAll, setIsSelectedAll] = useState(false);

    const handleSelectAll = () => {
      if (isSelectedAll) {
        setKeys([]);
      } else {
        setKeys(dataSource.map(d => d.id));
      }
      setIsSelectedAll(!isSelectedAll);
    };

    return (
      <div>
        <Flex justify="space-between" align="center" style={{ marginBottom: 12 }}>
          <span>{isSelectedAll ? <Tag color="green">已全选所有客户</Tag> : <Tag>未全选</Tag>}</span>
          <Button size="small" onClick={handleSelectAll}>
            {isSelectedAll ? '取消全选' : '全选客户'}
          </Button>
        </Flex>
        <TableView
          dataSource={dataSource}
          columns={columns}
          rowSelection={{
            type: 'checkbox',
            isSelectedAll,
            allowSelectedAll: true,
            selectedRowKeys: keys,
            onChange: (keys) => {
              setKeys(keys);
              setIsSelectedAll(keys.length === dataSource.length);
            }
          }}
        />
      </div>
    );
  };

  // 单选框示例
  const RadioExample = () => {
    const [key, setKey] = useState(null);
    const selectedCustomer = dataSource.find(d => d.id === key);
    return (
      <div>
        <Flex justify="space-between" align="center" style={{ marginBottom: 12 }}>
          <span>已选客户：{selectedCustomer ? `${selectedCustomer.name} (${selectedCustomer.company})` : '无'}</span>
          <Tag color={selectedCustomer ? 'blue' : 'default'}>{selectedCustomer ? `¥${selectedCustomer.amount.toLocaleString()}` : '-'}</Tag>
        </Flex>
        <TableView
          dataSource={dataSource}
          columns={columns}
          rowSelection={{
            type: 'radio',
            selectedRowKeys: key ? [key] : [],
            onChange: (keys) => setKey(keys.length > 0 ? keys[0] : null)
          }}
        />
      </div>
    );
  };

  // 无选择模式
  const NoSelectionExample = () => (
    <div>
      <div style={{ marginBottom: 12 }}>客户列表 - 共 {dataSource.length} 位</div>
      <TableView dataSource={dataSource} columns={columns} />
    </div>
  );

  // 自定义渲染示例
  const CustomRenderExample = () => {
    const [keys, setKeys] = useState([]);
    return (
      <div>
        <div style={{ marginBottom: 12 }}>自定义渲染客户列表</div>
        <TableView
          dataSource={dataSource}
          columns={[
            { name: 'id', title: '客户编号' },
            { name: 'name', title: '联系人', render: (value) => <Flex align="center" gap={8}><Avatar size="small">{value[0]}</Avatar>{value}</Flex> },
            { name: 'company', title: '所属公司' },
            { name: 'contact', title: '联系电话' },
            { name: 'amount', title: '签约金额', render: (value) => <strong style={{ color: '#52c41a' }}>¥{value.toLocaleString()}</strong> },
            { name: 'status', title: '状态', render: (value) => {
              const config = {
                '已签约': { color: 'success', text: '已签约' },
                '跟进中': { color: 'processing', text: '跟进中' },
                '待跟进': { color: 'warning', text: '待跟进' }
              };
              const { color, text } = config[value] || { color: 'default', text: value };
              return <Tag color={color}>{text}</Tag>;
            }}
          ]}
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: keys,
            onChange: setKeys
          }}
        />
      </div>
    );
  };

  const renderExample = () => {
    switch (selectionType) {
      case 'checkbox':
        return <CheckboxExample />;
      case 'selectAll':
        return <SelectAllExample />;
      case 'radio':
        return <RadioExample />;
      case 'custom':
        return <CustomRenderExample />;
      default:
        return <NoSelectionExample />;
    }
  };

  return (
    <Flex vertical gap={16}>
      {/* 控制面板 */}
      <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
        <span style={{ marginRight: 12 }}>选择模式：</span>
        <Radio.Group value={selectionType} onChange={(e) => setSelectionType(e.target.value)}>
          <Radio.Button value="none">无选择</Radio.Button>
          <Radio.Button value="checkbox">复选框</Radio.Button>
          <Radio.Button value="selectAll">全选状态</Radio.Button>
          <Radio.Button value="radio">单选框</Radio.Button>
          <Radio.Button value="custom">自定义渲染</Radio.Button>
        </Radio.Group>
      </div>

      {/* 示例展示区 */}
      {renderExample()}
    </Flex>
  );
};

render(<BaseExample />);
