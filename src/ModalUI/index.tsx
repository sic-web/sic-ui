import React, { Fragment } from 'react';
import { Modal } from 'antd';
import './index.scss';

const RenderTitle = (title: string, icon: React.ReactNode, type?: string) => {
  return (
    <Fragment>
      {(title || icon) && (
        <div className="sic-modalui-title">
          {title && <div>{title}</div>}
          {icon && <div className={`sic-modalui-title-icon ${type ?? ''}`}>{icon}</div>}
        </div>
      )}
    </Fragment>
  );
};

const ModalUI = (props: any) => {
  const { className, isOpen, setIsOpen, title, icon, type, footer, confirm, children, ...otherProps } = props;
  return (
    <Modal
      className={`sic-modalui ${className ?? ''} ${type ?? ''}`}
      open={isOpen}
      closeIcon={false}
      title={RenderTitle(title, icon, type)}
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
