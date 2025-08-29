import type { TableColumnType, TableProps } from 'antd';

export interface TableUI_VesselType {
  filterParams?: {
    page?: number; // 页数
    size?: number; // 页码
    sortInfoList?: { order: string; sortBy: string }[]; // 排序
  };
  multipleChoice?: React.Key[];
  choice?: boolean;
}

// 表格配置类型
export interface TableUI_ColumnType<RecordType = AnyObject> extends TableColumnType<RecordType> {
  name?: string;
  selected?: boolean;
  disable?: boolean;
  type?: 'amount' | 'percent' | 'tag';
  options?: { label?: React.ReactNode; value?: string | number | null }[];
  renderTitle?: React.ReactNode | (() => React.ReactNode);
  children?: TableUI_ColumnType<RecordType>[];
}

// 表格props类型（支持泛型）
export interface TableUIPropsType<TRecord = any, TVessel = any> extends TableProps<TRecord> {
  vessel?: TVessel;
  setVessel?: (params: TVessel) => void;
  tableData?: {
    records: TRecord[];
    total?: number;
    current?: number;
    size?: number;
    offset?: number;
    last?: boolean;
    next?: boolean;
  };
  tableHeader?: TableUI_ColumnType<TRecord>[];
  customColumns?: TableUI_ColumnType<TRecord>[];
  simplePagination?: boolean;
  pageSizeOptions?: number[];
  mask?: boolean;
  loading?: boolean;
  headerPadding?: boolean;
  cellPadding?: boolean;
  onClickSimplePagination?: (params: string) => void;
  CustomLoadingUI?: ReactElement;
  CustomEmptyUI?: ReactElement;
}

export interface TableUIStaticType {
  Operate: typeof TableUI_Operate;
  MultiLine: typeof TableUI_MultiLine;
  HideMultipleLines: typeof TableUI_HideMultipleLines;
  HeaderSettingUI: typeof TableHeaderSettingUI;
}
