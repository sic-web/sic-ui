import React, { useRef, useState } from 'react';
import { AnchorUI, ButtonUI } from 'sic-ui';
export default () => {
  const ref: any = useRef(null);
  const [targetCurrentIndex, setTargetCurrentIndex] = useState(0);
  return (
    <div>
      <ButtonUI
        onClick={() => {
          setTargetCurrentIndex(0);
        }}
      >
        点击到主体资质
      </ButtonUI>
      <ButtonUI
        onClick={() => {
          setTargetCurrentIndex(1);
        }}
      >
        点击到客户来源
      </ButtonUI>
      <ButtonUI
        onClick={() => {
          setTargetCurrentIndex(2);
        }}
      >
        点击到项目信息
      </ButtonUI>
      <br />
      <br />
      <div style={{ display: 'flex' }}>
        <AnchorUI
          anchoruiRef={ref}
          targetCurrentIndex={targetCurrentIndex}
          items={[
            {
              key: 'part-1',
              href: '#part-1',
              title: '主体资质',
            },
            {
              key: 'part-2',
              href: '#part-2',
              title: '客户来源',
            },
            {
              key: 'part-3',
              href: '#part-3',
              title: '项目信息',
            },
          ]}
        />
        <div style={{ flex: 1, overflow: 'scroll', height: 400 }} ref={ref}>
          <div id="part-1" style={{ height: '200px', backgroundColor: 'rgba(255,0,0,0.2)' }} />
          <div id="part-2" style={{ height: '200px', backgroundColor: 'rgba(0,255,0,0.2)' }} />
          <div id="part-3" style={{ height: '200px', backgroundColor: 'rgba(0,0,255,0.2)' }} />
        </div>
      </div>
    </div>
  );
};
