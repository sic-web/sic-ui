---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# FilterUI 筛选栏组件

:::info{title=开发中}
国信灵工后台管理系统-加载中组件
:::

## 场景故事

## 代码演示

💎 基础使用

```tsx
import React, { useState, useEffect } from 'react';
import { Form, message } from 'antd';
import { FilterUI } from 'sic-ui';

const App: React.FC = () => {
  const [form] = Form.useForm();

  const [container, setContainer] = useState(null);
  // 状态容器
  const [vessel, setVessel] = useState({
    // 是否批量
    choice: false,
    // 批量的值
    multipleChoice: [],
    // 搜索条件
    filterParams: {
      Status: 1,
    },
    // 表格设置状态
    tableSetStatus: false,
    // 更多筛选的状态
    moreFilters: false,
  });
  const projectStatusOptions = [
    { value: 1, label: '待支付' },
    { value: 2, label: '审核中' },
    { value: 3, label: '发放中' },
    { value: 4, label: '已发放' },
    { value: 5, label: '已取消' },
    { value: 6, label: '驳回' },
  ];
  const onValuesChange = (changedValues: any, allValues: any) => {
    setVessel({
      ...vessel,
      filterParams: {
        ...allValues,
        dateStart: allValues?.submitTime?.[0] ?? undefined,
        dateEnd: allValues?.submitTime?.[1] ?? undefined,
      },
    });
  };
  const filterOptions = [
    { type: 'search', label: '企业名称', key: 'companyName1' },
    { type: 'datePicker', label: '发放日期', key: 'transTime1' },
    { type: 'select', label: '状态', key: 'Status1', options: projectStatusOptions },
    { type: 'search', label: '企业名称', key: 'companyName2' },
    { type: 'datePicker', label: '发放日期', key: 'transTime2' },
    { type: 'select', label: '状态', key: 'Status2', options: projectStatusOptions, isNotDelete: true, renderProps: {} },
    { type: 'search', label: '企业名称', key: 'companyName' },
    { type: 'datePicker', label: '发放日期', key: 'transTime' },
    { type: 'select', label: '状态', key: 'Status', options: projectStatusOptions },
  ];
  const clickReset = () => {
    setVessel({ ...vessel, filterParams: {} });
  };
  return (
    <div ref={setContainer}>
      <FilterUI
        form={form}
        filterOptions={filterOptions}
        filterParams={vessel?.filterParams ?? {}}
        moreFilters={vessel?.moreFilters}
        setMoreFilters={(value) => setVessel({ ...vessel, moreFilters: value })}
        onValuesChange={onValuesChange}
        clickReset={clickReset}
        container={container}
      />
    </div>
  );
};
export default App;
```

## API 使用文档

<font size=1>

|      属性      | 说明                   |   类型    | 默认值 | 是否必传 |
| :------------: | ---------------------- | :-------: | :----: | :------: |
|      form      | 表单实例               | ReactNode |   -    |    是    |
| filterOptions  | 搜索组件配置           |           |   -    |    是    |
|  filterParams  | 筛选框的字段和值       |           |   -    |    是    |
| setMoreFilters | 控制更多筛选框的状态   |           |   -    |    是    |
| onValuesChange | 表单值变化             |           |   -    |    是    |
|   clickReset   | 表单重置事件           |           |   -    |    是    |
|   container    | 滚动固定指定的父级元素 |           |   -    |    是    |

</font>
