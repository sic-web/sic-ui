import React from 'react';
import { Image, Spin } from 'antd';
import { osLoading } from '../assets';
import './index.scss';

const LoadingUI = (props: any) => {
  const { spinning, children, style, ...otherProps } = props;
  return (
    <Spin
      className="sic-loadui"
      spinning={spinning}
      style={style}
      indicator={<Image className="image" src={osLoading} preview={false} />}
      {...otherProps}
    >
      {children}
    </Spin>
  );
};
export default LoadingUI;
