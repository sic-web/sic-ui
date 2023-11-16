var _excluded = ["to", "before", "current"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconUI } from "./..";
import "./index.scss";
var BackUI = function BackUI(props) {
  var _props$to = props.to,
    to = _props$to === void 0 ? -1 : _props$to,
    before = props.before,
    current = props.current,
    otherProps = _objectWithoutProperties(props, _excluded);
  var navigate = useNavigate();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "sic-back"
  }, otherProps), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return navigate(to !== null && to !== void 0 ? to : -1);
    },
    style: {
      marginRight: 30,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(IconUI, {
    name: "Return",
    style: {
      color: 'var(--textcolor)',
      marginRight: 3
    }
  }), "\u8FD4\u56DE"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#999'
    }
  }, before, "/"), current));
};
export default BackUI;