import React from 'react';
import { TableUI, CellUI, TagUI } from 'sic-ui';
import { expandTwo, reduceTwo } from '../utils';
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

const filterTableHeader = (columns: Columns[], tableHeader: TableHeaderItem[]) => {
  const newCol: Columns[] = [];
  tableHeader?.forEach((a) => {
    if (a?.selected !== false) {
      let obj: Columns = {};
      obj.title = a?.name;
      obj.dataIndex = a?.key;
      obj.render = (i: string | number) => <CellUI>{i}</CellUI>;
      obj = { ...a, ...obj };
      columns?.forEach((b: any) => {
        if (a?.key === b?.key) {
          const realKey = b?.realKey ? b?.realKey : b.key;
          // 金额
          if (b.type === 'amount') {
            if (b.transform === 'expandTwo') {
              obj.render = (_: never, item: any) => {
                return <CellUI>{expandTwo(item[realKey])}</CellUI>;
              };
            }
          }
          // 百分比
          else if (b.type === 'percent') {
            if (b.transform === 'reduceTwo') {
              obj.render = (_: never, item: any) => {
                return <CellUI>{item[realKey] ? `${reduceTwo(item[realKey])}%` : null}</CellUI>;
              };
            }
          }
          // TagUI
          else if (b.type === 'tagui') {
            obj.render = (_: never, item: any) => {
              const current = b.transform.rally?.filter((obj: any) => obj.value === item[realKey])?.[0];
              return <TagUI type={current.taguiType}>{current.label}</TagUI>;
            };
          }

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
    columns = filterTableHeader(morphColumns?.length > 0 ? morphColumns : initialColumns, tableHeader);
  }

  return <TableUI columns={columns} dataSource={t_dataSource} pageSize={t_pageSize} current={t_current} total={t_total} {...otherProps} />;
};
export default Tiga;
