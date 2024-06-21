import React from 'react';
import { Row, Col } from 'antd';
import './index.scss';

interface IProps {
  items: ItemType[];
  isSingleLine?: boolean;
  labelWidth?: number;
  type?: 'table' | 'text';
  layout?: 'horizontal' | 'vertical';
}

interface ItemType {
  label: string;
  children: React.ReactNode;
  span?: number;
  noDataHide?: boolean;
}
//新描述组件
const DescriptionsUI = (props: IProps) => {
  const { items, isSingleLine = false, labelWidth = 120, type = 'table', layout = 'horizontal' } = props;

  return (
    <>
      {items?.length > 0 && (
        <div className={`sic-descriptionsUI  ${isSingleLine ? 'sic-descriptionsUI-hide' : ''}`}>
          {type === 'table' && (
            <Row className="sic-descriptionsUI-table">
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
            <Row className={`sic-descriptionsUI-text ${layout}`}>
              {items.map((item, index) => {
                if (item?.children || !item?.noDataHide) {
                  return (
                    <Col className="textItem" span={item?.span ?? 12} key={index}>
                      <div className="textItem-label" style={{ width: labelWidth }}>
                        <div className="textItem-label-content">{item?.label + '：'}</div>
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
