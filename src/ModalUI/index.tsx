import React from 'react';
import { Modal } from 'antd';
import './index.scss';

const styleIcon = (type?: string) => {
  if (type === 'primary') {
    return { color: 'var(--textcolor)', backgroundColor: 'var(--textcolor2)' };
  } else if (type === 'danger') {
    return { color: 'var(--red)', backgroundColor: 'rgba(255, 120, 117, 0.1)' };
  } else {
    return { color: 'var(--textBlack)', backgroundColor: '#d9d9d9' };
  }
};

const titleRender = (title: string, icon: React.ReactNode, type?: string) => {
  return (
    <>
      {(title || icon) && (
        <div className="sic-modalui-title">
          {title && <div>{title}</div>}
          {icon && (
            <div className="sic-modalui-title-icon" style={styleIcon(type)}>
              {icon}
            </div>
          )}
        </div>
      )}
    </>
  );
};

const ModalUI = (props: any) => {
  const { className, isOpen, setIsOpen, title, icon, type, footer, confirm, children, ...otherProps } = props;
  return (
    <Modal
      className={`sic-modalui ${className ?? ''}`}
      open={isOpen}
      closeIcon={false}
      title={titleRender(title, icon, type)}
      footer={footer}
      onCancel={() => setIsOpen(undefined)}
      onOk={confirm}
      {...otherProps}
    >
      {children}
    </Modal>
  );
};
export default ModalUI;
