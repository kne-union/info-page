const { Report, Score } = _InfoPage;
const { Flex, Radio, Space } = antd;
const { useState } = React;

const reportData = {
  total: {
    score: '88.5',
    label: '综合评分'
  },
  list: [
    {
      label: '代码质量',
      score: '95',
      content: '代码风格规范，注释清晰完整，遵循ESLint和Prettier规范。组件拆分合理，复用性强，单元测试覆盖率达到85%。代码审查中提出的修改意见响应及时，整改完成率高。'
    },
    {
      label: '技术深度',
      score: '90',
      content: '深入理解React源码原理，熟悉Hooks工作机制和性能优化技巧。对前端工程化、微前端架构有实践经验。在项目中成功实现SSR方案，提升首屏渲染速度60%。'
    },
    {
      label: '团队协作',
      score: '85',
      content: '积极参与代码评审和技术讨论，乐于分享技术心得。与产品、设计、测试团队沟通顺畅，能够准确理解需求并给出合理的技术建议。协助新同事快速融入团队。'
    },
    {
      label: '创新意识',
      score: '82',
      content: '主动探索新技术，将AI辅助开发工具引入团队，提升开发效率约20%。提出多个优化方案并被采纳，为业务增长做出了贡献。持续关注行业动态，技术敏感度高。'
    }
  ]
};

const tableReportData = {
  columns: [
    { title: '评估维度', name: 'group', isSubTitle: true, span: 24 },
    { title: '评估项', name: 'item', span: 12 },
    { title: '得分', name: 'score', span: 4 },
    { title: '说明', name: 'description', span: 8 }
  ],
  group: [
    { name: 'group1', label: '📌 核心技术能力' },
    { name: 'group2', label: '💼 工作业绩' },
    { name: 'group3', label: '🎯 职业素养' }
  ],
  list: [
    { group: 'group1', item: '前端框架', score: <Score value={5} total={5} />, description: 'React/Vue熟练掌握' },
    { group: 'group1', item: 'TypeScript', score: <Score value={5} total={5} />, description: '类型定义规范完整' },
    { group: 'group1', item: '性能优化', score: <Score value={4} total={5} />, description: 'SSR首屏优化显著' },
    { group: 'group1', item: '工程化', score: <Score value={4} total={5} />, description: 'CI/CD流程完善' },
    { group: 'group2', item: '需求交付', score: <Score value={5} total={5} />, description: '按时交付率98%' },
    { group: 'group2', item: '质量保障', score: <Score value={4} total={5} />, description: '线上故障率低' },
    { group: 'group2', item: '文档输出', score: <Score value={3} total={5} />, description: 'API文档需完善' },
    { group: 'group3', item: '团队协作', score: <Score value={5} total={5} />, description: '沟通顺畅主动' },
    { group: 'group3', item: '学习成长', score: <Score value={4} total={5} />, description: '技术分享积极' },
    { group: 'group3', item: '责任意识', score: <Score value={5} total={5} />, description: '工作认真负责' }
  ],
  footer: (item, index) => (
    <div style={{ padding: '4px 0', color: '#999', fontSize: '12px' }}>
      第 {index + 1} 项
    </div>
  )
};

const listReportData = {
  list: [
    { label: '👤 评估对象', content: '王明远' },
    { label: '🏢 所属部门', content: '技术研发中心 - 前端架构组' },
    { label: '💼 职级职位', content: '资深前端工程师（P6+）' },
    { label: '📅 入职时间', content: '2021年3月15日' },
    { label: '📊 评估周期', content: '2024年度' },
    { label: '🔍 评估日期', content: '2025年1月10日' },
    { label: '👨‍💼 评估人', content: '技术总监 - 陈思远' },
    { label: '📋 评估维度', content: '核心技能、项目绩效、职业素养' },
    { label: '🔧 评估方法', content: '代码审查 + 绩效数据 + 360度评估 + 技术面试' }
  ]
};

const partReportData = {
  list: [
    {
      label: '✨ 核心优势',
      hasBgColor: true,
      content: '1. 技术视野开阔，对前端技术栈有系统性理解，能够从架构层面思考问题。2. 学习能力强，快速掌握新技术并转化为生产力，AI工具应用效果显著。3. 代码质量意识强，注重可维护性和扩展性，推动团队代码规范落地。4. 工作积极主动，主动承担复杂任务，多次解决关键技术难题。'
    },
    {
      label: '📈 成长空间',
      content: '1. 在技术管理和团队带领方面需要更多历练。2. 跨部门协作时的商业思维有待提升，需要更好地理解业务价值。3. 技术成果的可视化展示和影响力打造可以进一步加强。'
    },
    {
      label: '🎯 发展建议',
      content: '1. 争取担任小型项目的Tech Lead，积累团队管理经验。2. 加强对后端、运维相关技术的学习，建立全栈技术视角。3. 每季度组织至少一次技术分享，提升团队技术氛围。4. 参与技术面试和人才评估，锻炼识人用人能力。5. 关注行业前沿趋势，定期输出技术文章或开源贡献。'
    },
    {
      label: '📚 培养计划',
      content: '1. Q2参加技术管理进阶培训。2. Q3参与微服务架构专项学习。3. Q4承担新人导师角色。4. 全年参与至少3个技术峰会或工作坊。5. 建立个人技术博客，每月至少输出1篇技术文章。'
    }
  ]
};

const BaseExample = () => {
  const [componentType, setComponentType] = useState('list');

  const renderComponent = () => {
    switch (componentType) {
      case 'list':
        return <Report.List report={listReportData} />;
      case 'result':
        return <Report.Result report={reportData} />;
      case 'table':
        return <Report.Table report={tableReportData} />;
      case 'part':
        return <Report.Part report={partReportData} />;
      default:
        return <Report.List report={listReportData} />;
    }
  };

  return (
    <Flex vertical gap={16}>
      {/* 控制面板 */}
      <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
        <span style={{ marginRight: 12 }}>子组件类型：</span>
        <Radio.Group value={componentType} onChange={(e) => setComponentType(e.target.value)}>
          <Radio.Button value="list">Report.List</Radio.Button>
          <Radio.Button value="result">Report.Result</Radio.Button>
          <Radio.Button value="table">Report.Table</Radio.Button>
          <Radio.Button value="part">Report.Part</Radio.Button>
        </Radio.Group>
      </div>

      {/* 组件展示区 */}
      <Space direction="vertical" size={24}>
        <Report title="📄 员工年度绩效评估报告" subtitle="2024年度 | 技术研发中心 | 前端架构组">
          {renderComponent()}
        </Report>
      </Space>
    </Flex>
  );
};

render(<BaseExample />);
