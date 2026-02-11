const { Score } = _InfoPage;
const { Flex, Badge, Card, Divider, Tag, Space } = antd;

const BaseExample = () => {
  return (
    <Flex vertical gap={16}>
      {/* 基础用法 */}
      <Card title="基础评分" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Flex gap={24} align="center">
            <span>产品评分：</span>
            <Score value={5} />
          </Flex>
          <Flex gap={24} align="center">
            <span>服务质量：</span>
            <Score value={4} />
          </Flex>
          <Flex gap={24} align="center">
            <span>物流速度：</span>
            <Score value={3} />
          </Flex>
          <Flex gap={24} align="center">
            <span>性价比：</span>
            <Score value={2} />
          </Flex>
          <Flex gap={24} align="center">
            <span>用户满意：</span>
            <Score value={1} />
          </Flex>
        </Space>
      </Card>

      <Divider />

      {/* 自定义总分 */}
      <Card title="自定义总分" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Flex gap={24} align="center">
            <span>3分制：</span>
            <Score value={0} total={3} />
            <Score value={1} total={3} />
            <Score value={2} total={3} />
            <Score value={3} total={3} />
          </Flex>
          <Flex gap={24} align="center">
            <span>4分制：</span>
            <Score value={1} total={4} />
            <Score value={2} total={4} />
            <Score value={3} total={4} />
            <Score value={4} total={4} />
          </Flex>
          <Flex gap={24} align="center">
            <span>5分制：</span>
            <Score value={2} total={5} />
            <Score value={3} total={5} />
            <Score value={4} total={5} />
            <Score value={5} total={5} />
          </Flex>
        </Space>
      </Card>

      <Divider />

      {/* 无间距 */}
      <Card title="紧凑模式（gap=0）" size="small">
        <Flex gap={24} align="center">
          <Score value={1} total={5} gap={0} />
          <Score value={2} total={5} gap={0} />
          <Score value={3} total={5} gap={0} />
          <Score value={4} total={5} gap={0} />
          <Score value={5} total={5} gap={0} />
        </Flex>
      </Card>

      <Divider />

      {/* 业务场景 */}
      <Card title="业务场景示例" size="small">
        <Space direction="vertical" style={{ width: '100%' }}>
          <div style={{ padding: '8px 0' }}>
            <Flex justify="space-between" align="center" style={{ marginBottom: 8 }}>
              <span>商品名称</span>
              <Tag color="blue">新品上市</Tag>
            </Flex>
            <Flex justify="space-between" align="center" style={{ marginBottom: 4 }}>
              <span style={{ color: '#999', fontSize: 12 }}>用户评价</span>
              <Badge count={128} showZero />
            </Flex>
            <Flex justify="space-between" align="center">
              <span style={{ fontSize: 14, fontWeight: 500 }}>Apple iPhone 15 Pro</span>
              <Score value={5} />
            </Flex>
          </div>

          <div style={{ padding: '8px 0', borderTop: '1px solid #f0f0f0' }}>
            <Flex justify="space-between" align="center" style={{ marginBottom: 4 }}>
              <span style={{ color: '#999', fontSize: 12 }}>商品评分</span>
              <span style={{ fontSize: 12, color: '#ff4d4f' }}>4.8/5.0</span>
            </Flex>
            <Flex justify="space-between" align="center">
              <span style={{ fontSize: 14 }}>综合得分</span>
              <Score value={4} total={5} />
            </Flex>
          </div>
        </Space>
      </Card>

      <Divider />

      {/* 所有评分展示 */}
      <Card title="完整评分展示" size="small">
        <Flex wrap="wrap" gap={16}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Flex key={index} vertical align="center" gap={4}>
              <Score value={index} />
              <span style={{ fontSize: 12, color: '#999' }}>{index}分</span>
            </Flex>
          ))}
        </Flex>
      </Card>
    </Flex>
  );
};

render(<BaseExample />);
