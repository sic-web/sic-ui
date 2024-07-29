import React, { useState } from 'react';
import { ConfigProvider, Table } from 'antd';
import { EmptyUI } from 'sic-ui';
import { Button as TableUI_Button } from './material/Button';
import { Operate as TableUI_Operate } from './material/Operate';
import { HideMultipleLines as TableUI_HideMultipleLines } from './material/HideMultipleLines';
import { MultiLine as TableUI_MultiLine } from './material/MultiLine';
import { Setting as TableUI_Setting } from './material/Setting';
import zhCN from 'antd/locale/zh_CN';
import './index.scss';

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
          emptyText: <EmptyUI />,
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

TableUI.Operate = TableUI_Operate;
TableUI.Button = TableUI_Button;
TableUI.MultiLine = TableUI_MultiLine;
TableUI.HideMultipleLines = TableUI_HideMultipleLines;
TableUI.Setting = TableUI_Setting;
export default TableUI;
