---
nav:
  title: 组件
  path: /components
group:
  title: 业务组件
  order: 2
---

# DescribeUI 描述组件

:::success{title=使用中}
国信灵工后台管理系统-描述组件
:::

## 场景故事

## 代码演示

💎 基础使用

```jsx
import React, { useState } from 'react';
import { DescribeUI } from 'sic-ui';

const App: React.FC = () => {
  const dataSource1 = [
    {
      title: '代理类型',
      line: 1,
      children: '直客',
    },
    {
      title: '代理名称',
      line: 1,
      children: '世发国际贸易(上海)有限公司',
    },
    {
      title: '代理姓名',
      line: 2,
      children: '李政',
    },
    {
      title: '手机号',
      line: 2,
      children: '物流行业',
    },

    {
      title: (
        <div>
          运营专员
          <br /> 运营专员
        </div>
      ),
      line: 3,
      children: '赵威皓',
    },

    {
      title: '销售专员',
      line: 3,
      children: '冯杰',
    },
  ];
  const dataSource2 = [
    {
      title: '标题1',
      line: 1,
      children: '内容',
    },
    {
      title: '标题2',
      line: 2,
      children: '内容',
    },
    {
      title: '标题3',
      line: 2,
      children: '内容',
    },

    {
      title: '标题3',
      line: 3,
      children: <div>444</div>,
    },

    {
      title: '标题3',
      line: 3,
      children: <div>444</div>,
    },

    {
      title: '标题3',
      line: 3,
      children: <div>444</div>,
    },
    {
      title: '标题3',
      line: 4,
      children: <div>444</div>,
    },

    {
      title: '标题3',
      line: 4,
      children: <div>444</div>,
    },

    {
      title: '标题3',
      line: 4,
      children: <div>444</div>,
    },
    {
      title: '标题3',
      line: 4,
      children: <div>444</div>,
    },
  ];
  return (
    <div>
      <div>基本结构</div>
      <br />
      <DescribeUI dataSource={dataSource1} />
      <br />
      <div>多层结构</div>
      <br />
      <DescribeUI dataSource={dataSource2} />
    </div>
  );
};
export default App;
```

## API 使用文档

🔥TableUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改

<font size=1>

|   属性   | 说明 |   类型    | 默认值 | 是否必传 |
| :------: | ---- | :-------: | :----: | :------: |
|   line   | 行数 |  Number   |   -    |    是    |
|  title   | 标题 |  String   |   -    |    是    |
| children | 内容 | ReactNode |   -    |    是    |
|   flex   | 宽度 |  Number   |   1    |    否    |

</font>
