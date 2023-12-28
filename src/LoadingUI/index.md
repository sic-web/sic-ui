---
nav:
  title: 组件
  path: /components
group:
  title: 业务组件
  order: 2
---

# LoadingUI 加载中组件

:::info{title=开发中}
国信灵工后台管理系统-加载中组件
:::

## 场景故事

## 代码演示

💎 基础使用

```jsx
import React, { useState } from 'react';
import { LoadingUI } from 'sic-ui';
import { Space } from 'antd';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const confirm = () => setIsOpen(false);
  return <LoadingUI isShowLoading={true} />;
};
export default App;
```

## API 使用文档

🔥TableUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改

<font size=1>

| 属性 | 说明                      |   类型    | 默认值 | 是否必传 |
| :--: | ------------------------- | :-------: | :----: | :------: |
| type | 当前 TagUI 所属类型       |  Number   |   -    |    否    |
| icon | 当前 TagUI 所 携带的 Icon | ReactNode |   -    |    否    |

</font>
