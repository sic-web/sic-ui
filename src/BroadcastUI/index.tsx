import { Carousel, Popover } from 'antd';
import React, { useRef } from 'react';
import { IconUI } from 'sic-ui';
import './index.scss';

interface IProps {
  /** 广播消息列表 */
  items?: Array<string | number>;
  /** 组件宽度 */
  width?: number;
  /** 文字对齐方式 */
  textAlign?: 'left' | 'center' | 'right';
}

const BroadcastUI = (props: IProps) => {
  const ref = useRef(null);
  const { items = [], width, textAlign = 'left' } = props;

  return (
    <div className="sicBroadcastui" style={{ width: width }}>
      <IconUI name="Help" theme="filled" fill="var(--red)" size="18" />
      {items?.length > 0 && (
        <div className="sicBroadcastui-content">
          <Carousel autoplay={items?.length > 1} dots={false} dotPosition="left" autoplaySpeed={5000} adaptiveHeight>
            {items.map((item: string | number, index: number) => (
              <div className="sicBroadcastui-content-item" key={index}>
                <div className="sicBroadcastui-content-item-text" style={{ textAlign: textAlign }}>
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
            <div className="sicBroadcastui-popover" style={{ width: width ? width - 20 : 'auto' }}>
              {items?.map((item: string | number, index: number) => (
                <div className="sicBroadcastui-popover-item" key={index}>
                  {item}
                </div>
              ))}
            </div>
          }
        >
          <div className="sicBroadcastui-more" ref={ref}>
            查看
          </div>
        </Popover>
      )}
    </div>
  );
};
export default BroadcastUI;
