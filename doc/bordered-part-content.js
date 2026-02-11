const { default: InfoPage, CentralContent } = _InfoPage;
const { Tag, Avatar, Space } = antd;

const BaseExample = () => {
  return (
    <InfoPage>
      <InfoPage.Part bordered title="员工档案" subtitle="基本信息">
        <CentralContent
          type="compact"
          dataSource={{
            id: 'RC20240115001',
            name: '张三',
            gender: '男',
            birthday: '1992-03-15',
            idCard: '440301199203154512',
            maritalStatus: '已婚',
            education: '本科',
            graduationSchool: '深圳大学',
            major: '计算机科学与技术',
            entryDate: '2020-03-15',
            workYears: 4,
            phone: '138-0013-8000',
            email: 'zhangsan@tencent.com',
            address: '广东省深圳市南山区科技园科技中一路腾讯大厦',
            emergencyContact: '李四',
            emergencyPhone: '139-0014-9000',
            emergencyRelation: '配偶'
          }}
          col={3}
          columns={[
            {
              name: 'id',
              title: '员工编号',
              block: true
            },
            {
              name: 'name',
              title: '姓名',
              render: (value) => (
                <Space align="center">
                  <Avatar style={{ backgroundColor: '#1890ff' }}>{value[0]}</Avatar>
                  <strong>{value}</strong>
                </Space>
              ),
              span: 10
            },
            {
              name: 'gender',
              title: '性别'
            },
            {
              name: 'birthday',
              title: '出生日期',
              format: 'date'
            },
            {
              name: 'idCard',
              title: '身份证号',
              render: (value) => value.replace(/(\d{6})(\d{8})(\d{4})/, '$1********$3')
            },
            {
              name: 'maritalStatus',
              title: '婚姻状况'
            },
            {
              name: 'education',
              title: '学历'
            },
            {
              name: 'graduationSchool',
              title: '毕业院校'
            },
            {
              name: 'major',
              title: '专业'
            },
            {
              name: 'entryDate',
              title: '入职日期',
              format: 'date'
            },
            {
              name: 'workYears',
              title: '工作年限',
              format: 'number-suffix:年'
            },
            {
              name: 'phone',
              title: '联系电话',
              render: (value) => value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
            },
            {
              name: 'email',
              title: '电子邮箱'
            },
            {
              name: 'address',
              title: '家庭住址',
              block: true
            },
            {
              name: 'emergencyContact',
              title: '紧急联系人'
            },
            {
              name: 'emergencyPhone',
              title: '紧急联系电话',
              render: (value) => value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
            },
            {
              name: 'emergencyRelation',
              title: '与本人关系'
            }
          ]}
        />
      </InfoPage.Part>

      <InfoPage.Part bordered title="工作信息" subtitle="部门与职位">
        <CentralContent
          type="compact"
          dataSource={{
            department: '技术研发部',
            position: '高级前端工程师',
            level: 'T4-2',
            supervisor: '王总监',
            team: '前端开发组',
            workLocation: '深圳总部',
            office: '腾讯大厦A座18层',
            workStatus: '在职',
            contractType: '正式员工',
            contractStartDate: '2023-03-15',
            contractEndDate: '2026-03-14',
            probationPeriod: '已转正'
          }}
          col={2}
          columns={[
            { name: 'department', title: '所属部门', span: 12 },
            { name: 'position', title: '职位', span: 12 },
            { name: 'level', title: '职级' },
            { name: 'supervisor', title: '直属主管' },
            { name: 'team', title: '所属团队' },
            { name: 'workLocation', title: '工作地点' },
            { name: 'office', title: '办公室位置' },
            { name: 'workStatus', title: '工作状态', render: (value) => <Tag color="success">{value}</Tag> },
            { name: 'contractType', title: '合同类型' },
            { name: 'contractStartDate', title: '合同开始日期', format: 'date' },
            { name: 'contractEndDate', title: '合同结束日期', format: 'date' },
            { name: 'probationPeriod', title: '试用期状态', render: (value) => <Tag color="success">{value}</Tag> }
          ]}
        />
      </InfoPage.Part>

      <InfoPage.Part bordered title="福利待遇" subtitle="薪资与福利">
        <CentralContent
          type="compact"
          dataSource={{
            baseSalary: 30000,
            performanceBonus: 5000,
            annualBonus: 50000,
            socialInsurance: '已缴纳（五险一金）',
            housingFund: 3600,
            medicalInsurance: '已包含',
            mealAllowance: 1500,
            transportAllowance: 800,
            stockOptions: 5000,
            otherBenefits: '年度体检、节日礼品、团建活动'
          }}
          col={2}
          columns={[
            { name: 'baseSalary', title: '基本月薪', format: 'number-useGrouping:true-suffix:元', span: 12 },
            { name: 'performanceBonus', title: '绩效奖金', format: 'number-useGrouping:true-suffix:元/月', span: 12 },
            { name: 'annualBonus', title: '年终奖金', format: 'number-useGrouping:true-suffix:元', block: true },
            { name: 'socialInsurance', title: '社会保险', render: (value) => <Tag color="success">{value}</Tag> },
            { name: 'housingFund', title: '公积金', format: 'number-useGrouping:true-suffix:元/月' },
            { name: 'medicalInsurance', title: '医疗保险', render: (value) => <Tag color="success">{value}</Tag> },
            { name: 'mealAllowance', title: '餐补', format: 'number-useGrouping:true-suffix:元/月' },
            { name: 'transportAllowance', title: '交通补贴', format: 'number-useGrouping:true-suffix:元/月' },
            { name: 'stockOptions', title: '股票期权', format: 'number-useGrouping:true-suffix:股', block: true },
            { name: 'otherBenefits', title: '其他福利', block: true }
          ]}
        />
      </InfoPage.Part>
    </InfoPage>
  );
};

render(<BaseExample />);
