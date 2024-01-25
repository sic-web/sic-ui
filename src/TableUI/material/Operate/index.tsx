import React, { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { IconUI } from 'sic-ui';
import './index.scss';

const OperateMore = (props: { content: React.ReactNode }) => {
  const tip = (text: React.ReactNode) => (
    <div>
      <span style={{ color: 'var(--textcolor)' }}>{text || ''}</span>
    </div>
  );

  return (
    <Tooltip placement="bottom" title={tip(props.content)} color={'#fff'} key={'#fff'} trigger="click">
      <IconUI name="More" size="18" theme="filled" style={{ color: '#7E7E7E', padding: '0 10px', cursor: 'pointer' }} />
    </Tooltip>
  );
};
/** 表格组件-操作更多 */
export const Operate = (props: { child: any }) => {
  const { child } = props;
  const [children, setChildren] = useState<React.ReactNode[]>([]);
  useEffect(() => {
    if (child()?.props?.children?.length) {
      const children = child()?.props?.children.filter((item: boolean) => {
        return item !== false;
      });
      setChildren(children);
    } else {
      if (child()?.props?.children) setChildren([child().props?.children]);
    }
  }, [child]);

  return (
    <div className="sic-tableui-operate">
      {children?.length === 0 && <div style={{ color: 'var(--textcolor)' }}>-</div>}
      {children?.[0] || children}
      {children?.[1] && <span style={{ color: '#ccc', margin: '0 5px' }}>丨</span>}
      {children?.[1]}
      {children?.[2] && (
        <OperateMore
          content={
            <div>
              {children?.[2]}
              {children?.[3]}
              {children?.[4]}
              {children?.[5]}
              {children?.[6]}
              {children?.[7]}
              {children?.[8]}
              {children?.[9]}
              {children?.[10]}
            </div>
          }
        />
      )}
    </div>
  );
};
