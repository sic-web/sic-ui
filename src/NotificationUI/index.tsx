import React, { useEffect } from 'react';
import { notification } from 'antd';

const NotificationUI = (props: any) => {
  const [api, contextHolder] = notification.useNotification();
  const { notmsg, placement = 'topRight' } = props;

  useEffect(() => {
    if (notmsg?.type) {
      (api as any)[notmsg.type]({
        description: notmsg?.description,
        message: notmsg?.message ?? '系统提示',
        duration: 2,
        placement,
      });
    }
  }, [notmsg]);

  return <>{contextHolder}</>;
};

export default NotificationUI;
