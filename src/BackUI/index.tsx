import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconUI } from 'sic-ui';
import './index.scss';

interface IProps {
  to?: any;
  before?: string;
  current?: string;
  className?: string;
  style?: { [key: string]: string | number };
}

const BackUI = (props: IProps) => {
  const { to = -1, before, current, className, ...otherProps } = props;
  const navigate = useNavigate();
  return (
    <div className={`sic-back ${className ?? ''}`} {...otherProps}>
      <div onClick={() => navigate(to ?? -1)} style={{ marginRight: 30, cursor: 'pointer' }}>
        <IconUI name="Return" style={{ color: 'var(--textcolor)', marginRight: 3 }} />
        返回
      </div>
      <div>
        <span style={{ color: '#999' }}>{before}/</span>
        {current}
      </div>
    </div>
  );
};
export default BackUI;
