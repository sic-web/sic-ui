import React, { useRef, useState } from 'react';
import { AnchorUI } from 'sic-ui';
export default () => {
  const ref: any = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false);
  return (
    <div style={{ display: 'flex' }}>
      <AnchorUI
        anchoruiRef={ref}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        isAutoScroll={isAutoScroll}
        setIsAutoScroll={setIsAutoScroll}
        items={[
          {
            key: 'part-1',
            title: '主体资质',
          },
          {
            key: 'part-2',
            title: '客户来源',
          },
          {
            key: 'part-3',
            title: '项目信息',
          },
          {
            key: 'part-4',
            title: '风控信息',
          },
        ]}
      ></AnchorUI>
      <div style={{ flex: 1, overflow: 'scroll', height: 400 }} ref={ref}>
        <div id="part-1" style={{ height: '200px', backgroundColor: 'rgba(255,0,0,0.2)' }} />
        <div id="part-2" style={{ height: '200px', backgroundColor: 'rgba(0,255,0,0.2)' }} />
        <div id="part-3" style={{ height: '200px', backgroundColor: 'rgba(0,0,255,0.2)' }} />
        <div id="part-4" style={{ height: '200px', backgroundColor: 'rgba(0,0,125,0.2)' }} />
      </div>
    </div>
  );
};
