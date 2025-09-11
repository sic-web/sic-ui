import React, { useMemo } from 'react';
import classnames from 'classnames';
import { getOptionConfig } from 'sic-util';
import './index.scss';

// 配置色枚举
const themeList = [
  { type: 'primary', name: '主题色', color: 'var(--themeColor)', bgcolor: 'var(--themeColor1)' },
  { type: '1', name: '绿色', color: '#1EAF69', bgcolor: 'rgba(30, 175, 105, 0.10)' },
  { type: '2', name: '紫色', color: '#9747FF', bgcolor: 'rgba(151, 71, 255, 0.10)' },
  { type: '3', name: '蓝色', color: '#2E64FA', bgcolor: 'rgba(46, 100, 250, 0.10)' },
  { type: '4', name: '灰色', color: '#666666', bgcolor: '#F5F5F5' },
  { type: '5', name: '黄色', color: '#FFC22C', bgcolor: 'rgba(255, 194, 44, 0.10)' },
  { type: '6', name: '红色', color: '#ff7875', bgcolor: 'rgba(255, 120, 117, 0.10)' },
  { type: '7', name: '深红', color: '#9E031A', bgcolor: 'rgba(158, 3, 26, 0.10)' },
  { type: '8', name: '淡青', color: '#13C2C2', bgcolor: 'rgba(19, 194, 194, 0.1)' },
  { type: '9', name: '粉红', color: '#F759AB', bgcolor: ' rgba(247, 89, 171, 0.1)' },
  { type: '10', name: '橄榄色', color: '#5B8C00', bgcolor: ' rgba(91, 140, 0, 0.10)' },
];
interface IProps {
  className?: string;
  title?: string;
  type?: string | number;
  size?: 'default' | 'large';
  options?: any[];
  dataIndex?: string | number;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  width?: string | number;
  style?: React.CSSProperties;
  onClick?: (params?: any) => void;
}

const TagUI = (props: IProps) => {
  const { className, title, type, size = 'default', options, dataIndex, children, icon, width, style, ...otherProps } = props;

  const theme = useMemo(() => {
    const newType = !!options && options?.length > 0 ? getOptionConfig(dataIndex, options)?.type : type;
    return themeList.find((item) => item.type === String(newType));
  }, [type, options, dataIndex]);

  if (!!title) {
    return (
      <div className={classnames('tagTitleUI', className)}>
        <div className="tagTitleUI-title" style={{ backgroundColor: theme?.color }}>
          {title}
        </div>
        <div className="tagTitleUI-content" style={{ backgroundColor: theme?.bgcolor }}>
          {!!options && options?.length > 0 ? getOptionConfig(dataIndex, options) : children}
          {icon}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={classnames('tagUI', className, { 'tagUI-large': size === 'large' })}
        style={{ width: width ?? 'auto', color: theme?.color, backgroundColor: theme?.bgcolor, ...style }}
        {...otherProps}
      >
        {!!options && options?.length > 0 ? getOptionConfig(dataIndex, options)?.label : children}
        {icon}
      </div>
    );
  }
};

export default TagUI;
