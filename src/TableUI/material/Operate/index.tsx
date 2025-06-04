import { Popover } from 'antd';
import React from 'react';
import { IconUI, TextUI } from 'sic-ui';
import './index.scss';

export const Operate = (props: any) => {
  const { child, maxCount = 2 } = props;
  // 渲染默认展示的标签
  const renderItem = (childrenArray: any) => {
    return childrenArray.slice(0, maxCount).map((item: any, index: number) => (
      <div className="sicTableuiOperate-item" key={index}>
        {item}
        {index < maxCount - 1 && index < childrenArray?.length - 1 && <div className="sicTableuiOperate-item-divider">|</div>}
      </div>
    ));
  };
  // 渲染默认隐藏的标签
  const renderPopoverContent = (childrenArray: any) => {
    return childrenArray.slice(maxCount).map((item: any, index: number) => <div key={index}>{item}</div>);
  };
  const renderChildren = () => {
    const childrenArray = React.Children.toArray(child().props.children);
    return (
      <>
        {renderItem(childrenArray)}
        {childrenArray?.length > maxCount && (
          <Popover
            rootClassName="sicTableuiOperate-popover"
            trigger="click"
            placement="bottom"
            content={renderPopoverContent(childrenArray)}
          >
            <IconUI className="sicTableuiOperate-more" name="More" />
          </Popover>
        )}
        {childrenArray?.length === 0 && <TextUI> - </TextUI>}
      </>
    );
  };

  return <div className="sicTableuiOperate">{renderChildren()}</div>;
};
