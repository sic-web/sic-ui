import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { IconUI, MessageUI } from 'sic-ui';
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
  const { options = [], filterOption, filterSort, fieldNames, onChange, value, copy = false, ...otherProps } = props;
  const [selecValue, setSelecValue] = useState<string>(value);

  useEffect(() => {
    setSelecValue(value);
  }, [value]);

  const defaultFilterOption = (input: string, option: any) => {
    const label = fieldNames?.label ? option?.[fieldNames?.label].toString() : option?.label.toString();
    return label.includes(input);
  };
  const defaultFilterSort = (optionA: any, optionB: any) => {
    const labelA = fieldNames?.label ? optionA?.[fieldNames?.label].toString().toLowerCase() : optionA?.label.toString().toLowerCase();
    const labelB = fieldNames?.label ? optionB?.[fieldNames?.label].toString().toLowerCase() : optionB?.label.toString().toLowerCase();
    return labelA.localeCompare(labelB);
  };

  const clickCopy = () => {
    const labelValue = options?.find((item: any) => item?.value === selecValue)?.label ?? '';
    try {
      navigator.clipboard.writeText(labelValue);
      MessageUI.info('文本已复制到剪贴板');
    } catch (err) {
      MessageUI.error('复制失败');
    }
  };

  const changeSelect = (value: any) => {
    setSelecValue(value);
    if (onChange) onChange(value);
  };
  return (
    <div className="selectUI">
      <Select
        value={selecValue}
        options={options}
        showSearch
        allowClear
        optionFilterProp="label"
        filterOption={filterOption ?? defaultFilterOption}
        filterSort={filterSort ?? defaultFilterSort}
        fieldNames={fieldNames}
        onChange={changeSelect}
        {...otherProps}
      />
      {copy && <IconUI className="selectUI-copy" name="CopyOne" onClick={clickCopy} />}
    </div>
  );
};
export default SelectUI;
