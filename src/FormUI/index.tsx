import React from 'react';
import './index.scss';
const ProTitle = (props: any) => {
  const { required = true, line = true, children = '标题' } = props;
  return (
    <div className="sic-from-protitle">
      <div className="sic-from-protitle-value">
        {required && <div className="sic-from-protitle-value-icon">*</div>}
        {children}
      </div>
      {line && <div className="sic-from-protitle-line"></div>}
    </div>
  );
};

const FormUI = { ProTitle };
export default FormUI;
