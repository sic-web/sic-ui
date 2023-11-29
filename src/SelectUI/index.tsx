import React from 'react';
import { Select } from 'antd';
import './index.scss';

/**
 * @description: 下拉框
 * @param {boolean} showSearch 是否显示搜索
 * @param {boolean} allowClear 是否显示清除
 * @param {Function} filterOption 过滤条件
 * @param {Function} filterSort 排序条件
 * @param {Function} fieldNames 自定义字段
 * @return {*}
 */

const SelectUI = (props: any) => {
  const {
    options = [],
    showSearch = true,
    allowClear = true,
    filterOption,
    filterSort,
    fieldNames,
    onChange,
    style,
    ...otherProps
  } = props;

  const defaultFilterOption = (input: string, option: any) => {
    const label = fieldNames?.label ? option?.[fieldNames?.label].toString() : option?.label.toString();
    return label.includes(input);
  };
  const defaultFilterSort = (optionA: any, optionB: any) => {
    const labelA = fieldNames?.label ? optionA?.[fieldNames?.label].toString().toLowerCase() : optionA?.label.toString().toLowerCase();
    const labelB = fieldNames?.label ? optionB?.[fieldNames?.label].toString().toLowerCase() : optionB?.label.toString().toLowerCase();
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
      fieldNames={fieldNames}
      onChange={onChange}
      {...otherProps}
    ></Select>
  );
};
export default SelectUI;
