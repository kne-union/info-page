
# info-page


### 描述

一般用在复杂的详情展示页面，InfoPage提供了一个标准的展示信息的格式


### 安装

```shell
npm i --save @kne/info-page
```


### 概述

info-page 是一个专为复杂详情展示页面设计的 React 组件库，提供标准化的信息展示格式和丰富的布局选项。

## 核心特性

- **统一的信息展示标准**：提供一致的详情页面展示格式，确保用户体验的连贯性
- **灵活的布局组件**：包含多种布局方式，支持网格、表格、分栏等多种展示形式
- **强大的数据处理能力**：内置数据格式化、空值处理、条件显示等实用功能
- **高度可定制化**：支持自定义渲染、样式定制和扩展配置
- **现代化设计**：基于 Ant Design 构建，支持响应式布局

## 适用场景

- **管理系统详情页**：用户信息、订单详情、产品信息等复杂展示场景
- **数据报告页面**：需要结构化展示多维度数据的报表和统计页面  
- **工作流展示**：流程审批记录、操作历史等时序信息展示
- **数据对比页面**：多列对比展示、评分系统等
- **打印友好设计**：支持分页打印的报告生成

## 技术亮点

- **组件化设计**：提供 InfoPage、Content、TableView、Flow 等独立组件，可单独使用也可组合使用
- **智能列计算**：自动计算列宽、响应式布局适配，支持固定列和自适应列混合使用
- **丰富的格式化选项**：内置日期、数字、货币、布尔值等多种数据格式化器
- **条件渲染机制**：支持基于数据动态控制字段显示状态
- **TypeScript 友好**：完整的类型定义支持，提供良好的开发体验

### 示例

#### 示例代码

- 基础布局
- 展示InfoPage容器组件和Part区块组件的基本使用方法
- _InfoPage(@kne/current-lib_info-page),(@kne/current-lib_info-page/dist/index.css),antd(antd)

```jsx
const { default: InfoPage } = _InfoPage;
const { Button } = antd;

const BaseExample = () => {
  return (
    <InfoPage>
      InfoPage
      <InfoPage.Part title="Part Title" subtitle="我是一个subtitle" extra={<Button>操作</Button>}>
        InfoPage.Part
        <InfoPage.Part title="Part Title" subtitle="我是一个subtitle" extra={<Button>操作</Button>}>
          InfoPage.InfoPage.Part
        </InfoPage.Part>
      </InfoPage.Part>
      <InfoPage.Collapse
        items={[
          { key: '1', label: 'This is default size panel header', children: <p>InfoPage.Collapse</p> },
          { key: '2', label: 'This is default size panel header2', children: <p>InfoPage.Collapse2</p> }
        ]}
      />
      <InfoPage.Part title="Part Title" subtitle="我是一个subtitle" bordered extra={<Button>操作</Button>}>
        InfoPage.Part
        <InfoPage.Part title="Part Title" subtitle="我是一个subtitle" extra={<Button>操作</Button>}>
          InfoPage.InfoPage.Part
        </InfoPage.Part>
      </InfoPage.Part>
    </InfoPage>
  );
};

render(<BaseExample />);

```

- 内容列表
- 支持多列布局和标签对齐的灵活内容展示组件
- _InfoPage(@kne/current-lib_info-page),(@kne/current-lib_info-page/dist/index.css),antd(antd)

