import { Input, Space } from 'antd';
import React, { useCallback, useState } from 'react';
import { MessageUI } from 'sic-ui';
import './dictionary.scss';
import { IconItem, searchIcons } from './rally';

const Dictionary: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const distributeProps = { width: 24, height: 24, size: '28', fill: 'var(--themeColor)' };

  // 点击复制
  const clickCopy = useCallback((e: React.MouseEvent, item: IconItem) => {
    e.stopPropagation();
    const text = `${item.name}`;
    try {
      navigator.clipboard.writeText(text);
      MessageUI.info('图标名称已复制到剪贴板');
    } catch {
      MessageUI.error('复制失败');
    }
  }, []);

  // 使用 searchIcons 函数进行搜索，避免重复逻辑
  const filteredIcons = searchIcons(searchText);

  return (
    <div className="dictionary-container">
      <Space direction="vertical" style={{ width: '100%' }}>
        <Input.Search placeholder="搜索图标" allowClear onChange={(e) => setSearchText(e.target.value)} className="dictionary-search" />

        <div className="dictionary">
          {filteredIcons.map((item, index) => (
            <div className="dictionary-item" key={index} onClick={(e) => clickCopy(e, item)} title={`点击复制: ${item.name}`}>
              <div className="dictionary-item-icon">{item.element(distributeProps)}</div>
              <div className="dictionary-item-name">{item.name}</div>
            </div>
          ))}
        </div>

        {filteredIcons.length === 0 && <div className="dictionary-empty">没有找到匹配的图标</div>}
      </Space>
    </div>
  );
};

export default Dictionary;
