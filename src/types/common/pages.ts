import { ResourceList, FilterParamsType, TableHeaderItem } from './index';

/** 页面状态容器类型 */
export interface Vessel {
  tabType?: string;
  limit: ResourceList[] | [];
  choice?: boolean;
  multipleChoice?: string[] | number[] | [];
  tableSetStatus?: boolean;
  filterParams?: FilterParamsType;
  headerList?: TableHeaderItem[];
  tabOneheaderList?: TableHeaderItem[];
  tabTwoheaderList?: TableHeaderItem[];
  tabThreeheaderList?: TableHeaderItem[];
  tabFourheaderList?: TableHeaderItem[];
  moreFilters?: boolean;
}