```jsx
const { Content } = _InfoPage;
const {Space, Radio} = antd;
const {useState} = React;

const BaseExample = () => {
  const [listProps, setListProps] = useState({
    col: 1,
    size: 'default',
    labelAlign: 'left'
  });
  const onChange = (e, name) => {
    const val = e?.target.value;
    setListProps(prevState => Object.assign({}, prevState, {[name]: val}));
  };

  return (
    <Space direction='vertical' size={12}>
      <Radio.Group onChange={(e) => onChange(e, 'col')} value={listProps.col}>
        <Radio.Button value={1}>1列</Radio.Button>
        <Radio.Button value={2}>2列</Radio.Button>
        <Radio.Button value={3}>3列</Radio.Button>
      </Radio.Group>
      <Radio.Group onChange={(e) => onChange(e, 'labelAlign')} value={listProps.labelAlign}>
        <Radio.Button value='left'>左对齐</Radio.Button>
        <Radio.Button value='center'>中心对齐</Radio.Button>
        <Radio.Button value='right'>右对齐</Radio.Button>
        <Radio.Button value='auto'>自适应</Radio.Button>
      </Radio.Group>
      <Radio.Group onChange={(e) => onChange(e, 'size')} value={listProps.size}>
        <Radio.Button value='default'>默认</Radio.Button>
        <Radio.Button value='small'>small</Radio.Button>
      </Radio.Group>
      <Content
        {...listProps}
        list={[
          {label: '标题', content: '内容'},
          {label: '标题标题', content: '内容内容'},
          {label: '标题标', content: '内容内容内容内容内容内容内容内容内容内容'},
          {
            label: '标题标题标题',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
          }
        ]}
        itemRender={(inner, other) => {
          return other?.index === 2 ? '此处内容额外自定义' : inner;
        }}
      />
    </Space>
  );
};

render(<BaseExample/>);

```

- 描述列表
- 二维数组结构的详情信息展示，适合表单数据展示
- _InfoPage(@kne/current-lib_info-page),(@kne/current-lib_info-page/dist/index.css),antd(antd)

```jsx
const {Descriptions} = _InfoPage;

const BaseExample = () => {
  return (
    <Descriptions
      dataSource={[
        [
          { label: "客户名称", content: "腾讯" },
          {
            label: "发票抬头",
            content: "腾讯科技公司",
          },
        ],
        [
          { label: "发票类型", content: "增值税专用发票" },
          {
            label: "发票开具日期",
            content: "2022-08-15",
          },
        ],
        [{ label: "退票金额", content: "22000.00元" }],
        [
          {
            label: "发票号",
            content: (
              <div>
                <div>00384895992774</div>
                <div>00384895992774</div>
                <div>00384895992774</div>
                <div>00384895992774</div>
              </div>
            ),
          },
        ],
        [
          { label: "是否需要重开发票", content: "否" },
          {
            label: "是否涉及金融变动",
            content: "否",
          },
        ],
        [
          { label: "是否造成实质损失", content: "否" },
          { label: "责任归属", content: "客户原因" },
        ],
        [
          {
            label: "退票原因",
            content: "退票原因的描述退票原因的描述退票原因的描",
          },
        ],
        [{ label: "附件", content: "附件名称" }],
        [
          {label: "操作时间", content: "2022-08-01 16:32"},
          {label: "操作人", content: "西西歪", display: false},
        ],
        [
          {
            label: "超长内容",
            content:
              "超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容超长内容",
          },
          {
            label: "超长英文",
            content:
              "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          },
        ],
      ]}
    />
  );
};

render(<BaseExample />);

```

- 智能布局
- 支持数据格式化和自动栅格优化的高级内容展示组件
- _InfoPage(@kne/current-lib_info-page),(@kne/current-lib_info-page/dist/index.css),antd(antd)

```jsx
const { CentralContent } = _InfoPage;

const BaseExample = () => {
  return (<CentralContent dataSource={{
    id: 'RC00101',
    name: '张三',
    birthday: '2020-03-03',
    addTime: new Date(),
    count: 2000.1322,
    count2: 0.01234565,
    count3: 1234523,
    description: `描述描述描述描述描述描述描述描述\n描述描述描述描述描述描述描述描述\n描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述`,
    description2: `描述描述描述描述描述描述描述描述`
  }} col={3} columns={[{
    name: 'id', title: 'ID', block: true
  }, {
    name: 'name', title: '姓名', span: 10
  }, {
    name: 'birthday', title: '出生日期', format: 'date'
  }, {
    name: 'addTime', title: '添加时间', format: 'datetime'
  }, {
    name: 'count', title: '数量', format: 'number-useGrouping:false-suffix:个'
  }, {
    name: 'count2', title: '百分比', format: 'number-percent money-百分比'
  }, {
    name: 'count3', title: '万元', format: 'number-suffix:万元--10000'
  }, {
    name: 'empty', title: '空值显示'
  }, {
    name: 'empty2', title: '空值显示2', placeholder: '空'
  }, {
    name: 'empty3', title: '空值显示3', emptyIsPlaceholder: false
  }, {
    name: 'description', title: '描述'
  }, {
    name: 'description2', title: '描述'
  }]} />);
};

render(<BaseExample />);

```

