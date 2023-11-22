import React, { useState, useEffect } from 'react';
import './index.scss';

const AnchorUI = (props: any) => {
  const { items, getContainer, current, defaultCurrent } = props;
  const [select, setSelect] = useState(defaultCurrent);

  useEffect(() => {
    setSelect(current);
  }, [current]);

  useEffect(() => {
    const container = getContainer();
    const targetElement = container.querySelector(`#${select}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }, [select]);

  console.log('--getContainer', getContainer());
  return (
    <div className="sic-anchorui">
      {items?.map((item: any) => {
        return (
          <div
            className={`sic-anchorui-item ${select === item.key ? 'sic-anchorui-item-select' : null}`}
            key={item.key}
            onClick={() => setSelect(item.key)}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default AnchorUI;
