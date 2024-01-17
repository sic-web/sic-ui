import React, { useState, useEffect } from 'react';
import { DatePicker, ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import dayjs from 'dayjs';
import './index.scss';

const DateUI = (props: any) => {
  const { value, onChange, format = 'YYYY-MM-DD', ...otherProps } = props;

  const [realValue, setRealValue] = useState();

  useEffect(() => {
    if (value && value?.[0] && value?.[1]) {
      const newValue: any = [dayjs(value[0], format), dayjs(value[1], format)];
      setRealValue(newValue);
    } else {
      setRealValue(undefined);
    }
  }, [value]);

  const changeDate = (e: any) => {
    const newTime = e?.map((date: any) => date.format(format));
    setRealValue(e);
    onChange(newTime);
  };

  return (
    <ConfigProvider locale={zhCN}>
      <div className="sic-dateui">
        <DatePicker.RangePicker separator={'至'} value={realValue} onChange={changeDate} {...otherProps} />
      </div>
    </ConfigProvider>
  );
};

export default DateUI;
