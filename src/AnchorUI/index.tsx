import React, { useState } from 'react';
import './index.scss';

const AnchorUI = (props: any) => {
  const { items, getContainer } = props;
  const [current, setCurrent] = useState(0);

  const click = (index: number, id: string) => {
    setCurrent(index + 1);
    console.log('---', id);
  };

  console.log('--getContainer', getContainer());
  return (
    <div className="sic-anchorui">
      {items?.map((item: any, index: number) => {
        return (
          <div
            className={`sic-anchorui-item ${current === index ? 'sic-anchorui-item-select' : null}`}
            key={item.id}
            onClick={() => click(index, item.id)}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default AnchorUI;
