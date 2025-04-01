import React from 'react';
import { iconMap } from './material/rally';

export interface IconUIProps {
  /** 图标名称 */
  name: string;
  /** 图标大小 */
  size?: string | number;
  /** 图标填充颜色 */
  fill?: string;
  /** 图标描边宽度 */
  strokeWidth?: number;
  /** 图标主题 */
  theme?: 'outline' | 'filled' | 'two-tone' | 'multi-color';
  /** 图标宽度 */
  width?: string | number;
  /** 图标高度 */
  height?: string | number;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 点击事件 */
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
  /** 其他属性 */
  [key: string]: any;
}

const IconUI: React.FC<IconUIProps> = (props) => {
  const { name, ...otherProps } = props;

  // 直接从 iconMap 获取图标，避免每次都遍历数组
  const current = iconMap[name];

  if (!current) {
    return null;
  }

  return current?.element({ ...otherProps });
};
export default IconUI;
