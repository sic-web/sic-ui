import React, { useEffect, useState } from 'react';
import './index.scss';

interface IProps {
  className?: string;
  text?: string;
}

const fetchData = async () => {
  const url = 'https://gx-sic-prod.oss-cn-shanghai.aliyuncs.com/web_assets/svg/nodata.txt';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.text();

    return result;
  } catch (error) {
    console.log('--error', error);
  }
};
const EmptyUI = (props: IProps) => {
  const { className, text = '暂无内容' } = props;
  // 暂无数据的image的svg格式
  const [stringSVG, setStringSVG] = useState('');
  useEffect(() => {
    const getNodataSvg = async () => {
      const res = await fetchData();
      setStringSVG(`${res}`);
    };
    getNodataSvg();
  }, []);
  return (
    <div className={`sicEmptyUI ${className ?? ''}`}>
      <div className="sicEmptyUI-image" dangerouslySetInnerHTML={{ __html: stringSVG }} />
      <div className="sicEmptyUI-text">{text}</div>
    </div>
  );
};
export default EmptyUI;
