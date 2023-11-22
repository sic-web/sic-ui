---
nav:
  title: 组件
  path: /components
group:
  title: 全局预览
  order: 1
---

# IconUI-图标

:::success{title=使用中}
国信灵工后台管理系统-图标组件
:::

地址：[IconPark](https://iconpark.oceanengine.com/official)

## 代码演示

💎 自研图标

```jsx
import React from 'react';
import { Space } from 'antd';
import { IconUI } from 'sic-ui';

const App: React.FC = () => (
  <Space wrap>
    <IconUI name="Minsheng" width={24} height={24} />
    <IconUI name="Pingan" width={24} height={24} />
    <IconUI name="Iconwx" width={24} height={24} />
    <IconUI name="Iconzfb" width={24} height={24} />
    <IconUI name="Zhaoshang" width={24} height={24} />
    <IconUI name="SwitchOff" width={24} height={24} />
    <IconUI name="SwitchOn" width={24} height={24} />
    <IconUI name="Warning" width={24} height={24} />
    <IconUI name="Pdf" width={24} height={24} />
  </Space>
);
export default App;
```

💎 引用 iconpark 的图标

```jsx
import React from 'react';
import { Space } from 'antd';
import { IconUI } from 'sic-ui';

const App: React.FC = () => (
  <Space wrap>
    <IconUI name="ListTwo" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Export" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Return" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="AddOne" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="SwitchButton" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Audit" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Clear" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Download" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Female" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Male" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="PreviewOpen" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Upload" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Delete" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Setting" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Excel" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="FilePdf" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="BackgroundColor" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Home" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="ChartPieOne" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="BookmarkOne" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="DataArrival" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="TicketsTwo" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Bank" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="ShieldAdd" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Swipe" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="SettingTwo" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="DataFour" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Currency" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="CheckOne" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="CloseOne" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="UTurnLeft" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Caution" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="RotateOne" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Edit" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Check" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Close" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="UserBusiness" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="ArrowRight" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="More" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="DeleteOne" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Search" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Help" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Attention" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="FileAddition" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="CooperativeHandshake" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="FileSuccess" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Right" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Peoples" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="UserToUserTransmission" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="PeoplePlus" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Consume" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
  </Space>
);
export default App;
```
