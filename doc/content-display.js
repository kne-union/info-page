const { Content } = _InfoPage;
const { Flex, Radio, Space, Tag, Avatar } = antd;
const { useState } = React;

const BaseExample = () => {
  const [listProps, setListProps] = useState({
    col: 2,
    size: 'default',
    labelAlign: 'auto',
    gutter: 16
  });

  const [showDisabled, setShowDisabled] = useState(false);

  const onChange = (e, name) => {
    const val = e?.target.value;
    setListProps(prevState => ({ ...prevState, [name]: val }));
  };

  const dataList = [
    { label: '客户姓名', content: <Flex align="center" gap={8}><Avatar size="small">张</Avatar>张三</Flex>, block: true },
    { label: '客户编号', content: 'C20240115001' },
    { label: '联系电话', content: '138-0013-8000' },
    { label: '电子邮箱', content: 'zhangsan@example.com' },
    { label: '客户类型', content: <Tag color="blue">VIP客户</Tag> },
    { label: '信用等级', content: <Tag color="green">A级</Tag> },
    { label: '所属公司', content: '深圳市腾讯计算机系统有限公司', block: true },
    { label: '所在部门', content: '技术部', display: !showDisabled },
    { label: '职位', content: '高级前端工程师', display: !showDisabled },
    { label: '注册时间', content: '2020-03-15' },
    { label: '最后登录', content: '2024-01-15 10:30:00' },
    { label: '账户状态', content: <Tag color="success">正常</Tag> },
    { label: '备注信息', content: '该客户为公司长期合作伙伴，合作期间表现优秀，建议继续保持良好合作关系。', block: true }
  ];

  return (
    <Flex vertical gap={16}>
      {/* 控制面板 */}
      <Space direction="vertical" size={12} style={{ background: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
        <div>
          <span style={{ marginRight: 8 }}>列数：</span>
          <Radio.Group onChange={(e) => onChange(e, 'col')} value={listProps.col}>
            <Radio.Button value={1}>单列</Radio.Button>
            <Radio.Button value={2}>两列</Radio.Button>
            <Radio.Button value={3}>三列</Radio.Button>
            <Radio.Button value={4}>四列</Radio.Button>
          </Radio.Group>
        </div>

        <div>
          <span style={{ marginRight: 8 }}>标签对齐：</span>
          <Radio.Group onChange={(e) => onChange(e, 'labelAlign')} value={listProps.labelAlign}>
            <Radio.Button value='left'>左对齐</Radio.Button>
            <Radio.Button value='center'>居中</Radio.Button>
            <Radio.Button value='right'>右对齐</Radio.Button>
            <Radio.Button value='auto'>自适应</Radio.Button>
          </Radio.Group>
        </div>

        <div>
          <span style={{ marginRight: 8 }}>尺寸：</span>
          <Radio.Group onChange={(e) => onChange(e, 'size')} value={listProps.size}>
            <Radio.Button value='default'>默认</Radio.Button>
            <Radio.Button value='small'>小尺寸</Radio.Button>
          </Radio.Group>
        </div>

        <div>
          <span style={{ marginRight: 8 }}>显示隐藏：</span>
          <Radio.Group onChange={(e) => setShowDisabled(e.target.value)} value={showDisabled}>
            <Radio.Button value={false}>显示全部</Radio.Button>
            <Radio.Button value={true}>隐藏部分</Radio.Button>
          </Radio.Group>
        </div>
      </Space>

      {/* Content 组件展示 */}
      <Content
        {...listProps}
        list={dataList.map(item => ({
          ...item,
          display: typeof item.display === 'boolean' ? item.display : undefined
        }))}
      />
    </Flex>
  );
};

render(<BaseExample />);
