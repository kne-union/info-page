const { Content } = _InfoPage;
const { Space, Radio, Tag } = antd;
const { useState } = React;

const BaseExample = () => {
  const [listProps, setListProps] = useState({
    col: 2,
    size: 'default',
    labelAlign: 'left'
  });

  const onChange = (e, name) => {
    const val = e?.target.value;
    setListProps(prevState => Object.assign({}, prevState, { [name]: val }));
  };

  return (
    <Space direction='vertical' size={16}>
      {/* 控制面板 */}
      <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
        <Space direction="vertical" size={12} style={{ width: '100%' }}>
          <div>
            <span style={{ marginRight: 8 }}>列数：</span>
            <Radio.Group onChange={(e) => onChange(e, 'col')} value={listProps.col}>
              <Radio.Button value={1}>单列</Radio.Button>
              <Radio.Button value={2}>两列</Radio.Button>
              <Radio.Button value={3}>三列</Radio.Button>
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
        </Space>
      </div>

      {/* Content 组件展示 */}
      <Content
        {...listProps}
        list={[
          { label: '客户名称', content: '深圳市腾讯计算机系统有限公司' },
          { label: '统一社会信用代码', content: '914403007109410773' },
          { label: '法定代表人', content: '马化腾' },
          { label: '企业类型', content: <Tag color="blue">有限责任公司</Tag> },
          { label: '成立日期', content: '1998-11-11' },
          { label: '注册资本', content: '500万美元' },
          { label: '经营状态', content: <Tag color="success">存续</Tag> },
          { label: '注册地址', content: '深圳市南山区高新科技园科技中一路腾讯大厦' },
          {
            label: '经营范围',
            content: '计算机软硬件的技术开发、销售；计算机网络工程；系统集成；软件开发及技术服务；信息咨询；网络设备、通讯设备、电子产品的技术开发与销售；国内贸易。',
            block: true
          }
        ]}
        itemRender={(inner, other) => {
          return other?.index === 8 ? <div style={{ color: '#999', fontSize: '12px', marginTop: '8px' }}>
            * 以上信息仅供展示，不代表真实数据
          </div> : inner;
        }}
      />
    </Space>
  );
};

render(<BaseExample />);
