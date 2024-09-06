---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# TagUI 标签

:::success{title=使用中}
国信灵工后台管理系统-标签组件
:::

## 场景故事

## 代码演示

💎 基础使用

```tsx
import React from 'react';
import { TagUI } from 'sic-ui';
import { Space } from 'antd';

const App: React.FC = () => (
  <Space wrap>
    <TagUI>灰色</TagUI>
    <TagUI type={1}>绿色</TagUI>
    <TagUI type={2}>紫色</TagUI>
    <TagUI type={3}>蓝色</TagUI>
    <TagUI type={4}>灰色</TagUI>
    <TagUI type={5}>黄色</TagUI>
    <TagUI type={6}>红色</TagUI>
    <TagUI type={7}>深红</TagUI>
    <TagUI type={8}>淡青</TagUI>
    <TagUI type={9}>粉红</TagUI>
    <TagUI type={10}>橄榄色</TagUI>
  </Space>
);
export default App;
```

💎 使用 icon

```tsx
import React from 'react';
import { TagUI, IconUI } from 'sic-ui';
import { DataFour, Currency, CheckOne, CloseOne, UTurnLeft, RotateOne } from '@icon-park/react';
import { Space } from 'antd';

const App: React.FC = () => (
  <Space wrap>
    <TagUI type={1} icon={<IconUI name DataFour />}>
      绿色
    </TagUI>
    <TagUI type={2} icon={<Currency />}>
      紫色
    </TagUI>
    <TagUI type={3} icon={<CheckOne />}>
      蓝色
    </TagUI>
    <TagUI type={4} icon={<UTurnLeft />}>
      灰色
    </TagUI>
    <TagUI type={5} icon={<RotateOne />}>
      黄色
    </TagUI>
  </Space>
);
export default App;
```

## API 使用文档

~~🔥TagUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改~~

<font size=1>

| 属性  | 说明                      |   类型    | 默认值 | 是否必传 |
| :---: | ------------------------- | :-------: | :----: | :------: |
| type  | 当前 TagUI 所属类型       |  Number   |   -    |    否    |
| icon  | 当前 TagUI 所 携带的 Icon | ReactNode |   -    |    否    |
| style | 样式                      |    Any    |   -    |    否    |

</font>
