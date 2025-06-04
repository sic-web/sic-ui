import React from 'react';
import './index.scss';

interface TextUIProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'primary' | 'danger';
}

const TextUI = (props: TextUIProps) => {
  const { className, type = 'primary', children, ...otherProps } = props;

  return (
    <div className={`textUI ${className ?? ''} ${type ?? ''}`} {...otherProps}>
      {children}
    </div>
  );
};

export default TextUI;
