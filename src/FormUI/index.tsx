import React from 'react';
import { Form } from 'antd';
import classnames from 'classnames';
import './index.scss';

const FormUI_Title = (props: any) => {
  const { className, left } = props;
  return (
    <div className={classnames('formUI-title', className)}>
      <div className="formUI-title-header">
        <div className="formUI-title-header-text">{left}</div>
        <div className="formUI-title-header-button"></div>
      </div>
      <div className="formUI-title-content">{props?.children}</div>
    </div>
  );
};
const FormUI_ProTitle = (props: any) => {
  const { className, required = true, line = true, title, children, border = true } = props;
  return (
    <div className={classnames('formUI-protitle', className, { border: border })}>
      <div className="formUI-protitle-header">
        {required && <div className="formUI-protitle-header-icon">*</div>}
        <div className="formUI-protitle-header-title">{title}</div>
        {line && <div className="formUI-protitle-header-line"></div>}
      </div>
      <div className="formUI-protitle-content">{children}</div>
    </div>
  );
};
/** 继承关系，继续完善 */
const FormUI: any = Form;
FormUI.Title = FormUI_Title;
FormUI.ProTitle = FormUI_ProTitle;

export default FormUI;
