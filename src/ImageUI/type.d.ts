import { Image } from 'antd';
import { ComponentProps } from 'react';

/** 下载函数类型 */
export interface DownloadPropsType {
  image: ImgInfoType;
}

export interface ImgInfoType {
  url: string;
  alt: string;
  width: string | number;
  height: string | number;
}

/** 相册组件的参数类型 */
export type PreviewGroupUIPropsType = ComponentProps<typeof Image.PreviewGroup>;