- 表格视图
- 支持行选择、固定表头和多数据展示的表格组件
- _InfoPage(@kne/current-lib_info-page),(@kne/current-lib_info-page/dist/index.css),antd(antd)

```jsx
const { TableView } = _InfoPage;
const { Flex } = antd;
const { useState } = React;

const dataSource = [{
  id: 'RC00101',
  name: '张三',
  birthday: '2020-03-03',
  addTime: new Date(),
  count: 2000.1322,
  count2: 0.01234565,
  count3: 1234523,
  description: `描述描述描述描述描述描述描述描述`
}, {
  id: 'RC00102',
  name: '李四',
  birthday: '2020-03-03',
  addTime: new Date(),
  count: 2000.1322,
  count2: 0.01234565,
  count3: 1234523,
  description: `描述描述描述描述描述描述描述描述`
}, {
  id: 'RC00103',
  name: '王五',
  birthday: '2020-03-03',
  addTime: new Date(),
  count: 2000.1322,
  count2: 0.01234565,
  count3: 1234523,
  description: `描述描述描述描述描述描述描述描述`
}, {
  id: 'RC00104',
  name: '马七',
  birthday: '2020-03-03',
  addTime: new Date(),
  count: 2000.1322,
  count2: 0.01234565,
  count3: 1234523,
  description: `描述描述描述描述描述描述描述描述`
}];

const columns = [{
  name: 'id', title: 'ID'
}, {
  name: 'name', title: '姓名'
}, {
  name: 'birthday', title: '出生日期', format: 'date'
}, {
  name: 'addTime', title: '添加时间', format: 'datetime-YY(_)MM(_)DD()HH'
}, {
  name: 'count', title: '数量', format: 'number'
}, {
  name: 'description', title: '描述', span: 10
}];

const WithCheckbox = () => {
  const [selectKeys, setSelectKeys] = useState([]);
  return <TableView dataSource={dataSource} columns={columns} rowSelection={{
    type: 'checkbox', allowSelectedAll: true, selectedRowKeys: selectKeys, onChange: setSelectKeys
  }} />;
};

const WithSelected = () => {
  const [selectKeys, setSelectKeys] = useState([]);
  return <TableView dataSource={dataSource} columns={columns} rowSelection={{
    selectedRowKeys: selectKeys, onChange: setSelectKeys
  }} />;
};

const BaseExample = () => {
  return <Flex vertical gap={10}>
    <TableView dataSource={dataSource} columns={columns} />
    <WithCheckbox />
    <WithSelected />
    <TableView dataSource={[]} columns={columns} />
    <TableView style={{
      height: '200px', overflowY: 'scroll'
    }} dataSource={dataSource} columns={columns} sticky/>
  </Flex>;
};

render(<BaseExample />);

```

- 分割线展示
- 支持图标和垂直/横向布局的紧凑信息展示
- _InfoPage(@kne/current-lib_info-page),(@kne/current-lib_info-page/dist/index.css),antd(antd),remoteLoader(@kne/remote-loader),antdIcons(@ant-design/icons)

```jsx
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

```

- 流程步骤
- 支持自定义渲染和多种状态的流程时序展示组件
- _InfoPage(@kne/current-lib_info-page),(@kne/current-lib_info-page/dist/index.css),antd(antd)

