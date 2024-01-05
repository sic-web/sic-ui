import { message } from 'antd';
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
  info: (content: any, duration?: any, onClose?: any) => {
    message.info(content, duration, onClose);
  },
  warning: (content: any, duration?: any, onClose?: any) => {
    message.warning(content, duration, onClose);
  },
  loading: (content: any, duration?: any, onClose?: any) => {
    message.loading(content, duration, onClose);
  },
};
export default MessageUI;
