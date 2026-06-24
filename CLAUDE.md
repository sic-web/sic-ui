# CLAUDE.md — sic-ui 项目指南

## 项目概览

| 项目 | 说明 |
|------|------|
| 名称 | sic-ui |
| 版本 | 0.9.2 |
| 描述 | 基于 antd 二次封装的 React UI 组件库 |
| 框架 | React 18 + TypeScript |
| UI 基础 | antd ^5.27.3 |
| 构建工具 | father ^4.1.0 (ESM 输出到 dist/) |
| 文档工具 | dumi ^2.4.13 |
| 样式方案 | SCSS（组件级隔离） |
| 包管理 | npm，peerDependencies 为 react/react-dom >=16.9.0 |

### 核心依赖

| 依赖 | 用途 |
|------|------|
| antd ^5.27.3 | 基础 UI 组件（所有组件均基于 antd 二次封装） |
| @ant-design/icons ^5.6.1 | Ant Design 图标 |
| @icon-park/react ^1.4.2 | Icon Park 图标库（IconUI 使用） |
| classnames ^2.5.1 | CSS 类名合并 |
| dayjs ^1.11.11 | 日期处理（DateUI 使用） |
| lodash ^4.17.21 | 工具函数 |
| react-router-dom ^6.13.0 | 路由（BackUI 使用） |
| react-draggable ^4.4.6 | 拖拽（ModalUI 使用） |
| @dnd-kit/* | 拖拽排序（TableHeaderSettingUI 使用） |
| @wangeditor/editor | 富文本编辑器（RichEditorUI 使用） |
| react-countup ^6.5.3 | 数字动画（StatisticUI、AmountCellUI 使用） |
| sic-util ^0.2.9 | 业务工具函数库（num_expand、num_reduce、file_calculate_md5 等） |

### 常用脚本

```bash
npm run dev          # 启动 dumi 文档开发服务
npm run build        # father 构建组件库
npm run docs:build   # 构建文档站点
npm run lint         # ESLint + Stylelint 检查
npm run lint:es      # 仅 ESLint
npm run lint:css     # 仅 Stylelint
```

## 目录结构说明

```
sic-ui/
├── src/                        # 组件源码
│   ├── index.ts                # 统一导出入口（export { default as XxxUI } from './XxxUI'）
│   ├── AmountCellUI/           # 金额单元格组件
│   ├── AnchorUI/               # 锚点组件
│   │   └── demo/               # 演示文件
│   ├── BackUI/                 # 返回导航组件
│   ├── BroadcastUI/            # 广播消息组件
│   ├── ButtonUI/               # 按钮组件
│   ├── CellUI/                 # 单元格组件（带溢出提示+复制）
│   ├── DateUI/                 # 日期选择组件
│   ├── DescriptionsUI/         # 描述列表组件
│   ├── EmptyUI/                # 空状态组件
│   ├── FilterUI/               # 筛选表单组件
│   ├── FormUI/                 # 表单组件（含 Title/ProTitle 子组件）
│   ├── IconUI/                 # 图标组件
│   │   └── material/           # 图标映射数据
│   ├── ImageUI/                # 图片组件（含 PreviewGroupUI 子组件）
│   ├── InputUI/                # 输入框组件（含 Range 子组件）
│   ├── LoadingUI/              # 加载组件
│   ├── MessageUI/              # 消息提示（antd message 封装）
│   ├── ModalUI/                # 弹窗组件（支持拖拽）
│   ├── PasswordStrongUI/       # 密码强度组件
│   ├── RichEditorUI/           # 富文本编辑器组件
│   ├── SearchUI/               # 搜索框组件
│   ├── SelectUI/               # 下拉选择组件
│   ├── StatisticUI/            # 统计数值组件
│   ├── SwitchUI/               # 开关组件
│   ├── TableUI/                # 表格组件（最复杂，含多个子组件）
│   │   ├── Operate/            # 表格操作列
│   │   ├── MultiLine/          # 多行展示
│   │   ├── HideMultipleLines/  # 多行隐藏
│   │   └── TableHeaderSettingUI/ # 表头设置（拖拽排序）
│   ├── TagUI/                  # 标签组件
│   ├── TextUI/                 # 文本组件
│   ├── UploadUI/               # 上传组件（6种模式）
│   └── VideoPreviewUI/         # 视频预览组件
├── docs/                       # dumi 文档
├── .dumirc.ts                  # dumi 配置
├── .fatherrc.ts                # father 构建配置（ESM 输出）
├── .prettierrc                 # Prettier 配置（含 import 排序规则）
├── .eslintrc.js                # ESLint 配置（继承 @umijs/lint）
├── .stylelintrc                # Stylelint 配置
├── tsconfig.json               # TypeScript 配置
└── package.json
```

### 组件目录结构规范

每个组件目录遵循统一结构：

```
ComponentNameUI/
├── index.tsx       # 组件主文件
├── index.scss      # 组件样式
├── type.ts         # 类型定义（部分组件使用 type.d.ts）
└── 子组件目录/      # 可选的子组件
```

## 编码规范

### 组件模式

**1. 函数组件 + React.FC / 箭头函数**

所有组件使用函数组件，有两种写法：

```tsx
// 写法一：React.FC（带类型约束）
const ButtonUI: React.FC<ButtonUIProps> = (props) => { ... };

// 写法二：普通箭头函数（props 类型为 any 或接口）
const SelectUI = (props: any) => { ... };
```

**2. Props 解构模式**

```tsx
const ComponentUI = (props: PropsType) => {
  const { className, value, onChange, children, ...otherProps } = props;
  // ...
};
```

**3. 组件组合模式（静态属性挂载子组件）**

```tsx
// 方式一：直接挂载
const FormUI: any = Form;
FormUI.Title = FormUI_Title;
FormUI.ProTitle = FormUI_ProTitle;

// 方式二：类型断言 + 挂载
const TableUI = TableUIInner as typeof TableUIInner & TableUIStaticType;
TableUI.Operate = TableUI_Operate;
TableUI.MultiLine = TableUI_MultiLine;

// 方式三：as any 挂载
(ImageUI as any).PreviewGroupUI = PreviewGroupUI;
```

**4. 受控组件模式**

大多数组件遵循受控模式，接收 `value` + `onChange`：

```tsx
const InputUI = (props: any) => {
  const { value, onChange, ...otherProps } = props;
  const [reactValue, setReactValue] = useState<string>();
  useEffect(() => { setReactValue(value); }, [value]);
  const valueChange = (e: any) => {
    setReactValue(e?.target?.value);
    onChange?.(e?.target?.value);
  };
  return <Input value={reactValue} onChange={valueChange} {...otherProps} />;
};
```

**5. 内部状态 + 防抖模式（SearchUI、InputUI）**

```tsx
let timer: any;
const SearchUI = (props: any) => {
  const valueChange = (e: any) => {
    setSearchValue(e.target.value);
    clearTimeout(timer);
    timer = setTimeout(() => { onChange(e.target.value.trim()); }, 500);
  };
};
```

**6. 默认导出**

所有组件使用 `export default` 导出。

### CSS 方案

使用 **SCSS**，每个组件一个 `index.scss` 文件，通过 `import './index.scss'` 引入。

**命名规范：BEM-like，组件名小写驼峰作为前缀**

```scss
// 组件根类名：小写驼峰 + UI 后缀
.tableUI {
  width: 100%;
  // 子元素：&-xxx
  &-mask { ... }
  &-simplePagination { ... }
  // 修饰符
  &-headerPadding { ... }
  &-cellPadding { ... }
}

// 子组件类名
.tableOperateUI-item { ... }
.tableOperateUI-more { ... }
.tableHeaderSettingUI-columns-title { ... }

// 使用 antd 内部类名覆盖
.ant-table-thead > tr > th { ... }
.ant-btn { ... }
```

**类名合并工具：classnames 或 clsx**

```tsx
import classnames from 'classnames';
// 或
import clsx from 'classnames';

<div className={classnames('modalUI', className, type)}>
<div className={clsx('tableUI', className)}>
<div className={clsx({ 'tableUI-mask': mask })}>
```

**CSS 变量：使用 var(--xxx) 引用主题变量**

```scss
background: var(--themeColor2);
color: var(--themeColor);
fill: var(--themeColor);
background-color: var(--red);
```

## 二次封装组件

以下是项目中所有二次封装的组件及其关键 Props：

### 基础组件

| 组件 | 封装自 | 关键 Props | 说明 |
|------|--------|------------|------|
| ButtonUI | antd Button | `iconPosition?: 'start' \| 'end'` + ButtonProps | 默认 iconPosition 为 'end' |
| InputUI | antd Input | `value, onChange, onchangeTime` | 支持防抖输入 |
| InputUI.Range | antd InputNumber | `value: {input1, input2}, min, max, placeholder` | 范围输入 |
| SelectUI | antd Select | `options, fieldNames, copy?: boolean` | 内置搜索排序+复制功能 |
| SwitchUI | antd Switch | `value: 1\|2, onChange` | 值为 1/2 而非 true/false |
| DateUI | antd DatePicker | `format, showRange, presets` | 内置中文预设（上周/本月/本季度等） |
| SearchUI | antd Input.Search | `value, placeholder, onChange` | 500ms 防抖 |
| TagUI | 自定义 | `type, title, size, options, dataIndex, icon, width` | 10 种预设颜色主题 |
| TextUI | 自定义 | `type?: 'primary' \| 'danger'` | 基础文本组件 |
| CellUI | 自定义 + Tooltip | `line?: number, placement, isShowCopy` | 溢出自动 Tooltip + 复制功能 |

### 数据展示组件

| 组件 | 封装自 | 关键 Props | 说明 |
|------|--------|------------|------|
| TableUI | antd Table | `vessel, setVessel, tableData, tableHeader, customColumns, simplePagination, mask, loading` | 最复杂组件，支持分页/选择/表头配置 |
| TableUI.Operate | 自定义 | `child, maxCount?: number` | 操作列，超出折叠到 Popover |
| TableUI.MultiLine | 自定义 | `children: string[]` | 多行展示 |
| TableUI.HideMultipleLines | 自定义 | `children: string[], line, moreShowLine` | 多行隐藏+Tooltip 展开 |
| TableUI.HeaderSettingUI | 自定义 + @dnd-kit | `items, open, setOpen, updataTableheader, maxHeight` | 表头拖拽排序设置 |
| DescriptionsUI | antd Row/Col | `items: {label, children, span}, type: 'table'\|'text', labelWidth, layout` | 描述列表 |
| StatisticUI | react-countup + TagUI | `items: {id, label, value, type, suffix, decimals}, duration` | 统计数值动画 |
| AmountCellUI | react-countup + Tooltip | `children, animation, rawValue, separator, isShowTooltip` | 金额格式化（万/亿） |
| EmptyUI | 自定义 | `image, text?: string` | 空状态，默认文案"暂无内容" |
| ImageUI | antd Image | `src, maskType?: 1\|2\|3, clickOtherButton` | 3 种蒙层模式 |
| ImageUI.PreviewGroupUI | antd Image.PreviewGroup | 继承 antd props | 图片组预览 |
| VideoPreviewUI | 自定义 | `videoUrl, frameTime, fallback` | 视频首帧预览 |
| BroadcastUI | antd Carousel | `items: string[], width, textAlign` | 广播消息轮播 |

### 反馈/交互组件

| 组件 | 封装自 | 关键 Props | 说明 |
|------|--------|------------|------|
| ModalUI | antd Modal + react-draggable | `isOpen, setIsOpen, title, icon, type, confirm` | 可拖拽弹窗 |
| MessageUI | antd message | 静态方法（info/error/success） | 配置 duration=3, maxCount=3 |
| LoadingUI | antd Spin | `isShowLoading, loadingImage, maskTransparent` | 支持自定义加载图 |
| UploadUI | antd Upload | `mode: 1-6, scene, fileType, maxSize, maxCount, getOssDataAPI` | 6 种上传模式 + OSS 签名上传 |
| PasswordStrongUI | 自定义 | `value: string` | 密码强度检测（弱/中/强） |

### 导航/布局组件

| 组件 | 封装自 | 关键 Props | 说明 |
|------|--------|------------|------|
| BackUI | react-router-dom | `to, before, current` | 返回导航 + 面包屑 |
| AnchorUI | antd Anchor | `items, anchoruiRef, anchorActive, setAnchorActive` | 锚点导航 |
| FilterUI | antd Form + Cascader | `form, filterOptions, filterParams, moreFilters, container` | 筛选表单（支持 search/select/datePicker/cascader） |
| FormUI | antd Form | 继承 antd Form + Title/ProTitle 子组件 | 表单容器 |
| IconUI | @icon-park/react | `name, size, fill, strokeWidth, theme` | 图标组件，通过 name 查找 iconMap |

### 类型定义

**TableUI 核心类型（src/TableUI/type.d.ts）：**

```typescript
interface TableUI_VesselType {
  filterParams?: { page?: number; size?: number; sortInfoList?: {...}[] };
  multipleChoice?: React.Key[];
  choice?: boolean;
}

interface TableUI_ColumnType<RecordType> extends TableColumnType<RecordType> {
  name?: string;
  selected?: boolean;
  disable?: boolean;
  type?: 'amount' | 'percent' | 'tag';
  options?: { label?: React.ReactNode; value?: string | number | null }[];
  renderTitle?: React.ReactNode | (() => React.ReactNode);
}

interface TableUIPropsType<TRecord, TVessel> extends TableProps<TRecord> {
  vessel?: TVessel;
  setVessel?: (params: TVessel) => void;
  tableData?: { records: TRecord[]; total?; current?; size?; offset?; last?; next? };
  tableHeader?: TableUI_ColumnType<TRecord>[];
  customColumns?: TableUI_ColumnType<TRecord>[];
  simplePagination?: boolean;
  pageSizeOptions?: number[];
  mask?: boolean;
  loading?: boolean;
  headerPadding?: boolean;
  cellPadding?: boolean;
  CustomLoadingUI?: ReactElement;
  CustomEmptyUI?: ReactElement;
}
```

## 技术栈特定规范

### dumi + father 构建体系

- **father** 负责组件库构建，输出 ESM 到 `dist/` 目录
- **dumi** 负责文档站点，支持在组件目录下放 `demo/` 或 `index.md` 生成文档
- 构建配置在 `.fatherrc.ts`，仅配置 `esm: { output: 'dist' }`
- 文档配置在 `.dumirc.ts`，base 和 publicPath 为 `/sic-ui/`

### TypeScript 配置

- `strict: true` 启用严格模式
- 路径别名：`sic-ui` 指向 `src/`，`sic-ui/*` 指向 `src/*`
- 组件内部互相引用使用 `import { XxxUI } from 'sic-ui'`（而非相对路径）

### Prettier + import 排序

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 140,
  "tabWidth": 2
}
```

**import 排序顺序（@trivago/prettier-plugin-sort-imports）：**

1. `react`, `react-dom`, `react-router-dom`
2. `antd`, `echarts`, `react-draggable`, `react-countup`, `@dnd-kit/*`, `sic-ui`
3. 组件/页面导入（排除 config/type/hook/util/style）
4. `lodash`, `dayjs`, `classnames`, `sic-util`
5. 配置文件导入（`./config`, `type`）
6. 静态资源（图片等）
7. 第三方模块
8. 样式文件（CSS/SCSS/Less）

### ESLint

继承 `@umijs/lint/dist/config/eslint`，配合 husky + lint-staged 在提交时自动修复。

## 注意事项

1. **组件命名必须以 UI 结尾**：所有组件目录和文件名遵循 `XxxUI` 命名，如 `ButtonUI`、`TableUI`、`ModalUI`

2. **组件内部互相引用使用包名**：`import { ButtonUI, IconUI } from 'sic-ui'`，而非相对路径

3. **样式使用 SCSS + BEM-like 命名**：类名前缀为组件名小写驼峰，如 `tableUI`、`modalUI-header`、`filterUI-content-form`

4. **antd 样式覆盖注意事项**：直接使用 `.ant-xxx` 选择器覆盖 antd 内部样式，注意优先级

5. **CSS 变量**：主题色使用 `var(--themeColor)`、`var(--themeColor1)`、`var(--themeColor2)` 等变量

6. **工具函数来源**：`sic-util` 包提供业务工具函数（`num_expand`、`num_reduce`、`file_calculate_md5`、`getUrlConfig`、`video_preview`、`getOptionConfig`），不要自行实现

7. **Props 类型定义**：部分组件使用 `props: any`（如 ModalUI、SelectUI、DateUI），部分有完整接口定义（如 ButtonUI、UploadUI、ImageUI）。新增组件应优先定义完整 Props 接口

8. **受控组件模式**：表单类组件（InputUI、SelectUI、DateUI、SwitchUI）均支持 `value` + `onChange` 受控模式

9. **SwitchUI 值约定**：值为 `1`（开）和 `2`（关），而非 `true`/`false`

10. **TableUI 的 vessel 模式**：TableUI 通过 `vessel` + `setVessel` 管理筛选/分页/选择状态，`tableData` 标准结构为 `{ records, total, current, size, offset, last, next }`

11. **MessageUI 使用方式**：直接调用静态方法 `MessageUI.info()`、`MessageUI.error()`、`MessageUI.success()`

12. **图标使用**：通过 `<IconUI name="图标名称" />` 使用，图标名称来自 @icon-park/react 的 iconMap 映射

13. **日期本地化**：DateUI 已内置中文本地化（`zhCN`）和常用预设（上周/本月/本季度/本年度等），无需额外配置

14. **上传组件 OSS 签名**：UploadUI 的 `mode >= 2` 需要提供 `getOssDataAPI` 函数获取 OSS 签名信息
