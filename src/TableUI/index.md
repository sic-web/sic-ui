---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# TableUI-表格

:::success{title=使用中}
国信灵工后台管理系统-表格组件
:::

## 场景故事

## 代码演示

### 表格组件

💎 表格组件-基本使用

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
      <br />
      蒙层展示
      <TableUI dataSource={dataSource} columns={columns} current={current} pageSize={pageSize} total={total} mask={true} />
      <br />
      空状态展示
      <TableUI dataSource={[]} columns={columns} current={0} pageSize={0} total={0} />
    </div>
  );
};
export default App;
```

### 表格组件（内嵌操作）

💎 表格组件-更多操作

```jsx
import { useState } from 'react';
import { TableUI } from 'sic-ui';

const App: React.FC = () => {
  const columns = [
    { title: '姓名', dataIndex: 'name', key: 'name', width: 200 },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    { title: '电话', dataIndex: 'phone', key: 'phone' },
    {
      title: '操作',
      dataIndex: 'operate',
      key: 'operate',
      render: () => {
        const child = () => {
          return (
            <div>
              <div>查看</div>
              <div>导出</div>
              <div>打印</div>
              <div>转发</div>
            </div>
          );
        };

        return <TableUI.Operate child={child} />;
      },
    },
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
      <TableUI dataSource={dataSource} columns={columns} current={current} pageSize={pageSize} total={total} />
    </div>
  );
};
export default App;
```

💎 表格组件-多行溢出

```jsx
import { useState } from 'react';
import { TableUI, IconUI } from 'sic-ui';
import { Space } from 'antd';

const App: React.FC = () => {
  const columns = [
    {
      title: 'id',
      width: 80,
      dataIndex: 'id',
      key: 'id',
    },
    ,
    {
      title: '内容',
      dataIndex: 'value',
      key: 'value',
      render: (value) => {
        return <TableUI.HideMultipleLines>{value}</TableUI.HideMultipleLines>;
      },
    },
  ];
  const dataSource = [
    {
      id: 1,
      value: [
        '风急天高猿啸哀',
        '驻青沙白鸟飞回',
        '无边落木萧萧下',
        '不尽长江滚滚来',
        '万里悲秋常作客',
        '百年多病独登台',
        '艰难苦恨繁霜鬓',
        '潦倒新停浊酒杯',
      ],
    },
    {
      id: 2,
      value: [
        '风急天高猿啸哀',
        '驻青沙白鸟飞回',
        '无边落木萧萧下',
        '不尽长江滚滚来',
        '万里悲秋常作客',
        '百年多病独登台',
        '艰难苦恨繁霜鬓',
        '潦倒新停浊酒杯',
      ],
    },
  ];
  const current = 1;
  const pageSize = 2;
  const total = 2;
  return (
    <div>
      <TableUI dataSource={dataSource} columns={columns} current={current} pageSize={pageSize} total={total} />
    </div>
  );
};
export default App;
```

💎 表格组件-功能按钮

```jsx
import { useState } from 'react';
import { TableUI, IconUI } from 'sic-ui';
import { Space } from 'antd';

const App: React.FC = () => {
  const columns = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    {
      title: '合同',
      dataIndex: 'contract',
      key: 'contract',
      render: () => {
        return (
          <Space wrap>
            <TableUI.Button type="default" icon={<IconUI name="Download" />}>
              查看
            </TableUI.Button>
            <TableUI.Button type="danger" icon={<IconUI name="Upload" />}>
              重新上传
            </TableUI.Button>
            <TableUI.Button type="disable">禁用</TableUI.Button>
          </Space>
        );
      },
    },
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
      <TableUI dataSource={dataSource} columns={columns} current={current} pageSize={pageSize} total={total} />
    </div>
  );
};
export default App;
```

💎 表格组件-多行拆分

```jsx
import { useState } from 'react';
import { TableUI, IconUI } from 'sic-ui';
import { Space } from 'antd';

const App: React.FC = () => {
  const columns = [
    { title: '姓名', dataIndex: 'name', key: 'name' },
    { title: '年龄', dataIndex: 'age', key: 'age' },
    {
      title: '任务名称',
      dataIndex: 'taskName',
      key: 'taskName',
      render: (_: never, item: any) => {
        const taskNameList = item?.feeRate?.map((i: any) => i.taskName);
        return <TableUI.MultiLine>{taskNameList}</TableUI.MultiLine>;
      },
    },
    {
      title: '费率',
      dataIndex: 'feeRate',
      key: 'feeRate',
      render: (_: never, item: any) => {
        const feeList = item?.feeRate?.map((i: any) => `${i.fee}%`);
        return <TableUI.MultiLine>{feeList}</TableUI.MultiLine>;
      },
    },
    { title: '电话', dataIndex: 'phone', key: 'phone' },
  ];
  const dataSource = [
    {
      name: '刘备',
      age: 22,
      phone: 15692837652,
      feeRate: [
        { fee: 5, taskName: '任务1' },
        { fee: 6, taskName: '任务2' },
      ],
    },
    {
      name: '关羽',
      age: 21,
      phone: 17697787678,
      feeRate: [
        { fee: 5, taskName: '任务1' },
        { fee: 6, taskName: '任务2' },
      ],
    },
    {
      name: '张飞',
      age: 18,
      phone: 12392880611,
      feeRate: [
        { fee: 5, taskName: '任务1' },
        { fee: 6, taskName: '任务2' },
      ],
    },
  ];
  const current = 1;
  const pageSize = 2;
  const total = 3;
  return (
    <div>
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
