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

/** 存储在redux表头类型 */
export interface TableListItem {
  type: string;
  value?: TableHeaderItem[] | [];
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
