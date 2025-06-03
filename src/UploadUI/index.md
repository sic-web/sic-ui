---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# UploadUI-上传组件

:::success{title=使用中}
国信灵工后台管理系统-上传组件
:::

## 场景故事

## 代码演示

💎 基础使用
上传组件

```tsx
import { UploadUI, TextUI } from 'sic-ui';

const App: React.FC = () => {
  return (
    <UploadUI>
      <TextUI>点击上传</TextUI>
    </UploadUI>
  );
};
export default App;
```

💎 身份证、营业执照上传

```tsx
import { UploadUI } from 'sic-ui';

const App: React.FC = () => {
  return <UploadUI mode={2} backgroundImage="https://file.stlg.com.cn/web_assets/license.png" />;
};
export default App;
```

💎 拖拽上传

```tsx
import { UploadUI } from 'sic-ui';

const App: React.FC = () => {
  return <UploadUI mode={3} />;
};
export default App;
```

💎 照片墙

```tsx
import { UploadUI } from 'sic-ui';

const App: React.FC = () => {
  return <UploadUI mode={4} />;
};
export default App;
```

💎 照片墙 带 示例图

```tsx
import { UploadUI } from 'sic-ui';

const App: React.FC = () => {
  return <UploadUI mode={5} title="示例图" backgroundImage="https://file.stlg.com.cn/web_assets/logo_black.png" />;
};
export default App;
```

💎 列表按钮上传

```tsx
import { UploadUI } from 'sic-ui';

const App: React.FC = () => {
  return <UploadUI mode={6} />;
};
export default App;
```
