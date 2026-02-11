const { formatView } = _InfoPage;
const { Flex, Space, Tag, Badge } = antd;

// 演示 formatView 工具函数的使用
const FormatDemo = () => {
  const demoData = {
    orderDate: '2024-01-15T10:30:00',
    deliveryDate: '2024-01-20',
    serviceDateRange: ['2024-01-01', '2024-12-31'],
    isVip: true,
    isActivated: false,
    userCount: 15678,
    totalAmount: 99999.99,
    discountRate: 0.085,
    completionRate: 85.67,
    phoneNumber: '13800138000'
  };

  // 自定义格式化函数
  const formatPhone = (val) => {
    if (!val) return '-';
    return val.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
  };

  return (
    <Flex vertical gap={16}>
      <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
        <h4 style={{ margin: '0 0 12px 0' }}>formatView 工具函数演示</h4>
        <Space direction="vertical" size={8} style={{ width: '100%' }}>
          <Flex justify="space-between" align="center">
            <span><strong>datetime:</strong></span>
            <span>{formatView(demoData.orderDate, 'datetime')} → {formatView(demoData.orderDate, 'datetime-YYYY年MM月DD日 HH:mm')}</span>
          </Flex>
          <Flex justify="space-between" align="center">
            <span><strong>date:</strong></span>
            <span>{formatView(demoData.deliveryDate, 'date')} → {formatView(demoData.deliveryDate, 'date-YYYY/MM/DD')}</span>
          </Flex>
          <Flex justify="space-between" align="center">
            <span><strong>dateRange:</strong></span>
            <span>{formatView(demoData.serviceDateRange, 'dateRange')}</span>
          </Flex>
          <Flex justify="space-between" align="center">
            <span><strong>boolean:</strong></span>
            <Flex gap={8}>
              <span>VIP客户: {formatView(demoData.isVip, 'boolean-是/否')}</span>
              <span>已激活: {formatView(demoData.isActivated, 'boolean-是/否')}</span>
            </Flex>
          </Flex>
          <Flex justify="space-between" align="center">
            <span><strong>number:</strong></span>
            <span>{formatView(demoData.userCount, 'number-useGrouping:true')} 用户</span>
          </Flex>
          <Flex justify="space-between" align="center">
            <span><strong>money:</strong></span>
            <span style={{ color: '#f5222d', fontWeight: 'bold' }}>{formatView(demoData.totalAmount, 'money-元')}</span>
          </Flex>
          <Flex justify="space-between" align="center">
            <span><strong>discount:</strong></span>
            <span>折扣: {formatView(demoData.discountRate * 100, 'number-maximumFractionDigits:1-suffix:折')}</span>
          </Flex>
          <Flex justify="space-between" align="center">
            <span><strong>percent:</strong></span>
            <span>完成率: {formatView(demoData.completionRate, 'number-maximumFractionDigits:2-suffix:%')}</span>
          </Flex>
          <Flex justify="space-between" align="center">
            <span><strong>custom:</strong></span>
            <span>{formatPhone(demoData.phoneNumber)}</span>
          </Flex>
        </Space>
      </div>

      {/* 实际应用场景演示 */}
      <div style={{ background: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid #e8e8e8' }}>
        <h4 style={{ margin: '0 0 12px 0' }}>实际应用场景：订单详情</h4>
        <Flex vertical gap={8}>
          <Flex justify="space-between" align="center">
            <span style={{ color: '#666' }}>订单编号</span>
            <span>ORD20240115001</span>
          </Flex>
          <Flex justify="space-between" align="center">
            <span style={{ color: '#666' }}>下单时间</span>
            <span>{formatView(demoData.orderDate, 'datetime')}</span>
          </Flex>
          <Flex justify="space-between" align="center">
            <span style={{ color: '#666' }}>预计送达</span>
            <span>{formatView(demoData.deliveryDate, 'date-YYYY年MM月DD日')}</span>
          </Flex>
          <Flex justify="space-between" align="center">
            <span style={{ color: '#666' }}>服务期限</span>
            <span>{formatView(demoData.serviceDateRange, 'dateRange')}</span>
          </Flex>
          <Flex justify="space-between" align="center">
            <span style={{ color: '#666' }}>客户类型</span>
            <Tag color={demoData.isVip ? 'gold' : 'default'}>{formatView(demoData.isVip, 'boolean-VIP/普通')}</Tag>
          </Flex>
          <Flex justify="space-between" align="center">
            <span style={{ color: '#666' }}>订单金额</span>
            <span style={{ color: '#f5222d', fontSize: '18px', fontWeight: 'bold' }}>
              {formatView(demoData.totalAmount, 'money-元')}
            </span>
          </Flex>
          <Flex justify="space-between" align="center">
            <span style={{ color: '#666' }}>优惠折扣</span>
            <span style={{ color: '#52c41a' }}>{formatView(demoData.discountRate * 100, 'number-maximumFractionDigits:1-suffix:折')}</span>
          </Flex>
          <Flex justify="space-between" align="center">
            <span style={{ color: '#666' }}>订单状态</span>
            <Badge status={demoData.completionRate >= 100 ? 'success' : 'processing'} text={demoData.completionRate >= 100 ? '已完成' : '处理中'} />
          </Flex>
          <Flex justify="space-between" align="center">
            <span style={{ color: '#666' }}>完成进度</span>
            <span>{formatView(demoData.completionRate, 'number-maximumFractionDigits:2-suffix:%')}</span>
          </Flex>
          <Flex justify="space-between" align="center">
            <span style={{ color: '#666' }}>联系电话</span>
            <span>{formatPhone(demoData.phoneNumber)}</span>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};

const BaseExample = () => {
  return (
    <Flex vertical gap={24}>
      <FormatDemo />
    </Flex>
  );
};

render(<BaseExample />);
