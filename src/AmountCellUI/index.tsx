import React, { useEffect, useState } from 'react';
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
  const [value, setValue] = useState<string | number>(0);
  useEffect(() => {
    const newValue = Number(children ?? 0);
    setValue(isNumExpand ? num_expand(newValue) : newValue);
  }, [children]);

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
      {value || value === 0 ? (
        <Tooltip placement="right" title={value}>
          {formatAmount(value)}
        </Tooltip>
      ) : null}
    </div>
  );
}
