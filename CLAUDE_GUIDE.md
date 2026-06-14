# CLAUDE_GUIDE.md — sic-ui

> 基于真实代码深度剖析，2026-06-14

---

#### 🎯 精准技术栈

| 维度 | 选型 |
|---|---|
| 框架 | React 18 + TypeScript |
| 构建 | father 4（dumi 生态库构建工具，输出 ESM） |
| 文档 | dumi 2.4（组件文档站点） |
| 基础 UI | Ant Design 5.27 |
| 特有 | @dnd-kit（拖拽）、@wangeditor/editor（富文本）、@icon-park/react（图标）、react-draggable（弹窗拖拽） |
| 样式 | Less + SCSS + BEM |
| 规范 | ESLint 8 + Stylelint + Prettier + Husky |

---

#### 📂 文件组织与命名微观规范

**目录划分：按组件名划分，每个组件一个文件夹**

```
src/
├── index.ts                    # 统一 Barrel exports（30+ 组件）
├── {组件名}UI/
│   ├── index.tsx               # 组件主文件
│   ├── index.scss              # 组件样式
│   ├── type.ts / type.d.ts     # 类型定义
│   └── demo/                   # dumi 文档 demo（可选）
│       └── use-anchor.tsx
└── TableUI/
    ├── index.tsx
    ├── type.d.ts
    ├── Operate/index.tsx       # 子组件
    ├── MultiLine/index.tsx
    └── HideMultipleLines/index.tsx
```

**文件命名规则**：
- 组件文件夹：**PascalCase + UI 后缀**（`ButtonUI/`、`TableUI/`、`FormUI/`）
- 子组件：**PascalCase**（`Operate/`、`MultiLine/`）
- 类型文件：`type.ts` 或 `type.d.ts`

**导出规范**：
- `src/index.ts` 强制 Barrel exports：`export { default as XxxUI } from './XxxUI'`
- 类型也导出：`export type { TableUIPropsType } from './TableUI/type'`

**新增组件指引**：
```
1. 创建 src/{组件名}UI/index.tsx + index.scss + type.ts
2. 在 src/index.ts 添加 export { default as XxxUI } from './XxxUI'
3. 创建 src/{组件名}UI/demo/ 提供 dumi 文档
4. Props 必须定义 TypeScript interface
```

---

#### 💻 代码书写风格指纹

**1. 组件定义：React.FC 泛型（简单）/ function 声明（复杂）**

```tsx
// ✅ 本项目标准写法（简单组件）：React.FC + Props interface
interface ButtonUIProps extends ButtonProps {
  iconPosition?: 'start' | 'end';
  children?: React.ReactNode;
}

const ButtonUI: React.FC<ButtonUIProps> = (props) => {
  const { children, iconPosition = 'end', ...otherProps } = props;
  return (
    <Button iconPosition={iconPosition} {...otherProps}>
      {children}
    </Button>
  );
};
export default ButtonUI;

// ✅ 本项目标准写法（复杂组件）：function + 泛型约束
function TableUIInner<
  TRecord = any,
  TVessel extends TableUI_VesselType = TableUI_VesselType
>(props: TableUIPropsType<TRecord, TVessel>) {
  // ...
}

// ❌ 严禁的写法：无类型的箭头函数
const ButtonUI = (props) => { };
```

**2. 状态与副作用：内部 useState，不依赖外部状态管理**

```tsx
// ✅ 本项目标准写法：组件内部管理 UI 状态
const [fileList, setFileList] = useState<fileListType[]>([]);
const [previewOpen, setPreviewOpen] = useState(false);
const [previewImage, setPreviewImage] = useState('');

// ✅ ref 避免 useEffect 循环
const fileListRef = useRef(fileList);
fileListRef.current = fileList;

useEffect(() => {
  // 用 ref 读取最新 fileList，避免将 fileList 加入依赖导致循环
  const uploadingFiles = fileListRef.current.filter((f) => f.status === 'uploading');
  // ...
}, [value]);  // 只监听外部 value
```

**3. API 与错误处理：组件内直接调用，无全局拦截**

```tsx
// ✅ 本项目标准写法：上传组件内直接 OSS 直传
const customRequest = async (options: any) => {
  try {
    if (typeof getOssDataAPI !== 'function') {
      MessageUI.error('获取ossDataAPI未配置！');
      return;
    }
    const md5Hash = await file_calculate_md5(options?.file);
    const ossData = await getOssDataAPI(scene, fileName, md5Hash);
    if (ossData?.code !== '0') {
      MessageUI.error(ossData?.msg);
      return;
    }
    // XHR 直传 OSS
    await uploadWithXHR(formData, ossData?.body?.host, options, fileName);
  } catch {
    MessageUI.error('上传失败，请稍后重试！');
  }
};

// ❌ 严禁：组件库中调用业务 API
import { queryOrderList } from '@/server/order';  // 业务逻辑！
```

**4. 样式方案：BEM 命名 + classnames**

```scss
// ✅ 本项目标准写法
.uploadUI {
  &-mode1 { /* ... */ }
  &-mode2 {
    &-content { /* ... */ }
  }
  &-mode6 {
    &-content { /* ... */ }
  }
}
.modalUI {
  &-header {
    &-icon { /* ... */ }
  }
}
```

```tsx
// ✅ 条件类名
<Upload className={classnames('uploadUI-mode2', className)}>

// ❌ 严禁：模板字符串拼接
<Upload className={`uploadUI-mode${mode}`}>
```

**5. 特殊约束：复合组件模式 + 静态属性挂载**

```tsx
// ✅ 本项目标准写法：子组件挂载为静态属性
const TableUI = TableUIInner as typeof TableUIInner & TableUIStaticType;
TableUI.Operate = TableUI_Operate;
TableUI.MultiLine = TableUI_MultiLine;
TableUI.HideMultipleLines = TableUI_HideMultipleLines;
TableUI.HeaderSettingUI = TableHeaderSettingUI;
export default TableUI;

// 使用方式
<TableUI.Operate />

// ✅ FormUI 继承 antd Form
const FormUI: any = Form;
FormUI.Title = FormUI_Title;
FormUI.ProTitle = FormUI_ProTitle;
export default FormUI;
```

---

#### 🚫 AI 行为强制约束

1. **组件命名必须以 UI 结尾**：`ButtonUI`、`TableUI`，严禁无后缀。
2. **严禁引入业务逻辑**：组件库只做 UI 封装，不包含 API 调用或 Redux/Zustand 状态。
3. **所有组件必须在 `src/index.ts` 中 Barrel exports**，严禁散落导出。
4. **生成代码前必须声明**：当前组件名、Props interface 定义位置、是否有子组件。
