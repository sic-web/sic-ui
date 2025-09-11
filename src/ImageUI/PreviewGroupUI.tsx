import React from 'react';
import { Image, Space } from 'antd';
import type { DownloadPropsType, PreviewGroupUIPropsType } from './type';
import {
  DownloadOutlined,
  LeftOutlined,
  RightOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';

const PreviewGroupUI: React.FC<PreviewGroupUIPropsType> = ({ preview, children, ...otherProps }) => {
  const onDownload = ({ image }: DownloadPropsType) => {
    fetch(image?.url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.png';
        document.body.appendChild(link);
        link.click();
        URL.revokeObjectURL(url);
        link.remove();
      });
  };

  const previewConfig: PreviewGroupUIPropsType['preview'] = {
    toolbarRender: (
      _,
      {
        transform: { scale },
        image,
        current,
        total,
        actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn, onReset, onActive },
      }
    ) => (
      <Space size={12} className="imageUI-toolbar">
        <LeftOutlined disabled={current === 0} onClick={() => onActive?.(-1)} />
        <RightOutlined disabled={current === total - 1} onClick={() => onActive?.(1)} />
        <DownloadOutlined disabled={!image.url} onClick={() => onDownload({ image: image })} />
        <SwapOutlined rotate={90} onClick={onFlipY} />
        <SwapOutlined onClick={onFlipX} />
        <RotateLeftOutlined onClick={onRotateLeft} />
        <RotateRightOutlined onClick={onRotateRight} />
        <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
        <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
        <UndoOutlined onClick={onReset} />
      </Space>
    ),
  };

  // 复用单图的 previewConfig 逻辑
  const mergedGroupPreview = typeof preview === 'boolean' ? preview : { ...previewConfig, ...preview };

  return (
    <Image.PreviewGroup preview={mergedGroupPreview} {...otherProps}>
      {children}
    </Image.PreviewGroup>
  );
};
export default PreviewGroupUI;
