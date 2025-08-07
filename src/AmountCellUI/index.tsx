import { Tooltip } from 'antd';
import lodash from 'lodash';
import React from 'react';
import CountUp from 'react-countup';
import { num_expand } from 'sic-util';

interface PropsType extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  /** 金额单位类名 */
  suffixClassName?: string;
  /** 金额-类名 */
  numClassName?: string;
  children?: string | number;
  animation?: boolean;
  rawValue?: boolean;
  forceRender?: boolean;
  separator?: string;
  isTooltipTitle?: boolean;
}

export default function AmountCellUI(props: PropsType) {
  const {
    className,
    suffixClassName = '',
    numClassName = '',
    children,
    animation = false,
    rawValue = false,
    forceRender = false,
    separator = '',
    isTooltipTitle = true,
    ...otherProps
  } = props;

  /**
   * 判断传入值是否为合法数字（包括字符串形式的数字）
   */
  const isNumeric = (value: number | string | null | undefined): boolean => {
    if (value === null || value === undefined) return false;

    let num: number;

    if (lodash.isString(value)) {
      const trimmed = value.trim();
      if (!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][-+]?\d+)?$/.test(trimmed)) return false;
      num = Number(trimmed);
    } else if (lodash.isNumber(value)) {
      num = value;
    } else {
      return false;
    }

    return lodash.isFinite(num);
  };

  /**
   * 将传入值转换为有限数字，失败返回 null
   */
  const toFiniteNumber = (value: number | string | null | undefined): number | null => {
    if (isNumeric(value)) {
      return Number(value);
    }
    return null;
  };

  /**
   * 获取传入值的小数位数（忽略末尾为 0 的情况，如 1.00 返回 0）
   */
  const getDecimalsIfNumber = (value: number | string | null | undefined): number => {
    const num = toFiniteNumber(value);
    if (num === null || !isNumeric(value)) return 0;

    if (Number.isInteger(num)) return 0;

    const str = num.toPrecision(); // 更稳定地获取数值字符串
    const decimalIndex = str.indexOf('.');
    if (decimalIndex === -1) return 0;

    const fractionalPart = str.slice(decimalIndex + 1).replace(/[^0-9]/g, '');
    return fractionalPart.length;
  };

  /**
   * 对金额进行格式化：
   * - 大于等于 1 亿：显示为 "X 亿"
   * - 大于等于 1 万：显示为 "X 万"
   * - 否则原样展示
   */
  const getFormatAmount = (amount: number | string): { value: number | string; suffix: string } => {
    const num = toFiniteNumber(amount);
    if (num === null) return { value: amount, suffix: '' };

    if (Math.abs(num) >= 100000000) {
      return {
        value: num_expand(amount, 100000000),
        suffix: '亿',
      };
    } else if (Math.abs(num) >= 10000) {
      return {
        value: num_expand(amount, 10000),
        suffix: '万',
      };
    } else {
      return {
        value: amount,
        suffix: '',
      };
    }
  };

  // ================= 组件渲染逻辑 ================= //
  // 如果强制渲染，直接返回内容
  if (forceRender) {
    return (
      <div className={`amountCellUI ${className ?? ''}`} {...otherProps}>
        {children}
      </div>
    );
  }

  // 如果不是合法数字，直接返回 '--'
  if (!isNumeric(children)) {
    return (
      <div className={`amountCellUI ${className ?? ''}`} {...otherProps}>
        {'--'}
      </div>
    );
  }

  // 提前计算格式化结果，避免重复调用
  const formattedAmount = getFormatAmount(children!);

  return (
    <div className={`amountCellUI ${className ?? ''}`} {...otherProps}>
      <Tooltip placement="right" title={isTooltipTitle ? children : null}>
        {animation ? (
          <span>
            <CountUp
              className={`${numClassName}`}
              end={rawValue ? Number(children) : Number(formattedAmount?.value)}
              decimals={rawValue ? getDecimalsIfNumber(children) : getDecimalsIfNumber(formattedAmount?.value)}
              separator={separator}
            />
            {!rawValue && formattedAmount?.suffix && <span className={`${suffixClassName}`}>{formattedAmount?.suffix}</span>}
          </span>
        ) : (
          <span>
            {rawValue ? (
              <span className={`${numClassName}`}>{Number(children)}</span>
            ) : (
              <>
                <span className={`${numClassName}`}>{Number(formattedAmount?.value)}</span>
                <span className={`${suffixClassName}`}>{formattedAmount?.suffix}</span>
              </>
            )}
          </span>
        )}
      </Tooltip>
    </div>
  );
}
