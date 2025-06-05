import React, { useEffect, useState } from 'react';
import { IconUI } from 'sic-ui';
import { video_preview } from 'sic-util';
import './index.scss';

interface PropsType {
  videoUrl: string;
  frameTime?: number;
  fallback?: string;
  alt?: string;
  onClick?: () => void;
}

const VideoPreviewUI = (props: PropsType) => {
  const { videoUrl, frameTime = 0.1, fallback = '', alt = '视频预览图', onClick } = props;
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const getVideoPreview = async () => {
    const base64 = await video_preview(videoUrl, frameTime);
    setPreviewUrl(base64 || fallback);
  };
  useEffect(() => {
    if (videoUrl) getVideoPreview();
  }, [videoUrl]);

  return (
    <div className="videoPreviewUI" onClick={onClick}>
      {previewUrl && <img className="videoPreviewUI-img" src={previewUrl} alt={alt} />}
      <div className="videoPreviewUI-mask">
        <IconUI name="Play" />
      </div>
    </div>
  );
};
export default VideoPreviewUI;
