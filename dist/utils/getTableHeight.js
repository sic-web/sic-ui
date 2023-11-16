/**
 * 获取第一个表格的可视化高度
 * @param {*} extraHeight 额外的高度(表格底部的内容高度 Number类型,默认为74)
 * @param {*} id 当前页面中有多个table时需要制定table的id
 */
export default function getTableScroll(_ref) {
  var extraHeight = _ref.extraHeight,
    id = _ref.id;
  if (typeof extraHeight === 'undefined') {
    //  默认底部边距20
    // eslint-disable-next-line no-param-reassign
    extraHeight = 20;
  }
  var tHeader = null;
  if (id) {
    var _document$getElementB;
    tHeader = document.getElementById(id) ? (_document$getElementB = document.getElementById(id)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.getElementsByClassName('ant-table-thead')[0] : null;
  } else {
    tHeader = document.getElementsByClassName('ant-table-thead')[0];
  }
  //表格内容距离顶部的距离
  var tHeaderBottom = 0;
  if (tHeader) {
    tHeaderBottom = tHeader.getBoundingClientRect().bottom;
  }
  //窗体高度-表格内容顶部的高度-表格内容底部的高度
  // let height = document.body.clientHeight - tHeaderBottom - extraHeight
  var height = "calc(100vh - ".concat(tHeaderBottom + extraHeight, "px)");
  return height;
}