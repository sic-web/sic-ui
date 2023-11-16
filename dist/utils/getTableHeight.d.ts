/**
 * 获取第一个表格的可视化高度
 * @param {*} extraHeight 额外的高度(表格底部的内容高度 Number类型,默认为74)
 * @param {*} id 当前页面中有多个table时需要制定table的id
 */
export default function getTableScroll({ extraHeight, id, }: {
    extraHeight?: number;
    id?: string;
}): string;
