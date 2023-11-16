import React from 'react';
import "./index.scss";
var ProTitle = function ProTitle(props) {
  var _props$required = props.required,
    required = _props$required === void 0 ? true : _props$required,
    _props$line = props.line,
    line = _props$line === void 0 ? true : _props$line,
    _props$children = props.children,
    children = _props$children === void 0 ? '标题' : _props$children;
  return /*#__PURE__*/React.createElement("div", {
    className: "sic-from-protitle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sic-from-protitle-value"
  }, required && /*#__PURE__*/React.createElement("div", {
    className: "sic-from-protitle-value-icon"
  }, "*"), children), line && /*#__PURE__*/React.createElement("div", {
    className: "sic-from-protitle-line"
  }));
};
var FormUI = {
  ProTitle: ProTitle
};
export default FormUI;