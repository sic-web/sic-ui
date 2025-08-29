import React, { memo } from 'react';
import { Iconwx, Iconzfb, Minsheng, Pingan, Point, UploadExcel, UploadImage, UploadPdf, Zhaoshang } from './material';
import {
  AddOne,
  AddPrint,
  Alarm,
  Alipay,
  ApiApp,
  ArrowRight,
  ArrowUp,
  Attention,
  Audit,
  BackgroundColor,
  Bank,
  BookmarkOne,
  Booth,
  Caution,
  ChartPieOne,
  Check,
  CheckCorrect,
  CheckOne,
  City,
  Clear,
  Close,
  CloseOne,
  Clue,
  Comment,
  Communication,
  Consume,
  CooperativeHandshake,
  Copy,
  CopyOne,
  Copyright,
  Currency,
  DataArrival,
  DataFour,
  Delete,
  DeleteOne,
  Deposit,
  DoubleDown,
  DoubleUp,
  Down,
  Download,
  Edit,
  EditTwo,
  Editor,
  EveryUser,
  Excel,
  ExpensesOne,
  Export,
  Family,
  Female,
  FileAddition,
  FilePdf,
  FileStaff,
  FileSuccess,
  FinancingOne,
  FolderDownload,
  FolderOpen,
  FullScreenOne,
  HamburgerButton,
  Handbag,
  Help,
  History,
  Home,
  Left,
  ListTwo,
  Local,
  Lock,
  Logout,
  Male,
  MapRoadTwo,
  MenuFoldOne,
  MenuUnfoldOne,
  More,
  Newlybuild,
  NewspaperFolding,
  Order,
  Passport,
  PeoplePlus,
  Peoples,
  Platte,
  Play,
  Power,
  Press,
  PreviewCloseOne,
  PreviewOpen,
  Protect,
  Refresh,
  Return,
  Right,
  RobotOne,
  RotateOne,
  Search,
  Send,
  Setting,
  SettingTwo,
  ShieldAdd,
  Square,
  Swipe,
  Switch,
  SwitchButton,
  TicketOne,
  TicketsTwo,
  UTurnLeft,
  Upload,
  User,
  UserBusiness,
  UserToUserTransmission,
  ViewList,
  Workbench,
  WritingFluently,
} from '@icon-park/react';

// 定义图标属性类型
export interface IconProps {
  size?: string | number;
  fill?: string;
  strokeWidth?: number;
  theme?: 'outline' | 'filled' | 'two-tone' | 'multi-color';
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
  [key: string]: any;
}

// 定义图标项类型
export interface IconItem {
  name: string;
  element: (props: IconProps) => JSX.Element;
}

// 创建图标元素的辅助函数，使用 memo 优化性能
const createIconElement = (Component: React.ComponentType<any>) => {
  const MemoizedComponent = memo(Component);
  return (props: IconProps) => <MemoizedComponent {...props} />;
};

// 创建图标数据的辅助函数
const createIconData = (name: string, component: React.ComponentType<any>): IconItem => ({
  name,
  element: createIconElement(component),
});

