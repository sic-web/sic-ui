---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# MultiLineUI-多行溢出

:::success{title=使用中}
国信灵工后台管理系统-多行溢出
:::

## 代码演示

💎 多行效果

```jsx
import React from 'react';
import { Space } from 'antd';
import { MultiLineUI } from 'sic-ui';

const App: React.FC = () => {
  return (
    <Space wrap size="middle">
      <div style={{ backgroundColor: '#dff8e7', padding: '0 4px' }}>
        <MultiLineUI line={2}>
          {[
            '风急天高猿啸哀',
            '驻青沙白鸟飞回',
            '无边落木萧萧下',
            '不尽长江滚滚来',
            '万里悲秋常作客',
            '百年多病独登台',
            '艰难苦恨繁霜鬓',
            '潦倒新停浊酒杯',
          ]}
        </MultiLineUI>
      </div>
      <div style={{ backgroundColor: '#dff8e7', padding: '0 4px' }}>
        <MultiLineUI line={2} moreShowLine={4}>
          {[
            '风急天高猿啸哀',
            '驻青沙白鸟飞回',
            '无边落木萧萧下',
            '不尽长江滚滚来',
            '万里悲秋常作客',
            '百年多病独登台',
            '艰难苦恨繁霜鬓',
            '潦倒新停浊酒杯',
          ]}
        </MultiLineUI>
      </div>
    </Space>
  );
};
export default App;
```

## API 使用文档

<font size=1>

|     属性     | 说明                 |   类型    | 默认值 | 是否必传 |
| :----------: | -------------------- | :-------: | :----: | :------: |
|     line     | 行数出现溢出效果     |  Number   |   2    |    否    |
| moreShowLine | 溢出内容最多展示几行 |  Number   |   -    |    否    |
|   children   | 内容                 | ReactNode |   -    |    否    |
|  className   | 类名                 |  String   |   -    |    否    |

</font>
