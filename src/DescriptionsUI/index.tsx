import React from 'react';
import { Col, Row } from 'antd';
import classnames from 'classnames';
import './index.scss';

interface PropsType {
  className?: string;
  items: ItemType[];
  isSingleLine?: boolean;
  labelWidth?: number | string;
  type?: 'table' | 'text';
  layout?: 'horizontal' | 'vertical';
  labelAlign?: 'left' | 'right';
  colon?: boolean;
}

interface ItemType {
  label: string;
  children: React.ReactNode;
  span?: number;
  noDataHide?: boolean;
}
//新描述组件
const DescriptionsUI = (props: PropsType) => {
  const {
    className,
    items,
    isSingleLine = false,
    labelWidth = 120,
    type = 'table',
    layout = 'horizontal',
    labelAlign = 'left',
    colon = true,
  } = props;

  return (
    <>
      {items?.length > 0 && (
        <div className={classnames('descriptionsUI', className, { 'descriptionsUI-hide': isSingleLine })}>
          {type === 'table' && (
            <Row className="descriptionsUI-table">
              {items.map((item, index) => {
                if (item?.children || !item?.noDataHide) {
                  return (
                    <Col className="tableItem" span={item?.span ?? 12} key={index}>
                      <div className="tableItem-label" style={{ width: labelWidth }}>
                        <div className="tableItem-label-content">{item?.label}</div>
                      </div>
                      <div className="tableItem-control">
                        <div className="tableItem-control-content">{item?.children}</div>
                      </div>
                    </Col>
                  );
                } else {
                  return null;
                }
              })}
            </Row>
          )}

          {type === 'text' && (
            <Row className={`descriptionsUI-text ${layout}`}>
              {items.map((item, index) => {
                if (item?.children || !item?.noDataHide) {
                  return (
                    <Col className="textItem" span={item?.span ?? 12} key={index}>
                      <div className="textItem-label" style={{ width: labelWidth, textAlign: labelAlign }}>
                        <div className="textItem-label-content">{colon ? item?.label + '：' : item?.label}</div>
                      </div>
                      <div className="textItem-control">
                        <div className="textItem-control-content">{item?.children}</div>
                      </div>
                    </Col>
                  );
                } else {
                  return null;
                }
              })}
            </Row>
          )}
        </div>
      )}
    </>
  );
};

export default DescriptionsUI;
