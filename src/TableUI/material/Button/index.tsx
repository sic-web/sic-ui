import React from 'react';
import './index.scss';
/** 表格组件-按钮功能 */
export const Button = (props: any) => {
  const { type = 'default', icon, children, className, style, ...otherProps } = props;

  return (
    <div className={`sic-tableui-button ${!!type && `sic-tableui-button-${type}`} ${className ?? ''}`} style={style} {...otherProps}>
      {children}
      {icon}
    </div>
  );
};
