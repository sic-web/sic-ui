import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconUI } from 'sic-ui';
import './index.scss';

interface IProps {
  to?: any;
  before?: string;
  current?: string;
  className?: string;
  children?: React.ReactNode;
  style?: { [key: string]: string | number };
}

const BackUI = (props: IProps & Record<string, any>) => {
  const { to = -1, before, current, className, children, ...otherProps } = props;
  const navigate = useNavigate();
  return (
    <div className={`sic-backui ${className ?? ''}`} {...otherProps}>
      <div className="sic-backui-button" onClick={() => navigate(to ?? -1)}>
        <IconUI name="Return" />
        <div>返回</div>
      </div>
      <div className="sic-backui-text">
        <div className="sic-backui-text-before">{before}</div>
        <div>/</div>
        <div>{current}</div>
      </div>
      <div className="sic-backui-content">{children}</div>
    </div>
  );
};
export default BackUI;
