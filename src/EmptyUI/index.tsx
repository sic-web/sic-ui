import React from 'react';
import { tablenodata } from '../assets';
import './index.scss';

interface IProps {
  className?: string;
}

const EmptyUI = (props: IProps) => {
  const { className } = props;
  return (
    <div className={`sicEmptyUI ${className ?? ''}`}>
      <div className="sicEmptyUI-image" dangerouslySetInnerHTML={{ __html: tablenodata() }} />
      <div className="sicEmptyUI-text">暂无内容</div>
    </div>
  );
};
export default EmptyUI;
