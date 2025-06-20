const { createWithRemoteLoader } = remoteLoader;
const { SplitLine } = _InfoPage;
const { Flex } = antd;
const { MobileOutlined, CompassOutlined } = antdIcons;

const BaseExample = () => {
  return (
    <Flex vertical gap={10}>
      <SplitLine
        dataSource={{
          name: '张三',
          birthday: '1990-01-01',
          phone: '13800000000',
          address: '北京市海淀区'
        }}
        columns={[
          {
            name: 'name',
            title: '姓名'
          },
          {
            name: 'birthday',
            title: '生日'
          },
          {
            name: 'phone',
            icon: <MobileOutlined />
          },
          {
            name: 'address',
            icon: <CompassOutlined />
          }
        ]}
      />

      <SplitLine
        labelMode="vertical"
        dataSource={{
          name: '张三',
          birthday: '1990-01-01',
          phone: '13800000000',
          address: '北京市海淀区'
        }}
        columns={[
          {
            name: 'name',
            title: '姓名'
          },
          {
            name: 'birthday',
            title: '生日'
          },
          {
            name: 'phone',
            icon: <MobileOutlined />
          },
          {
            name: 'address',
            icon: <CompassOutlined />
          }
        ]}
      />
    </Flex>
  );
};

render(<BaseExample />);
