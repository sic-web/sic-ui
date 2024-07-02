import React, { useRef, useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { IconUI, MessageUI } from 'sic-ui';
import './index.scss';

interface PropsType {
  line?: number;
  placement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'topLeft'
    | 'topRight'
    | 'bottomLeft'
    | 'bottomRight'
    | 'leftTop'
    | 'leftBottom'
    | 'rightTop'
    | 'rightBottom';
  isShowCopy?: boolean;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}
const CellUI = (props: PropsType) => {
  const textRef = useRef(null);
  const { line = 2, placement = 'right', isShowCopy = true, className, children, style, onClick } = props;
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

  const clickCopy = (e: any, children: any) => {
    e.stopPropagation();
    try {
      navigator.clipboard.writeText(children);
      MessageUI.info('文本已复制到剪贴板');
    } catch (err) {
      MessageUI.error('复制失败');
    }
  };
  const tooltipContent = (children: React.ReactNode) => {
    return (
      <div className="sic-cellui-tooltipContent">
        {isShowCopy && (
          <IconUI className="sic-cellui-tooltipContent-icon" name="Copy" fill="var(--themeColor)" onClick={(e) => clickCopy(e, children)} />
        )}
        {children}
      </div>
    );
  };
  return (
    <div className={`sic-cellui ${className ?? ''}`} style={style} onClick={onClick}>
      <Tooltip placement={placement} title={showTooltip ? tooltipContent(children) : null}>
        <div ref={textRef} className="sic-cellui-text" style={cellStyle}>
          {children}
        </div>
      </Tooltip>
    </div>
  );
};

export default CellUI;
