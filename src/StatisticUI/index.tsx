import lodash from 'lodash';
import React from 'react';
import CountUp from 'react-countup';
import { TagUI } from 'sic-ui';
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
}

interface PropsType {
  className?: string;
  duration?: number;
  items: ItemsType[];
}

// 统计数值组件
export default function StatisticUI(props: PropsType) {
  const { className, duration = 2, items } = props;

  const getDecimalsIfNumber = (value: number | string): number => {
    let parsedValue = value;

    // 如果不是合法数字，尝试处理字符串或返回 0
    if (!lodash.isFinite(parsedValue)) {
      if (lodash.isString(parsedValue)) {
        const trimmed = parsedValue.trim();
        const num = Number(trimmed);
        if (lodash.isFinite(num)) {
          parsedValue = num;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    }

    const str = parsedValue.toString();
    const decimalIndex = str.indexOf('.');
    return decimalIndex >= 0 ? str.slice(decimalIndex + 1).length : 0;
  };
  return (
    <div className={`statisticUI ${className ?? ''}`}>
      {!lodash.isEmpty(items) &&
        items.map((item: any) => {
          const { id, label, value, type, colon = true, suffix, decimals, separator = '' } = item;
          return (
            <TagUI size="large" type={type} key={id}>
              {`${label}${colon ? ':' : ''}`}
              <CountUp
                end={value}
                decimals={decimals ?? getDecimalsIfNumber(value)}
                suffix={suffix}
                separator={separator}
                duration={duration}
              />
            </TagUI>
          );
        })}
    </div>
  );
}
