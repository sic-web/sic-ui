import React from 'react';
import type { ImageProps } from 'antd';
import { Image, Space } from 'antd';
import { IconUI } from 'sic-ui';
import PreviewGroupUI from './PreviewGroupUI';
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  UndoOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import './index.scss';

interface ImageUIProps extends ImageProps {
  className?: string;
  src: string;
  preview?: boolean | ImageProps['preview'];
  maskType?: number;
  clickOtherButton?: () => void;
  style?: React.CSSProperties;
}
const ImageUI = (props: ImageUIProps) => {
  const { className, src, preview, maskType = 1, clickOtherButton, style, ...otherProps } = props;

  const onDownload = () => {
    fetch(src)
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
  const clickRight = (e: any) => {
    e.stopPropagation();
    if (clickOtherButton) {
      clickOtherButton();
    }
  };

  //蒙层类型
  const renderMask = () => {
    switch (maskType) {
      case 1:
        return (
          <div className="sicImageUI-mask">
            <IconUI name="PreviewOpen" size="14" fill="#fff" />
            <div className="sicImageUI-mask-name">预览</div>
          </div>
        );
      case 2:
        return (
          <div className="sicImageUI-mask">
            <div className="sicImageUI-mask-left">
              <IconUI name="PreviewOpen" size="14" fill="#fff" />
              <div className="sicImageUI-mask-name">预览</div>
            </div>
            <div className="sicImageUI-mask-right" onClick={clickRight}>
              <IconUI name="Export" size="14" fill="#fff" />
              <div className="sicImageUI-mask-name">上传</div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="sicImageUI-mask">
            <div className="sicImageUI-mask-left">
              <IconUI name="PreviewOpen" size="14" fill="#fff" />
              <div className="sicImageUI-mask-name">预览</div>
            </div>
            <div className="sicImageUI-mask-right" onClick={clickRight}>
              <IconUI name="Delete" size="14" fill="var(--red)" />
              <div className="sicImageUI-mask-delete">删除</div>
            </div>
          </div>
        );
      default:
        return (
          <div className="sicImageUI-mask">
            <IconUI name="PreviewOpen" size="14" fill="#fff" />
            <div className="sicImageUI-mask-name">预览</div>
          </div>
        );
    }
  };
  const previewConfig: ImageProps['preview'] = {
    mask: renderMask(),
    toolbarRender: (
      _,
      { transform: { scale }, actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn, onReset } }
    ) => (
      <Space size={12} className="sicImageUI-toolbar">
        <DownloadOutlined onClick={onDownload} />
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
  const mergedPreview = typeof preview === 'boolean' ? preview : { ...previewConfig, ...preview };
  return (
    <div className={`sicImageUI ${className ?? ''}`} style={style}>
      <Image src={src} preview={mergedPreview} {...otherProps} />
    </div>
  );
};

(ImageUI as any).PreviewGroupUI = PreviewGroupUI;

export default ImageUI as React.ForwardRefExoticComponent<ImageUIProps & React.RefAttributes<HTMLImageElement>> & {
  PreviewGroupUI: typeof PreviewGroupUI;
};
