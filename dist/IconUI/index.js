var _excluded = ["name", "style"];
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useState, useEffect } from 'react';
import { customIcon } from "./material";
import { Export, ListTwo, Return, AddOne, SwitchButton, Audit, Clear, Download, Female, Male, PreviewOpen, Upload } from '@icon-park/react';
import { Delete, Setting, Excel, FilePdf, BackgroundColor, Home, ChartPieOne, BookmarkOne, DataArrival } from '@icon-park/react';
import { TicketsTwo, Bank, ShieldAdd, Swipe, SettingTwo, DataFour, Currency, CheckOne, CloseOne, UTurnLeft } from '@icon-park/react';
import { Caution, RotateOne, Edit, Check, Close, UserBusiness, ArrowRight, More, DeleteOne, Search, Help } from '@icon-park/react';
import { Attention, FileAddition, CooperativeHandshake } from '@icon-park/react';
var IconUI = function IconUI(props) {
  var _list$filter, _list$filter$;
  var name = props.name,
    style = props.style,
    otherProps = _objectWithoutProperties(props, _excluded);
  var IconList = [{
    name: 'ListTwo',
    element: /*#__PURE__*/React.createElement(ListTwo, _extends({
      style: style
    }, otherProps))
  },
  // 列表：批量操作
  {
    name: 'Export',
    element: /*#__PURE__*/React.createElement(Export, _extends({
      style: style
    }, otherProps))
  },
  // 导出：导出
  {
    name: 'Return',
    element: /*#__PURE__*/React.createElement(Return, _extends({
      style: style
    }, otherProps))
  },
  // 返回：返回
  {
    name: 'AddOne',
    element: /*#__PURE__*/React.createElement(AddOne, _extends({
      style: style
    }, otherProps))
  },
  // 加号：新增
  {
    name: 'Delete',
    element: /*#__PURE__*/React.createElement(Delete, _extends({
      style: style
    }, otherProps))
  },
  // 减号：删除
  {
    name: 'SwitchButton',
    element: /*#__PURE__*/React.createElement(SwitchButton, _extends({
      style: style
    }, otherProps))
  },
  // 开关：开关
  {
    name: 'Audit',
    element: /*#__PURE__*/React.createElement(Audit, _extends({
      style: style
    }, otherProps))
  },
  // 开关：开关
  {
    name: 'Clear',
    element: /*#__PURE__*/React.createElement(Clear, _extends({
      style: style
    }, otherProps))
  },
  // 清除：重置
  {
    name: 'Download',
    element: /*#__PURE__*/React.createElement(Download, _extends({
      style: style
    }, otherProps))
  },
  // 下载：下载
  {
    name: 'Female',
    element: /*#__PURE__*/React.createElement(Female, _extends({
      style: style
    }, otherProps))
  },
  // 女：女
  {
    name: 'Male',
    element: /*#__PURE__*/React.createElement(Male, _extends({
      style: style
    }, otherProps))
  },
  // 男：男
  {
    name: 'PreviewOpen',
    element: /*#__PURE__*/React.createElement(PreviewOpen, _extends({
      style: style
    }, otherProps))
  },
  // 眼睛：查看
  {
    name: 'Upload',
    element: /*#__PURE__*/React.createElement(Upload, _extends({
      style: style
    }, otherProps))
  },
  // 上传：上传
  {
    name: 'Setting',
    element: /*#__PURE__*/React.createElement(Setting, _extends({
      style: style
    }, otherProps))
  },
  // 设置：设置
  {
    name: 'Excel',
    element: /*#__PURE__*/React.createElement(Excel, _extends({
      style: style
    }, otherProps))
  },
  // Excel
  {
    name: 'FilePdf',
    element: /*#__PURE__*/React.createElement(FilePdf, _extends({
      style: style
    }, otherProps))
  },
  // Pdf
  {
    name: 'BackgroundColor',
    element: /*#__PURE__*/React.createElement(BackgroundColor, _extends({
      style: style
    }, otherProps))
  },
  // 调色
  {
    name: 'Home',
    element: /*#__PURE__*/React.createElement(Home, _extends({
      style: style
    }, otherProps))
  },
  // 菜单
  {
    name: 'ChartPieOne',
    element: /*#__PURE__*/React.createElement(ChartPieOne, _extends({
      style: style
    }, otherProps))
  },
  // 菜单
  {
    name: 'BookmarkOne',
    element: /*#__PURE__*/React.createElement(BookmarkOne, _extends({
      style: style
    }, otherProps))
  },
  // 菜单
  {
    name: 'DataArrival',
    element: /*#__PURE__*/React.createElement(DataArrival, _extends({
      style: style
    }, otherProps))
  },
  // 菜单
  {
    name: 'TicketsTwo',
    element: /*#__PURE__*/React.createElement(TicketsTwo, _extends({
      style: style
    }, otherProps))
  },
  // 菜单
  {
    name: 'Bank',
    element: /*#__PURE__*/React.createElement(Bank, _extends({
      style: style
    }, otherProps))
  },
  // 菜单
  {
    name: 'ShieldAdd',
    element: /*#__PURE__*/React.createElement(ShieldAdd, _extends({
      style: style
    }, otherProps))
  },
  // 菜单
  {
    name: 'Swipe',
    element: /*#__PURE__*/React.createElement(Swipe, _extends({
      style: style
    }, otherProps))
  },
  // 菜单
  {
    name: 'SettingTwo',
    element: /*#__PURE__*/React.createElement(SettingTwo, _extends({
      style: style
    }, otherProps))
  },
  // 菜单
  {
    name: 'DataFour',
    element: /*#__PURE__*/React.createElement(DataFour, _extends({
      style: style
    }, otherProps))
  },
  //状态：未打款
  {
    name: 'Currency',
    element: /*#__PURE__*/React.createElement(Currency, _extends({
      style: style
    }, otherProps))
  },
  //状态：打款中
  {
    name: 'CheckOne',
    element: /*#__PURE__*/React.createElement(CheckOne, _extends({
      style: style
    }, otherProps))
  },
  //状态：已发放
  {
    name: 'CloseOne',
    element: /*#__PURE__*/React.createElement(CloseOne, _extends({
      style: style
    }, otherProps))
  },
  //状态：已取消
  {
    name: 'UTurnLeft',
    element: /*#__PURE__*/React.createElement(UTurnLeft, _extends({
      style: style
    }, otherProps))
  },
  //状态：驳回
  {
    name: 'Caution',
    element: /*#__PURE__*/React.createElement(Caution, _extends({
      style: style
    }, otherProps))
  },
  //状态：异常
  {
    name: 'RotateOne',
    element: /*#__PURE__*/React.createElement(RotateOne, _extends({
      style: style
    }, otherProps))
  },
  //状态：发放中
  {
    name: 'Edit',
    element: /*#__PURE__*/React.createElement(Edit, _extends({
      style: style
    }, otherProps))
  },
  //编辑
  {
    name: 'Check',
    element: /*#__PURE__*/React.createElement(Check, _extends({
      style: style
    }, otherProps))
  },
  //检测结果:成功,
  {
    name: 'Close',
    element: /*#__PURE__*/React.createElement(Close, _extends({
      style: style
    }, otherProps))
  },
  //检测结果：失败,
  {
    name: 'UserBusiness',
    element: /*#__PURE__*/React.createElement(UserBusiness, _extends({
      style: style
    }, otherProps))
  }, {
    name: 'ArrowRight',
    element: /*#__PURE__*/React.createElement(ArrowRight, _extends({
      style: style
    }, otherProps))
  }, {
    name: 'More',
    element: /*#__PURE__*/React.createElement(More, _extends({
      style: style
    }, otherProps))
  }, {
    name: 'DeleteOne',
    element: /*#__PURE__*/React.createElement(DeleteOne, _extends({
      style: style
    }, otherProps))
  },
  //垃圾桶：删除
  {
    name: 'Search',
    element: /*#__PURE__*/React.createElement(Search, _extends({
      style: style
    }, otherProps))
  },
  //放大镜：搜索
  {
    name: 'Help',
    element: /*#__PURE__*/React.createElement(Help, _extends({
      style: style
    }, otherProps))
  },
  //放大镜：搜索
  {
    name: 'Attention',
    element: /*#__PURE__*/React.createElement(Attention, _extends({
      style: style
    }, otherProps))
  },
  //感叹号：感叹号
  {
    name: 'FileAddition',
    element: /*#__PURE__*/React.createElement(FileAddition, _extends({
      style: style
    }, otherProps))
  },
  //文件：文件
  {
    name: 'CooperativeHandshake',
    element: /*#__PURE__*/React.createElement(CooperativeHandshake, _extends({
      style: style
    }, otherProps))
  } //合作：合作
  ];

  var _useState = useState(IconList),
    _useState2 = _slicedToArray(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  useEffect(function () {
    var customIconList = customIcon(otherProps);
    setList(IconList.concat(customIconList));
  }, []);
  return list === null || list === void 0 ? void 0 : (_list$filter = list.filter(function (item) {
    return (item === null || item === void 0 ? void 0 : item.name) === name;
  })) === null || _list$filter === void 0 ? void 0 : (_list$filter$ = _list$filter[0]) === null || _list$filter$ === void 0 ? void 0 : _list$filter$.element;
};
export default IconUI;