/** Icon 集合 */
export const iconRally: IconItem[] = [
  // 自研icon
  createIconData('Minsheng', Minsheng),
  createIconData('Pingan', Pingan),
  createIconData('Iconwx', Iconwx),
  createIconData('Iconzfb', Iconzfb),
  createIconData('Zhaoshang', Zhaoshang),
  createIconData('Point', Point),
  createIconData('UploadPdf', UploadPdf),
  createIconData('UploadImage', UploadImage),
  createIconData('UploadExcel', UploadExcel),

  // icon-park 图标
  createIconData('AddOne', AddOne),
  createIconData('AddPrint', AddPrint),
  createIconData('Alarm', Alarm),
  createIconData('Alipay', Alipay),
  createIconData('ApiApp', ApiApp),
  createIconData('ArrowRight', ArrowRight),
  createIconData('ArrowUp', ArrowUp),
  createIconData('Attention', Attention),
  createIconData('Audit', Audit),
  createIconData('BackgroundColor', BackgroundColor),
  createIconData('Bank', Bank),
  createIconData('BookmarkOne', BookmarkOne),
  createIconData('Booth', Booth),
  createIconData('Caution', Caution),
  createIconData('ChartPieOne', ChartPieOne),
  createIconData('Check', Check),
  createIconData('CheckCorrect', CheckCorrect),
  createIconData('CheckOne', CheckOne),
  createIconData('City', City),
  createIconData('Clear', Clear),
  createIconData('Close', Close),
  createIconData('CloseOne', CloseOne),
  createIconData('Clue', Clue),
  createIconData('Comment', Comment),
  createIconData('Communication', Communication),
  createIconData('Consume', Consume),
  createIconData('CooperativeHandshake', CooperativeHandshake),
  createIconData('Copy', Copy),
  createIconData('CopyOne', CopyOne),
  createIconData('Copyright', Copyright),
  createIconData('Currency', Currency),
  createIconData('DataArrival', DataArrival),
  createIconData('DataFour', DataFour),
  createIconData('Delete', Delete),
  createIconData('DeleteOne', DeleteOne),
  createIconData('Deposit', Deposit),
  createIconData('DoubleDown', DoubleDown),
  createIconData('DoubleUp', DoubleUp),
  createIconData('Down', Down),
  createIconData('Download', Download),
  createIconData('Edit', Edit),
  createIconData('Editor', Editor),
  createIconData('EditTwo', EditTwo),
  createIconData('EveryUser', EveryUser),
  createIconData('Excel', Excel),
  createIconData('ExpensesOne', ExpensesOne),
  createIconData('Export', Export),
  createIconData('Family', Family),
  createIconData('Female', Female),
  createIconData('FinancingOne', FinancingOne),
  createIconData('FileAddition', FileAddition),
  createIconData('FilePdf', FilePdf),
  createIconData('FileStaff', FileStaff),
  createIconData('FileSuccess', FileSuccess),
  createIconData('FolderDownload', FolderDownload),
  createIconData('FolderOpen', FolderOpen),
  createIconData('FullScreenOne', FullScreenOne),
  createIconData('HamburgerButton', HamburgerButton),
  createIconData('Handbag', Handbag),
  createIconData('Help', Help),
  createIconData('History', History),
  createIconData('Home', Home),
  createIconData('Left', Left),
  createIconData('ListTwo', ListTwo),
  createIconData('Local', Local),
  createIconData('Lock', Lock),
  createIconData('Logout', Logout),
  createIconData('Male', Male),
  createIconData('MapRoadTwo', MapRoadTwo),
  createIconData('MenuFoldOne', MenuFoldOne),
  createIconData('MenuUnfoldOne', MenuUnfoldOne),
  createIconData('More', More),
  createIconData('Newlybuild', Newlybuild),
  createIconData('NewspaperFolding', NewspaperFolding),
  createIconData('Order', Order),
  createIconData('Passport', Passport),
  createIconData('PeoplePlus', PeoplePlus),
  createIconData('Peoples', Peoples),
  createIconData('Platte', Platte),
  createIconData('Power', Power),
  createIconData('Press', Press),
  createIconData('PreviewCloseOne', PreviewCloseOne),
  createIconData('PreviewOpen', PreviewOpen),
  createIconData('Protect', Protect),
  createIconData('Refresh', Refresh),
  createIconData('Return', Return),
  createIconData('Right', Right),
  createIconData('RobotOne', RobotOne),
  createIconData('RotateOne', RotateOne),
  createIconData('Search', Search),
  createIconData('Send', Send),
  createIconData('Setting', Setting),
  createIconData('SettingTwo', SettingTwo),
  createIconData('ShieldAdd', ShieldAdd),
  createIconData('Square', Square),
  createIconData('Swipe', Swipe),
  createIconData('Switch', Switch),
  createIconData('SwitchButton', SwitchButton),
  createIconData('TicketOne', TicketOne),
  createIconData('TicketsTwo', TicketsTwo),
  createIconData('Upload', Upload),
  createIconData('User', User),
  createIconData('UserBusiness', UserBusiness),
  createIconData('UserToUserTransmission', UserToUserTransmission),
  createIconData('UTurnLeft', UTurnLeft),
  createIconData('ViewList', ViewList),
  createIconData('Workbench', Workbench),
  createIconData('WritingFluently', WritingFluently),
  createIconData('Play', Play),
];

// 创建图标映射表，用于快速查找 (只计算一次)
export const iconMap = iconRally.reduce(
  (map, icon) => {
    map[icon.name] = icon;
    return map;
  },
  {} as Record<string, IconItem>
);

// 根据名称获取图标
export const getIconByName = (name: string): IconItem | undefined => {
  return iconMap[name];
};

// 搜索图标
export const searchIcons = (keyword: string): IconItem[] => {
  if (!keyword) return iconRally;

  const lowerKeyword = keyword.toLowerCase();
  return iconRally.filter((icon) => icon.name.toLowerCase().includes(lowerKeyword));
};
