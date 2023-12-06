import React from 'react';
import { Image, Space } from 'antd';
import { IconUI } from 'sic-ui';
import {
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
import './index.scss';
interface ImageUIProps {
  src: string;
  width?: number;
  height?: number;
  preview?: boolean;
  maskType?: number;
  className?: string;
  style?: React.CSSProperties;
  clickOtherButton?: () => void;
}

const ImageUI = (props: ImageUIProps) => {
  const { src, width, height, preview = true, maskType = 1, className, style, clickOtherButton, ...otherProps } = props;
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
  const toolbar = () => {
    if (src && preview) {
      return {
        mask: renderMask(),
        toolbarRender: (
          _: any,
          { transform: { scale }, actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn } }: any,
        ) => (
          <Space size={12} className="sicImageUI-toolbar">
            <DownloadOutlined onClick={onDownload} />
            <SwapOutlined rotate={90} onClick={onFlipY} />
            <SwapOutlined onClick={onFlipX} />
            <RotateLeftOutlined onClick={onRotateLeft} />
            <RotateRightOutlined onClick={onRotateRight} />
            <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
            <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
          </Space>
        ),
      };
    } else {
      return false;
    }
  };
  return (
    <div className={`sicImageUI ${className ?? ''}`} style={style}>
      <Image src={src} width={width} height={height} preview={toolbar()} {...otherProps} />
    </div>
  );
};

export default ImageUI;
