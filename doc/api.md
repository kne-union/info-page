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

| 属性名        | 说明                                                                                      | 类型                      | 默认值   |
|------------|-----------------------------------------------------------------------------------------|-------------------------|-------|
| dataSource | 详情数据源，内部每个数组为一行数据，每行数据中每个对象为一列数据，每行最多包含 `2` 列内容，多余的会被丢弃                                 | `dataSourceItemProps[]` | -     |
| itemRender | 接收 `Descriptions Inner` 和 `Inner` 的 `label, content, displaty, index`，可以根据数据信息返回想要渲染的内容 | function                | -     |
| isFull     | 是否使用完整布局（标签占8列）                                                                         | boolean                 | false |
| className  | 自定义类名                                                                                   | string                  | -     |

#### dataSourceItemProps

| 属性名     | 说明                                                                                                  | 类型                  | 默认值  |
|---------|-----------------------------------------------------------------------------------------------------|---------------------|------|
| display | 数据是否展示，当为 `function` 时可以接收到 `item, dataSource` 参数，`item` 为当前项配置，`dataSource` 为整个组件的 `dataSource` 配置 | boolean \| function | true |
| label   | 数据展示的标题                                                                                             | ReactNode \| string | -    |
| content | 数据展示的内容                                                                                             | ReactNode \| string | -    |

### Flow

| 参数        | 说明    | 类型            | 默认值 |
|-----------|-------|---------------|-----|
| className | 自定义类名 | string        | -   |
| style     | 自定义样式 | CSSProperties | -   |
| steps     | 步骤配置  | Step[]        | []  |
| current   | 当前步骤  | number        | 0   |

#### Step

| 参数          | 说明   | 类型                                         | 默认值    |
|-------------|------|--------------------------------------------|--------|
| title       | 标题   | ReactNode                                  | -      |
| subTitle    | 副标题  | ReactNode                                  | -      |
| description | 描述   | ReactNode                                  | -      |
| status      | 状态   | 'wait' \| 'process' \| 'finish' \| 'error' | 'wait' |
| content     | 步骤内容 | ReactNode                                  | -      |

### CentralContent

| 参数        | 说明    | 类型            | 默认值 |
|-----------|-------|---------------|-----|
| className | 自定义类名 | string        | -   |
| style     | 自定义样式 | CSSProperties | -   |
| children  | 内容    | ReactNode     | -   |

### SplitLine

| 参数        | 说明    | 类型                         | 默认值          |
|-----------|-------|----------------------------|--------------|
| className | 自定义类名 | string                     | -            |
| style     | 自定义样式 | CSSProperties              | -            |
| direction | 排列方向  | 'horizontal' \| 'vertical' | 'horizontal' |
| items     | 项目配置  | SplitLineItem[]            | []           |

#### SplitLineItem

| 参数      | 说明 | 类型        | 默认值 |
|---------|----|-----------|-----|
| label   | 标签 | ReactNode | -   |
| content | 内容 | ReactNode | -   |

### TableView

| 参数                 | 说明         | 类型                                                                    | 默认值         |
|--------------------|------------|-----------------------------------------------------------------------|-------------|
| className          | 自定义类名      | string                                                                | -           |
| dataSource         | 数据源        | any[]                                                                 | []          |
| columns            | 列配置        | Column[]                                                              | []          |
| rowKey             | 行数据的唯一标识字段 | string \| ((record: any) => string)                                   | 'id'        |
| rowSelection       | 行选择配置      | RowSelection                                                          | -           |
| valueIsEmpty       | 判断值是否为空的函数 | (value: any) => boolean                                               | isEmpty     |
| placeholder        | 空值占位符      | ReactNode                                                             | '-'         |
| emptyIsPlaceholder | 是否显示空值占位符  | boolean                                                               | true        |
| empty              | 无数据时的展示内容  | ReactNode                                                             | `<Empty />` |
| onRowSelect        | 行选择回调      | (record: any, info: { columns: Column[], dataSource: any[] }) => void | -           |

#### 行选择 (Row Selection) 配置

| 参数              | 说明          | 类型                        | 默认值   | 可选值                  |
|-----------------|-------------|---------------------------|-------|----------------------|
| type            | 选择类型        | string                    | -     | 'checkbox' / 'radio' |
| selectedRowKeys | 当前选中的行key数组 | array                     | []    | -                    |
| onChange        | 选择变化时的回调函数  | function(selectedRowKeys) | -     | -                    |
| isSelectedAll   | 是否全选        | boolean                   | false | true/false           |

#### 列配置 (Columns)

