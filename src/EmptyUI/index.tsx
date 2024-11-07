import React from 'react';
import EmptyImage from './emptyImage';
import './index.scss';

interface IProps {
  className?: string;
  image?: any;
  text?: string;
}

const EmptyUI = (props: IProps) => {
  const { className, image, text = '暂无内容' } = props;

  return (
    <div className={`sicEmptyUI ${className ?? ''}`}>
      {image ? image : <EmptyImage />}
      {text}
    </div>
  );
};
export default EmptyUI;
