var _excluded = ["type", "children", "icon", "width"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { useState, useEffect } from 'react';
import "./index.scss";

// 配置色枚举
var themeList = [{
  type: 1,
  name: '绿色',
  color: '#1EAF69',
  bgcolor: 'rgba(30, 175, 105, 0.10)'
}, {
  type: 2,
  name: '紫色',
  color: '#9747FF',
  bgcolor: 'rgba(151, 71, 255, 0.10)'
}, {
  type: 3,
  name: '蓝色',
  color: '#2E64FA',
  bgcolor: 'rgba(46, 100, 250, 0.10)'
}, {
  type: 4,
  name: '灰色',
  color: '#666666',
  bgcolor: '#F5F5F5'
}, {
  type: 5,
  name: '黄色',
  color: '#FFC22C',
  bgcolor: 'rgba(255, 194, 44, 0.10)'
}, {
  type: 6,
  name: '红色',
  color: '#ff7875',
  bgcolor: 'rgba(255, 120, 117, 0.10)'
}, {
  type: 7,
  name: '深红',
  color: '#9E031A',
  bgcolor: 'rgba(158, 3, 26, 0.10)'
}];
var TagUI = function TagUI(props) {
  var type = props.type,
    children = props.children,
    icon = props.icon,
    width = props.width,
    otherProps = _objectWithoutProperties(props, _excluded);
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    theme = _useState2[0],
    setTheme = _useState2[1];
  useEffect(function () {
    var theme = themeList.filter(function (item) {
      return (item === null || item === void 0 ? void 0 : item.type) === Number(type);
    })[0];
    setTheme(theme);
  }, [type]);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      color: theme === null || theme === void 0 ? void 0 : theme.color,
      backgroundColor: theme === null || theme === void 0 ? void 0 : theme.bgcolor,
      width: width !== null && width !== void 0 ? width : 'auto'
    }
  }, otherProps, {
    className: "sic-tagui"
  }), children, icon && /*#__PURE__*/React.createElement("span", {
    className: "sic-tagui-icon",
    style: {
      color: theme === null || theme === void 0 ? void 0 : theme.color
    }
  }, icon));
};
export default TagUI;