| 参数                 | 说明           | 类型                 | 默认值          | 可选值                                  |
|--------------------|--------------|--------------------|--------------|--------------------------------------|
| name               | 列标识          | string             | -            | -                                    |
| title              | 列标题          | ReactNode          | -            | -                                    |
| span               | 列宽度（24栅格）    | number             | -            | -                                    |
| align              | 对齐方式         | string             | 'top'        | 'top' / 'middle' / 'bottom'          |
| justify            | 水平对齐方式       | string             | 'flex-start' | 'flex-start' / 'center' / 'flex-end' |
| getValueOf         | 获取列值的函数      | function           | -            | -                                    |
| format             | 格式化函数或格式化字符串 | function \| string | -            | -                                    |
| render             | 自定义渲染函数      | function           | -            | -                                    |
| renderPlaceholder  | 自定义空值渲染函数    | function           | -            | -                                    |
| valueIsEmpty       | 判断值是否为空的函数   | function           | -            | -                                    |
| emptyIsPlaceholder | 是否显示空值占位符    | boolean            | -            | -                                    |
| placeholder        | 列空值占位符       | ReactNode          | -            | -                                    |

### Report

#### 基础属性 (Props)

| 参数        | 说明       | 类型        | 默认值  | 可选值        |
|-----------|----------|-----------|------|------------|
| title     | 主标题      | ReactNode | -    | 任意可渲染节点    |
| subtitle  | 副标题      | ReactNode | -    | 任意可渲染节点    |
| extra     | 标题区域额外内容 | ReactNode | -    | 任意可渲染节点    |
| border    | 是否显示边框   | boolean   | true | true/false |
| className | 自定义类名    | string    | -    | -          |
| children  | 内容区域     | ReactNode | -    | -          |

#### Report.List

| 参数          | 说明     | 类型     | 默认值 | 可选值 |
|-------------|--------|--------|-----|-----|
| report      | 报告数据对象 | object | -   | -   |
| report.list | 列表数据数组 | array  | []  | -   |

##### listItem

| 属性      | 说明    | 类型        | 默认值 |
|---------|-------|-----------|-----|
| label   | 列表项标签 | ReactNode | -   |
| content | 列表项内容 | ReactNode | -   |

#### Report.Part

| 参数          | 说明     | 类型     | 默认值 | 可选值 |
|-------------|--------|--------|-----|-----|
| report      | 分区数据对象 | object | -   | -   |
| report.list | 分区数据数组 | array  | []  | -   |

##### listItem

| 属性         | 说明       | 类型        | 默认值   | 备注        |
|------------|----------|-----------|-------|-----------|
| label      | 分区标签     | ReactNode | -     | 必填        |
| content    | 分区内容     | ReactNode | -     | 必填        |
| hasBgColor | 是否有背景色   | boolean   | false | 控制内容区域背景  |
| ...props   | 其他HTML属性 | object    | -     | 会传递给外层div |

#### Report.Result

| 参数     | 说明     | 类型     | 默认值 | 必填 |
|--------|--------|--------|-----|----|
| report | 结果数据对象 | object | -   | 是  |

##### report

| 属性                 | 说明     | 类型            | 默认值 | 必填 |
|--------------------|--------|---------------|-----|----|
| report.total       | 总分数据   | object        | -   | 是  |
| report.total.score | 总分值    | number/string | -   | 是  |
| report.total.label | 总分标签   | string        | -   | 是  |
| report.list        | 分项结果列表 | array         | []  | 否  |

##### listItem

| 属性      | 说明   | 类型            | 默认值 |
|---------|------|---------------|-----|
| label   | 分项标签 | string        | -   |
| content | 分项内容 | ReactNode     | -   |
| score   | 分项得分 | number/string | -   |

#### Report.Score

| 参数        | 说明       | 类型     | 默认值 | 可选值   |
|-----------|----------|--------|-----|-------|
| className | 自定义类名    | string | -   | -     |
| value     | 当前得分值    | number | -   | 0-5   |
| total     | 总分值/星星总数 | number | 5   | 任意正整数 |

#### Report.Table

| 参数               | 说明     | 类型     | 默认值 | 必填 |
|------------------|--------|--------|-----|----|
| report           | 表格数据对象 | object | -   | 是  |
| report.list      | 表格数据数组 | array  | []  | 否  |
| report.columns   | 列配置数组  | array  | -   | 是  |
| report.group     | 分组配置数组 | array  | -   | 否  |
| report.groupName | 分组字段名  | string | -   | 否  |

##### columns

| 参数         | 说明      | 类型      | 默认值   | 示例         |
|------------|---------|---------|-------|------------|
| name       | 列字段名    | string  | -     | "username" |
| title      | 列标题     | string  | -     | "用户名"      |
| span       | 列宽度比例   | number  | -     | 6          |
| isSubTitle | 是否作为子标题 | boolean | false | true       |

##### group

| 参数   | 说明   | 类型     | 默认值 |
|------|------|--------|-----|
| name | 分组名称 | string | -   |

#### Report.PrintPageBreak

用于在打印时强制分页的组件。

| 参数        | 说明    | 类型            | 默认值 |
|-----------|-------|---------------|-----|
| className | 自定义类名 | string        | -   |
| style     | 自定义样式 | CSSProperties 