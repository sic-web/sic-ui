---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# NotificationUI 消息提醒组件

:::success{title=使用中}
国信灵工后台管理系统-消息提醒组件
:::

## 场景故事

## 代码演示

💎 消息提醒组件

```jsx
import React, { useState } from 'react';
import { Space } from 'antd';
import { NotificationUI, ButtonUI } from 'sic-ui';

const App: React.FC = () => {
  // 提示消息
  const [notmsg, setNotmsg] = useState();

  return (
    <div>
      <Space>
        <ButtonUI
          onClick={() => {
            setNotmsg({ type: 'success', description: '成功提示消息' });
          }}
        >
          成功
        </ButtonUI>
        <ButtonUI
          onClick={() => {
            setNotmsg({ type: 'error', description: '失败提示消息' });
          }}
        >
          失败
        </ButtonUI>
        <ButtonUI
          onClick={() => {
            setNotmsg({ type: 'info', description: '提示消息' });
          }}
        >
          提示
        </ButtonUI>
        <ButtonUI
          onClick={() => {
            setNotmsg({ type: 'warning', description: '警告提示消息' });
          }}
        >
          警告
        </ButtonUI>
      </Space>
      <NotificationUI notmsg={notmsg} />
    </div>
  );
};
export default App;
```

## API 使用文档

🔥TableUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改

<font size=1>

|  属性   | 说明     |  类型  | 默认值 | 是否必传 |
| :-----: | -------- | :----: | :----: | :------: |
| notimsg | 提示消息 | Object |   -    |    是    |

### notimsg 属性

|    属性     | 说明     |            类型            |  默认值  | 是否必传 |
| :---------: | -------- | :------------------------: | :------: | :------: |
|    type     | 类型     | success error info warning |    -     |    是    |
| description | 提示消息 |           String           |    -     |    是    |
|   message   | 提示消息 |           String           | 系统提示 |    否    |

</font>
