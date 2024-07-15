---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# MessageUI 消息组件

:::info{title=开发中}
国信灵工后台管理系统-消息组件
:::

## 场景故事

## 代码演示

💎 基础使用

```tsx
import React, { useState } from 'react';
import { MessageUI, ButtonUI, IconUI } from 'sic-ui';
import { Space, message } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

const App: React.FC = () => {
  const showMessageSuccess = () => {
    MessageUI.success('成功');
  };
  const showMessageError = () => {
    MessageUI.error('失败');
  };
  const showMessageInfo = () => {
    MessageUI.info({
      content: '默认',
      icon: <ExclamationCircleFilled style={{ color: '#fff' }} />,
    });
    // MessageUI.info('默认');
  };

  const showMessageWarning = () => {
    MessageUI.warning('警告');
  };
  const showMessageLoading = () => {
    MessageUI.loading('加载');
  };

  return (
    <Space>
      <ButtonUI onClick={showMessageSuccess}>提示(成功)</ButtonUI>
      <ButtonUI onClick={showMessageError}>提示(失败)</ButtonUI>
      <ButtonUI onClick={showMessageInfo}>提示(默认)</ButtonUI>
      <ButtonUI onClick={showMessageWarning}>提示(警告)</ButtonUI>
      <ButtonUI onClick={showMessageLoading}>提示(加载)</ButtonUI>
    </Space>
  );
};
export default App;
```

## API 使用文档

🔥MessageUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改

组件提供了一些静态方法，使用方式和参数如下：

- message.success(content, [duration], onClose)
- message.error(content, [duration], onClose)
- message.info(content, [duration], onClose)
- message.warning(content, [duration], onClose)
- message.loading(content, [duration], onClose)

<font size=1>

|   属性   | 说明                                        |   类型   |       默认值       | 是否必传 |
| :------: | ------------------------------------------- | :------: | :----------------: | :------: |
| content  | 提示内容                                    |  Number  | ReactNode / config |    否    |
| duration | 自动关闭的延时，单位秒。设为 0 时不自动关闭 |  number  |         3s         |    否    |
| onClose  | 关闭时触发的回调函数                        | function |         -          |    否    |

</font>
