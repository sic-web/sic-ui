import { IDomEditor, IEditorConfig } from '@wangeditor/editor';
import { Editor, Toolbar } from '@wangeditor/editor-for-react';
import '@wangeditor/editor/dist/css/style.css';
import React, { useEffect, useState } from 'react';
import './index.scss';

// 定义组件属性接口
interface RichEditorProps {
  value?: string;
  onChange?: (html: string) => void;
  placeholder?: string;
}

const RichEditorUI = (props: RichEditorProps) => {
  const { value, onChange, placeholder = '请输入内容...' } = props;

  // editor 实例
  const [editor, setEditor] = useState<IDomEditor | null>(null);
  // 编辑器内容
  const [html, setHtml] = useState<string>();

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    placeholder,
    autoFocus: false,
  };
  useEffect(() => {
    setHtml(value);
  }, [value]);
  // 组件销毁时，销毁编辑器实例
  useEffect(() => {
    return () => {
      if (editor === null) return;
      editor.destroy();
      setEditor(null);
    };
  }, [editor]);

  const onChangeEditor = (editor: IDomEditor) => {
    if (onChange && html !== editor.getHtml()) {
      setHtml(editor.getHtml());
      onChange(editor.getHtml());
    }
  };
  return (
    <div className="richEditorUI">
      <Toolbar className="richEditorUI-toolbar" editor={editor} mode="default" />
      <Editor
        className="richEditorUI-editor"
        defaultConfig={editorConfig}
        value={html}
        onCreated={setEditor}
        onChange={onChangeEditor}
        mode="default"
      />
    </div>
  );
};
export default RichEditorUI;
