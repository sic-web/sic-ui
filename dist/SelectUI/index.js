var _excluded = ["options", "showSearch", "allowClear", "filterOption", "filterSort", "onChange", "style"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { Select } from 'antd';
import "./index.scss";
/**
 * @description: 下拉框
 * @param {boolean} showSearch 是否显示搜索
 * @param {boolean} allowClear 是否显示清除
 * @param {Function} filterOption 过滤条件
 * @param {Function} filterSort 排序条件
 * @return {*}
 */
var SelectUI = function SelectUI(props) {
  var _props$options = props.options,
    options = _props$options === void 0 ? [] : _props$options,
    _props$showSearch = props.showSearch,
    showSearch = _props$showSearch === void 0 ? true : _props$showSearch,
    _props$allowClear = props.allowClear,
    allowClear = _props$allowClear === void 0 ? true : _props$allowClear,
    filterOption = props.filterOption,
    filterSort = props.filterSort,
    onChange = props.onChange,
    style = props.style,
    otherProps = _objectWithoutProperties(props, _excluded);
  var defaultFilterOption = function defaultFilterOption(input, option) {
    var label = option === null || option === void 0 ? void 0 : option.label.toString();
    return label.includes(input);
  };
  var defaultFilterSort = function defaultFilterSort(optionA, optionB) {
    var labelA = optionA === null || optionA === void 0 ? void 0 : optionA.label.toString().toLowerCase();
    var labelB = optionB === null || optionB === void 0 ? void 0 : optionB.label.toString().toLowerCase();
    return labelA.localeCompare(labelB);
  };
  return /*#__PURE__*/React.createElement(Select, _extends({
    className: "sic-select",
    style: style,
    options: options,
    showSearch: showSearch,
    allowClear: allowClear,
    optionFilterProp: "label",
    filterOption: filterOption !== null && filterOption !== void 0 ? filterOption : defaultFilterOption,
    filterSort: filterSort !== null && filterSort !== void 0 ? filterSort : defaultFilterSort,
    onChange: onChange
  }, otherProps));
};
export default SelectUI;