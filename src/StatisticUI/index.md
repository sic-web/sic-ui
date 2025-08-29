---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# StatisticUI-统计数值

💎 基础使用

```tsx
import { useState } from 'react';
import { Space } from 'antd';
import { StatisticUI } from 'sic-ui';

const App: React.FC = () => {
  const Items = [
    // 合法数字
    { id: 1, label: '总计', value: 0.12, type: 'primary', suffix: '笔' },
    { id: 2, label: '实发', value: '123.00', type: 'primary' },
    { id: 3, label: '服务费', value: '12%', type: 3, rawValue: true },
    { id: 4, label: '浮点数', value: 123.456, type: 'primary' },
    { id: 5, label: '整数', value: 100, type: 'primary' },
    { id: 6, label: '负数', value: -99.99, type: 'primary' },
    { id: 7, label: '科学计数法', value: '1.23e4', type: 'primary' },

    // 字符串格式的数字
    { id: 8, label: '带空格', value: '  200.00  ', type: 'primary' },
    { id: 9, label: '小数点后无数字', value: '123.', type: 'primary' },
    { id: 10, label: '纯小数', value: '.45', type: 'primary' },
    { id: 11, label: '长小数', value: '123.456789', type: 'primary' },
    { id: 12, label: '多0结尾', value: '123.000000', type: 'primary' },

    // 非法数字
    { id: 13, label: '中文', value: '你好', type: 'primary' },
    { id: 14, label: '百分号无数字', value: '%', type: 'primary' },
    { id: 15, label: '百分号带字母', value: '12%abc', type: 'primary' },
    { id: 16, label: '非法字符', value: 'abc123', type: 'primary' },
    { id: 17, label: '多个小数点', value: '123.45.67', type: 'primary' },
    { id: 18, label: '特殊符号', value: '$123', type: 'primary' },
    { id: 19, label: 'null 值', value: null, type: 'primary' },
    { id: 20, label: 'undefined', value: undefined, type: 'primary' },
    { id: 21, label: 'NaN', value: NaN, type: 'primary' },
    { id: 22, label: 'Infinity', value: Infinity, type: 'primary' },
    { id: 23, label: '布尔值', value: true, type: 'primary' },
    { id: 24, label: '对象', value: {}, type: 'primary' },
    { id: 25, label: '数组', value: [], type: 'primary' },

    // 手动指定 decimals 的情况
    { id: 26, label: '强制两位小数', value: 123, decimals: 2, type: 'primary' },
    { id: 27, label: '强制零位小数', value: '123.45', decimals: 0, type: 'primary' },
    { id: 28, label: 'rawValue 显示原始值', value: '123.00', rawValue: true, type: 'primary' },
  ];
  return <StatisticUI items={Items}></StatisticUI>;
};
export default App;
```

💎 高精度

```tsx
import { useState } from 'react';
import { Space } from 'antd';
import { StatisticUI } from 'sic-ui';

const App: React.FC = () => {
  const Items = [
    // 精度丢失案例
    { id: 4, label: '0.1', value: 0.1, type: 'primary' }, // 0.1 → 1 位小数
    { id: 5, label: '0.2', value: 0.2, type: 'primary' }, // 0.2 → 1 位小数
    { id: 6, label: '0.2+0.1', value: 0.3, type: 'primary' }, // 0.30000000000000004 → 16 位小数
    { id: 7, label: '0.7+0.1', value: 0.9, type: 'primary' }, // 0.7999999999999999 → 16 位小数
    { id: 8, label: '1.0-0.9', value: 0.1, type: 'primary' }, // 0.09999999999999998 → 17 位小数
    { id: 9, label: '极大数字符串', value: '999999999999999', type: 'primary' }, // 转成 number 后变为 10000000000000000
    { id: 10, label: '极小数字符串', value: '0.0000000000000001', type: 'primary' }, // 转成 number 后仍保留
    { id: 11, label: '科学计数法', value: '1.23e-10', type: 'primary' }, // 小数部分识别为 12 位
    { id: 12, label: '长浮点数', value: 0.1234567890123456789, type: 'primary' }, // 多余位被截断
  ];
  return <StatisticUI items={Items}></StatisticUI>;
};
export default App;
```

## API 使用文档

<font size=1>

| 属性      | 说明                   | 类型   | 默认值 | 是否必传 |
| :-------- | :--------------------- | :----- | :----- | :------- |
| className | 类名                   | string |        | 否       |
| duration  | 动画时间 传 0.1 无动画 | number | 2      | 否       |

</font>

### items 数组字段说明

<font size="1">

| 属性      | 说明             | 类型                          | 默认值   | 是否必传 |
| :-------- | :--------------- | :---------------------------- | :------- | :------- |
| id        | 唯一标识         | number                        | -        | 是       |
| label     | 标签名           | string                        | -        | 否       |
| value     | 显示数值         | number \| string              | -        | 否       |
| type      | Tag 颜色类型     | string \| number \| 'primary' | -        | 否       |
| colon     | 是否显示冒号     | boolean                       | `true`   | 否       |
| suffix    | 单位后缀         | string                        | -        | 否       |
| decimals  | 小数位数         | number                        | 自动识别 | 否       |
| separator | 千分位符号       | string                        | ``       | 否       |
| rawValue  | 是否显示原始数据 | boolean                       | `false`  | 否       |

</font>
