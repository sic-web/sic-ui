import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconUI } from 'sic-ui';
import classnames from 'classnames';
import './index.scss';

interface PropsType {
  to?: any;
  before?: string;
  current?: string;
  className?: string;
  children?: React.ReactNode;
  style?: { [key: string]: string | number };
}

const BackUI = (props: PropsType) => {
  const { to = -1, before, current, className, children, ...otherProps } = props;
  const navigate = useNavigate();
  return (
    <div className={classnames('backUI', className)} {...otherProps}>
      <div className="backUI-button" onClick={() => navigate(to ?? -1)}>
        <IconUI name="Return" />
        <div>返回</div>
      </div>
      <div className="backUI-text">
        <div className="backUI-text-before">{before}</div>
        <div>/</div>
        <div>{current}</div>
      </div>
      <div className="backUI-content">{children}</div>
    </div>
  );
};
export default BackUI;
