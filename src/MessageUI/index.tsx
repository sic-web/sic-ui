import { message as MessageUI } from 'antd';
import './index.scss';

MessageUI.config({
  duration: 3,
  maxCount: 3,
  rtl: false,
  prefixCls: 'messageUI',
});
export default MessageUI;
