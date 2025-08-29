import React from 'react';
import { Switch } from 'antd';
import './index.scss';

const SwitchUI = (props: any) => {
  const { value, onChange, onClick, ...otherProps } = props;
  const checkChange = (e: boolean) => {
    if (onChange) {
      onChange(e === true ? 1 : 2);
    }
  };
  return (
    <div>
      <Switch checked={value === 1 ? true : false} onClick={onClick} onChange={checkChange} {...otherProps}></Switch>
    </div>
  );
};
export default SwitchUI;
