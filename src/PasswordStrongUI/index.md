---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# PasswordStrongUI 密码强度组件

💎 消息提醒组件

```tsx
import React from 'react';
import { PasswordStrongUI } from 'sic-ui';

const App: React.FC = () => {
  return (
    <div>
      <PasswordStrongUI value="" />
      <br />
      <PasswordStrongUI value="abc" />
      <br />
      <PasswordStrongUI value="abc123" />
      <br />
      <PasswordStrongUI value="abc123！" />
    </div>
  );
};
export default App;
```

## API 使用文档

<font size=1>

| 属性  | 说明         |  类型  | 默认值 | 是否必传 |
| :---: | ------------ | :----: | :----: | :------: |
| value | 判断强度的值 | String |   -    |    是    |

</font>
