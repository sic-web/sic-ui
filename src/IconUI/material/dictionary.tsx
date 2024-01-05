import React from 'react';
import { iconRally } from './rally';
import { MessageUI } from 'sic-ui';
import './dictionary.scss';
const Dictionary = () => {
  const distributeProps = { width: 24, height: 24, size: '28', fill: '#1EAF69' };
  // 点击复制
  const clickCopy = (e: any, item: any) => {
    e.stopPropagation();
    const text = `${item?.name}`;
    try {
      navigator.clipboard.writeText(text);
      MessageUI.info('文本已复制到剪贴板');
    } catch (err) {
      MessageUI.success('复制失败');
    }
  };
  return (
    <div className="dictionary">
      {iconRally?.map((item: any, index) => {
        return (
          <div className="dictionary-item" key={index} onClick={(e) => clickCopy(e, item)}>
            <div className="dictionary-item-icon">{item?.element(distributeProps)}</div>
            <div className="dictionary-item-name">{item?.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Dictionary;
