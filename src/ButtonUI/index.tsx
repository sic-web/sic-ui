import React from 'react';
import { Button, ButtonProps } from 'antd';
import './index.scss';

interface ButtonUIProps extends Omit<ButtonProps, 'type'> {
  type: 'default' | 'primary' | 'dashed' | 'link' | 'text' | 'border' | 'delete' | undefined;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const ButtonUI = (props: ButtonUIProps) => {
  const { type, icon, children, ...otherProps } = props;
  const getType = () => (type === 'border' || type === 'delete' ? 'default' : type);
  const getClassName = () => {
    const classNames = ['sic-buttonui'];
    if (type === 'border') classNames.push('sic-buttonui-border');
    if (type === 'delete') classNames.push('sic-buttonui-delete');
    return classNames.join(' ');
  };

  return (
    <Button className={getClassName()} type={getType()} {...otherProps}>
      {children}
      {icon && <span className="sic-buttonui-icon">{icon}</span>}
    </Button>
  );
};

export default ButtonUI;
