import React, { useState, useEffect } from 'react';
import { ConfigProvider, Table, Tooltip } from 'antd';
import { IconUI, CellUI, ButtonUI } from 'sic-ui';
import zhCN from 'antd/locale/zh_CN';
import { tableuiNodata } from '../assets';
import './index.scss';
interface propsType {
  children: number[] | string[];
  line?: number;
  moreShowLine?: number;
  className?: string;
}
/** 表格组件 */
const TableUI = (props: any) => {
  const {
    rowKey,
    name,
    dataSource = [],
    columns = [],
    mask = false,
    current = 0,
    pageSize = 0,
    total = 0,
    pageSizeOptions = ['20', '30', '50', '100'],
    ...otherProps
  } = props;
  const [selectedRowKey, setSelectedRowKey] = useState<number | string | null>();
  const handleRowClick = (record: any) => {
    if (record[rowKey] === selectedRowKey) {
      setSelectedRowKey(null);
    } else {
      setSelectedRowKey((name ? name : null) + record[rowKey]);
    }
  };
  return (
    <ConfigProvider locale={zhCN}>
      <Table
        rowKey={rowKey}
        className={`${mask ? 'sic-tableui-mask' : ''} sic-tableui`}
        dataSource={dataSource}
        scroll={{ x: '100%' }}
        columns={columns}
        bordered
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          current: current,
          pageSize: pageSize,
          total: total,
          showTotal: () => `共 ${total} 条`,
          defaultPageSize: pageSizeOptions[0],
          pageSizeOptions: pageSizeOptions,
        }}
        locale={{
          emptyText: (
            <div>
              <img src={tableuiNodata} width={220} />
              <div style={{ color: '#333', fontFamily: 'LingCaiTiBold' }}>暂无内容</div>
            </div>
          ),
        }}
        onRow={(record) => ({
          onClick: () => {
            handleRowClick(record);
          },
        })}
        rowClassName={(record) => (selectedRowKey === (name ? name : null) + record[rowKey] ? 'sic-tableui-active' : '')}
        {...otherProps}
      />
    </ConfigProvider>
  );
};

const OperateMore = (props: { content: React.ReactNode }) => {
  const tip = (text: React.ReactNode) => (
    <div>
      <span style={{ color: 'var(--textcolor)' }}>{text || ''}</span>
    </div>
  );

  return (
    <Tooltip placement="bottom" title={tip(props.content)} color={'#fff'} key={'#fff'} trigger="click">
      <IconUI name="More" size="18" theme="filled" style={{ color: '#7E7E7E', padding: '0 10px', cursor: 'pointer' }} />
    </Tooltip>
  );
};

/** 表格组件-操作更多 */
const Operate = (props: { child: any }) => {
  const { child } = props;
  const [children, setChildren] = useState<React.ReactNode[]>([]);
  useEffect(() => {
    if (child()?.props?.children?.length) {
      const children = child()?.props?.children.filter((item: boolean) => {
        return item !== false;
      });
      setChildren(children);
    } else {
      if (child()?.props?.children) setChildren([child().props?.children]);
    }
  }, [child]);

  return (
    <div className="sic-tableui-operate">
      {children?.length === 0 && <div style={{ color: 'var(--textcolor)' }}>-</div>}
      {children?.[0] || children}
      {children?.[1] && <span style={{ color: '#ccc', margin: '0 5px' }}>丨</span>}
      {children?.[1]}
      {children?.[2] && (
        <OperateMore
          content={
            <div>
              {children?.[2]}
              {children?.[3]}
              {children?.[4]}
              {children?.[5]}
              {children?.[6]}
              {children?.[7]}
              {children?.[8]}
              {children?.[9]}
              {children?.[10]}
            </div>
          }
        />
      )}
    </div>
  );
};

/** 表格组件-按钮功能 */
const Button = (props: any) => {
  const { type = 'default', icon, children, className, style, ...otherProps } = props;

  return (
    <div className={`sic-tableui-button ${!!type && `sic-tableui-button-${type}`} ${className ?? ''}`} style={style} {...otherProps}>
      {children}
      {icon && <span className="sic-tableui-button-icon">{icon}</span>}
    </div>
  );
};

/** 表格组件-多行展示 */
const MultiLine = (props: any) => {
  const { children, ...otherProps } = props;
  return (
    <div className="sic-tableui-multiLine" {...otherProps}>
      {children?.length > 0 &&
        children.map((item: string | number, index: number) => (
          <div key={index} className="sic-tableui-multiLine-item">
            <CellUI line={1}>{item}</CellUI>
          </div>
        ))}
    </div>
  );
};

const HideMultipleLines = (props: propsType) => {
  const { children, line = 2, moreShowLine, className } = props;
  const moreIcon = () => {
    return (
      <Tooltip
        placement="right"
        title={
          <div style={{ textAlign: 'center' }}>
            {children?.length > line &&
              children.map((item: number | string, index: number) => {
                return ((moreShowLine && index < moreShowLine) || !moreShowLine) && <div key={index}>{item}</div>;
              })}
            {moreShowLine && children?.length > moreShowLine && <IconUI name="More" theme="filled" size="14" fill="#fff" />}
          </div>
        }
        trigger="click"
      >
        {children?.length > line && (
          <ButtonUI className="hideMultipleLines-content-button" type="primary" icon={<IconUI name="Right" />}>
            更多
          </ButtonUI>
        )}
      </Tooltip>
    );
  };
  return (
    <div className={`hideMultipleLines ${className}`}>
      <div className="hideMultipleLines-content">
        {children?.length > 0 &&
          children.map((item, index) => {
            return index < line && <div key={index}>{item}</div>;
          })}
      </div>
      {moreIcon()}
    </div>
  );
};

TableUI.Operate = Operate;
TableUI.Button = Button;
TableUI.MultiLine = MultiLine;
TableUI.HideMultipleLines = HideMultipleLines;
export default TableUI;
