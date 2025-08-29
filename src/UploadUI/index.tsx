import React, { useEffect, useState } from 'react';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { Image, Space, Upload } from 'antd';
import { IconUI, MessageUI } from 'sic-ui';
import { file_calculate_md5, getUrlConfig } from 'sic-util';
import { DraggerFileItems } from './type';
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

interface fileListType extends UploadFile {
  url?: string;
  md5?: string;
}

export interface UploadUIProps extends UploadProps {
  className?: string;
  mode: number; // 根据 UI 模式来决定渲染方式
  value?: fileListType[]; // 控制组件的值
  scene: string; // 上传场景，用于签名接口
  title?: string; // 按钮或提示文字
  fileType?: string; // 文件类型标识，比如 pdf/image 等
  maxSize?: number; // 最大文件大小（单位 MB）
  maxCount?: number; // 最大上传数量
  children?: React.ReactNode;
  backgroundImage?: string; // 背景图地址
  getOssDataAPI?: (scene: string, fileName: string, md5: unknown) => Promise<any>; // 获取签名的函数
  onChange?: any; // 受控模式下触发
}

// 文件名转义 后端解析地址需要排除部分符号
const getCheckFileName = (name: string) => {
  const fileName = name
    .replace(/\s*/g, '')
    .replace(/&/g, '_')
    .replace(/%/g, '')
    .replace(/\.(?=.*\.)/g, '');

  return fileName;
};
// 获取图片base64格式
const getBase64 = (file: Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const UploadUI = (props: UploadUIProps) => {
  const {
    className,
    mode = 1,
    value,
    scene,
    title = '点击上传',
    fileType = 'file',
    maxSize,
    maxCount = 1,
    children,
    backgroundImage,
    onChange,
    getOssDataAPI,
    ...otherProps
  } = props;

  // 文件列表
  const [fileList, setFileList] = useState<fileListType[]>([]);
  // 预览窗口
  const [previewOpen, setPreviewOpen] = useState(false);
  // 预览图片
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    const newFileList =
      value?.map((item: fileListType, index) => ({
        ...item,
        uid: item?.uid || item?.md5 || `temp_uid_${Date.now()}_${index}`,
        name: item?.name || getUrlConfig(item?.url ?? '')?.fileName || `file_${index + 1}`,
      })) || [];
    setFileList(newFileList);
  }, [value]);

  const beforeUpload = (file: UploadFile) => {
    // 检查文件大小
    const fileSize = (file?.size || 0) / 1024 / 1024;
    if (maxSize && fileSize > maxSize) {
      MessageUI.error(`文件最大支持${maxSize}M，请修改图片大小后重试！`);
      return false;
    } else {
      return true;
    }
  };

  // 自定义上传
  const customRequest = async (options: any) => {
    try {
      // 1. 先判断 getOssDataAPI 是否存在且为函数
      if (typeof getOssDataAPI !== 'function') {
        MessageUI.error('获取ossDataAPI未配置！');
        if (options?.onError) options.onError('获取ossDataAPI未配置！', options?.file);
        return; // 提前返回，不继续执行
      }
      // 生成md5
      const md5Hash = await file_calculate_md5(options?.file);
      const fileName = getCheckFileName(options?.file.name);
      // 获取OSS配置
      const ossData = await getOssDataAPI(scene, fileName, md5Hash);
      if (ossData?.code === '0') {
        const formData = new FormData();
        formData.append('key', ossData?.body?.dir);
        formData.append('OSSAccessKeyId', ossData?.body?.accessId);
        formData.append('policy', ossData?.body?.policy);
        formData.append('Signature', ossData?.body?.signature);
        formData.append('callback', ossData?.body?.callBack);
        formData.append('expire', ossData?.body?.expire);
        formData.append('accessId', ossData?.body?.accessId);
        formData.append('dir', ossData?.body?.dir);
        formData.append('file', options?.file);
        const res = await fetch(ossData?.body?.host, { method: 'POST', body: formData });
        if (res?.ok) {
          const data = await res.json();
          if (data?.code === '0') {
            if (options?.onSuccess) options.onSuccess(data?.body, options?.file);
            const newFileList = [...fileList, { ...data?.body, name: fileName }].slice(-maxCount);
            setFileList(newFileList);
            if (onChange) onChange(newFileList);
          } else {
            if (options?.onError) options.onError(data?.msg, options?.file);
            MessageUI.error(data?.msg);
          }
        } else {
          if (options?.onError) options.onError(res?.statusText, options?.file);
          MessageUI.error(res?.statusText);
        }
      } else {
        if (options?.onError) options.onError(ossData?.msg, options?.file);
        MessageUI.error(ossData?.msg);
      }
    } catch {
      MessageUI.error('上传失败，请稍后重试！');
    }
  };

  const onRemove = (file: fileListType) => {
    const newFileList = fileList?.filter((item) => item?.uid !== file?.uid);
    if (onChange) onChange(newFileList);
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };
  const onDownload = () => {
    fetch(previewImage)
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
  const uploadProps: UploadProps = {
    fileList: fileList,
    maxCount: maxCount,
    beforeUpload: beforeUpload,
    customRequest: customRequest,
    onRemove: onRemove,
    ...otherProps,
  };
  return (
    <div className="uploadUI" id={props?.id}>
      {/* 最基础的上传组件，本身不带样式 */}
      {mode === 1 && (
        <Upload className={`uploadUI-mode1 ${className ?? ''}`} showUploadList={false} {...uploadProps}>
          {children}
        </Upload>
      )}
      {/* 图片上传 带预览功能  营业执照、身份证这种带背景图的、尺寸较大 */}
      {mode === 2 && (
        <Upload className={`uploadUI-mode2 ${className ?? ''}`} listType="picture-card" onPreview={onPreview} {...uploadProps}>
          {fileList?.length >= maxCount ? null : (
            <div className="uploadUI-mode2-content" style={{ backgroundImage: `url(${backgroundImage})` }}>
              <IconUI name="Upload" size="24" />
              {title}
            </div>
          )}
        </Upload>
      )}
      {/* 拖拽上传 */}
      {mode === 3 && (
        <Upload.Dragger className={`uploadUI-mode3 ${className ?? ''}`} {...uploadProps}>
          <div className="uploadUI-mode3-content">
            <IconUI name={DraggerFileItems(fileType)?.icon3} strokeWidth={2} />
            {DraggerFileItems(fileType)?.text3}
          </div>
        </Upload.Dragger>
      )}
      {/* 图片上传 带预览功能 */}
      {mode === 4 && (
        <Upload className={`uploadUI-mode4 ${className ?? ''}`} listType="picture-card" onPreview={onPreview} {...uploadProps}>
          {fileList?.length >= maxCount ? null : (
            <div className="uploadUI-mode4-content">
              <IconUI name="Upload" size="20" />
              <div>{title}</div>
            </div>
          )}
        </Upload>
      )}
      {/* 图片上传 带预览功能  带背景图的、尺寸较小 */}
      {mode === 5 && (
        <Upload className={`uploadUI-mode5 ${className ?? ''}`} listType="picture-card" onPreview={onPreview} {...uploadProps}>
          {fileList?.length >= maxCount ? null : (
            <div className="uploadUI-mode5-content">
              <Image src={backgroundImage} height={50} preview={false} />
              <div>{title}</div>
            </div>
          )}
        </Upload>
      )}
      {/* 文件上传 多个文件上传 */}
      {mode === 6 && (
        <Upload className={`uploadUI-mode6 ${className ?? ''}`} showUploadList={false} {...uploadProps}>
          <div className="uploadUI-mode6-content">
            {fileList?.length < maxCount && (
              <div className="mode6BeforeUpload">
                <IconUI name="UploadPdf" />
                <div>{title}</div>
              </div>
            )}
            {fileList?.length > 0 && (
              <div className="mode6UploadList">
                {fileList.map((item: any, index: number) => {
                  return (
                    <div className="mode6UploadList-item" key={index}>
                      <IconUI name="UploadPdf" />
                      <div className="mode6UploadList-item-fileName">{getUrlConfig(item?.url)?.fileName}</div>
                      <div className="mode6UploadList-item-mask" onClick={(e) => e.stopPropagation()}>
                        <div className="mask-delete" onClick={() => onRemove(item)}>
                          <IconUI name="Delete" />
                          删除
                        </div>
                        <div className="mask-check" onClick={() => window.open(item?.url)}>
                          <IconUI name="PreviewOpen" />
                          查看
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Upload>
      )}
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            toolbarRender: (
              _,
              { transform: { scale }, actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn, onReset } }
            ) => (
              <Space size={12} className="uploadUI-previewImageToolbar">
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
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
};
export default UploadUI;
