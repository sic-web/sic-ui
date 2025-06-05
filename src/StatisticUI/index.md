---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# StatisticUI-统计数值

:::success{title=使用中}
国信灵工后台管理系统-统计数值组件
:::

## 场景故事

## 代码演示

💎 基础使用

```tsx
import { useState } from 'react';
import { Space } from 'antd';
import { StatisticUI } from 'sic-ui';

const App: React.FC = () => {
  const Items = [
    { id: 1, label: '总计', value: 0.12, type: 1, suffix: '笔' },
    { id: 2, label: '实发', value: 123, type: 2 },
    { id: 3, label: '服务费', value: '12%', type: 3, decimals: 2 },
  ];
  return <StatisticUI items={Items}></StatisticUI>;
};
export default App;
```

## API 使用文档

<font size=1>

| 属性      | 说明                   | 类型   | 默认值 | 是否必传 |
| :-------- | :--------------------- | :----- | :----- | :------- |
| className | 类名                   | string |        | 否       |
| duration  | 动画时间 传 0.1 无动画 | number | 2      | 否       |

</font>

### items 数组字段说明

<font size="1">

| 属性      | 说明             | 类型                          | 默认值   | 是否必传 |
| :-------- | :--------------- | :---------------------------- | :------- | :------- |
| id        | 唯一标识         | number                        | -        | 是       |
| label     | 标签名           | string                        | -        | 否       |
| value     | 显示数值         | number \| string              | -        | 否       |
| type      | Tag 颜色类型     | string \| number \| 'primary' | -        | 否       |
| colon     | 是否显示冒号     | boolean                       | `true`   | 否       |
| suffix    | 单位后缀         | string                        | -        | 否       |
| decimals  | 小数位数         | number                        | 自动识别 | 否       |
| separator | 千分位符号       | string                        | ``       | 否       |
| rawValue  | 是否显示原始数据 | boolean                       | `false`  | 否       |

</font>
