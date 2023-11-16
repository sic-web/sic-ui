import React from 'react';
import { Modal } from 'antd';
import './index.scss';

const styleIcon = (type?: string) => {
  if (type === 'primary') {
    return { backgroundColor: 'rgba(46, 100, 250, 0.10)' }; // 蓝色
  } else if (type === 'danger') {
    return { backgroundColor: 'rgba(255, 120, 117, 0.1)' }; // 红色
  } else {
    return { backgroundColor: 'rgba(46, 100, 250, 0.10)' }; // 蓝色
  }
};

const titleRender = (title: string, icon: React.ReactNode, type?: string) => (
  <div className="sic-modalui-title">
    <div>{title}</div>
    <div className="sic-modalui-title-icon" style={styleIcon(type)}>
      {icon}
    </div>
  </div>
);

const ModalUI = (props: any) => {
  const { isOpen, setIsOpen, confirm, title, icon, footer, type, children, ...otherProps } = props;
  return (
    <Modal
      className="sic-modalui"
      open={isOpen}
      onOk={confirm}
      closeIcon={false}
      onCancel={() => setIsOpen(false)}
      title={titleRender(title, icon, type)}
      footer={footer ? footer : undefined}
      {...otherProps}
    >
      {children}
    </Modal>
  );
};
export default ModalUI;