```jsx
const {Space, Flex, Divider} = antd;
const {Flow} = _InfoPage;
const BaseExample = () => {
    return <Flex vertical gap={8}>
        <Flow
            current={2}
            dataSource={[{
                title: 'title1',
                description: 'This is a description.',
                createTime: '2022-08-15 10:29',
                descriptionContent: [{
                    name: '王建国1', action: '添加了备注', time: '2023-08-15 10:30', content: 'test'
                }, {
                    name: '王建国2', action: '添加了备注', time: '2023-08-15 10:31', content: 'test'
                }]
            }, {
                title: '自定义DescriptionContentItem渲染样式',
                description: 'This is a description.',
                descriptionContent: [{
                    name: '王建国3', action: '添加了备注', time: '08-15 10:30', content: 'test'
                }, {
                    name: '王建国4', action: '添加了备注', time: '08-15 10:31', content: 'test'
                }]
            }, {title: 'title3', description: 'This is a description.'}, {
                title: 'title4', description: 'This is a description.'
            }]}
            columns={[{
                name: 'title'
            }, {
                name: 'description'
            }, {
                type: 'subTitle', name: 'createTime', format: 'datetime'
            }, {
                name: 'status'
            }, {
                type: 'actionList', name: 'descriptionContent', children: [{
                    name: 'name'
                }, {
                    name: 'action'
                }, {
                    type: 'options', name: 'time', format: 'datetime'
                }, {
                    name: 'content', render: (item, {target}) => {
                        return `@@@@@${target.name}-${target.action}-${target.content}`;
                    }
                }]
            }]}
        />
        <Flow
            current={2}
            dataSource={[{
                title: 'title1', description: 'This is a description.', createTime: '2022-08-15 10:29'
            }, {
                title: '自定义DescriptionContentItem渲染样式', description: 'This is a description.'
            }, {title: 'title3', description: 'This is a description.'}, {
                title: 'title4', description: 'This is a description.'
            }]}
            columns={[{
                type: 'content', name: 'content', valueIsEmpty: (item, {index}) => {
                    return index !== 2;
                }, render: (item, {target}) => {
                    return '小西西西西';
                }
            }]}
        />

        <Flow
            direction="horizontal"
            progressDot
            dataSource={[{
                title: 'finish', description: 'This is a description.', status: 'finish'
            }, {
                title: 'process', description: 'This is a description.', status: 'process'
            }, {
                title: 'error', description: 'This is a description.', status: 'error'
            }, {
                title: 'wait', description: 'This is a description.', status: 'wait'
            }]}
        />

        <Flow
            direction="vertical"
            progressDot
            dataSource={[{
                title: 'finish', description: 'This is a description.', status: 'finish'
            }, {
                title: 'process', description: 'This is a description.', status: 'process'
            }, {
                title: 'error', description: 'This is a description.', status: 'error'
            }, {
                title: 'wait', description: 'This is a description.', status: 'wait'
            }]}
        />
        <Flow
            dataSource={[{
                title: 'finish', description: 'This is a description.', subTitle: '2023-08-15 10:29', status: 'finish'
            }, {
                title: 'process', description: 'This is a description.', status: 'process'
            }, {
                title: 'error', description: 'This is a description.', status: 'error'
            }, {
                title: 'wait', description: 'This is a description.', status: 'wait'
            }]}
            columns={[{name: 'subTitle', format: 'datetime'}]}
        />
    </Flex>;
};

render(<BaseExample/>);

```

- 报告页面
- 完整的测评报告生成组件，支持评分、表格和详细描述
- _InfoPage(@kne/current-lib_info-page),(@kne/current-lib_info-page/dist/index.css),antd(antd)

