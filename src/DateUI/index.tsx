import React, { useState, useEffect } from 'react';
import { DatePicker, ConfigProvider, Select } from 'antd';
import dayjs from 'dayjs';
const quarterOfYear = require('dayjs/plugin/quarterOfYear');
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import './index.scss';

dayjs.extend(quarterOfYear);
const DateUI = (props: any) => {
  const { className, value, onChange, format = 'YYYY-MM-DD', rangePicker = true, ...otherProps } = props;
  //日期选择框值
  const [realValue, setRealValue] = useState<any>();
  //下拉框值
  const [selectValue, setSelectValue] = useState<any>();
  useEffect(() => {
    if (rangePicker) {
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
    if (rangePicker) {
      newTime = e?.map((date: any) => date.format(format));
    } else {
      newTime = e.format(format);
    }
    setSelectValue();
    setRealValue(e);
    onChange(newTime);
  };
  const options = [
    { value: 1, label: '近一周' },
    { value: 2, label: '上周' },
    { value: 3, label: '本周' },
    { value: 4, label: '近一月' },
    { value: 5, label: '上月' },
    { value: 6, label: '本月' },
    { value: 7, label: '近一季度' },
    { value: 8, label: '上季度' },
    { value: 9, label: '本季度' },
    { value: 10, label: '近一年度' },
    { value: 11, label: '上年度' },
    { value: 12, label: '本年度' },
  ];

  const changeSelect = (value: number) => {
    let startDate, endDate;

    switch (value) {
      case 1: // 近一周
        startDate = dayjs().subtract(1, 'week').startOf('day');
        endDate = dayjs().endOf('day');
        break;
      case 2: // 上周
        startDate = dayjs().subtract(2, 'week').startOf('week');
        endDate = dayjs().subtract(2, 'week').endOf('week');
        break;
      case 3: // 本周
        startDate = dayjs().startOf('week');
        endDate = dayjs().endOf('week');
        break;
      case 4: // 近一月
        startDate = dayjs().subtract(1, 'month').startOf('day');
        endDate = dayjs().endOf('day');
        break;
      case 5: // 上月
        startDate = dayjs().subtract(2, 'month').startOf('month');
        endDate = dayjs().subtract(2, 'month').endOf('month');
        break;
      case 6: // 本月
        startDate = dayjs().startOf('month');
        endDate = dayjs().endOf('month');
        break;
      case 7: // 近一季度
        startDate = dayjs().subtract(3, 'month').startOf('day');
        endDate = dayjs().endOf('day');
        break;
      case 8: // 上季度
        /* @ts-ignore */
        startDate = dayjs().subtract(6, 'month').startOf('quarter');
        /* @ts-ignore */
        endDate = dayjs().subtract(6, 'month').endOf('quarter');
        break;
      case 9: // 本季度
        /* @ts-ignore */
        startDate = dayjs().startOf('quarter');
        /* @ts-ignore */
        endDate = dayjs().endOf('quarter');
        break;
      case 10: // 近一年
        startDate = dayjs().subtract(1, 'year').startOf('day');
        endDate = dayjs().endOf('day');
        break;
      case 11: // 上年度
        startDate = dayjs().subtract(1, 'year').startOf('year');
        endDate = dayjs().subtract(1, 'year').endOf('year');
        break;
      case 12: // 本年度
        startDate = dayjs().startOf('year');
        endDate = dayjs().endOf('year');
        break;
      default:
        break;
    }
    setSelectValue(value);
    setRealValue([startDate, endDate]);
    if (startDate && endDate) {
      onChange([startDate.format(format), endDate.format(format)]);
    }
  };
  return (
    <ConfigProvider locale={zhCN}>
      {rangePicker ? (
        <div className={`sic-dateui ${className ?? ''}`}>
          <DatePicker.RangePicker separator={'至'} variant="borderless" value={realValue} onChange={changeDate} {...otherProps} />
          <Select
            className="sic-dateui-select"
            variant="filled"
            value={selectValue}
            placeholder="预设时间"
            options={options}
            onChange={changeSelect}
          />
        </div>
      ) : (
        <DatePicker className={`sic-dateui ${className ?? ''}`} value={realValue} onChange={changeDate} {...otherProps} />
      )}
    </ConfigProvider>
  );
};
export default DateUI;
