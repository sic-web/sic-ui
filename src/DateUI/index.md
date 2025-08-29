---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# DateUI-日期选择器

💎 基础功能

```tsx
import React, { useState } from 'react';
import { DateUI } from 'sic-ui';
import dayjs from 'dayjs';

const App: React.FC = () => {
  const [value, setValue] = useState();
  const [valueRange, setValueRange] = useState();
  const change = (e) => {
    setValue(e);
  };

  const changeRange = (e) => {
    setValueRange(e);
  };
  return (
    <div>
      <DateUI value={value} onChange={change} />
      <br />
      <br />
      <DateUI showRange={true} value={valueRange} onChange={changeRange} />
      <br />
      <br />
      <div>{JSON.stringify(value)}</div>
      <div>{JSON.stringify(valueRange)}</div>
    </div>
  );
};
export default App;
```

## API 使用文档

<font size=1>

|   属性    | 说明     |  类型   |    默认值    | 是否必传 |
| :-------: | -------- | :-----: | :----------: | :------: |
|   value   | 值       | Arrary  |   ["",""]    |    是    |
| onChange  | 变化     |   Fun   |      -       |    是    |
|  format   | 格式     | String  | 'YYYY-MM-DD' |    否    |
| showRange | 日期范围 | Boolean |    false     |    否    |

</font>
