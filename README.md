
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
* `InfoPage.Part`、`InfoPage.Collapse` 需要放在 `InfoPage` 之下，`Content`、`Descriptions` 需要放在 `InfoPage.Part` 之下



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

| 属性名       | 说明                   | 类型        | 默认值 |
|-----------|----------------------|-----------|-----|
| className | `Part` 的 `className` | string    | -   |

