---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# ButtonUI-按钮

:::success{title=使用中}
国信灵工后台管理系统-按钮组件
:::

## 场景故事

## 代码演示

💎 基础使用

```tsx
import React from 'react';
import { Space } from 'antd';
import { ButtonUI } from 'sic-ui';

const App: React.FC = () => (
  <Space>
    <ButtonUI>默认按钮</ButtonUI>
    <ButtonUI type="primary">主要按钮</ButtonUI>
    <ButtonUI type="dashed">虚线按钮</ButtonUI>
    <ButtonUI type="text">文本按钮</ButtonUI>
    <ButtonUI type="link">链接按钮</ButtonUI>
  </Space>
);
export default App;
```

💎 危险按钮

```tsx
import React from 'react';
import { Space } from 'antd';
import { ButtonUI } from 'sic-ui';

const App: React.FC = () => (
  <Space>
    <ButtonUI danger>默认按钮</ButtonUI>
    <ButtonUI type="primary" danger>
      主要按钮
    </ButtonUI>
    <ButtonUI type="dashed" danger>
      虚线按钮
    </ButtonUI>
    <ButtonUI type="text" danger>
      文本按钮
    </ButtonUI>
    <ButtonUI type="link" danger>
      链接按钮
    </ButtonUI>
  </Space>
);
export default App;
```

💎 表单中按钮置灰

```tsx
import React from 'react';
import { Form, Space } from 'antd';
import { ButtonUI } from 'sic-ui';

const App: React.FC = () => (
  <Form disabled={true}>
    <Space>
      <ButtonUI danger>默认按钮</ButtonUI>
      <ButtonUI type="primary">主要按钮</ButtonUI>
      <ButtonUI danger>删除按钮</ButtonUI>
    </Space>
  </Form>
);
export default App;
```

💎 使用 Icon

```tsx
import { Space } from 'antd';
import { ButtonUI, IconUI } from 'sic-ui';

export default () => (
  <Space>
    <ButtonUI icon={<IconUI name="Export" />}>按钮</ButtonUI>
    <ButtonUI icon={<IconUI name="Export" />} iconPosition="start">
      按钮
    </ButtonUI>
  </Space>
);
```

## API 使用文档

<font size=1>

|   属性    | 说明 |        类型         | 默认值  | 是否必传 |
| :-------: | ---- | :-----------------: | :-----: | :------: |
|   type    | 类型 |       String        | default |    否    |
|   icon    | icon |   React.ReactNode   |    -    |    否    |
| className | 类名 |       String        |    -    |    否    |
|   style   | 样式 | React.CSSProperties |    -    |    否    |
| children  | 内容 |   React.ReactNode   |    -    |    否    |

</font>
