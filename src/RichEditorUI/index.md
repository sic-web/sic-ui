---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# RichEditorUI-富文本组件

💎 基础使用
富文本组件 支持直接在 form 中使用

```tsx
import { useState } from 'react';
import { RichEditorUI } from 'sic-ui';

const App: React.FC = () => {
  return <RichEditorUI />;
};
export default App;
```

## API 使用文档

<font size=1>

| 属性        | 说明                   | 类型        | 默认值          | 是否必传 |
| :---------- | :--------------------- | :---------- | :-------------- | :------- |
| value       | 内容                   |             | -               | -        |
| placeholder | 默认文本               | string      | "请输入内容..." | 否       |
| onChange    | 输入框内容变化时的回调 | function(e) | -               | -        |

</font>
