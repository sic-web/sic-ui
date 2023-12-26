import React from 'react';
import './index.scss';
const LoadingUI = (props: any) => {
  const { isShowLoading = true, children } = props;
  return isShowLoading ? <div className="sic-loadingui"></div> : children;
};
export default LoadingUI;
