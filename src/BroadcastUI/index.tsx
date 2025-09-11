import React, { useRef } from 'react';
import { Carousel, Popover } from 'antd';
import { IconUI } from 'sic-ui';
import classnames from 'classnames';
import './index.scss';

interface PropsType {
  className?: string;
  /** 广播消息列表 */
  items?: Array<string | number>;
  /** 组件宽度 */
  width?: number;
  /** 文字对齐方式 */
  textAlign?: 'left' | 'center' | 'right';
}

const BroadcastUI = (props: PropsType) => {
  const ref = useRef(null);
  const { className, items = [], width, textAlign = 'left' } = props;

  return (
    <div className={classnames('broadcastUI', className)} style={{ width: width }}>
      <IconUI name="Help" theme="filled" fill="var(--red)" size="18" />
      {items?.length > 0 && (
        <div className="broadcastUI-content">
          <Carousel autoplay={items?.length > 1} dots={false} dotPosition="left" autoplaySpeed={5000} adaptiveHeight>
            {items.map((item: string | number, index: number) => (
              <div className="broadcastUI-content-item" key={index}>
                <div className="broadcastUI-content-item-text" style={{ textAlign: textAlign }}>
                  {item}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
      {items?.length > 1 && (
        <Popover
          color="rgba(0, 0, 0, 0.85)"
          placement="bottomRight"
          getPopupContainer={() => ref.current || document.body}
          content={
            <div className="broadcastUI-popover" style={{ width: width ? width - 20 : 'auto' }}>
              {items?.map((item: string | number, index: number) => (
                <div className="broadcastUI-popover-item" key={index}>
                  {item}
                </div>
              ))}
            </div>
          }
        >
          <div className="broadcastUI-more" ref={ref}>
            查看
          </div>
        </Popover>
      )}
    </div>
  );
};
export default BroadcastUI;
