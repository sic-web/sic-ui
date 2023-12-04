import React, { useState, useEffect } from 'react';
import { Upload, message } from 'antd';
// import { getSignature } from '@/server/common/index';
import type { RcFile } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
import { calculateMD5 } from '../../../utils';
import { ButtonUI, IconUI } from 'sic-ui';
import './index.scss';

// oss上传获取签名
export const getSignature = async (scene: string, fileName: string, md5: any) => {
  // const res = await http.get(`/base_common/v1/public/oss/signature/get/${scene}/${fileName}/${md5}`);
  const res = {};
  return res;
};

interface OSSDATA {
  accessId: string;
  callBack: string;
  dir: string;
  expire: string;
  host: string;
  policy: string;
  signature: string;
}
const File = (props: any) => {
  const { value, onChange, scene, maxLength, fileType = 'file' } = props;
  const fileListValue: any = [];
  if (value) {
    Object.values(value).forEach((item) => {
      fileListValue.push(item);
    });
  }

  // 上传到阿里云的数据
  const [OSSData, setOSSData] = useState<OSSDATA>();
  // 文件信息
  const [fileList, setFileList] = useState<UploadFile[]>(fileListValue);

  const triggerChange = (list: any) => {
    const data: any = [];
    list.forEach((item: any) => {
      const obj: any = {};
      obj.md5 = item.md5;
      obj.url = item.url;
      data.push(obj);
    });
    onChange?.(data);
  };

  const handleUpload = async () => {
    if (OSSData) {
      const formData = new FormData();
      fileList.forEach((item: any) => {
        if (item.signature === OSSData.signature) {
          formData.append('key', OSSData?.dir); //必须
          formData.append('OSSAccessKeyId', OSSData?.accessId); //必须
          formData.append('policy', OSSData?.policy); //必须
          formData.append('Signature', OSSData?.signature); //必须
          formData.append('callback', OSSData?.callBack);
          formData.append('expire', OSSData?.expire);
          formData.append('accessId', OSSData?.accessId);
          formData.append('dir', OSSData?.dir);
          formData.append('file', item as RcFile); //必须
        }
      });

      fetch(OSSData.host, {
        method: 'POST',
        body: formData,
      }).then((res) => {
        if (res.ok) {
          res.json().then((res) => {
            if (res.code === '0') {
              fileList?.forEach((item: any) => {
                if (item.signature === OSSData.signature) {
                  item.url = res?.body?.url;
                  item.md5 = res?.body?.md5;
                }
              });
              triggerChange(fileList);
              message.success('上传成功');
            } else {
              message.error('上传失败');
            }
          });
        }
      });
    }
  };

  useEffect(() => {
    handleUpload();
  }, [OSSData]);

  const onRemove = (file: any) => {
    const files = (fileList || [])?.filter((v) => v?.uid !== file?.uid);
    setFileList(files);
    triggerChange(files);
  };

  const beforeUpload = async (file: any) => {
    const fileName = file.name.replace(/\s*/g, '');
    const md5Hash = await calculateMD5(file);
    const result = await getSignature(scene, fileName, md5Hash);
    if (result?.code === '0') {
      file.signature = result?.body.signature;
      setOSSData(result?.body);
      setFileList([...fileList, file]);
      return false;
    } else {
      message.error(result?.msg);
    }
  };
  const uploadProps = {
    beforeUpload: beforeUpload,
    onRemove,
  };
  return (
    <div className="sic-uploadFileUI">
      <Upload.Dragger
        name="files"
        action="/upload.do"
        {...uploadProps}
        maxCount={maxLength}
        style={{ backgroundColor: '#fff', borderRadius: 3 }}
      >
        <div className="UploadFileUI-content">
          {fileType === 'excel' && (
            <IconUI name="Excel" theme="filled" size="48" fill="var(--textcolor)" strokeWidth={2} className="icon" />
          )}
          {fileType === 'pdf' && (
            <IconUI name="FilePdf" theme="outline" size="48" fill="var(--textcolor)" strokeWidth={2} className="icon" />
          )}
          {fileType === 'file' && (
            <IconUI name="FileAddition" theme="outline" size="48" fill="var(--textcolor)" strokeWidth={2} className="icon" />
          )}
          <div className="UploadFileUI-content-right">
            <div>
              <ButtonUI type="border">点击上传</ButtonUI>
            </div>
            <div className="describe">
              或直接把
              {(() => {
                if (fileType === 'excel') {
                  return 'Excel';
                } else if (fileType === 'pdf') {
                  return 'PDF';
                } else if (fileType === 'file') {
                  return '';
                }
              })()}
              文件拖拽到这里
            </div>
          </div>
        </div>
      </Upload.Dragger>
    </div>
  );
};

export default File;
