import React from 'react';
import { Modal } from 'antd';
import './index.scss';

const styleIcon = (type?: string) => {
  if (type === 'primary') {
    return { backgroundColor: 'var(--textcolor2)' };
  } else if (type === 'danger') {
    return { color: 'var(--red)', backgroundColor: 'rgba(255, 120, 117, 0.1)' };
  } else {
    return { backgroundColor: 'var(--textcolor2)' };
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
  const { isOpen, setIsOpen, confirm, title, icon, footer, type, children, className, ...otherProps } = props;
  return (
    <Modal
      className={`sic-modalui ${className ?? ''}`}
      open={isOpen}
      onOk={confirm}
      closeIcon={false}
      onCancel={() => setIsOpen(false)}
      title={titleRender(title, icon, type)}
      footer={footer}
      {...otherProps}
    >
      {children}
    </Modal>
  );
};
export default ModalUI;
