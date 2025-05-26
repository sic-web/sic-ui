import React from 'react';
import './index.scss';

interface TextUIProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'default' | 'danger';
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
