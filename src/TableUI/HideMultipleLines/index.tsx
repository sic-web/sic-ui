import React from 'react';
import { Tooltip } from 'antd';
import { ButtonUI, IconUI } from 'sic-ui';
import clsx from 'classnames';
import './index.scss';

/** 表格组件-多行隐藏 */
export const HideMultipleLines = (props: any) => {
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
          <ButtonUI type="primary" size="small" icon={<IconUI name="Right" />}>
            更多
          </ButtonUI>
        )}
      </Tooltip>
    );
  };
  return (
    <div className={clsx('tableHideMultipleLinesUI', className)}>
      <div className="tableHideMultipleLinesUI-content">
        {children?.length > 0 &&
          children.map((item: any, index: number) => {
            return index < line && <div key={index}>{item}</div>;
          })}
      </div>
      {moreIcon()}
    </div>
  );
};
