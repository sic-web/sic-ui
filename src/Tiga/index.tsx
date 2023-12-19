import React, { useEffect, useState } from 'react';
import { TableUI, LoadingUI, CellUI } from 'sic-ui';
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
          obj.render = b?.render;
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
  const { dataSource, initialColumns = [], morphColumns, tableHeader, ...otherProps } = props;
  // 新的列数据
  const [columns, setColumns] = useState<any>();

  useEffect(() => {
    const changeColumns = morphColumns?.length > 0 ? morphColumns : initialColumns;
    const list = filterTableHeader(changeColumns, tableHeader);
    setColumns(list);
  }, [tableHeader]);
  return (
    <LoadingUI spinning={dataSource && columns ? false : true}>
      <TableUI columns={columns} dataSource={dataSource} {...otherProps} />
    </LoadingUI>
  );
};
export default Tiga;
