---
nav:
  title: 组件
  path: /components
group:
  title: 业务组件
  order: 2
---

# FormUI 表单组件

:::success{title=使用中}
国信灵工后台管理系统-加载中组件
:::

## 场景故事

## 代码演示

💎 表单组件-标题使用（新）

```tsx
import React, { useState } from 'react';
import { FormUI } from 'sic-ui';

const App: React.FC = () => {
  return (
    <div>
      <FormUI.ProTitle />
      <br />
      <FormUI.ProTitle>表单标题</FormUI.ProTitle>
      <br />
      <FormUI.ProTitle required={false} />
      <br />
      <FormUI.ProTitle required={false} line={false} />
    </div>
  );
};
export default App;
```

## API 使用文档

🔥TableUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改

<font size=1>

|   属性   | 说明       |   类型    | 默认值 | 是否必传 |
| :------: | ---------- | :-------: | :----: | :------: |
| required | 是否必填   |  boolean  |  true  |    否    |
|   line   | 是否有横线 |  boolean  |  true  |    否    |
| children | 内容       | ReactNode |  null  |    否    |

</font>
