---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# BackUI-返回

:::success{title=使用中}
国信灵工后台管理系统-返回组件
:::

## 场景故事

## 代码演示

💎 基础使用

```jsx
import { BackUI } from 'sic-ui';

export default () => <BackUI before={'前一页 '} current={'当前页'} />;
```

💎 跳到指定页面

```jsx
import { BackUI } from 'sic-ui';

export default () => <BackUI to={'/components/icon-ui'} before={'前一页 '} current={'当前页'} />;
```

## API 使用文档

🔥TableUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改

<font size=1>

|  属性   | 说明                   |  类型  | 默认值 | 是否必传 |
| :-----: | ---------------------- | :----: | :----: | :------: |
| before  | 当前页面的前一页       | String |   -    |    是    |
| current | 当前页面               | String |   -    |    是    |
|   to    | 从当前页面调到指定页面 | String |   -1   |    否    |

</font>