```jsx
const { Report } = _InfoPage;
const { Space } = antd;
const BaseExample = () => {
    return (
        <div className="outer">
            <Space direction="vertical" size={24}>
                <Report title="报告概述">
                    <Report.List
                        report={{
                            list: [
                                {
                                    label: '目的',
                                    content: '本报告旨在评估招聘顾问使用AI工具进行候选人初次沟通的能力，特别是在理解候选人需求、传达职位信息以及建立初步信任关系的效果。'
                                },
                                {
                                    label: '测评对象',
                                    content: '姓名：张伟'
                                },
                                {
                                    label: '测评工具',
                                    content: `AI模拟系统：提供基于语音和文本的交互模拟环境。\n评分标准：沟通技巧、信息传达清晰度、候选人反馈、建立关系的能力。`
                                },
                                {
                                    label: '任务目标',
                                    content: (
                                        <ul>
                                            <li>完整呈现初次沟通话术，展现每个关键动作和沟通顺序。</li>
                                            <li>收集候选人信息：了解候选人工作背景，技术能力及其薪资要求。</li>
                                            <li>挖掘需求：全面了解候选人求职动态和需求，从而掌握候选人存在的顾虑及。</li>
                                            <li>有效推荐：根据候选人求职需求链接职位优势，强化技术吸引点，妥善处理候选人疑虑。</li>
                                            <li>建立信任关系：使用沟通技巧，态度诚恳，和候选人站在一起，而非“博弈”关系。</li>
                                        </ul>
                                    )
                                }
                            ]
                        }}
                    />
                </Report>
                <Report title="测评结果">
                    <Report.Result
                        report={{
                            total: {
                                score: '81.8',
                                label: '综合得分'
                            },
                            list: [
                                {
                                    label: '沟通程序指引及话术',
                                    score: '86',
                                    content:
                                        '张伟在这一部分的表现总体上是专业且有条理的，能够按照一定的流程顺利开展对话。他表现出的礼貌和专业性在询问是否方便通话时得到了完美的体现，得到了满分。然而，他在介绍职位时未能充分利用机会强调职位的吸引点，可能影响候选人的兴趣。'
                                },
                                {
                                    label: '收集信息（现状$&$期望）',
                                    score: '90',
                                    content: '张伟在收集候选人的现状和期望方面做得相对完善，能够获得关于候选人当前工作和技术栈的重要信息。但对于候选人的项目经验和薪资结构的探讨不够深入，这可能会影响到后续的职位匹配和期望管理。'
                                },
                                {
                                    label: '挖掘需求',
                                    score: '70',
                                    content: '张伟在挖掘候选人需求方面还有提升空间。虽然基本了解了候选人的职业期望，但在探索候选人的非薪酬动机和深层次需求方面表现不够充分，这是建立有效推荐和深度关系的关键。'
                                },
                                {
                                    label: '有效推荐',
                                    score: '73',
                                    content: '在有效推荐职位方面，张伟需要加强与候选人需求的匹配度和说服力。虽然提到了职位的技术优势，但未根据候选人的具体技术背景进行个性化强调，可能减少候选人的兴趣。'
                                },
                                {
                                    label: '建立信任关系',
                                    score: '84',
                                    content: '张伟能够通过有效的沟通建立信任关系，使用开放性问题和积极肯定候选人的表现。然而，需要提高在换位思考和理解候选人深层需求方面的能力，确保信任关系的深度和真实性。'
                                }
                            ]
                        }}
                    />
                </Report>
                <Report title="评分细节">
                    <Report.Table
                        report={{
                            columns: [
                                {
                                    title: '评估维度',
                                    name: 'group',
                                    isSubTitle: true
                                },
                                {
                                    title: '评分项',
                                    name: 'item',
                                    span: 10
                                },
                                {
                                    title: '得分',
                                    name: 'score',
                                    span: 4,
                                    valueOf: value => <div className="score">{value}</div>
                                },
                                {
                                    title: '描述',
                                    name: 'description',
                                    span: 10
                                }
                            ],
                            group: [
                                {
                                    name: 'group1',
                                    label: '沟通程序指引及话术'
                                },
                                {
                                    name: 'group2',
                                    label: '收集信息（现状&期望）'
                                },
                                {
                                    name: 'group3',
                                    label: '挖掘需求'
                                },
                                {
                                    name: 'group4',
                                    label: '有效推荐'
                                },
                                {
                                    name: 'group5',
                                    label: '建立信任关系'
                                }
                            ],
                            list: [
                                {
                                    group: 'group1',
                                    item: '专业开场',
                                    score: <Report.Score value={4}/>,
                                    description: '开场专业，语气友好，略显急促。'
                                },
                                {
                                    group: 'group1',
                                    item: '询问是否方便通话',
                                    score: <Report.Score value={5}/>,
                                    description: '表现出极好的礼貌和考虑。'
                                },
                                {
                                    group: 'group1',
                                    item: '先了解候选人整体情况',
                                    score: <Report.Score value={3}/>,
                                    description: '详细询问了技术和动机，未深入个人发展。'
                                },
                                {
                                    group: 'group1',
                                    item: '后介绍推荐OD职位',
                                    score: <Report.Score value={4}/>,
                                    description: '介绍清晰，未充分突出职位吸引力。'
                                },
                                {
                                    group: 'group1',
                                    item: '介绍整体面试流程',
                                    score: <Report.Score value={1}/>,
                                    description: '详尽介绍流程，缺少机考准备细节说明。'
                                },
                                {
                                    group: 'group1',
                                    item: '交换联系方式',
                                    score: <Report.Score value={5}/>,
                                    description: '有效且自然，确保双方畅通无阻。'
                                },
                                {
                                    group: 'group2',
                                    item: '了解候选人目前就业状态',
                                    score: <Report.Score value={5}/>,
                                    description: '详尽了解候选人的当前就业状况。'
                                },
                                {
                                    group: 'group2',
                                    item: '了解候选人技术栈及项目经验',
                                    score: <Report.Score value={4}/>,
                                    description: '详细询问技术栈，对项目经验探讨不足。'
                                },
                                {
                                    group: 'group2',
                                    item: '了解候选人薪资情况与结构',
                                    score: <Report.Score value={4}/>,
                                    description: '了解薪资期望清晰，未详细探讨薪资构成。'
                                },
                                {
                                    group: 'group3',
                                    item: '了解候选人对下一份工作的期望',
                                    score: <Report.Score value={3}/>,
                                    description: '探讨了职业规划，但未深挖发展意愿。'
                                },
                                {
                                    group: 'group3',
                                    item: '探索非薪资求职动机',
                                    score: <Report.Score value={2}/>,
                                    description: '基本了解求职动机，缺乏深度和细节。'
                                },
                                {
                                    group: 'group3',
                                    item: '识别并处理顾虑',
                                    score: <Report.Score value={4}/>,
                                    description: '识别了顾虑，回应稍显模糊。'
                                },
                                {
                                    group: 'group4',
                                    item: '链接职位优势与求职动机',
                                    score: <Report.Score value={3}/>,
                                    description: '提及职位相关性，缺乏说服力。'
                                },
                                {
                                    group: 'group4',
                                    item: '强化项目技术吸引点',
                                    score: <Report.Score value={3}/>,
                                    description: '提及技术优势，未针对候选人背景定制。'
                                },
                                {
                                    group: 'group4',
                                    item: '关注并处理候选人顾虑',
                                    score: <Report.Score value={4}/>,
                                    description: '正面回应顾虑，但解决方案不具体。'
                                },
                                {
                                    group: 'group5',
                                    item: '应用开放性提问',
                                    score: <Report.Score value={0}/>,
                                    description: '使用开放性问题促进了对话深入。'
                                },
                                {
                                    group: 'group5',
                                    item: '换位思考与表达同理心',
                                    score: <Report.Score value={1}/>,
                                    description: '表达了同理心，但部分回答未完全站在候选人角度。'
                                },
                                {
                                    group: 'group5',
                                    item: '表达肯定和欣赏',
                                    score: <Report.Score value={5}/>,
                                    description: '非常好地肯定了候选人的能力和经验。'
                                },
                                {
                                    group: 'group5',
                                    item: '清晰表达观点',
                                    score: <Report.Score value={2}/>,
                                    description: '观点主要清晰，偶有不够准确的情况。'
                                },
                                {
                                    group: 'group5',
                                    item: '有效倾听与理解',
                                    score: <Report.Score value={3}/>,
                                    description: '倾听良好，但有时未能完全抓住候选人的意图。'
                                }
                            ]
                        }}
                    />
                </Report>
                <Report title="结论与建议">
                    <Report.Part
                        report={{
                            list: [
                                {
                                    label: '结论',
                                    hasBgColor: true,
                                    content:
                                        '在此次AI情景模拟测评中，李四表现出了较强的沟通能力和专业性，尤其是在程序指引及话术方面。他成功地收集了候选人的基本信息并建立了初步的信任关系。然而，他在深入挖掘候选人需求和个性化推荐职位方面的表现还有待提高。总体而言，李四的表现良好，显示出了他作为招聘顾问的潜力。'
                                },
                                {
                                    label: '建议',
                                    style: { '--marker-color': '#027A48', '--label-bg-color': '#027A481a' },
                                    content: (
                                        <ol>
                                            <li>增强职位介绍的吸引力，特别是将职位优势与候选人的需求直接关联，突出表现职位的独特之处。</li>
                                            <li>对候选人的项目经验进行更详细的询问，尤其是关于如何在项目中解决问题和技术应用的具体情况。</li>
                                            <li>在讨论薪资时，应详细了解候选人的薪资构成和期望，确保提供的职位与候选人的薪资期望相匹配。</li>
                                            <li>在交流中穿插探讨候选人的个人兴趣和长期职业目标，以便更好地理解其动机。</li>
                                            <li>根据候选人的技术能力和职业兴趣定制职位推荐，突出职位的技术挑战和成长机会。</li>
                                            <li>加强同理心的表达，尤其在讨论候选人关切的问题时，从其角度出发提供解决方案。</li>
                                        </ol>
                                    )
                                }
                            ]
                        }}
                    />
                </Report>
                <Report title="结论与建议">自定义 area</Report>
            </Space>
        </div>
    );
};

render(<BaseExample />);

```


