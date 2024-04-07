import React from 'react';
import { message } from 'antd';
import { Info } from '@icon-park/react';
import './index.scss';

message.config({
  duration: 3,
  maxCount: 3,
  rtl: false,
  prefixCls: 'sic-message',
});
const MessageUI = {
  success: (content: any, duration?: any, onClose?: any) => {
    message.success(content, duration, onClose);
  },
  error: (content: any, duration?: any, onClose?: any) => {
    message.error(content, duration, onClose);
  },
  info: (props: any) => {
    let content = '';
    const icon = (
      <span style={{ marginRight: 8 }}>
        <Info theme="multi-color" size="20" fill={['#fff', '#fff', '#2e64fa', '#fff']} />
      </span>
    );
    if (typeof props === 'string') {
      content = props;
    } else {
      content = props?.content;
    }
    const obj = { ...props, content, icon };
    message.info(obj);
  },
  warning: (content: any, duration?: any, onClose?: any) => {
    message.warning(content, duration, onClose);
  },
  loading: (content: any, duration?: any, onClose?: any) => {
    message.loading(content, duration, onClose);
  },
};
export default MessageUI;
