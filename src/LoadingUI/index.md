---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# LoadingUI 加载中组件

:::info{title=开发中}
加载中组件
:::

## 场景故事

💎 基础使用

```tsx
import React, { useState } from 'react';
import { Space } from 'antd';
import { LoadingUI } from 'sic-ui';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const confirm = () => setIsOpen(false);
  return <LoadingUI isShowLoading={true} />;
};
export default App;
```

## API 使用文档

<font size=1>

| 属性 | 说明                      |   类型    | 默认值 | 是否必传 |
| :--: | ------------------------- | :-------: | :----: | :------: |
| type | 当前 TagUI 所属类型       |  Number   |   -    |    否    |
| icon | 当前 TagUI 所 携带的 Icon | ReactNode |   -    |    否    |

</font>
