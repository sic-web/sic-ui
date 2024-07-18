/** 筛选条件 */
export interface FilterParamsType {
  page?: number; // 页数
  size?: number; // 页码
  searchField?: string; // 搜索值
  startDate?: string; // 开始日期
  endDate?: string; // 结束日期
  zoneId?: number; // 园区ID
  companyId?: number; // 公司ID
  operateId?: number;
  saleId?: number;
  agentName?: string; // 代理姓名
  firstIndustryId?: number;
  secondIndustryId?: number;
  status?: number;
  agentLevel?: number;
  sortInfoList?: { order: string; sortBy: string }[]; // 排序
  exportColumn?: any[];
  globalNo?: number;
  checkStatus?: number;
  exportId?: any[];
  exportIdName?: string;
  name?: string; // 角色名
  accountType?: number; // 账户类型
  subType?: number; // 交易类型
  [key: string]: any;
}
