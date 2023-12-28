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
import { useState, useEffect } from 'react';
import { Tiga, LoadingUI } from 'sic-ui';

const App: React.FC = () => {
  const [data, setData] = useState();
  const columns1 = [
    { key: 'name', name: '姓名' },
    { key: 'age', name: '年龄' },
    { key: 'phone', name: '电话' },
  ];
  const columns2 = [
    { key: 'name', name: '姓名', sort: 1 },
    { key: 'age', name: '年龄', sort: 4 },
    { key: 'phone', name: '电话', sort: 3 },
  ];
  const columns3 = [
    { key: 'name', name: '姓名', sort: 1 },
    { key: 'age', name: '年龄', sort: 4 },
    { key: 'phone', name: '电话', sort: 3, selected: false },
    { key: 'fighting', name: '战力', sort: 2 },
  ];
  const dataSource = [
    { name: '刘备', age: 22, phone: 15692837652, fighting: 6 },
    { name: '关羽', age: 21, phone: 17697787678, fighting: 9 },
    { name: '张飞', age: 18, phone: 12392880611, fighting: 7 },
    { name: '赵云', age: 19, phone: 12392880611, fighting: 8 },
  ];
  const current = 1;
  const pageSize = 10;
  const total = 4;
  const tableParams = { dataSource: data, pageSize: pageSize, current, total };
  useEffect(() => {
    setTimeout(() => {
      setData(dataSource);
    }, 2000);
  }, []);
  return (
    <div>
      基础模式
      <LoadingUI isShowLoading={!data}>
        <Tiga rowKey="name" tableHeader={columns1} {...tableParams} />
      </LoadingUI>
      带有排序
      <Tiga rowKey="name" tableHeader={columns2} {...tableParams} />
      带有禁用
      <Tiga rowKey="name" tableHeader={columns3} {...tableParams} />
    </div>
  );
};
export default App;
```

## API 使用文档

🔥TableUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改

### TableUI

<font size=1>

| 属性           | 说明                                   |  类型   | 默认值 | 是否必传 |
| :------------- | :------------------------------------- | :-----: | :----: | :------: |
| dataSource     | 数据内容                               |  Array  |   []   |    是    |
| morphColumns   | 可以变形的表格列数据(推荐)             |  Array  |   []   |    是    |
| initialColumns | 可以变形的表格列数据(弃用)：不够语义化 |  Array  |   []   |    是    |
| morphColumns   | 可以变形的表格列数据                   |  Array  |   []   |    是    |
| rowKey         | 每一行的标识                           | String  |   -    |    是    |
| mask           | 蒙层                                   | Boolean | false  |    否    |
| tableData      | 表格数据，高度集成当前项目（推荐）     | Object  |   {}   |    否    |
| oem            | oem 相关的配置项                       | Object  |   {}   |    否    |

</font>

### tableHeader

注：传入表头的属性，交给 Tiga 做处理

<font size=1>

| 属性     | 说明                   |  类型   | 默认值 | 是否必传 |
| :------- | :--------------------- | :-----: | :----: | :------: |
| key      | 每一列的标识           | String  |   -    |    是    |
| name     | 表头，不传则不展示     | String  |   -    |    是    |
| selected | 配合当前的页面是否展示 | Boolean |  true  |    否    |
| sort     | 排序字段               | Number  |   -    |    否    |
| render   | 渲染特殊的列           |   Fun   | CellUI |    否    |

</font>
