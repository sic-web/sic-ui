import { message } from 'antd';
import './index.scss';

message.config({
  duration: 3,
  maxCount: 3,
  rtl: false,
  prefixCls: 'sic-message',
});
const MessageUI = {
  success: (config: any) => {
    message.success(config);
  },
  error: (config: any) => {
    message.error(config);
  },
  info: (config: any) => {
    message.info(config);
  },
  warning: (config: any) => {
    message.warning(config);
  },
  loading: (config: any) => {
    message.loading(config);
  },
  destroy: (key: string | undefined) => {
    message.destroy(key);
  },
};
export default MessageUI;
