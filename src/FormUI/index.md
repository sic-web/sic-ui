---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# FormUI 表单组件

💎 表单组件-标题使用（新）

```tsx
import React, { useState } from 'react';
import { FormUI } from 'sic-ui';

const App: React.FC = () => {
  return (
    <div>
      <FormUI.ProTitle />
      <br />
      <FormUI.ProTitle title="表单标题">123123</FormUI.ProTitle>
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

<font size=1>

|   属性   | 说明       |   类型    | 默认值 | 是否必传 |
| :------: | ---------- | :-------: | :----: | :------: |
| required | 是否必填   |  boolean  |  true  |    否    |
|   line   | 是否有横线 |  boolean  |  true  |    否    |
| children | 内容       | ReactNode |  null  |    否    |

</font>
