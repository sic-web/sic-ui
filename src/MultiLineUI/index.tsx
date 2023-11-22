import React from 'react';
import { Tooltip } from 'antd';
import { IconUI } from 'sic-ui';
import './index.scss';

interface propsType {
  children: number[] | string[];
  line?: number;
  moreShowLine?: number;
  className?: string;
}
const MultiLineUI = (props: propsType) => {
  const { children, line = 2, moreShowLine, className } = props;
  const moreIcon = () => {
    return (
      <Tooltip
        placement="right"
        title={
          <div style={{ textAlign: 'center' }}>
            {children?.length > line &&
              children.map((item: number | string, index: number) => {
                return ((moreShowLine && index < moreShowLine) || !moreShowLine) && <div key={index}>{item}</div>;
              })}
            {moreShowLine && children?.length > moreShowLine && <IconUI name="More" theme="filled" size="14" fill="#fff" />}
          </div>
        }
        trigger="click"
      >
        {children?.length > line && (
          <IconUI name="Right" theme="filled" size="14" fill="var(--textcolor)" className="sicMultiLineUI-icon" />
        )}
      </Tooltip>
    );
  };
  return (
    <div className={`sicMultiLineUI ${className}`}>
      <div className="sicMultiLineUI-content">
        {children?.length > 0 &&
          children.map((item, index) => {
            return index < line && <div key={index}>{item}</div>;
          })}
      </div>
      {moreIcon()}
    </div>
  );
};

export default MultiLineUI;
