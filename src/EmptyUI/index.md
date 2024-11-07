---
nav:
  title: 组件
  path: /components
group:
  title: 基础组件
  order: 2
---

# EmptyUI-空状态

:::success{title=使用中}
国信灵工后台管理系统-空状态组件
:::

## 场景故事

## 代码演示

💎 基础使用

```tsx
import { Space, EmptyUI, ImageUI } from 'sic-ui';

export default () => (
  <Space>
    <EmptyUI />
    <EmptyUI
      image={<ImageUI src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={177} height={144} />}
    />
    <EmptyUI text="暂无数据" />
  </Space>
);
```

## API 使用文档

EmptyUI

<font size=1>

|   属性    | 说明 |  类型  | 默认值 | 是否必传 |
| :-------: | ---- | :----: | :----: | :------: |
| className | 类名 | String |   -    |    否    |
|   text    | 文案 | String |   -    |    否    |

</font>
