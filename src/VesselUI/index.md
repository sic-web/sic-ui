---
nav:
  title: 组件
  path: /components
group:
  title: 业务组件
  order: 2
---

# VesselUI-基础容器

:::success{title=使用中}
国信灵工后台管理系统-基础容器组件
:::

## 场景故事

## 代码演示

### 表格组件

💎 基本用法

```tsx
import { VesselUI } from 'sic-ui';
import { author_strict } from 'sic-util';

const vesselConfig = {
  pageName: 'test',
  listType: 'list',
  RenderHeader: 'filter',
  RenderOperate: () => <div>我是操作栏组件</div>,
  RenderChildren: () => <div>我是内容区组件</div>,
  filterOptions: [
    { type: 'search', label: '姓名、手机号', key: 'searchField' },
    { type: 'datePicker', label: '创建日期', key: 'createTime', startKey: 'createTimeStart', endKey: 'createTimeEnd' },
  ],
};
const App: React.FC = () => {
  return <VesselUI {...vesselConfig} />;
};

export default App;
```

## API 使用文档

🔥VesselUI 基础容器 一般用于 上筛选区域 中操作区域 下列表区域 布局容器

### VesselUI

<font size=1>

| 属性                | 说明                                               | 类型 | 默认值 | 是否必传 |
| :------------------ | :------------------------------------------------- | :--: | :----: | :------: |
| limit               | 权限                                               |      |        |          |
| initialTableData    | 初始表格配置                                       |      |        |          |
| initialFilterParams | 初始筛选配置                                       |      |        |          |
| listType            | 请求列表携带的 type 字段 列表传 list 导出传 export |      |        |          |
| getTableDataFn      | 获取数据的方法                                     |      |        |
| RenderHeader        | 返回筛选区域组件                                   |      |        |          |
| RenderOperate       | 返回操作区域组件                                   |      |        |          |
| RenderChildren      | 返回内容区域组件                                   |      |        |          |
| filterOptions       | 筛选组件配置                                       |      |        |          |

</font>
