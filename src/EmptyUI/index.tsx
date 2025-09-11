import React from 'react';
import EmptyImage from './emptyImage';
import classnames from 'classnames';
import './index.scss';

interface PropsType {
  className?: string;
  image?: any;
  text?: string;
}

const EmptyUI = (props: PropsType) => {
  const { className, image, text = '暂无内容' } = props;

  return (
    <div className={classnames('emptyUI', className)}>
      {image ? image : <EmptyImage />}
      {text}
    </div>
  );
};
export default EmptyUI;
