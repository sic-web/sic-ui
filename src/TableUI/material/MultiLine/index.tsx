import React from 'react';
import { CellUI } from 'sic-ui';
import './index.scss';

/** 表格组件-多行展示 */
export const MultiLine = (props: any) => {
  const { children, ...otherProps } = props;
  return (
    <div className="sic-tableui-multiLine" {...otherProps}>
      {children?.length > 0 &&
        children.map((item: string | number, index: number) => (
          <div key={index} className="sic-tableui-multiLine-item">
            <CellUI line={1}>{item}</CellUI>
          </div>
        ))}
    </div>
  );
};
