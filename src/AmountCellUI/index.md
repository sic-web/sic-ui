---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# AmountCellUI-金额单元格

💎 基础使用

```tsx
import { Space } from 'antd';
import { AmountCellUI } from 'sic-ui';

export default () => (
  <Space>
    <AmountCellUI>10000</AmountCellUI>
    <AmountCellUI animation={true}>1000000</AmountCellUI>
    <AmountCellUI>10000000000</AmountCellUI>
    <AmountCellUI isTooltipTitle={false}>10000000000</AmountCellUI>
  </Space>
);
```

## API 使用文档

| 属性          | 说明             | 类型      | 默认值  | 是否必传 |
| ------------- | ---------------- | --------- | ------- | -------- |
| className     | 类名             | `string`  | `-`     | 否       |
| children      | 金额             | `number`  | `-`     | 是       |
| animation     | 是否显示动画     | `boolean` | `true`  | 否       |
| rawValue      | 是否显示原始值   | `boolean` | `false` | 否       |
| forceRender   | 是否强制渲染     | `boolean` | `false` | 否       |
| separator     | 千分位符号       | `boolean` | ``      | 否       |
| isShowTooltip | 是否展示 Tooltip | `boolean` | `true`  | 否       |