### API

### InfoPage
信息展示页面容器组件，提供统一的页面布局和间距控制

#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| className | string | 否 | - | 自定义样式类名 |
| children | ReactNode | 否 | - | 子组件内容 |

### InfoPage.Part
信息展示区块组件，用于包装具体的信息内容

#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| className | string | 否 | - | 自定义样式类名 |
| title | ReactNode | 否 | - | 区块标题 |
| subtitle | ReactNode | 否 | - | 区块副标题 |
| extra | ReactNode | 否 | - | 区块额外操作区域 |
| children | ReactNode | 否 | - | 区块内容 |
| bordered | boolean | 否 | false | 是否显示边框 |

### Content
通用内容展示组件，支持标签-内容的灵活布局

#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| list | array | 否 | [] | 展示数据列表 |
| labelAlign | string | 否 | 'left' | 标签对齐方式，可选 'left'、'right'、'auto' |
| col | number | 否 | 1 | 每行显示的列数 |
| gutter | number | 否 | 0 | 栅格间隔 |
| className | string | 否 | - | 自定义样式类名 |
| size | string | 否 | - | 尺寸大小，可选 'small' |
| itemRender | function | 否 | - | 自定义列表项渲染函数 |

#### 列表项数据结构
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| label | ReactNode | 否 | - | 标签内容 |
| content | ReactNode | 否 | - | 内容区域 |
| block | boolean | 否 | false | 是否占据整行 |
| display | boolean/function | 否 | true | 是否显示该项 |

