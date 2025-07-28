import { ConfigProvider, Table } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import React from 'react';
import { ButtonUI, EmptyUI, IconUI } from 'sic-ui';
import './index.scss';
import { Button as TableUI_Button } from './material/Button';
import { HideMultipleLines as TableUI_HideMultipleLines } from './material/HideMultipleLines';
import { MultiLine as TableUI_MultiLine } from './material/MultiLine';
import { Operate as TableUI_Operate } from './material/Operate';
import { Setting as TableUI_Setting } from './material/Setting';

/** 表格组件 */
const TableUI = (props: any) => {
  const {
    rowKey,
    dataSource = [],
    columns = [],
    loading,
    mask = false,
    current = 0,
    pageSize = 0,
    total = 0,
    pageSizeOptions = ['20', '30', '50', '100'],
    simplePagination = false,
    lastPage,
    nextPage,
    clickSimplePagination,
    emptyText = <EmptyUI />,
    ...otherProps
  } = props;
  return (
    <div className={`${mask ? 'sic-tableui-mask' : ''} sic-tableui`}>
      <ConfigProvider locale={zhCN}>
        <Table
          rowKey={rowKey}
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          scroll={{ x: '100%' }}
          bordered
          pagination={
            loading?.spinning || simplePagination
              ? false
              : {
                  position: ['bottomCenter'],
                  showSizeChanger: true,
                  showQuickJumper: true,
                  current: current,
                  pageSize: pageSize,
                  total: total,
                  showTotal: () => `共 ${total} 条`,
                  defaultPageSize: pageSizeOptions[0],
                  pageSizeOptions: pageSizeOptions,
                }
          }
          locale={{
            emptyText: emptyText,
          }}
          onRow={() => ({
            onClick: (e) => {
              const target = e.currentTarget;
              // 移除其他行的选中样式
              target.parentElement?.querySelectorAll('tr').forEach((row: any) => {
                row.classList.remove('sic-tableui-row-selected');
              });
              // 添加当前行的选中样式
              target.classList.add('sic-tableui-row-selected');
            },
          })}
          {...otherProps}
        />
        {!loading?.spinning && simplePagination && (
          <div className="sic-tableui-simplePagination">
            {!!total && <div>共 {total} 条</div>}
            <ButtonUI icon={<IconUI name="Left" />} iconPosition="start" disabled={!lastPage} onClick={() => clickSimplePagination('last')}>
              上一页
            </ButtonUI>
            <ButtonUI icon={<IconUI name="Right" />} disabled={!nextPage} onClick={() => clickSimplePagination('next')}>
              下一页
            </ButtonUI>
          </div>
        )}
      </ConfigProvider>
    </div>
  );
};

TableUI.Operate = TableUI_Operate;
TableUI.Button = TableUI_Button;
TableUI.MultiLine = TableUI_MultiLine;
TableUI.HideMultipleLines = TableUI_HideMultipleLines;
TableUI.Setting = TableUI_Setting;
export default TableUI;
