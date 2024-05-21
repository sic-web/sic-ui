import React, { useState, useEffect } from 'react';
import { IconUI } from 'sic-ui';
import { Tooltip } from 'antd';
import './index.scss';

interface IProps {
  width: number;
  promptList: string[];
}

const BroadcastUI = (props: IProps) => {
  const { width, promptList } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % promptList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [promptList.length]);

  return (
    <div className="sic-broadcastui" style={{ width: width }}>
      <div className="sic-broadcastui-left">
        <div className="sic-broadcastui-icon">
          <IconUI name="Help" theme="filled" fill="#FF7875" size="18" />
        </div>
        <div className="sic-broadcastui-text" key={current} style={{ width: promptList?.length > 1 ? width - 90 : width - 30 }}>
          {promptList[current]}
        </div>
      </div>
      {promptList?.length > 1 && (
        <Tooltip
          title={
            <div>
              {promptList?.map((item, index) => {
                return <div key={index}>{item}</div>;
              })}
              <div className="sic-broadcastui-button">
                <div className="text" onClick={() => setIsOpen(false)}>
                  我知道了
                </div>
              </div>
            </div>
          }
          placement="bottomRight"
          overlayStyle={{ maxWidth: width }}
          open={isOpen}
        >
          <div className="sic-broadcastui-more" onClick={() => setIsOpen(!isOpen)}>
            点击查看
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default BroadcastUI;
