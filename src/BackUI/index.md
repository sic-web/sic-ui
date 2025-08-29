---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# BackUI-返回

💎 基础使用

```tsx
import { BackUI } from 'sic-ui';

export default () => <BackUI before={'前一页 '} current={'当前页'} />;
```

💎 跳到指定页面

```tsx
import { BackUI } from 'sic-ui';

export default () => <BackUI to={'/components/icon-ui'} before={'前一页 '} current={'当前页'} />;
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
