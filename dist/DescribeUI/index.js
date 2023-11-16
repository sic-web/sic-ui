import React from 'react';
import "./index.scss";
var DescribeUI = function DescribeUI(props) {
  var dataSource = props.dataSource;
  // 使用 reduce 进行转换
  var newProps = dataSource === null || dataSource === void 0 ? void 0 : dataSource.reduce(function (result, item) {
    var _lastLine$;
    // 检查 line 是否存在于结果数组的最后一个子数组中
    var lastLine = result.length > 0 ? result[result.length - 1] : null;
    if (lastLine && ((_lastLine$ = lastLine[0]) === null || _lastLine$ === void 0 ? void 0 : _lastLine$.line) === item.line) {
      // 如果存在，将当前项目添加到最后一个子数组中
      lastLine === null || lastLine === void 0 ? void 0 : lastLine.push(item);
    } else {
      // 如果不存在，创建一个新的子数组并将当前项目添加到其中
      result.push([item]);
    }
    return result;
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "sic-describeui"
  }, newProps === null || newProps === void 0 ? void 0 : newProps.map(function (item, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "sic-describeui-line"
    }, item === null || item === void 0 ? void 0 : item.map(function (obj, j) {
      return /*#__PURE__*/React.createElement("div", {
        key: j,
        className: "sic-describeui-elemnet",
        style: {
          flex: obj === null || obj === void 0 ? void 0 : obj.flex
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "sic-describeui-elemnet-title"
      }, obj === null || obj === void 0 ? void 0 : obj.title), /*#__PURE__*/React.createElement("div", {
        className: "sic-describeui-elemnet-children"
      }, obj === null || obj === void 0 ? void 0 : obj.children));
    }));
  }));
};
export default DescribeUI;