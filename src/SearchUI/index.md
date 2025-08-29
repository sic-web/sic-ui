---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# SearchUI-搜索

💎 From 表单内部使用

```tsx
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

<font size=1>

| 属性 | 说明 | 类型   | 默认值  | 是否必传 |
| :--- | :--- | :----- | :------ | :------- |
| type | 类型 | string | default | 否       |

</font>
