import React from 'react';
import { useState, useEffect } from 'react';
import './index.scss';

// 配置色枚举
const themeList = [
  { type: 1, name: '绿色', color: '#1EAF69', bgcolor: 'rgba(30, 175, 105, 0.10)' },
  { type: 2, name: '紫色', color: '#9747FF', bgcolor: 'rgba(151, 71, 255, 0.10)' },
  { type: 3, name: '蓝色', color: '#2E64FA', bgcolor: 'rgba(46, 100, 250, 0.10)' },
  { type: 4, name: '灰色', color: '#666666', bgcolor: '#F5F5F5' },
  { type: 5, name: '黄色', color: '#FFC22C', bgcolor: 'rgba(255, 194, 44, 0.10)' },
  { type: 6, name: '红色', color: '#ff7875', bgcolor: 'rgba(255, 120, 117, 0.10)' },
  { type: 7, name: '深红', color: '#9E031A', bgcolor: 'rgba(158, 3, 26, 0.10)' },
  { type: 8, name: '淡青', color: '#13C2C2', bgcolor: 'rgba(19, 194, 194, 0.1)' },
  { type: 9, name: '粉红', color: '#F759AB', bgcolor: ' rgba(247, 89, 171, 0.1)' },
  { type: 10, name: '橄榄色', color: '#5B8C00', bgcolor: ' rgba(91, 140, 0, 0.10)' },
];

const TagUI = (props: any) => {
  const { className, type, children, icon, width, style, ...otherProps } = props;
  const [theme, setTheme] = useState<any>();

  useEffect(() => {
    const theme = themeList.filter((item) => item?.type === Number(type))[0];
    setTheme(theme);
  }, [type]);

  return (
    <div
      className={`sic-tagui ${className ?? ''}`}
      style={{ color: theme?.color, backgroundColor: theme?.bgcolor, width: width ?? 'auto', ...style }}
      {...otherProps}
    >
      {children}
      {icon && (
        <div className="sic-tagui-icon" style={{ color: theme?.color }}>
          {icon}
        </div>
      )}
    </div>
  );
};

export default TagUI;
