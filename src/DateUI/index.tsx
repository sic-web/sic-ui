import React, { useEffect, useState } from 'react';
import { ConfigProvider, DatePicker } from 'antd';
import dayjs from 'dayjs';
import classnames from 'classnames';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import './index.scss';

dayjs.extend(quarterOfYear);
dayjs.locale('zh-cn');

const DefaultPresets = [
  { label: '上周', value: [dayjs().startOf('week').subtract(1, 'week'), dayjs().endOf('week').subtract(1, 'week')] },
  { label: '本周', value: [dayjs().startOf('week'), dayjs().endOf('week')] },
  { label: '近一周', value: [dayjs().subtract(7, 'day'), dayjs()] },
  { label: '上月', value: [dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')] },
  { label: '本月', value: [dayjs().startOf('month'), dayjs().endOf('month')] },
  { label: '近一月', value: [dayjs().subtract(1, 'month'), dayjs()] },
  { label: '上季度', value: [dayjs().subtract(1, 'quarter').startOf('quarter'), dayjs().subtract(1, 'quarter').endOf('quarter')] },
  { label: '本季度', value: [dayjs().startOf('quarter'), dayjs().endOf('quarter')] },
  { label: '近一季度', value: [dayjs().subtract(1, 'quarter'), dayjs()] },
  { label: '上年度', value: [dayjs().startOf('year').subtract(1, 'year'), dayjs().endOf('year').subtract(1, 'year')] },
  { label: '本年度', value: [dayjs().startOf('year'), dayjs().endOf('year')] },
  { label: '近一年度', value: [dayjs().subtract(1, 'year'), dayjs()] },
];

const DateUI = (props: any) => {
  const { className, value, onChange, format = 'YYYY-MM-DD', showRange = false, presets = DefaultPresets, ...otherProps } = props;
  // 真实数据
  const [realValue, setRealValue] = useState();
  useEffect(() => {
    if (showRange) {
      if (value && value?.[0] && value?.[1]) {
        const newValue: any = [dayjs(value[0], format), dayjs(value[1], format)];
        setRealValue(newValue);
      } else {
        setRealValue(undefined);
      }
    } else {
      if (value) {
        const newValue: any = dayjs(value, format);
        setRealValue(newValue);
      } else {
        setRealValue(undefined);
      }
    }
  }, [value]);

  const changeDate = (e: any) => {
    let newTime;
    if (showRange) {
      newTime = e?.map((date: any) => date.format(format));
    } else {
      newTime = e?.format(format);
    }

    setRealValue(e);
    onChange(newTime);
  };

  return (
    <ConfigProvider locale={zhCN}>
      {showRange ? (
        <DatePicker.RangePicker
          className={classnames('dateUI', className)}
          separator={'至'}
          value={realValue}
          onChange={changeDate}
          presets={presets}
          {...otherProps}
        />
      ) : (
        <DatePicker className={classnames('dateUI', className)} value={realValue} onChange={changeDate} {...otherProps} />
      )}
    </ConfigProvider>
  );
};
export default DateUI;
