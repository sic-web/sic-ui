import React, { useState, useRef } from 'react';
import { AnchorUI, ButtonUI } from 'sic-ui';
export default () => {
  const ref: any = useRef(null);

  const [current, setCurrent] = useState('part-1');
  return (
    <div>
      <ButtonUI onClick={() => setCurrent('part-1')}>点击到主体资质</ButtonUI>
      <ButtonUI onClick={() => setCurrent('part-2')}>点击到客户来源</ButtonUI>
      <ButtonUI onClick={() => setCurrent('part-3')}>点击到项目信息</ButtonUI>
      <br />
      <br />
      <div style={{ display: 'flex' }}>
        <AnchorUI
          getContainer={() => ref.current}
          current={current}
          defaultCurrent={'part-1'}
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
        <div style={{ flex: 1, height: '400px', overflow: 'hidden' }} ref={ref}>
          <div id="part-1" style={{ height: '500px', backgroundColor: 'rgba(255,0,0,0.2)' }} />
          <div id="part-2" style={{ height: '500px', backgroundColor: 'rgba(0,255,0,0.2)' }} />
          <div id="part-3" style={{ height: '500px', backgroundColor: 'rgba(0,0,255,0.2)' }} />
        </div>
      </div>
    </div>
  );
};
