function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { useState, useEffect } from 'react';
import { Input } from 'antd';
import { IconUI } from "./..";
import "./index.scss";
// 搜索框
var timer;
var SearchUI = function SearchUI(props) {
  var value = props.value,
    placeholder = props.placeholder,
    onChange = props.onChange;
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    reactValue = _useState2[0],
    setReactValue = _useState2[1];
  useEffect(function () {
    setReactValue(value);
  }, [value]);
  var valueChange = function valueChange(e) {
    if ((e === null || e === void 0 ? void 0 : e.type) === 'change' || (e === null || e === void 0 ? void 0 : e.type) === 'compositionend') {
      setReactValue(e.target.value);
      clearTimeout(timer);
      timer = setTimeout(function () {
        onChange(e.target.value.trim());
      }, 1000);
    }
  };
  return /*#__PURE__*/React.createElement(Input.Search, {
    value: reactValue,
    className: "sic-searchui",
    onChange: function onChange(e) {
      return valueChange(e);
    },
    allowClear: true,
    onSearch: function onSearch(e) {
      return onChange(e.trim());
    }
    // onBlur={(e) => e?.target?.value && onChange(e.target.value.trim())}
    ,
    placeholder: placeholder,
    enterButton: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(IconUI, {
      name: "Search"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 4
      }
    }, "\u641C\u7D22"))
  });
};
export default SearchUI;