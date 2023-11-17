---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# SwitchUI-开关

:::success{title=使用中}
国信灵工后台管理系统-开关组件
:::

## 场景故事

## 代码演示

💎 基础使用

```jsx
import { useState } from 'react';
import { Space } from 'antd';
import { SwitchUI } from 'sic-ui';

const App: React.FC = () => {
  const [state1, setState1] = useState(1);
  const [state2, setState2] = useState(1);
  return (
    <Space>
      <SwitchUI checked={state1 === 1 ? true : false} onClick={() => setState1(state1 === 1 ? 2 : 1)} />
      <SwitchUI
        checkedChildren="启用"
        unCheckedChildren="禁用"
        checked={state2 === 1 ? true : false}
        onClick={() => setState2(state2 === 1 ? 2 : 1)}
      />
    </Space>
  );
};
export default App;
```

💎 From 表单内部使用

```jsx
import { useState } from 'react';
import { Form } from 'antd';
import { SwitchUI } from 'sic-ui';
const initialValues = {
  status: 1,
};
const App: React.FC = () => {
  const [form] = Form.useForm();
  const [formValue, setFormValue] = useState();

  const onFinish = (value: any) => {
    setFormValue({ ...formValue, ...value });
  };

  return (
    <Form onFinish={onFinish} form={form} initialValues={initialValues}>
      <Form.Item label="是否启用" name="status">
        <SwitchUI />
      </Form.Item>
    </Form>
  );
};
export default App;
```

## API 使用文档

🔥TableUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改

<font size=1>

| 属性  | 说明 | 类型   | 默认值 | 是否必传 |
| :---- | :--- | :----- | :----: | :------- |
| value | 值   | number |   -    | 是       |

</font>
