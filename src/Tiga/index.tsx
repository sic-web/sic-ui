import React from 'react';
import { TableUI, CellUI } from 'sic-ui';
import { num_expand_100 } from 'sic-util';
import './index.scss';
/** 当前表头类型 */
export interface TableHeaderItem {
  sort?: number;
  id?: number;
  key?: string;
  name?: string;
  selected?: boolean;
  disable?: boolean;
  title?: string;
  dataIndex?: string;
  width?: number;
  fixed?: string;
  render?: unknown;
  type?: string;
  transform?: any;
}

/** 渲染表格的Columns */
export interface Columns {
  align?: string;
  title?: string;
  dataIndex?: string;
  key?: string;
  width?: number;
  sort?: number;
  render?: any;
  [key: string | number]: any;
}

const filterTableHeader = (tableHeader: TableHeaderItem[], columns: Columns[]) => {
  const newCol: Columns[] = [];
  tableHeader?.forEach((a) => {
    if (a?.selected !== false) {
      let obj: Columns = {};
      obj.title = a?.name;
      obj.dataIndex = a?.key;
      obj.render = (i: string | number) => <CellUI>{i}</CellUI>;
      obj = { ...a, ...obj };
      if (a.type === 'amount') {
        const realKey = a?.transform?.realKey ?? a.key;
        if (a.transform?.rule === 'num_expand_100') {
          obj.render = (_: never, item: any) => <CellUI>{num_expand_100(item[realKey])}</CellUI>;
        }
      }
      columns?.forEach((b: any) => {
        if (a?.key === b?.key) {
          obj = { ...obj, ...b };
        }
      });
      newCol?.push(obj);
    }
  });
  newCol?.sort((a, b) => (a?.sort ?? 2) - (b?.sort ?? 1));
  return newCol;
};

const Tiga = (props: any) => {
  // tag morphColumns 用这个参数代替initialColumns传入所改变的列
  const { dataSource, initialColumns = [], morphColumns = [], tableHeader, tableData, pageSize, total, current, ...otherProps } = props;
  let t_dataSource = dataSource;
  let t_pageSize = pageSize;
  let t_current = current;
  let t_total = total;

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
  }

  let columns: any = null;

  const flag = tableHeader?.every((item: { name?: string }) => 'name' in item);
  if (flag) {
    const tableColumns = morphColumns?.length > 0 ? morphColumns : initialColumns;
    columns = filterTableHeader(tableHeader, tableColumns);
  }

  return <TableUI columns={columns} dataSource={t_dataSource} pageSize={t_pageSize} current={t_current} total={t_total} {...otherProps} />;
};
export default Tiga;
