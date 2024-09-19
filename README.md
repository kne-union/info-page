
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

- 这里填写示例标题
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

- 这里填写示例标题
- 这里填写示例说明
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

| 属性名        | 说明                                                                                  | 类型              | 默认值  |
|------------|-------------------------------------------------------------------------------------|-----------------|------|
| list       | `Content` 的内容列表                                                                     | listItemProps[] | []   |
| labelAlign | `label` 的对齐方式可以传入的值 `left,right,center,auto`,为 `auto` 时 `label` 不计算最小宽度             | string          | left |
| col        | 列数                                                                                  | number          | 1    |
| size       | 默认为 `14px`，可以传值为 `small`，`size` 为 `small` 时字号为 `12px`                               | string          | -    |
| gutter     | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 `{ xs: 8, sm: 16, md: 24}`。或者使用数组形式同时设置 [水平间距, 垂直间距] | number          | 0    |
| className  | `Content` 的 `className`                                                             | string          | -    |
| itemRender | 接收 `Content Inner` 和 `Inner` 的 `label, content, index`，可以根据数据信息返回想要渲染的内容            | function        | -    |

#### listItemProps

| 属性名     | 说明 | 类型                  | 默认值 |
|---------|----|---------------------|-----|
| label   | 标题 | ReactNode \| string | -   |
| content | 内容 | ReactNode \| string | -   |

