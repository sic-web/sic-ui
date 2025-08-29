---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# Image-图片展示组件

💎 基础使用

```tsx
import React from 'react';
import { Space } from 'antd';
import { ImageUI } from 'sic-ui';

const App: React.FC = () => (
  <Space>
    <ImageUI src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={200} height={200} />
    <ImageUI src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={200} height={200} maskType={2} />
    <ImageUI src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={200} height={200} maskType={3} />
  </Space>
);
export default App;
```

💎 相册模式

```tsx
import React from 'react';
import { Space } from 'antd';
import { ImageUI } from 'sic-ui';

const App: React.FC = () => {
  const items = [
    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
  ];

  const src = 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp';

  return (
    <Space>
      <ImageUI.PreviewGroupUI items={items}>
        <ImageUI width={200} src={src} />
      </ImageUI.PreviewGroupUI>

      <ImageUI.PreviewGroupUI items={items}>
        <ImageUI maskType={2} width={200} src={src} />
        <ImageUI maskType={3} width={200} src={src} />
      </ImageUI.PreviewGroupUI>
    </Space>
  );
};
export default App;
```

💎 受控模式

```tsx
import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { ImageUI } from 'sic-ui';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [singleVisible, setSingleVsible] = useState(false);

  const items = [
    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
  ];

  const src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
  return (
    <>
      <Space>
        <Button type="primary" onClick={() => setVisible(true)}>
          预览-多张图片
        </Button>
        <Button type="primary" onClick={() => setSingleVsible(true)}>
          预览-单张图片
        </Button>
      </Space>
      <Space>
        <ImageUI.PreviewGroupUI
          preview={{
            visible,
            onVisibleChange: (value) => setVisible(value),
          }}
          items={items}
        />
      </Space>
      <ImageUI
        style={{ display: 'none' }}
        preview={{
          visible: singleVisible,
          src: src,
          onVisibleChange: (value) => setSingleVsible(value),
        }}
        src={src}
        width={200}
        height={200}
      />
    </>
  );
};
export default App;
```

## API 使用文档

ImageUI 引用 Ant Design 组件库，在使用过程中不做如何侵入性的更改

<font size=1>

|       属性       | 说明                   |        类型         | 默认值 | 是否必传 |
| :--------------: | ---------------------- | :-----------------: | :----: | :------: |
|       src        | 地址                   |       String        |   -    |    是    |
|      width       | 宽度                   |       number        |   -    |    否    |
|      height      | 长度                   |       number        |   -    |    否    |
|     preview      | 是否可预览             |       Boolean       |  true  |    否    |
|     maskType     | 蒙层类型               |       Number        |   1    |    否    |
|    className     | 类名                   |       String        |   -    |    否    |
|      style       | 样式                   | React.CSSProperties |   -    |    否    |
| clickOtherButton | 点击蒙层右边按钮后回调 |      ()=>void       |   -    |    否    |

</font>

PreviewGroupUI

<font size=1>

|   属性   | 说明       |                          类型                           | 默认值 | 是否必传 |
| :------: | ---------- | :-----------------------------------------------------: | :----: | :------: |
|   item   | 预览数组   | string[] \| { src: string, crossOrigin: string, ... }[] |   -    |    是    |
| preview  | 是否可预览 |        Boolean \| PreviewGroupType(可参考 antd)         |  true  |    否    |
| children | 子节点     |                        ReactNode                        |   -    |    否    |

</font>
