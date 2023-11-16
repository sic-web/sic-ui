import React from 'react';
import { Button } from 'antd';
import './index.scss';

const ButtonUI = (props: any) => {
  const { type = 'default', icon, style, children, ...otherProps } = props;

  const buttonStyle = (type: string, style: any) => {
    let changeStyle: any = {};
    switch (type) {
      case 'default':
        return { ...changeStyle, ...style };
      case 'primary':
        return { ...changeStyle, ...style };
      case 'border':
        changeStyle.borderColor = 'var(--textcolor)';
        changeStyle.color = 'var(--textcolor)';
        return { ...changeStyle, ...style };
      case 'danger':
        changeStyle.borderColor = '#e3e3e3';
        changeStyle.color = '#333';
        return { ...changeStyle, ...style };
    }
  };
  return (
    <Button className="sic-buttonui" type={type} style={buttonStyle(type, style)} {...otherProps}>
      {children}
      {icon && <span style={{ marginLeft: 4 }}>{icon}</span>}
    </Button>
  );
};
export default ButtonUI;