### Descriptions
描述列表组件，类似于 Ant Design 的 Descriptions，专为详情页设计

#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| dataSource | array | 是 | - | 二维数组数据源，每个子数组代表一行 |
| isFull | boolean | 否 | false | 标签是否占据更大空间 |
| className | string | 否 | - | 自定义样式类名 |
| itemRender | function | 否 | - | 自定义项渲染函数 |

### CentralContent
居中内容展示组件，支持列定义和自动布局

#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| dataSource | object | 否 | {} | 数据源对象 |
| columns | array | 否 | [] | 列定义数组 |
| col | number | 否 | 2 | 展示列数 |
| valueIsEmpty | function | 否 | isEmpty | 值为空的判断函数 |
| emptyIsPlaceholder | boolean | 否 | true | 空值是否显示占位符 |
| placeholder | ReactNode | 否 | '-' | 空值占位符 |
| className | string | 否 | - | 自定义样式类名 |
| context | object | 否 | - | 上下文数据 |

#### 列定义数据结构
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| name | string | 是 | - | 字段名称 |
| title | ReactNode | 否 | - | 显示标题 |
| format | string/function | 否 | - | 格式化规则 |
| render | function | 否 | - | 自定义渲染函数 |
| span | number | 否 | - | 栅格占位格数 |

### TableView
表格视图组件，支持行选择和自定义列配置

#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| dataSource | array | 否 | [] | 表格数据源 |
| columns | array | 是 | - | 列定义数组 |
| rowKey | string/function | 否 | 'id' | 行数据的唯一标识 |
| rowSelection | object | 否 | - | 行选择配置 |
| valueIsEmpty | function | 否 | isEmpty | 值为空的判断函数 |
| emptyIsPlaceholder | boolean | 否 | true | 空值是否显示占位符 |
| placeholder | ReactNode | 否 | '-' | 空值占位符 |
| empty | ReactNode | 否 | <Empty /> | 空数据展示内容 |
| onRowSelect | function | 否 | - | 行选择回调函数 |
| render | function | 否 | - | 自定义渲染函数 |
| context | object | 否 | - | 上下文数据 |
| sticky | boolean | 否 | false | 表头是否固定 |
| className | string | 否 | - | 自定义样式类名 |

