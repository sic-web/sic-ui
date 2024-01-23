import React, { useState, useEffect } from 'react';
import { DatePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');
import './index.scss';
const DateUI = (props: any) => {
  const { className, value, onChange, format = 'YYYY-MM-DD', rangePicker = true, ...otherProps } = props;

  const [realValue, setRealValue] = useState();

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

    setRealValue(e);
    onChange(newTime);
  };

  return (
    <ConfigProvider locale={zhCN}>
      {rangePicker ? (
        <DatePicker.RangePicker
          className={`sic-dateui ${className ?? ''}`}
          separator={'至'}
          value={realValue}
          onChange={changeDate}
          {...otherProps}
        />
      ) : (
        <DatePicker className={`sic-dateui ${className ?? ''}`} value={realValue} onChange={changeDate} {...otherProps} />
      )}
    </ConfigProvider>
  );
};
export default DateUI;
