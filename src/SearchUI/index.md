---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# SearchUI-搜索

:::success{title=使用中}
国信灵工后台管理系统-搜索组件
:::

## 场景故事

## 代码演示

💎 From 表单内部使用

```jsx
import { useState } from 'react';
import { Form } from 'antd';
import { SearchUI } from 'sic-ui';

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [formValue, setFormValue] = useState();

  const onValuesChange = (_: any, allValues: any) => {
    setFormValue({ ...formValue, ...allValues });
  };

  return (
    <div>
      <Form form={form} onValuesChange={onValuesChange}>
        <Form.Item name="searchField">
          <SearchUI placeholder="请输入企业名称、编号" />
        </Form.Item>
      </Form>
      <div>搜索值： {formValue?.searchField}</div>
    </div>
  );
};
export default App;
```

## API 使用文档

🔥TableUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改

<font size=1>

| 属性 | 说明 | 类型   | 默认值  | 是否必传 |
| :--- | :--- | :----- | :------ | :------- |
| type | 类型 | string | default | 否       |

</font>