#### 行选择配置
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| type | string | 否 | 'checkbox' | 选择类型，可选 'checkbox'、'radio' |
| selectedRowKeys | array | 否 | [] | 已选中行的key数组 |
| onChange | function | 否 | - | 选择变化回调函数 |
| isSelectedAll | boolean | 否 | false | 是否全选状态 |

### Flow
流程展示组件，基于 Ant Design Steps 组件扩展

#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| dataSource | array | 否 | [] | 流程数据源 |
| columns | array | 否 | [] | 列定义数组 |
| size | string | 否 | 'small' | 步骤条大小 |
| empty | ReactNode | 否 | <Empty /> | 空数据展示内容 |
| valueIsEmpty | function | 否 | isEmpty | 值为空的判断函数 |
| placeholder | ReactNode | 否 | '-' | 空值占位符 |
| emptyIsPlaceholder | boolean | 否 | false | 空值是否显示占位符 |
| className | string | 否 | - | 自定义样式类名 |

### SplitLine
分割线展示组件，用于横向展示多个字段

#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| dataSource | object | 否 | - | 数据源对象 |
| columns | array | 是 | - | 列定义数组 |
| valueIsEmpty | function | 否 | isEmpty | 值为空的判断函数 |
| placeholder | ReactNode | 否 | '-' | 空值占位符 |
| emptyIsPlaceholder | boolean | 否 | false | 空值是否显示占位符 |
| size | number | 否 | 0 | 分割线间距 |
| labelGap | number | 否 | 4 | 标签与内容的间距 |
| labelMode | string | 否 | 'horizontal' | 标签模式，可选 'horizontal'、'vertical' |
| split | ReactNode | 否 | <Divider type="vertical" /> | 分割线组件 |
| context | object | 否 | - | 上下文数据 |
| className | string | 否 | - | 自定义样式类名 |

### Report
报告容器组件，用于生成打印友好的报告页面

#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| title | ReactNode | 否 | - | 报告标题 |
| subtitle | ReactNode | 否 | - | 报告副标题 |
| extra | ReactNode | 否 | - | 标题额外内容 |
| border | boolean | 否 | true | 是否显示边框 |
| children | ReactNode | 否 | - | 子组件内容 |
| className | string | 否 | - | 自定义样式类名 |

### Score
评分展示组件，以星形图标展示评分

#### 属性说明
| 属性名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| value | number | 是 | - | 当前评分值 |
| gap | number | 否 | 4 | 评分项之间的间距 |
| total | number | 否 | 5 | 总评分项数 |
| className | string | 否 | - | 自定义样式类名 |

### formatView
数据格式化工具函数，提供多种常用格式化规则

#### 方法说明
| 方法名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| default | (value, format, context) | string/object | 根据格式规则格式化数据 |

#### 支持的格式化规则
| 格式名 | 说明 | 参数 |
|--------|------|------|
| date | 日期格式化 | 模板字符串，默认 'YYYY-MM-DD' |
| datetime | 日期时间格式化 | 模板字符串，默认 'YYYY-MM-DD HH:mm:ss' |
| dateRange | 日期范围格式化 | 模板字符串、是否允许空值 |
| boolean | 布尔值格式化 | true值对应的文本，默认 'true' |
| number | 数字格式化 | 样式、单位、小数位数等 |
| money | 金额格式化 | 单位，默认 '元' |

### computeColumnsValue
列值计算工具函数，用于统一处理列数据的显示逻辑

#### 方法说明
| 方法名 | 参数 | 返回值 | 说明 |
|--------|------|--------|------|
| default | (config) | array | 计算列的显示值 |
| computeDisplay | (config) | ReactNode | 计算单个列的显示内容 |
| computeColumnsDisplay | (config) | array | 计算所有列的显示内容 |

#### 配置参数
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| columns | array | 是 | - | 列定义数组 |
| dataSource | object/array | 是 | - | 数据源 |
| context | object | 否 | - | 上下文数据 |
| valueIsEmpty | function | 否 | isEmpty | 值为空的判断函数 |
| emptyIsPlaceholder | boolean | 否 | true | 空值是否显示占位符 |
| removeEmpty | boolean | 否 | true | 是否移除空值列 |
| placeholder | ReactNode | 否 | '-' | 空值占位符 |
