import React, { useRef, useState } from 'react';
import { AnchorUI } from 'sic-ui';

export default () => {
  const ref: any = useRef(null);
  //当前导航项
  const [anchorActive, setAnchorActive] = useState('');
  return (
    <div style={{ display: 'flex' }}>
      <AnchorUI
        anchoruiRef={ref}
        items={[
          {
            key: 'part-a',
            title: '主体资质',
          },
          {
            key: 'part-b',
            title: '客户来源',
          },
          {
            key: 'part-c',
            title: '项目信息',
          },
          {
            key: 'part-d',
            title: '风控信息',
          },
        ]}
        anchorActive={anchorActive}
        setAnchorActive={setAnchorActive}
      ></AnchorUI>
      <div style={{ flex: 1, overflow: 'scroll', height: 400 }} ref={ref}>
        <div id="part-a" style={{ height: '200px', backgroundColor: 'rgba(255,0,0,0.2)' }} />
        <div id="part-b" style={{ height: '200px', backgroundColor: 'rgba(0,255,0,0.2)' }} />
        <div id="part-c" style={{ height: '200px', backgroundColor: 'rgba(0,0,255,0.2)' }} />
        <div id="part-d" style={{ height: '200px', backgroundColor: 'rgba(0,0,125,0.2)' }} />
      </div>
    </div>
  );
};
