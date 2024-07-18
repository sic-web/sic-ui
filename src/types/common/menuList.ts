/** 菜单类型 */
export interface MenuInformation {
  menuid?: number;
  menuId?: number;
  parentid?: number;
  parentId?: number;
  parentname?: string;
  parentName?: string;
  resourcelist?: ResourceList[];
  resourceList?: ResourceList[];
  sort?: number;
  label?: string;
  key?: string;
  icon?: React.ReactNode;
  element?: any;
  children?: any;
}

/** 按钮类型 */
export interface ResourceList {
  resourceId: number;
  resourceName?: string;
  key?: string;
  element?: any;
}
