const { default: InfoPage, CentralContent } = _InfoPage;
const { Alert, Space, Typography } = antd;
const { Text, Paragraph } = Typography;

const fieldData = {
  multiLine: '示例多行文本',
  decimal: '12.34',
  enabled: '是'
};

const fieldColumns = [
  { name: 'multiLine', title: '多行文本', block: true },
  { name: 'decimal', title: '小数点保留两位' },
  { name: 'enabled', title: '开关' }
];

const BaseExample = () => {
  return (
    <Space direction="vertical" size={24} style={{ width: '100%' }}>
      <Alert
        type="info"
        showIcon
        message="partRootClassName：重设一级标题"
        description={
          <Paragraph style={{ marginBottom: 0 }}>
            外层模拟 FormInfo 的无 title Part（布局壳）。默认内层「在校时间」会变成二级胶囊；用{' '}
            <Text code>InfoPage.partRootClassName</Text> 挂到祖先或 Part 后从一级色条重新起算，根内再嵌套仍为二级。
          </Paragraph>
        }
      />

      <InfoPage>
        <InfoPage.Part title="未重置（对比）">
          <InfoPage.Part>
            <InfoPage.Part bordered title="在校时间" subtitle="被外层 Part 降为二级胶囊">
              <CentralContent type="compact" dataSource={fieldData} columns={fieldColumns} col={2} />
            </InfoPage.Part>
          </InfoPage.Part>
        </InfoPage.Part>

        <InfoPage.Part title="祖先加 partRootClassName">
          {/* 外层无 title → 模拟 FormInfo 布局壳 */}
          <InfoPage.Part>
            <div className={InfoPage.partRootClassName}>
              <InfoPage.Part bordered title="在校时间" subtitle="重置后为一级色条标题">
                <CentralContent type="compact" dataSource={fieldData} columns={fieldColumns} col={2} />
                <InfoPage.Part title="根内再嵌套" subtitle="仍为二级胶囊">
                  <CentralContent
                    type="compact"
                    dataSource={{ note: '说明文字' }}
                    columns={[{ name: 'note', title: '备注', block: true }]}
                    col={1}
                  />
                </InfoPage.Part>
              </InfoPage.Part>
            </div>
          </InfoPage.Part>
        </InfoPage.Part>

        <InfoPage.Part title="Part 自身加 className">
          <InfoPage.Part>
            <InfoPage.Part
              bordered
              className={InfoPage.partRootClassName}
              title="在校时间"
              subtitle="Part 自身挂 class，标题为一级"
            >
              <CentralContent type="compact" dataSource={fieldData} columns={fieldColumns} col={2} />
            </InfoPage.Part>
          </InfoPage.Part>
        </InfoPage.Part>
      </InfoPage>
    </Space>
  );
};

render(<BaseExample />);
