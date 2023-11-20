---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# TexTUI-文本

:::success{title=使用中}
国信灵工后台管理系统-文本组件
:::

## 场景故事

## 代码演示

💎 基础使用
内容样式会做继承，悬停出现小手样式

```jsx
import { useState } from 'react';
import { Space } from 'antd';
import { TextUI } from 'sic-ui';

const App: React.FC = () => {
  return (
    <Space>
      <TextUI>文本</TextUI>
      <TextUI type="default">文本</TextUI>
      <TextUI type="danger">文本</TextUI>
    </Space>
  );
};
export default App;
```

## API 使用文档

🔥TableUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改

<font size=1>

| 属性 | 说明 | 类型   | 默认值  | 是否必传 |
| :--- | :--- | :----- | :------ | :------- |
| type | 类型 | string | default | 否       |

</font>
