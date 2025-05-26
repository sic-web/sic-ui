---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# DescriptionsUI 描述组件

:::success{title=使用中}
国信灵工后台管理系统-描述组件
:::

## 场景故事

## 代码演示

💎 基础使用

```tsx
import React, { useState } from 'react';
import { DescriptionsUI } from 'sic-ui';

const App: React.FC = () => {
  const items = [
    {
      label: '测试标题',
      children: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
    },

    {
      label: '测试标题',
      children: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
    },

    {
      label: '测试标题',
      children: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
      span: 8,
    },
    {
      label: '测试标题',
      children: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
      span: 8,
    },
    {
      label: '测试标题',
      children: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
      span: 8,
    },
    {
      label: '测试标题',
      children: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
      span: 24,
    },
  ];

  const items2 = [
    {
      label: '很长的测试标题很长的测试标题很长的测试标题很长的测试标题',
      children:
        '很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容',
    },
    {
      label: '很长的测试标题很长的测试标题很长的测试标题很长的测试标题',
      children:
        '很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容',
    },
    {
      label: '很长的测试标题很长的测试标题很长的测试标题很长的测试标题',
      children:
        '很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容',
    },
    {
      label: '很长的测试标题很长的测试标题很长的测试标题很长的测试标题',
      children:
        '很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容很长的测试内容',
    },
  ];

  const items3 = [
    {
      label: '测试标题',
      children: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
    },

    {
      label: '测试标题',
      children: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
    },

    {
      label: '测试标题',
      children: '',
      noDataHide: false,
    },
    {
      label: '测试标题',
      children: '',
      noDataHide: true,
    },
    {
      label: '测试标题',
      children: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
    },
    {
      label: '测试标题',
      children: '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容',
    },
  ];
  return (
    <div>
      <div> 表格类型</div>
      <br />
      <DescriptionsUI items={items} />
      <br />
      <div> 文本类型</div>
      <br />
      <DescriptionsUI items={items} type="text" labelWidth={80} />
      <div> 文本类型(垂直文本)</div>
      <br />
      <DescriptionsUI items={items} type="text" labelWidth={80} layout="vertical" />
      <br />
      <br />

      <div> 表格类型(文字超长)</div>
      <br />
      <DescriptionsUI items={items2} />
      <br />
      <div> 文本类型(文字超长)</div>
      <br />
      <DescriptionsUI items={items2} type="text" labelWidth={80} />
      <br />
      <br />
      <div> 表格类型(文字超长省略)</div>
      <br />
      <DescriptionsUI items={items2} isSingleLine={true} />
      <br />
      <div> 文本类型(文字超长省略)</div>
      <br />
      <DescriptionsUI items={items2} type="text" labelWidth={80} isSingleLine={true} />
      <br />
      <br />
      <div> 表格类型(内容不存在删除当前项)</div>
      <br />
      <DescriptionsUI items={items3} />
      <br />
      <div> 文本类型(内容不存在删除当前项)</div>
      <br />
      <DescriptionsUI items={items3} type="text" labelWidth={80} />
    </div>
  );
};
export default App;
```

## API 使用文档

<font size=1>

|     属性     | 说明                   |           类型           |   默认值   | 是否必传 |
| :----------: | ---------------------- | :----------------------: | :--------: | :------: |
|    items     | 数据                   |                          |     -      |    是    |
| isSingleLine | 是否单行显示           |         boolean          |   false    |    否    |
|  labelWidth  | label 宽度             |          number          |    120     |    否    |
|  noDataHide  | 没有值时是否隐藏当前项 |         Boolean          |     -      |    否    |
|     type     | 类型                   |     "table 或 text "     |   table    |    否    |
|    layout    | label 展示格式         | "horizontal 或 vertical" | horizontal |    否    |

</font>
