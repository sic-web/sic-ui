---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# Image-图片展示组件

:::success{title=使用中}
国信灵工后台管理系统-图片展示组件
:::

## 场景故事

## 代码演示

💎 基础使用

```tsx
import React from 'react';
import { Space } from 'antd';
import { ImageUI } from 'sic-ui';

const App: React.FC = () => (
  <Space>
    <ImageUI src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={200} height={200} />
    <ImageUI src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={200} height={200} maskType={2} />
    <ImageUI src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={200} height={200} maskType={3} />
  </Space>
);
export default App;
```

## API 使用文档

ImageUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改

<font size=1>

|       属性       | 说明                   |        类型         | 默认值 | 是否必传 |
| :--------------: | ---------------------- | :-----------------: | :----: | :------: |
|       src        | 地址                   |       String        |   -    |    是    |
|      width       | 宽度                   |       number        |   -    |    否    |
|      height      | 长度                   |       number        |   -    |    否    |
|     preview      | 是否可预览             |       Boolean       |  true  |    否    |
|     maskType     | 蒙层类型               |       Number        |   1    |    否    |
|    className     | 类名                   |       String        |   -    |    否    |
|      style       | 样式                   | React.CSSProperties |   -    |    否    |
| clickOtherButton | 点击蒙层右边按钮后回调 |      ()=>void       |   -    |    否    |

</font>
