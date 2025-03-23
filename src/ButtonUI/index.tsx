import { Button, ButtonProps } from 'antd';
import React from 'react';
import './index.scss';

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
