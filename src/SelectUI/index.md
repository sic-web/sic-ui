---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# SelectUI-下拉框

:::info{title=开发中}
下拉框组件
:::

## 场景故事

💎 基础使用

```tsx
import { SelectUI } from 'sic-ui';

export default () => (
  <>
    <SelectUI
      placeholder="请选择"
      options={[
        { value: 1, label: '开启' },
        { value: 2, label: '关闭' },
      ]}
    />
    <SelectUI
      placeholder="请选择"
      copy={true}
      options={[
        { value: 1, label: '开启' },
        { value: 2, label: '关闭' },
      ]}
    />
  </>
);
```

## API 使用文档

<font size=1>

| 属性        | 说明       | 类型                                            | 默认值 | 是否必传 |
| :---------- | :--------- | :---------------------------------------------- | :----- | :------- |
| placeholder | 提示词     | string                                          |        | 否       |
| options     | 下拉框的值 | {value:(number string),label:(number string)}[] | []     | 是       |

</font>
