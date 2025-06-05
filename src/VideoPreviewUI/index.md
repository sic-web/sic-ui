---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# VideoPreviewUI-视频预览图组件

:::success{title=使用中}
国信灵工后台管理系统-视频预览图组件
:::

## 场景故事

## 代码演示

💎 基础使用
一般用于待播放的视频缩略图预览

```tsx
import { useState } from 'react';
import { VideoPreviewUI } from 'sic-ui';

const App: React.FC = () => {
  return (
    <div style={{ width: '400px', height: '200px' }}>
      <VideoPreviewUI videoUrl="https://file.stlg.com.cn/web_file/C%E7%AB%AF%E7%94%A8%E6%88%B7%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B.mp4" />
    </div>
  );
};
export default App;
```

## API 使用文档

<font size=1>

| 属性      | 说明         | 类型                                                       | 默认值       | 是否必传 |
| :-------- | :----------- | :--------------------------------------------------------- | :----------- | :------- |
| videoUrl  | 视频地址     | string                                                     | ""           | 是       |
| frameTime | 视频帧时间点 | number                                                     | 0.1          | 否       |
| fallback  | 失败占位图   | string                                                     | ""           | 否       |
| alt       | 图片描述     | string                                                     | "视频预览图" | 否       |
| onClick   | 点击事件     | (event: React.MouseEvent<HTMLElement, MouseEvent>) => void | -            | 否       |

</font>
