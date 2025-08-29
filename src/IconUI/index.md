---
nav:
  title: 组件
  path: /components
group:
  title: 全局预览
  order: 1
---

# IconUI-图标

💎 基础使用

```tsx
import React from 'react';
import { Space } from 'antd';
import { IconUI } from 'sic-ui';

const App: React.FC = () => (
  <Space wrap>
    <IconUI name="Minsheng" width={24} height={24} />
    <IconUI name="ListTwo" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Pingan" width={24} height={24} />
  </Space>
);
export default App;
```

💎 【字典查询】点击图标复制使用
<code src="./material/dictionary.tsx" ></code>
