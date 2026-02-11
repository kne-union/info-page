const { SplitLine } = _InfoPage;
const { Flex, Tag, Avatar } = antd;
const { MobileOutlined, CompassOutlined, MailOutlined, TeamOutlined, CalendarOutlined, EnvironmentOutlined } = antdIcons;

const BaseExample = () => {
  return (
    <Flex vertical gap={20}>
      {/* 个人信息展示 - 水平布局 */}
      <div>
        <h4 style={{ marginBottom: 12, color: '#333' }}>员工卡片</h4>
        <SplitLine wrap
          dataSource={{
            name: '张三',
            position: '高级前端工程师',
            department: '技术研发部',
            phone: '138-0013-8000',
            email: 'zhangsan@tencent.com',
            workYears: 4,
            entryDate: '2020-03-15',
            status: '在职'
          }}
          columns={[
            {
              name: 'name',
              title: '姓名',
              render: (value) => (
                <Flex align="center" gap={8}>
                  <Avatar style={{ backgroundColor: '#1890ff' }}>{value[0]}</Avatar>
                  <strong>{value}</strong>
                </Flex>
              )
            },
            {
              name: 'position',
              title: '职位',
              render: (value) => <Tag color="blue">{value}</Tag>
            },
            {
              name: 'department',
              title: '部门',
              render: (value) => <Tag color="cyan">{value}</Tag>
            },
            {
              name: 'phone',
              title: '联系电话',
              icon: <MobileOutlined />,
              render: (value) => value.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
            },
            {
              name: 'email',
              title: '电子邮箱',
              icon: <MailOutlined />
            },
            {
              name: 'workYears',
              title: '工作年限',
              icon: <CalendarOutlined />,
              render: (value) => `${value}年`
            },
            {
              name: 'entryDate',
              title: '入职日期',
              icon: <CalendarOutlined />,
              render: (value) => value
            },
            {
              name: 'status',
              title: '状态',
              render: (value) => <Tag color="success">{value}</Tag>
            }
          ]}
        />
      </div>

      {/* 公司信息展示 - 垂直布局 */}
      <div>
        <h4 style={{ marginBottom: 12, color: '#333' }}>公司信息</h4>
        <SplitLine wrap
          labelMode="vertical"
          dataSource={{
            companyName: '深圳市腾讯计算机系统有限公司',
            creditCode: '914403007109410773',
            legalPerson: '马化腾',
            registerDate: '1998-11-11',
            capital: '500万美元',
            address: '深圳市南山区高新科技园科技中一路腾讯大厦',
            businessScope: '计算机软硬件的技术开发、销售；计算机网络工程；系统集成；软件开发及技术服务；信息咨询；网络设备、通讯设备、电子产品的技术开发与销售；国内贸易。'
          }}
          columns={[
            {
              name: 'companyName',
              title: '企业名称'
            },
            {
              name: 'creditCode',
              title: '统一社会信用代码',
              icon: <TeamOutlined />
            },
            {
              name: 'legalPerson',
              title: '法定代表人'
            },
            {
              name: 'registerDate',
              title: '成立日期',
              icon: <CalendarOutlined />
            },
            {
              name: 'capital',
              title: '注册资本'
            },
            {
              name: 'address',
              title: '注册地址',
              icon: <EnvironmentOutlined />
            },
            {
              name: 'businessScope',
              title: '经营范围'
            }
          ]}
        />
      </div>

      {/* 项目信息展示 */}
      <div>
        <h4 style={{ marginBottom: 12, color: '#333' }}>项目详情</h4>
        <SplitLine wrap
          dataSource={{
            projectName: '企业级管理系统重构',
            projectCode: 'PRJ-2024-001',
            manager: '张三',
            teamSize: 12,
            startDate: '2024-01-01',
            endDate: '2024-06-30',
            progress: 35,
            budget: 1500000,
            spent: 525000
          }}
          columns={[
            {
              name: 'projectName',
              title: '项目名称'
            },
            {
              name: 'projectCode',
              title: '项目编号'
            },
            {
              name: 'manager',
              title: '项目经理',
              icon: <TeamOutlined />
            },
            {
              name: 'teamSize',
              title: '团队规模',
              render: (value) => `${value}人`
            },
            {
              name: 'startDate',
              title: '开始日期',
              icon: <CalendarOutlined />
            },
            {
              name: 'endDate',
              title: '结束日期',
              icon: <CalendarOutlined />
            },
            {
              name: 'progress',
              title: '项目进度',
              render: (value) => <Tag color={value >= 100 ? 'success' : 'processing'}>{value}%</Tag>
            },
            {
              name: 'budget',
              title: '项目预算',
              render: (value) => `¥${value.toLocaleString()}`
            },
            {
              name: 'spent',
              title: '已投入',
              render: (value) => `¥${value.toLocaleString()}`
            }
          ]}
        />
      </div>
    </Flex>
  );
};

render(<BaseExample />);
