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

<code src="./demo/demoQuick.tsx" ></code>

💎 表格组件-快捷类型

<code src="./demo/demoQuickType.tsx" ></code>

## API 使用文档

### TableUI

<font size=1>

| 属性           | 说明                                   |  类型   | 默认值 | 是否必传 |
| :------------- | :------------------------------------- | :-----: | :----: | :------: |
| dataSource     | 数据内容                               |  Array  |   []   |    是    |
| morphColumns   | 可以变形的表格列数据(推荐)             |  Array  |   []   |    是    |
| initialColumns | 可以变形的表格列数据(弃用)：不够语义化 |  Array  |   []   |    是    |
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
