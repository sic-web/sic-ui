---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# DateUI-日期选择器

:::success{title=使用中}
国信灵工后台管理系统-日期选择器组件
:::

## 代码演示

💎 基础功能

```jsx
import React, { useState } from 'react';
import { DateUI } from 'sic-ui';

const App: React.FC = () => {
  const [value, setValue] = useState(['2022-11-11', '2022-12-12']);
  const change = (e) => {
    setValue(e);
  };
  return (
    <div>
      <DateUI value={value} onChange={change} />
      <br />
      <div>{JSON.stringify(value)}</div>
    </div>
  );
};
export default App;
```

## API 使用文档

<font size=1>

|   属性   | 说明 |  类型  |    默认值    | 是否必传 |
| :------: | ---- | :----: | :----------: | :------: |
|  value   | 值   | Arrary |   ["",""]    |    是    |
| onChange | 变化 |  Fun   |      -       |    是    |
|  format  | 格式 | String | 'YYYY-MM-DD' |    否    |

</font>
