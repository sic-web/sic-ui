import React from 'react';
import { Select } from 'antd';
import './index.scss';

interface optionType {
  extend: any;
  label: string;
  value: number;
}
/**
 * @description: 下拉框
 * @param {boolean} showSearch 是否显示搜索
 * @param {boolean} allowClear 是否显示清除
 * @param {Function} filterOption 过滤条件
 * @param {Function} filterSort 排序条件
 * @return {*}
 */
const SelectUI = (props: any) => {
  const { options = [], showSearch = true, allowClear = true, filterOption, filterSort, onChange, style, ...otherProps } = props;
  const defaultFilterOption = (input: string, option: optionType) => {
    const label = option?.label.toString();
    return label.includes(input);
  };
  const defaultFilterSort = (optionA: optionType, optionB: optionType) => {
    const labelA = optionA?.label.toString().toLowerCase();
    const labelB = optionB?.label.toString().toLowerCase();
    return labelA.localeCompare(labelB);
  };

  return (
    <Select
      className="sic-select"
      style={style}
      options={options}
      showSearch={showSearch}
      allowClear={allowClear}
      optionFilterProp="label"
      filterOption={filterOption ?? defaultFilterOption}
      filterSort={filterSort ?? defaultFilterSort}
      onChange={onChange}
      {...otherProps}
    ></Select>
  );
};
export default SelectUI;
