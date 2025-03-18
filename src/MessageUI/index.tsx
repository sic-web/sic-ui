import { message, MessageArgsProps } from 'antd';
import './index.scss';

message.config({
  duration: 3,
  maxCount: 3,
  rtl: false,
  prefixCls: 'sic-message',
});
const MessageUI = {
  success: (config: MessageArgsProps) => {
    message.success(config);
  },
  error: (config: MessageArgsProps) => {
    message.error(config);
  },
  info: (config: MessageArgsProps) => {
    message.info(config);
  },
  warning: (config: MessageArgsProps) => {
    message.warning(config);
  },
  loading: (config: MessageArgsProps) => {
    message.loading(config);
  },
  destroy: (key: string | undefined) => {
    message.destroy(key);
  },
};
export default MessageUI;
