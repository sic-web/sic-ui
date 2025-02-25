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
  Editor,
  EditTwo,
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
  Upload,
  User,
  UserBusiness,
  UserToUserTransmission,
  UTurnLeft,
  ViewList,
  Workbench,
  WritingFluently,
} from '@icon-park/react';
import React from 'react';
import { Iconwx, Iconzfb, Minsheng, Pingan, Point, UploadExcel, UploadImage, UploadPdf, Zhaoshang } from './material';

/** Icon 集合 */
export const iconRally = [
  // 自研icon
  { name: 'Minsheng', element: (props: any) => Minsheng(props) },
  { name: 'Pingan', element: (props: any) => Pingan(props) },
  { name: 'Iconwx', element: (props: any) => Iconwx(props) },
  { name: 'Iconzfb', element: (props: any) => Iconzfb(props) },
  { name: 'Zhaoshang', element: (props: any) => Zhaoshang(props) },
  { name: 'Point', element: (props: any) => Point(props) },
  { name: 'UploadPdf', element: (props: any) => <UploadPdf {...props} /> },
  { name: 'UploadImage', element: (props: any) => <UploadImage {...props} /> },
  { name: 'UploadExcel', element: (props: any) => <UploadExcel {...props} /> },
  // icon-park
  { name: 'Export', element: (props: any) => <Export {...props} /> },
  { name: 'Return', element: (props: any) => <Return {...props} /> },
  { name: 'AddOne', element: (props: any) => <AddOne {...props} /> },
  { name: 'Audit', element: (props: any) => <Audit {...props} /> },
  { name: 'Clear', element: (props: any) => <Clear {...props} /> },
  { name: 'Download', element: (props: any) => <Download {...props} /> },
  { name: 'Female', element: (props: any) => <Female {...props} /> },
  { name: 'Male', element: (props: any) => <Male {...props} /> },
  { name: 'PreviewOpen', element: (props: any) => <PreviewOpen {...props} /> },
  { name: 'PreviewCloseOne', element: (props: any) => <PreviewCloseOne {...props} /> },
  { name: 'Upload', element: (props: any) => <Upload {...props} /> },
  { name: 'Delete', element: (props: any) => <Delete {...props} /> },
  { name: 'Setting', element: (props: any) => <Setting {...props} /> },
  { name: 'Excel', element: (props: any) => <Excel {...props} /> },
  { name: 'FilePdf', element: (props: any) => <FilePdf {...props} /> },
  { name: 'TicketsTwo', element: (props: any) => <TicketsTwo {...props} /> },
  { name: 'BackgroundColor', element: (props: any) => <BackgroundColor {...props} /> },
  { name: 'Home', element: (props: any) => <Home {...props} /> },
  { name: 'ChartPieOne', element: (props: any) => <ChartPieOne {...props} /> },
  { name: 'BookmarkOne', element: (props: any) => <BookmarkOne {...props} /> },
  { name: 'DataArrival', element: (props: any) => <DataArrival {...props} /> },
  { name: 'Bank', element: (props: any) => <Bank {...props} /> },
  { name: 'ShieldAdd', element: (props: any) => <ShieldAdd {...props} /> },
  { name: 'Swipe', element: (props: any) => <Swipe {...props} /> },
  { name: 'SettingTwo', element: (props: any) => <SettingTwo {...props} /> },
  { name: 'DataFour', element: (props: any) => <DataFour {...props} /> },
  { name: 'Currency', element: (props: any) => <Currency {...props} /> },
  { name: 'CheckOne', element: (props: any) => <CheckOne {...props} /> },
  { name: 'CloseOne', element: (props: any) => <CloseOne {...props} /> },
  { name: 'UTurnLeft', element: (props: any) => <UTurnLeft {...props} /> },
  { name: 'Caution', element: (props: any) => <Caution {...props} /> },
  { name: 'RotateOne', element: (props: any) => <RotateOne {...props} /> },
  { name: 'Edit', element: (props: any) => <Edit {...props} /> },
  { name: 'Check', element: (props: any) => <Check {...props} /> },
  { name: 'Close', element: (props: any) => <Close {...props} /> },
  { name: 'UserBusiness', element: (props: any) => <UserBusiness {...props} /> },
  { name: 'ArrowRight', element: (props: any) => <ArrowRight {...props} /> },
  { name: 'More', element: (props: any) => <More {...props} /> },
  { name: 'DeleteOne', element: (props: any) => <DeleteOne {...props} /> },
  { name: 'Search', element: (props: any) => <Search {...props} /> },
  { name: 'Help', element: (props: any) => <Help {...props} /> },
  { name: 'Attention', element: (props: any) => <Attention {...props} /> },
  { name: 'FileAddition', element: (props: any) => <FileAddition {...props} /> },
  { name: 'CooperativeHandshake', element: (props: any) => <CooperativeHandshake {...props} /> },
  { name: 'FileSuccess', element: (props: any) => <FileSuccess {...props} /> },
  { name: 'Right', element: (props: any) => <Right {...props} /> },
  { name: 'Peoples', element: (props: any) => <Peoples {...props} /> },
  { name: 'UserToUserTransmission', element: (props: any) => <UserToUserTransmission {...props} /> },
  { name: 'PeoplePlus', element: (props: any) => <PeoplePlus {...props} /> },
  { name: 'Consume', element: (props: any) => <Consume {...props} /> },
  { name: 'MapRoadTwo', element: (props: any) => <MapRoadTwo {...props} /> },
  { name: 'EditTwo', element: (props: any) => <EditTwo {...props} /> },
  { name: 'AddPrint', element: (props: any) => <AddPrint {...props} /> },
  { name: 'Family', element: (props: any) => <Family {...props} /> },
  { name: 'CopyOne', element: (props: any) => <CopyOne {...props} /> },
  { name: 'ExpensesOne', element: (props: any) => <ExpensesOne {...props} /> },
  { name: 'FullScreenOne', element: (props: any) => <FullScreenOne {...props} /> },
  { name: 'Copy', element: (props: any) => <Copy {...props} /> },
  { name: 'City', element: (props: any) => <City {...props} /> },
  { name: 'Alarm', element: (props: any) => <Alarm {...props} /> },
  { name: 'Deposit', element: (props: any) => <Deposit {...props} /> },
  { name: 'TicketOne', element: (props: any) => <TicketOne {...props} /> },
  { name: 'Protect', element: (props: any) => <Protect {...props} /> },
  { name: 'Alipay', element: (props: any) => <Alipay {...props} /> },
  { name: 'User', element: (props: any) => <User {...props} /> },
  { name: 'Lock', element: (props: any) => <Lock {...props} /> },
  { name: 'FolderOpen', element: (props: any) => <FolderOpen {...props} /> },
  { name: 'DoubleDown', element: (props: any) => <DoubleDown {...props} /> },
  { name: 'DoubleUp', element: (props: any) => <DoubleUp {...props} /> },
  { name: 'Press', element: (props: any) => <Press {...props} /> },
  { name: 'RobotOne', element: (props: any) => <RobotOne {...props} /> },
  { name: 'Power', element: (props: any) => <Power {...props} /> },
  { name: 'History', element: (props: any) => <History {...props} /> },
  { name: 'Communication', element: (props: any) => <Communication {...props} /> },
  { name: 'Newlybuild', element: (props: any) => <Newlybuild {...props} /> },
  { name: 'Left', element: (props: any) => <Left {...props} /> },
  { name: 'Editor', element: (props: any) => <Editor {...props} /> },
  { name: 'ApiApp', element: (props: any) => <ApiApp {...props} /> },
  { name: 'Workbench', element: (props: any) => <Workbench {...props} /> },
  { name: 'Booth', element: (props: any) => <Booth {...props} /> },
  { name: 'Order', element: (props: any) => <Order {...props} /> },
  { name: 'FileStaff', element: (props: any) => <FileStaff {...props} /> },
  { name: 'Send', element: (props: any) => <Send {...props} /> },
  { name: 'Local', element: (props: any) => <Local {...props} /> },
  { name: 'Handbag', element: (props: any) => <Handbag {...props} /> },
  { name: 'EveryUser', element: (props: any) => <EveryUser {...props} /> },
  { name: 'Passport', element: (props: any) => <Passport {...props} /> },
  { name: 'NewspaperFolding', element: (props: any) => <NewspaperFolding {...props} /> },
  { name: 'Copyright', element: (props: any) => <Copyright {...props} /> },
  { name: 'WritingFluently', element: (props: any) => <WritingFluently {...props} /> },
  { name: 'Platte', element: (props: any) => <Platte {...props} /> },
  { name: 'ArrowUp', element: (props: any) => <ArrowUp {...props} /> },
  { name: 'Logout', element: (props: any) => <Logout {...props} /> },
  { name: 'Down', element: (props: any) => <Down {...props} /> },
  { name: 'CheckCorrect', element: (props: any) => <CheckCorrect {...props} /> },
  { name: 'Square', element: (props: any) => <Square {...props} /> },
  { name: 'Switch', element: (props: any) => <Switch {...props} /> },
  { name: 'MenuFoldOne', element: (props: any) => <MenuFoldOne {...props} /> },
  { name: 'MenuUnfoldOne', element: (props: any) => <MenuUnfoldOne {...props} /> },
  { name: 'HamburgerButton', element: (props: any) => <HamburgerButton {...props} /> },
  { name: 'ListTwo', element: (props: any) => <ListTwo {...props} /> },
  { name: 'SwitchButton', element: (props: any) => <SwitchButton {...props} /> },
  { name: 'Clue', element: (props: any) => <Clue {...props} /> },
  { name: 'Comment', element: (props: any) => <Comment {...props} /> },
  { name: 'ViewList', element: (props: any) => <ViewList {...props} /> },
  { name: 'FolderDownload', element: (props: any) => <FolderDownload {...props} /> },
  { name: 'Refresh', element: (props: any) => <Refresh {...props} /> },
];
