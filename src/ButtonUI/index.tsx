import React from 'react';
import { Button, ButtonProps } from 'antd';
import './index.scss';
interface ButtonUIProps extends Omit<ButtonProps, 'type'> {
  type?: any;
  children?: React.ReactNode;
  iconPosition?: 'start' | 'end';
}

const ButtonUI = (props: ButtonUIProps) => {
  const { type, children, iconPosition = 'end', ...otherProps } = props;
  return (
    <Button className="sic-buttonui" type={type} iconPosition={iconPosition} {...otherProps}>
      {children}
    </Button>
  );
};

export default ButtonUI;
