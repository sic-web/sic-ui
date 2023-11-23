import React from 'react';
import { Button } from 'antd';
import './index.scss';

interface PropsType {
  type?: 'default' | 'link' | 'text' | 'primary' | 'dashed' | 'border' | undefined;
  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  otherProps?: any;
}
const ButtonUI = (props: PropsType & Record<string, any>) => {
  const { type = 'default', icon, className, style, children, ...otherProps } = props;

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
    <Button className={`sic-buttonui ${className ?? ''}`} type={type} style={buttonStyle(type, style)} {...otherProps}>
      {children}
      {icon && <span style={{ marginLeft: 4 }}>{icon}</span>}
    </Button>
  );
};
export default ButtonUI;
