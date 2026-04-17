const { default: InfoPage, Content, TableView } = _InfoPage;
const { Button, Flex, Modal } = antd;
const { useState } = React;

const ModalExample = () => {
  const [open, setOpen] = useState(false);

  const data = {
    id: '10001',
    name: '产品详情',
    category: '电子产品',
    price: 2999,
    stock: 500,
    status: '在售',
    description: '这是一款高性能的智能设备，支持多种功能和应用场景。',
    createTime: '2024-01-15 10:30:00',
    updateTime: '2024-03-20 14:22:00',
  };

  const logDataSource = [
    { id: '1', action: '创建', operator: '管理员', time: data.createTime },
    { id: '2', action: '更新', operator: '管理员', time: data.updateTime },
  ];

  const logColumns = [
    { name: 'action', title: '操作' },
    { name: 'operator', title: '操作人' },
    { name: 'time', title: '时间' },
  ];

  return (
    <Flex vertical gap={24}>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开Modal详情
      </Button>

      <Modal
        title="详情信息"
        open={open}
        onCancel={() => setOpen(false)}
        footer={[
          <Button key="close" onClick={() => setOpen(false)}>
            关闭
          </Button>,
          <Button key="edit" type="primary">
            编辑
          </Button>,
        ]}
        width={720}
      >
        <InfoPage>
          <InfoPage.Part title="价格库存" bordered>
            <Content
              list={[
                { label: '价格', content: `¥${data.price}` },
                { label: '库存', content: `${data.stock} 件` },
              ]}
            />
          </InfoPage.Part>

          <InfoPage.Part title="基本信息">
            <Content
              list={[
                { label: '编号', content: data.id },
                { label: '名称', content: data.name },
                { label: '分类', content: data.category },
                { label: '状态', content: data.status },
              ]}
            />
          </InfoPage.Part>

          <InfoPage.Part title="详细描述">
            <p style={{ margin: 0, lineHeight: 1.8 }}>{data.description}</p>
          </InfoPage.Part>

          <InfoPage.Part title="操作日志">
            <TableView dataSource={logDataSource} columns={logColumns} />
          </InfoPage.Part>
        </InfoPage>
      </Modal>
    </Flex>
  );
};

render(<ModalExample />);
