---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# BroadcastUI-广播组件

:::success{title=使用中}
国信灵工后台管理系统-广播组件
:::

## 场景故事

## 代码演示

💎 基础使用

```jsx
import { BroadcastUI } from 'sic-ui';
const promptList = [
  '总发放金额：在筛选发放时间范围内，实际下发数据的总和以及在创建时间范围内，发放同步待支付金额的总和。',
  '总实发金额：在发放时间范围内，实际下发数据的总和。',
];

export default () => <BroadcastUI width={500} promptList={promptList} />;
```

## API 使用文档

<font size=1>

|   属性    | 说明                   |  类型  | 默认值 | 是否必传 |
| :-------: | ---------------------- | :----: | :----: | :------: |
|  before   | 当前页面的前一页       | String |   -    |    是    |
|  current  | 当前页面               | String |   -    |    是    |
|    to     | 从当前页面调到指定页面 | String |   -1   |    否    |
| className | 类名                   | String |   -    |    否    |

</font>
