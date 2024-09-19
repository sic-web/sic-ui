import React from 'react';
import { TableUI } from 'sic-ui';
import quickType from './material/quickType';
import './index.scss';

const Tiga = (props: any) => {
  // tag morphColumns 用这个参数代替initialColumns传入所改变的列
  const {
    dataSource,
    initialColumns = [],
    morphColumns = [],
    tableHeader,
    tableData,
    pageSize,
    total,
    current,
    simplePagination = false,
    clickSimplePagination,
    ...otherProps
  } = props;
  let t_dataSource = dataSource;
  let t_pageSize = pageSize;
  let t_current = current;
  let t_total = total;
  let t_lastPage;
  let t_nextPage;

  // 特殊字段-完全适配于A/B/OS项目
  if (tableData) {
    // 表格数据
    t_dataSource = tableData?.records;
    // 表格页码
    t_pageSize = tableData?.size;
    // 表格当前
    t_current = tableData?.current;
    // 表格总数
    t_total = tableData?.total;
    // 是否有上一页
    t_lastPage = tableData?.last;
    // 是否有下一页
    t_nextPage = tableData?.next;
  }

  let columns: any = null;

  const flag = tableHeader?.every((item: { name?: string }) => 'name' in item);
  if (flag) {
    const tableColumns = morphColumns?.length > 0 ? morphColumns : initialColumns;
    // 进行预设格式处理
    columns = quickType(tableHeader, tableColumns);
  }

  return (
    <TableUI
      columns={columns}
      dataSource={t_dataSource}
      pageSize={t_pageSize}
      current={t_current}
      total={t_total}
      lastPage={t_lastPage}
      nextPage={t_nextPage}
      simplePagination={simplePagination}
      clickSimplePagination={clickSimplePagination}
      {...otherProps}
    />
  );
};
export default Tiga;
