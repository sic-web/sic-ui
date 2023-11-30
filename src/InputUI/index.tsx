import React, { useState } from 'react';
import { Button, Form, Input, message, Space } from 'antd';
const InputUI = () => {
  const [form] = Form.useForm();
  const [state, setState] = useState();

  const onFinish = (value) => {
    message.success('Submit success!');
    setState(value);
  };

  const onFinishFailed = () => {
    message.error('Submit failed!');
  };

  // 空格校验
  const validateNumberFormat = (_rule: any, value: string, callback: (error?: string) => void) => {
    if (value && /\s/.test(value)) {
      callback('检测到有空格');
    } else {
      callback();
    }
  };
  return (
    <Form form={form} layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
      <Form.Item
        name="phone"
        label="手机号"
        rules={[
          { required: true, message: '请输入手机号' },
          { validator: validateNumberFormat, warningOnly: true },
        ]}
      >
        <Input placeholder="手机号" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Space>
      </Form.Item>
      {state?.phone}
    </Form>
  );
};
export default InputUI;
