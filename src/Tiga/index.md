---
nav:
  title: 组件
  path: /components
group:
  title: 业务组件
  order: 2
---

# Tiga（迪迦）-表格

:::success{title=使用中}
国信灵工后台管理系统-表格组件
:::

## 场景故事

## 代码演示

### 表格组件

💎 表格组件-快捷用法

```jsx
import { useState } from 'react';
import { TableUI } from 'sic-ui';

const App: React.FC = () => {
  const columns = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '电话', dataIndex: 'phone', key: 'phone' },
  ];
  const dataSource = [
    { name: '刘备', age: 22, phone: 15692837652 },
    { name: '关羽', age: 21, phone: 17697787678 },
    { name: '张飞', age: 18, phone: 12392880611 },
  ];
  const current = 1;
  const pageSize = 2;
  const total = 3;
  return (
    <div>
      正常展示
      <TableUI dataSource={dataSource} columns={columns} current={current} pageSize={pageSize} total={total} />
    </div>
  );
};
export default App;
```

## API 使用文档

🔥TableUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改

### TableUI

<font size=1>

| 属性       | 说明       |  类型   | 默认值 | 是否必传 |
| :--------- | :--------- | :-----: | :----: | :------: |
| dataSource | 数据内容   |  Array  |   []   |    是    |
| columns    | 每一列的值 |  Array  |   []   |    是    |
| current    | 当前的页数 | Number  |   -    |    是    |
| pageSize   | 当前的页码 | Number  |   -    |    是    |
| total      | 当前的总数 | Number  |   -    |    是    |
| mask       | 蒙版       | Boolean | false  |    否    |

</font>

### TableUI.Operate

注：需要根节点

<font size=1>

| 属性  | 说明 |   类型    |    默认值    | 是否必传 |
| :---- | :--- | :-------: | :----------: | :------: |
| child | 内容 | ReactNode | <div>-</div> |    是    |

</font>

### TableUI.Button

<font size=1>

| 属性 | 说明 |              类型              | 默认值  | 是否必传 |
| :--- | :--- | :----------------------------: | :-----: | :------: |
| type | 类型 | String<default/danger/disable> | default |    是    |

</font>
