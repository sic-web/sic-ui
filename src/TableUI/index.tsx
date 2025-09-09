import React, { useMemo, useState } from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { ButtonUI, CellUI, EmptyUI, IconUI, LoadingUI, TagUI } from 'sic-ui';
import { HideMultipleLines as TableUI_HideMultipleLines } from './HideMultipleLines';
import { MultiLine as TableUI_MultiLine } from './MultiLine';
import { Operate as TableUI_Operate } from './Operate';
import TableHeaderSettingUI from './TableHeaderSettingUI';
import lodash from 'lodash';
import clsx from 'classnames';
import { num_expand, num_reduce } from 'sic-util';
import type { TableUIPropsType, TableUIStaticType, TableUI_ColumnType, TableUI_VesselType } from './type';
import './index.scss';

function TableUIInner<TRecord = any, TVessel extends TableUI_VesselType = TableUI_VesselType>(props: TableUIPropsType<TRecord, TVessel>) {
  const {
    className,
    rowKey,
    vessel,
    setVessel,
    tableData,
    tableHeader,
    customColumns,
    dataSource,
    simplePagination,
    pageSizeOptions = [20, 30, 50, 100],
    mask,
    loading,
    headerPadding,
    cellPadding,
    onClickSimplePagination,
    CustomLoadingUI = <LoadingUI delay={200} />,
    CustomEmptyUI = <EmptyUI />,
    ...otherProps
  } = props;
  const [activeRowKey, setActiveRowKey] = useState<React.Key | null>(null);

  const getRecordKey = <TRecord,>(record: TRecord, rowKey: TableProps<TRecord>['rowKey'], index?: number): React.Key => {
    if (typeof rowKey === 'function') {
      return rowKey(record, index);
    }
    return (record as any)[rowKey];
  };

  const getRender = (item: TableUI_ColumnType) => {
    if (item?.render) return item.render;
    switch (item?.type) {
      // 如果是金额 则缩小一百倍
      case 'amount':
        return (i?: string | number) => <CellUI>{num_expand(i)}</CellUI>;
      // 如果是百分数 则放大一百倍（必须有值）
      case 'percent':
        return (i?: string | number) => !!i && <CellUI>{num_reduce(i) + '%'}</CellUI>;
      // 如果是tag标签 则渲染对应的枚举中文、颜色（默认宽度为当前列宽度减左右间距10）
      case 'tag':
        return (i?: string | number) => (
          <TagUI dataIndex={i} options={item?.options} width={typeof item?.width === 'number' ? item.width - 20 : undefined} />
        );
      // 默认渲染cell组件
      default:
        return (i?: string | number) => <CellUI>{i}</CellUI>;
    }
  };

  // 自定义列配置
  const custom_columns = useMemo<TableUI_ColumnType[]>(() => {
    // 当表头数组有值时
    if (!lodash.isEmpty(tableHeader)) {
      // 当前传入的自定义列配置map
      const customColumns_map = new Map(customColumns?.map((item) => [item.key, item]));
      // 返回新的自定义列配置
      const new_customColumns = tableHeader
        ?.filter((item) => item?.selected !== false)
        ?.map((item) => {
          // 查询当前key是否有自定义列配置
          const customColumns_map_item = customColumns_map.get(item?.key);
          // 合并两个列配置
          const merage_item = customColumns_map_item ? { ...item, ...customColumns_map_item } : item;
          // 如果没有自定义列配置则走默认配置
          return {
            ...merage_item,
            dataIndex: merage_item?.key,
            title: merage_item?.renderTitle || <CellUI className="tableUI-headerItem">{merage_item?.name}</CellUI>,
            render: getRender(merage_item),
          };
        });
      return new_customColumns as TableUI_ColumnType[];
    } else {
      return [];
    }
  }, [tableHeader, customColumns]);

  // 处理点击分页事件
  const handleSimplePaginationClick = (type: 'last' | 'next') => {
    if (onClickSimplePagination) {
      onClickSimplePagination(type);
    } else if (vessel && setVessel && tableData?.offset !== null && tableData?.offset !== undefined) {
      const offset = type === 'last' ? tableData?.offset - 20 : tableData?.offset + 20;
      setVessel({ ...vessel, filterParams: { ...vessel?.filterParams, offset: offset, size: 20 } });
    }
  };
  return (
    <div className={clsx('tableUI', className)}>
      <Table
        className={clsx({
          'tableUI-mask': mask,
          'tableUI-headerPadding': headerPadding,
          'tableUI-cellPadding': cellPadding,
        })}
        rowKey={rowKey}
        bordered
        scroll={{ x: '100%' }}
        columns={custom_columns}
        dataSource={tableData?.records ?? dataSource}
        pagination={
          simplePagination
            ? false
            : {
                position: ['bottomCenter'],
                showSizeChanger: true,
                showQuickJumper: true,
                current: tableData?.current,
                pageSize: tableData?.size,
                total: tableData?.total,
                showTotal: (total) => `共 ${total} 条`,
                defaultPageSize: pageSizeOptions[0],
                pageSizeOptions: pageSizeOptions,
              }
        }
        rowClassName={(record, index) => {
          const key = getRecordKey(record, rowKey, index);
          return key === activeRowKey ? 'tableUI-row-active' : '';
        }}
        onRow={(record, index) => ({
          onClick: () => {
            const key = getRecordKey(record, rowKey, index);
            if (key !== undefined) setActiveRowKey((prev) => (prev === key ? null : key));
          },
        })}
        loading={{
          spinning: !!loading,
          wrapperClassName: 'loadingUI loadingUI-transparent',
          indicator: CustomLoadingUI,
        }}
        locale={{
          emptyText: CustomEmptyUI,
        }}
        onChange={(e) => {
          if (vessel && setVessel) setVessel({ ...vessel, filterParams: { ...vessel?.filterParams, page: e.current, size: e.pageSize } });
        }}
        rowSelection={
          vessel && setVessel && vessel?.choice
            ? {
                selectedRowKeys: vessel?.multipleChoice,
                preserveSelectedRowKeys: true,
                onChange: (newSelectedRowKeys: React.Key[]) => setVessel({ ...vessel, multipleChoice: newSelectedRowKeys }),
              }
            : undefined
        }
        {...otherProps}
      />
      {simplePagination && !lodash.isEmpty(tableData?.records ?? dataSource) && (
        <div className="tableUI-simplePagination">
          {tableData?.total && <div>共 {tableData?.total} 条</div>}
          <ButtonUI
            icon={<IconUI name="Left" />}
            iconPosition="start"
            disabled={!tableData?.last}
            onClick={() => handleSimplePaginationClick('last')}
          >
            上一页
          </ButtonUI>
          <ButtonUI icon={<IconUI name="Right" />} disabled={!tableData?.next} onClick={() => handleSimplePaginationClick('next')}>
            下一页
          </ButtonUI>
        </div>
      )}
    </div>
  );
}

const TableUI = TableUIInner as typeof TableUIInner & TableUIStaticType;

TableUI.Operate = TableUI_Operate;
TableUI.MultiLine = TableUI_MultiLine;
TableUI.HideMultipleLines = TableUI_HideMultipleLines;
TableUI.HeaderSettingUI = TableHeaderSettingUI;

export default TableUI;
