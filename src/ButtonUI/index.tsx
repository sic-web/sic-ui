import React from 'react';
import { Button, ButtonProps } from 'antd';
import './index.scss';
interface ButtonUIProps extends Omit<ButtonProps, 'type'> {
  type?: any;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const ButtonUI = (props: ButtonUIProps) => {
  const { type, icon, children, ...otherProps } = props;
  return (
    <Button className="sic-buttonui" type={type} {...otherProps}>
      {children}
      {icon && <span className="sic-buttonui-icon">{icon}</span>}
    </Button>
  );
};

export default ButtonUI;
