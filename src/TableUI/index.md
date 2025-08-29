---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# TableUI-表格

💎 基础使用

```tsx
import React from 'react';
import { TableUI } from 'sic-ui';

const tableData = {
  records: [
    { id: 1, name: '张三', amount: 12345, percent: 0.12 },
    { id: 2, name: '李四', amount: 67890, percent: 0.45 },
  ],
  current: 1,
  size: 20,
  total: 2,
};

const tableHeader = [
  { key: 'name', name: '姓名' },
  { key: 'amount', name: '金额', type: 'amount' },
  { key: 'percent', name: '百分比', type: 'percent' },
];

export default () => <TableUI rowKey="id" tableData={tableData} tableHeader={tableHeader} />;
```

💎 列类型示例（金额、百分比、Tag）

```tsx
import React from 'react';
import { TableUI } from 'sic-ui';

const tableData2 = {
  records: [
    { id: 1, name: '张三', status: 'success', amount: 12345, percent: 0.12 },
    { id: 2, name: '李四', status: 'error', amount: 67890, percent: 0.45 },
  ],
};

const tableHeader2 = [
  { key: 'name', name: '姓名' },
  { key: 'amount', name: '金额', type: 'amount' },
  { key: 'percent', name: '百分比', type: 'percent' },
  {
    key: 'status',
    name: '状态',
    type: 'tag',
    options: [
      { label: '成功', value: 'success', color: 'green' },
      { label: '失败', value: 'error', color: 'red' },
    ],
  },
];

export default () => <TableUI rowKey="id" tableData={tableData2} tableHeader={tableHeader2} />;
```

💎 加载中

```tsx
import React, { useState } from 'react';
import { TableUI } from 'sic-ui';

const tableData3 = {
  records: [
    { id: 1, name: '张三' },
    { id: 2, name: '李四' },
  ],
};

export default () => {
  const [vessel, setVessel] = useState({
    multipleChoice: [],
    choice: true,
  });

  const tableHeader3 = [{ key: 'name', name: '姓名' }];

  return <TableUI rowKey="id" tableData={tableData3} tableHeader={tableHeader3} loading />;
};
```

💎 简易分页

```tsx
import React, { useState } from 'react';
import { TableUI } from 'sic-ui';

const tableData4 = {
  records: Array.from({ length: 20 }).map((_, i) => ({ id: i + 1, name: `用户${i + 1}` })),
  offset: 0,
  last: false,
  next: true,
  total: 100,
};

export default () => {
  const [vessel, setVessel] = useState({ filterParams: { offset: 0, size: 20 } });

  return (
    <TableUI
      rowKey="id"
      tableData={tableData4}
      tableHeader={[{ key: 'name', name: '姓名' }]}
      simplePagination
      vessel={vessel}
      setVessel={setVessel}
    />
  );
};
```

## API 使用文档

| 属性                    | 说明               | 类型                                                                                                                | 默认值                        | 是否必传 |
| :---------------------- | :----------------- | :------------------------------------------------------------------------------------------------------------------ | :---------------------------- | :------- |
| rowKey                  | 行唯一标识         | `string` \| `(record, index) => string`                                                                             | -                             | 是       |
| tableData               | 表格数据和分页信息 | `{ records: any[], current: number, size: number, total: number, offset?: number, last?: boolean, next?: boolean }` | -                             | 是       |
| tableHeader             | 表头配置           | `TableUI_ColumnType[]`                                                                                              | -                             | 是       |
| customColumns           | 自定义列配置       | `TableUI_ColumnType[]`                                                                                              | -                             | 否       |
| dataSource              | 数据源备用         | `any[]`                                                                                                             | -                             | 否       |
| simplePagination        | 是否使用简易分页   | `boolean`                                                                                                           | false                         | 否       |
| pageSizeOptions         | 分页大小选项       | `number[]`                                                                                                          | [20,30,50,100]                | 否       |
| mask                    | 表格遮罩           | `boolean`                                                                                                           | false                         | 否       |
| loading                 | 加载状态           | `boolean`                                                                                                           | false                         | 否       |
| headerPadding           | 表头内边距         | `boolean`                                                                                                           | false                         | 否       |
| cellPadding             | 单元格内边距       | `boolean`                                                                                                           | false                         | 否       |
| onClickSimplePagination | 简易分页事件       | `(type: 'last' \| 'next') => void`                                                                                  | -                             | 否       |
| CustomLoadingUI         | 自定义加载组件     | `ReactNode`                                                                                                         | `<LoadingUI isShowLoading />` | 否       |
| CustomEmptyUI           | 自定义空组件       | `ReactNode`                                                                                                         | `<EmptyUI />`                 | 否       |
| vessel                  | 外部状态容器       | `TableUI_VesselType`                                                                                                | -                             | 否       |
| setVessel               | 更新 vessel        | `(v: TableUI_VesselType) => void`                                                                                   | -                             | 否       |

## 列配置

| 属性           | 说明                         | 类型                                                                |
| :------------- | :--------------------------- | :------------------------------------------------------------------ |
| key            | 列唯一标识                   | `string`                                                            |
| name           | 列显示名称                   | `string`                                                            |
| type           | 列类型：amount、percent、tag | `` `'amount' \| 'percent' \| 'tag'` ``                              |
| options        | type 为 tag 时的选项         | `Array<{ label: string; value: string \| number; color?: string }>` |
| width          | 列宽                         | `number`                                                            |
| selected       | 是否显示列                   | `boolean`                                                           |
| renderTitle    | 自定义表头                   | `React.ReactNode`                                                   |
| render         | 自定义单元格                 | `(value: any, record: any, index: number) => React.ReactNode`       |
| cellClassName  | 单元格类名                   | `string`                                                            |
| titleClassName | 表头类名                     | `string`                                                            |
