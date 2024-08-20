import React from 'react';
import { Tooltip } from 'antd';
import { num_expand } from 'sic-util';
interface PropsType {
  className?: string;
  style?: React.CSSProperties;
  children?: string | number;
  isNumExpand?: boolean;
}
//自动转换金额组件 默认分转元  默认超过万元展示万单位金额
export default function AmountCellUI(props: PropsType) {
  const { className, style, children, isNumExpand = true } = props;
  //
  const formatAmount = (amount: number | string) => {
    const num = Number(amount);
    if (Math.abs(num) >= 100000000) {
      return `${num_expand(amount, 100000000)} 亿`;
    } else if (Math.abs(num) >= 10000) {
      return `${num_expand(amount, 10000)} 万`;
    } else {
      return amount;
    }
  };
  return (
    <div className={`sicAmountCellUI ${className ?? ''}`} style={style}>
      {children || children === 0 ? (
        <Tooltip placement="right" title={Math.abs(Number(num_expand(children))) >= 10000 ? num_expand(children) : null}>
          {formatAmount(isNumExpand ? num_expand(children) : children)}
        </Tooltip>
      ) : null}
    </div>
  );
}
