---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# CellUI-单元格

:::success{title=使用中}
国信灵工后台管理系统-单元格组件
:::

## 代码演示

💎 单行效果

```tsx
import React from 'react';
import { Space } from 'antd';
import { CellUI } from 'sic-ui';

const App: React.FC = () => {
  return (
    <Space wrap>
      <div style={{ width: 100, backgroundColor: '#dff8e7' }}>
        <CellUI line={1}>明月松间照</CellUI>
      </div>
      <div style={{ width: 100, backgroundColor: '#dff8e7' }}>
        <CellUI line={1}>明月松间照，清泉石上流。</CellUI>
      </div>
    </Space>
  );
};
export default App;
```

💎 多行效果

```tsx
import React from 'react';
import { Space } from 'antd';
import { CellUI } from 'sic-ui';

const App: React.FC = () => {
  return (
    <Space wrap>
      <div style={{ width: 100, backgroundColor: '#dff8e7' }}>
        <CellUI line={2}>南村群童欺我老无力</CellUI>
      </div>
      <div style={{ width: 100, backgroundColor: '#dff8e7' }}>
        <CellUI line={2}>床前明月光，疑是地上霜。举头望明月，低头思故乡。</CellUI>
      </div>
    </Space>
  );
};
export default App;
```

## API 使用文档

<font size=1>

|    属性    | 说明                 |   类型    | 默认值 | 是否必传 |
| :--------: | -------------------- | :-------: | :----: | :------: |
|    line    | 行数出现溢出效果     |  Number   |   2    |    否    |
| isShowCopy | 溢出内容是否显示复制 |  Boolean  | false  |    否    |
|  children  | 内容                 | ReactNode |   -    |    否    |

</font>
