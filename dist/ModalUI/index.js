var _excluded = ["isOpen", "setIsOpen", "confirm", "title", "icon", "footer", "type", "children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { Modal } from 'antd';
import "./index.scss";
var styleIcon = function styleIcon(type) {
  if (type === 'primary') {
    return {
      backgroundColor: 'rgba(46, 100, 250, 0.10)'
    }; // 蓝色
  } else if (type === 'danger') {
    return {
      backgroundColor: 'rgba(255, 120, 117, 0.1)'
    }; // 红色
  } else {
    return {
      backgroundColor: 'rgba(46, 100, 250, 0.10)'
    }; // 蓝色
  }
};

var titleRender = function titleRender(title, icon, type) {
  return /*#__PURE__*/React.createElement("div", {
    className: "sic-modalui-title"
  }, /*#__PURE__*/React.createElement("div", null, title), /*#__PURE__*/React.createElement("div", {
    className: "sic-modalui-title-icon",
    style: styleIcon(type)
  }, icon));
};
var ModalUI = function ModalUI(props) {
  var isOpen = props.isOpen,
    setIsOpen = props.setIsOpen,
    confirm = props.confirm,
    title = props.title,
    icon = props.icon,
    footer = props.footer,
    type = props.type,
    children = props.children,
    otherProps = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement(Modal, _extends({
    className: "sic-modalui",
    open: isOpen,
    onOk: confirm,
    closeIcon: false,
    onCancel: function onCancel() {
      return setIsOpen(false);
    },
    title: titleRender(title, icon, type),
    footer: footer ? footer : undefined
  }, otherProps), children);
};
export default ModalUI;