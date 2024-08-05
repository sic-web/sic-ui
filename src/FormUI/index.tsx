import React from 'react';
import { Form } from 'antd';
import './index.scss';

const FormUI_Title = (props: any) => {
  const { left } = props;
  return (
    <div className="sicFormUI-title">
      <div className="sicFormUI-title-header">
        <div className="sicFormUI-title-header-text">{left}</div>
        <div className="sicFormUI-title-header-button"></div>
      </div>
      <div className="sicFormUI-title-content">{props?.children}</div>
    </div>
  );
};
const FormUI_ProTitle = (props: any) => {
  const { required = true, line = true, title, children, border = true } = props;
  return (
    <div className={`sicFormUI-protitle ${border ? 'border' : ''}`}>
      <div className="sicFormUI-protitle-header">
        {required && <div className="sicFormUI-protitle-header-icon">*</div>}
        <div className="sicFormUI-protitle-header-title">{title}</div>
        {line && <div className="sicFormUI-protitle-header-line"></div>}
      </div>
      <div className="sicFormUI-protitle-content">{children}</div>
    </div>
  );
};
/** 继承关系，继续完善 */
const FormUI: any = Form;
FormUI.Title = FormUI_Title;
FormUI.ProTitle = FormUI_ProTitle;

export default FormUI;
