import React from 'react';
import classnames from 'classnames';
import './index.scss';

interface TextUIProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'primary' | 'danger';
}

const TextUI = (props: TextUIProps) => {
  const { className, type = 'primary', children, ...otherProps } = props;

  return (
    <div className={classnames('textUI', className, type)} {...otherProps}>
      {children}
    </div>
  );
};

export default TextUI;
