const { CentralContent } = _InfoPage;
const { Tag, Space } = antd;

const BaseExample = () => {
  return (
    <CentralContent
      dataSource={{
        id: 'RC20240115001',
        name: '张三',
        department: '技术研发部',
        position: '高级前端工程师',
        email: 'zhangsan@tencent.com',
        phone: '138-0013-8000',
        entryDate: '2020-03-15',
        workYears: 4,
        performanceScore: 92.5,
        salary: 35000,
        bonus: 50000,
        leaveDays: 5,
        projectCount: 8,
        description: `负责公司核心产品的前端架构设计与开发工作，主导了多个重要项目的技术方案设计。精通React、Vue等主流前端框架，对TypeScript有深入理解。在性能优化方面有丰富经验，成功将项目加载时间减少40%。`,
        skills: `React, Vue, TypeScript, Node.js, Webpack, Vite, Jenkins, Docker, Kubernetes`
      }}
      col={3}
      columns={[
        { name: 'id', title: '员工编号', block: true },
        { name: 'name', title: '姓名', span: 8 },
        { name: 'department', title: '部门' },
        { name: 'position', title: '职位', span: 10 },
        { name: 'email', title: '电子邮箱' },
        { name: 'phone', title: '联系电话' },
        { name: 'entryDate', title: '入职日期', format: 'date' },
        { name: 'workYears', title: '工作年限', format: 'number-suffix:年' },
        { name: 'performanceScore', title: '绩效评分', format: 'number-maximumFractionDigits:1-suffix:分' },
        { name: 'salary', title: '月薪', format: 'number-useGrouping:true-suffix:元' },
        { name: 'bonus', title: '年终奖金', format: 'number-useGrouping:true-suffix:元' },
        { name: 'leaveDays', title: '年度剩余年假', format: 'number-suffix:天' },
        { name: 'projectCount', title: '参与项目数', format: 'number-suffix:个' },
        { name: 'empty', title: '公积金账号' },
        { name: 'empty2', title: '社保卡号', placeholder: '未办理' },
        { name: 'description', title: '工作描述', block: true },
        { name: 'skills', title: '技能标签', render: (value) => (
          <Space wrap>
            {value.split(',').map(skill => (
              <Tag key={skill} color="blue" style={{ marginBottom: 4 }}>{skill.trim()}</Tag>
            ))}
          </Space>
        )}
      ]}
    />
  );
};

render(<BaseExample />);
