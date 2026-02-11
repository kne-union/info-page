const { Flex, Space, Divider, Tag } = antd;
const { Flow } = _InfoPage;

const BaseExample = () => {
  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      {/* 基础流程示例 */}
      <div>
        <Divider orientation="left">请假审批流程</Divider>
        <Flow
          current={1}
          dataSource={[
            { title: '提交申请', description: '2024-01-15 09:00 张三提交请假申请', status: 'finish' },
            { title: '部门审批', description: '等待李经理审批', status: 'process' },
            { title: '人事审核', description: '待人事部审核', status: 'wait' },
            { title: '流程结束', description: '审批流程完成', status: 'wait' }
          ]}
        />
      </div>

      {/* 带副标题的流程 */}
      <div>
        <Divider orientation="left">订单处理流程</Divider>
        <Flow
          current={2}
          dataSource={[
            { title: '创建订单', subTitle: '2024-01-15 09:30', status: 'finish' },
            { title: '支付成功', subTitle: '2024-01-15 10:15', status: 'finish' },
            { title: '仓库发货', subTitle: '2024-01-15 14:00', status: 'finish' },
            { title: '配送中', subTitle: '2024-01-16 08:30', status: 'process' },
            { title: '已签收', subTitle: '待确认', status: 'wait' }
          ]}
        />
      </div>

      {/* 使用 columns 自定义渲染 */}
      <div>
        <Divider orientation="left">项目审批流程</Divider>
        <Flow
          dataSource={[
            {
              title: '需求评审',
              description: '通过',
              operator: '张产品',
              time: '2024-01-15 09:00',
              logs: [
                { name: '张产品', action: '提交需求文档', time: '2024-01-15 09:00', content: '包含功能列表、技术方案、时间计划' },
                { name: '李技术', action: '技术评审通过', time: '2024-01-15 11:00', content: '技术方案可行，资源充足' }
              ]
            },
            {
              title: '开发实施',
              description: '进行中',
              operator: '王开发',
              time: '2024-01-16 09:00',
              logs: [
                { name: '王开发', action: '开始开发', time: '2024-01-16 09:00', content: '前端和后端并行开发' }
              ]
            },
            {
              title: '测试验收',
              description: '待处理',
              operator: '赵测试',
              time: '2024-01-20 00:00',
              logs: []
            }
          ]}
          columns={[
            { name: 'title' },
            { name: 'description', render: (value) => <Tag color={value === '通过' ? 'success' : value === '进行中' ? 'processing' : 'default'}>{value}</Tag> },
            { type: 'subTitle', name: 'time', format: 'datetime' },
            {
              type: 'actionList',
              name: 'logs',
              children: [
                { name: 'name' },
                { name: 'action' },
                { type: 'options', name: 'time', format: 'datetime' },
                { name: 'content' }
              ]
            }
          ]}
        />
      </div>

      {/* 点状步骤条 */}
      <div>
        <Divider orientation="left">项目里程碑</Divider>
        <Flex gap={16}>
          <div style={{ flex: 1 }}>
            <p style={{ marginBottom: 8, color: '#666' }}>垂直时间轴</p>
            <Flow
              direction="vertical"
              progressDot
              dataSource={[
                { title: '项目启动', description: '2024-01-01', status: 'finish' },
                { title: '需求分析', description: '2024-01-15', status: 'finish' },
                { title: '系统设计', description: '2024-02-01', status: 'process' },
                { title: '开发实施', description: '2024-03-01', status: 'wait' },
                { title: '测试上线', description: '2024-04-01', status: 'wait' }
              ]}
            />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ marginBottom: 8, color: '#666' }}>水平进度条</p>
            <Flow
              direction="horizontal"
              progressDot
              dataSource={[
                { title: '注册', description: '完成', status: 'finish' },
                { title: '验证', description: '完成', status: 'finish' },
                { title: '审核', description: '进行中', status: 'process' },
                { title: '通过', description: '待办', status: 'wait' }
              ]}
            />
          </div>
        </Flex>
      </div>

      {/* 使用 content 类型自定义内容 */}
      <div>
        <Divider orientation="left">合同审批流程</Divider>
        <Flow
          dataSource={[
            {
              title: '草拟阶段',
              description: '法务部',
              content: '合同条款已草拟完成，包含保密协议、付款条款、违约责任等内容。',
              status: 'finish'
            },
            {
              title: '业务审核',
              description: '业务部门',
              content: '业务部门已确认合同内容，符合业务需求。',
              status: 'finish'
            },
            {
              title: '财务审核',
              description: '财务部',
              content: '财务部正在审核付款条款和预算安排，预计2个工作日完成。',
              status: 'process'
            },
            {
              title: '最终签署',
              description: '等待',
              content: '',
              status: 'wait'
            }
          ]}
          columns={[
            {
              type: 'content',
              name: 'content',
              render: (item) => (
                <div style={{ background: '#f9f9f9', padding: '12px', borderRadius: '4px', fontSize: '13px', lineHeight: '1.6' }}>
                  {item}
                </div>
              )
            }
          ]}
        />
      </div>
    </Space>
  );
};

render(<BaseExample />);
