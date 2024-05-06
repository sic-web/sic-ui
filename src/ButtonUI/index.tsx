import React from 'react';
import { Button, ButtonProps } from 'antd';
import './index.scss';
interface ButtonUIProps extends Omit<ButtonProps, 'type'> {
  className?: string;
  type?: any;
  children?: React.ReactNode;
  iconPosition?: 'start' | 'end';
}

const ButtonUI = (props: ButtonUIProps) => {
  const { className, type, children, iconPosition = 'end', ...otherProps } = props;
  return (
    <Button className={`sic-buttonui ${className ?? ''}`} type={type} iconPosition={iconPosition} {...otherProps}>
      {children}
    </Button>
  );
};

export default ButtonUI;
