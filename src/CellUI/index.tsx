import React, { useRef, useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import './index.scss';

interface PropsType {
  line?: number;
  className?: string;
  children?: React.ReactNode;
}
const CellUI = (props: PropsType) => {
  const textRef = useRef(null);
  const { line = 2, className, children } = props;
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const element: any = textRef.current;
    if (element) {
      // 获取元素的实际高度
      const clientHeight = element.clientHeight;
      // 获取元素的滚动高度
      const scrollHeight = element.scrollHeight;
      // 判断是否溢出
      const isOverflowing = scrollHeight > clientHeight;
      if (isOverflowing) {
        setShowTooltip(isOverflowing);
      }
    }
  }, [children]);

  const cellStyle: any = { '--cellLine': line };

  return (
    <div className={`sic-cellui ${className ?? ''}`}>
      <Tooltip placement="right" title={showTooltip ? children : null}>
        <div ref={textRef} className="sic-cellui-text" style={cellStyle}>
          {children}
        </div>
      </Tooltip>
    </div>
  );
};

export default CellUI;
