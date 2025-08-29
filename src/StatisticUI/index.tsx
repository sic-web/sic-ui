import React from 'react';
import CountUp from 'react-countup';
import { TagUI } from 'sic-ui';
import lodash from 'lodash';
import './index.scss';

interface ItemsType {
  id: number;
  label?: string;
  value?: number | string;
  type?: number | string | 'primary';
  colon?: boolean;
  suffix?: string;
  decimals?: number;
  separator?: string;
  rawValue?: boolean;
}

interface PropsType {
  className?: string;
  duration?: number;
  items: ItemsType[];
}

// 统计数值组件
export default function StatisticUI(props: PropsType) {
  const { className, duration = 2, items } = props;

  const getDecimalsIfNumber = (value: number | string | null | undefined): number => {
    if (value === null || value === undefined) {
      return 0;
    }

    let num: number | null = null;
    let str = '';

    if (lodash.isString(value)) {
      str = value.trim();
      // 支持科学计数法、正负号等
      if (!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][-+]?\d+)?$/.test(str)) {
        return 0;
      }
      num = Number(str);
    } else if (lodash.isNumber(value)) {
      str = value.toString();
      num = value;
    } else {
      return 0;
    }

    if (!lodash.isFinite(num)) {
      return 0;
    }

    // 处理原始字符串来获取小数位数，避免 toFixed 导致精度丢失
    const decimalIndex = str.indexOf('.');
    if (decimalIndex === -1) {
      return 0;
    }

    const fractionalPart = str.slice(decimalIndex + 1).replace(/[^0-9]/g, '');
    return fractionalPart.length;
  };

  return (
    <div className={`statisticUI ${className ?? ''}`}>
      {!lodash.isEmpty(items) &&
        items.map((item: ItemsType) => {
          const { id, label, value, type, colon = true, suffix, decimals, separator = '', rawValue = false } = item;
          return (
            <TagUI size="large" type={type} key={id}>
              {label + (colon ? ':' : '')}
              {rawValue ? (
                value
              ) : (
                <CountUp
                  end={Number(value)}
                  decimals={decimals ?? getDecimalsIfNumber(value)}
                  suffix={suffix}
                  separator={separator}
                  duration={duration}
                />
              )}
            </TagUI>
          );
        })}
    </div>
  );
}
