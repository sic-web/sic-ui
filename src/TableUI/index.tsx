import React, { useState, useEffect } from 'react';
import { ConfigProvider, Table, Tooltip } from 'antd';
import { IconUI } from 'sic-ui';
import zhCN from 'antd/locale/zh_CN';
import { tableuiNodata } from '../assets';
import './index.scss';

const TableUI = (props: any) => {
  const {
    dataSource = [],
    columns = [],
    mask = false,
    current = 0,
    pageSize = 0,
    total = 0,
    pageSizeOptions = ['20', '30', '50', '100'],

    ...otherProps
  } = props;

  return (
    <ConfigProvider locale={zhCN}>
      <Table
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
            </div>
          }
        />
      )}
    </div>
  );
};
TableUI.Operate = Operate;
export default TableUI;
