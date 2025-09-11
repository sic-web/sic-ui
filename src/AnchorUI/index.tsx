import React, { useEffect, useState } from 'react';
import { Anchor } from 'antd';
import classnames from 'classnames';
import './index.scss';

const AnchorUI = (props: any) => {
  const { className, anchoruiRef, items, anchorActive, setAnchorActive } = props;
  // 当前聚焦id
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (anchorActive) {
      //判断是否点击的是当前聚焦项
      if ('#' + anchorActive !== activeId) {
        const targetElement = document.getElementById(anchorActive);
        if (targetElement) targetElement.scrollIntoView({ behavior: 'auto' });
      }
      //重置父级指定聚焦项  防止重复点击无效
      if (setAnchorActive) setAnchorActive('');
    }
  }, [anchorActive]);

  const newItems = items.map((item: any) => {
    return {
      key: item.key,
      title: item.title,
      href: `#${item.key}`,
    };
  });

  return (
    <Anchor
      className={classnames('anchoraUI', className)}
      items={newItems}
      affix={false}
      getContainer={() => anchoruiRef?.current}
      onClick={(e) => e.preventDefault()}
      onChange={(e: string) => setActiveId(e)}
    />
  );
};
export default AnchorUI;
