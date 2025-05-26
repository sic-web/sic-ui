import React from 'react';
import './index.scss';

interface TextUIProps {
  type?: 'default' | 'danger';
  children?: React.ReactNode;
}

const TextUI = (props: TextUIProps) => {
  const { type = 'default', children, ...otherProps } = props;

  return (
    <div className={`textUI ${type ?? ''}`} {...otherProps}>
      {children}
    </div>
  );
};

export default TextUI;
