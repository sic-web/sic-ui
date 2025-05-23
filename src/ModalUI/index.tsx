import React, { useRef, useState, Fragment } from 'react';
import { Modal } from 'antd';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
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
  const [disabled, setDisabled] = useState(true);
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
  const draggleRef = useRef<HTMLDivElement>(null);

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  return (
    <Modal
      className={`sicModalui ${className ?? ''} ${type ?? ''}`}
      open={isOpen}
      title={
        <div
          style={{ width: '100%', cursor: 'move' }}
          onMouseOver={() => {
            if (disabled) {
              setDisabled(false);
            }
          }}
          onMouseOut={() => setDisabled(true)}
        >
          {RenderTitle(title, icon, type)}
        </div>
      }
      onCancel={() => setIsOpen(undefined)}
      onOk={confirm}
      closeIcon={!icon}
      modalRender={(modal) => (
        <Draggable disabled={disabled} bounds={bounds} nodeRef={draggleRef} onStart={(event, uiData) => onStart(event, uiData)}>
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      )}
      {...otherProps}
    >
      {children}
    </Modal>
  );
};
export default ModalUI;
