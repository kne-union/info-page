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