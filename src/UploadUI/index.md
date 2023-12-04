---
nav:
  title: 组件
  path: /components
group:
  title: 业务组件
  order: 2
---

# UploadUI-上传

:::info{title=开发中}
国信灵工后台管理系统-上传组件
:::

## 场景故事

## 代码演示

💎 基础使用

```jsx
import { UploadUI } from 'sic-ui';

export default () => (
  <UploadUI.File
    placeholder="请选择"
    options={[
      { value: 1, label: '开启' },
      { value: 2, label: '关闭' },
    ]}
  />
);
```

## API 使用文档

🔥TableUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改

<font size=1>

| 属性        | 说明       | 类型                                            | 默认值 | 是否必传 |
| :---------- | :--------- | :---------------------------------------------- | :----- | :------- |
| placeholder | 提示词     | string                                          |        | 否       |
| options     | 下拉框的值 | {value:(number string),label:(number string)}[] | []     | 是       |

</font>
