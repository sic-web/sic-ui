---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# AmountCellUI-金额单元格

:::success{title=使用中}
国信灵工后台管理系统-金额单元格组件
:::

## 场景故事

## 代码演示

💎 基础使用

```tsx
import { Space } from 'antd';
import { AmountCellUI } from 'sic-ui';

export default () => (
  <Space>
    <AmountCellUI>10000</AmountCellUI>
    <AmountCellUI>1000000</AmountCellUI>
    <AmountCellUI>10000000000</AmountCellUI>
  </Space>
);
```

## API 使用文档

🔥TableUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改

<font size=1>

|    属性     | 说明   |        类型         | 默认值 | 是否必传 |
| :---------: | ------ | :-----------------: | :----: | :------: |
|  children   | 金额   |       Number        |   -    |    是    |
| isNumExpand | 分转元 |       boolean       |   是   |    否    |
|  className  | 类名   |       String        |   -    |    否    |
|    style    | 样式   | React.CSSProperties |   -    |    否    |

</font>
