import React from 'react';
import { Spin, SpinProps } from 'antd';
import { ImageUI } from 'sic-ui';
import classnames from 'classnames';
import './index.scss';

interface SpinUIProps extends SpinProps {
  isShowLoading?: boolean;
  loadingImage?: string;
  maskTransparent?: boolean;
  children?: React.ReactNode;
}
const LoadingUI = (props: SpinUIProps) => {
  const { isShowLoading = true, loadingImage, maskTransparent, children, ...otherProps } = props;

  return (
    <Spin
      wrapperClassName={classnames('loadingUI', { 'loadingUI-transparent': maskTransparent })}
      spinning={isShowLoading}
      indicator={
        loadingImage ? (
          <ImageUI className="loadingUI-image" src={loadingImage} preview={false} />
        ) : (
          <div className="loadingUI-loader">
            <div className="loadingUI-loader-content" />
          </div>
        )
      }
      {...otherProps}
    >
      {children}
    </Spin>
  );
};

export default LoadingUI;
