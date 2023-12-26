import React from 'react';
import './index.scss';
const LoadingUI = (props: any) => {
  const { isShowLoading = true, children } = props;
  return <div className="sic-loadingui">{isShowLoading ? <div className="sic-loadingui-content"></div> : children}</div>;
};
export default LoadingUI;
