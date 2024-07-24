import React, { Fragment } from 'react';
import { Modal } from 'antd';
import './index.scss';

const RenderTitle = (title: string, icon: React.ReactNode, type?: string) => {
  return (
    <Fragment>
      {(title || icon) && (
        <div className="sicModalui-header">
          {title && <div>{title}</div>}
          {icon && <div className={`sicModalui-header-icon ${type ?? ''}`}>{icon}</div>}
        </div>
      )}
    </Fragment>
  );
};

const ModalUI = (props: any) => {
  const { className, isOpen, setIsOpen, title, icon, type, confirm, children, ...otherProps } = props;
  return (
    <Modal
      className={`sicModalui ${className ?? ''} ${type ?? ''}`}
      open={isOpen}
      title={RenderTitle(title, icon, type)}
      closeIcon={!icon}
      onCancel={() => setIsOpen(undefined)}
      onOk={confirm}
      {...otherProps}
    >
      {children}
    </Modal>
  );
};
export default ModalUI;
