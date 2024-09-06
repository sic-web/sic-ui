import React from 'react';
import { CellUI, TagUI } from 'sic-ui';
import { num_expand_100, num_reduce_100 } from 'sic-util';
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

const quickType = (tableHeader: TableHeaderItem[], columns: Columns[]) => {
  const newCol: Columns[] = [];
  tableHeader?.forEach((a) => {
    if (a?.selected !== false) {
      let obj: Columns = {};
      obj.title = a?.name;
      obj.dataIndex = a?.key;
      obj.render = (i: string | number) => <CellUI>{i}</CellUI>;
      obj = { ...a, ...obj };
      // 金额类型
      if (a.type === 'amount') {
        const realKey = a?.transform?.realKey ?? a.key;
        // 金额类型-扩大一百倍
        if (a.transform?.rule === 'num_expand_100') {
          obj.render = (_: never, item: any) => <CellUI>{num_expand_100(item[realKey])}</CellUI>;
        }
        // 金额类型-缩小一百倍
        if (a.transform?.rule === 'num_reduce_100') {
          obj.render = (_: never, item: any) => <CellUI>{num_reduce_100(item[realKey])}</CellUI>;
        }
        // 金额类型-缩小一百倍+%
        if (a.transform?.rule === 'num_reduce_100_%') {
          obj.render = (_: never, item: any) => <CellUI>{`${num_reduce_100(item[realKey])}%`}</CellUI>;
        }
      }
      if (a.type === 'tagui') {
        obj.render = (_: never, item: any) => {
          const current = a.transform?.ruleList?.filter((obj: any) => obj?.value === item?.type)?.[0];
          return <TagUI type={current.type}>{current?.label}</TagUI>;
        };
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

export default quickType;
