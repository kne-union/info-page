
# info-page


### 描述

一般用在复杂的详情展示页面，InfoPage提供了一个标准的展示信息的格式


### 安装

```shell
npm i --save @kne/info-page
```


### 概述

### *`InfoPage`* 何时使用

一般用在复杂的详情展示页面，`InfoPage` 提供了一个标准的展示信息的格式

### 特点

* 支持 `Content` 组件 `Descriptions` 组件的组合
* 支持 `Collapse` 组件组合
* `InfoPage.Part`、`InfoPage.Collapse` 需要放在 `InfoPage` 之下，`Content`、`Descriptions` 可以任意组合

### *`Content`* 何时使用

成组展示多个字段，常见于详情页的信息展示

### 特点

labelAlign 不为 auto 时会自动计算 label 的最小宽度使所有 label 的宽度等于最长的 label 宽度，使视觉上更加整齐有秩序感


### 示例

#### 示例代码

- InfoPage
- 这里填写示例说明
- _InfoPage(@kne/current-lib_info-page),(@kne/current-lib_info-page/dist/index.css),antd(antd)

```jsx
const {default: InfoPage} = _InfoPage;
const {Button} = antd;

const BaseExample = () => {
  return (
    <InfoPage>
      InfoPage
      <InfoPage.Part
        title="Part Title"
        subtitle="我是一个subtitle"
        extra={<Button>操作</Button>}
      >
        InfoPage.Part
        <InfoPage.Part
          title="Part Title"
          subtitle="我是一个subtitle"
          extra={<Button>操作</Button>}
        >
          InfoPage.InfoPage.Part
        </InfoPage.Part>
      </InfoPage.Part>
      <InfoPage.Collapse
        items={[
          {key: '1', label: 'This is default size panel header', children: <p>InfoPage.Collapse</p>},
          {key: '2', label: 'This is default size panel header2', children: <p>InfoPage.Collapse2</p>},
        ]}
      />
    </InfoPage>
  );
};

render(<BaseExample />);

```

- Content
- 展示了一个基本内容
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

- Descriptions
- 展示一个信息详情
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


### API

### InfoPage

同 [`Ant Design Card`](https://ant.design/components/Card#api)

新增参数：

| 属性名       | 说明                       | 类型        | 默认值 |
|-----------|--------------------------|-----------|-----|
| subtitle  | 副标题                      | ReactNode | -   |
| className | `InfoPage` 的 `className` | string    | -   |

#### InfoPage.Part

同 [`Ant Design Card`](https://ant.design/components/Card#api)

新增参数：

| 属性名       | 说明                   | 类型        | 默认值 |
|-----------|----------------------|-----------|-----|
| subtitle  | 副标题                  | ReactNode | -   |
| className | `Part` 的 `className` | string    | -   |

#### InfoPage.Collapse

同 [`Ant Design Collapse`](https://ant.design/components/Collapse#collapse)

新增参数：

| 属性名       | 说明                   | 类型     | 默认值 |
|-----------|----------------------|--------|-----|
| className | `Part` 的 `className` | string | -   |

### Content

| 属性名        | 说明                                                                                  | 类型                | 默认值  |
|------------|-------------------------------------------------------------------------------------|-------------------|------|
| list       | `Content` 的内容列表                                                                     | `listItemProps[]` | []   |
| labelAlign | `label` 的对齐方式可以传入的值 `left,right,center,auto`,为 `auto` 时 `label` 不计算最小宽度             | string            | left |
| col        | 列数                                                                                  | number            | 1    |
| size       | 默认为 `14px`，可以传值为 `small`，`size` 为 `small` 时字号为 `12px`                               | string            | -    |
| gutter     | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 `{ xs: 8, sm: 16, md: 24}`。或者使用数组形式同时设置 [水平间距, 垂直间距] | number            | 0    |
| className  | `Content` 的 `className`                                                             | string            | -    |
| itemRender | 接收 `Content Inner` 和 `Inner` 的 `label, content, index`，可以根据数据信息返回想要渲染的内容            | function          | -    |

#### listItemProps

| 属性名     | 说明                                                                                            | 类型                  | 默认值  |
|---------|-----------------------------------------------------------------------------------------------|---------------------|------|
| display | 数据是否展示，当为 `function` 时可以接收到 `item, list` 参数，`item` 为当前项配置，`dataSource` 为整个组件的 `dataSource` 配置 | boolean \| function | true |
| block   | 是否单行显示该条信息                                                                                    | ReactNode \| string | -    |
| label   | 标题                                                                                            | ReactNode \| string | -    |
| content | 内容                                                                                            | ReactNode \| string | -    |

### Descriptions

| 属性名        | 说明                                                                                      | 类型                      | 默认值 |
|------------|-----------------------------------------------------------------------------------------|-------------------------|-----|
| dataSource | 详情数据源，内部每个数组为一行数据，每行数据中每个对象为一列数据，每行最多包含 `2` 列内容，多余的会被丢弃                                 | `dataSourceItemProps[]` | -   |
| itemRender | 接收 `Descriptions Inner` 和 `Inner` 的 `label, content, displaty, index`，可以根据数据信息返回想要渲染的内容 | function                | -   |

#### dataSourceItemProps

| 属性名     | 说明                                                                                                  | 类型                  | 默认值  |
|---------|-----------------------------------------------------------------------------------------------------|---------------------|------|
| display | 数据是否展示，当为 `function` 时可以接收到 `item, dataSource` 参数，`item` 为当前项配置，`dataSource` 为整个组件的 `dataSource` 配置 | boolean \| function | true |
| label   | 数据展示的标题                                                                                             | ReactNode \| string | -    |
| content | 数据展示的内容                                                                                             | ReactNode \| string | -    |

