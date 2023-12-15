import React, { useState, useEffect } from 'react';
import { Select, message } from 'antd';
import { IconUI, TextUI } from 'sic-ui';
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
    value,
    copy = false,
    ...otherProps
  } = props;
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
    const select = options?.filter((item: any) => item?.value === selecValue);
    const text = `${select?.[0]?.label ?? ''}`;
    try {
      navigator.clipboard.writeText(text);
      message.info('文本已复制到剪贴板');
    } catch (err) {
      message.success('复制失败');
    }
  };

  const changeSelect = (value: any) => {
    if (onChange) {
      onChange(value);
    }
    setSelecValue(value);
  };
  return (
    <div className="sic-select">
      <Select
        className="sic-selectui"
        value={value}
        style={style}
        options={options}
        showSearch={showSearch}
        allowClear={allowClear}
        optionFilterProp="label"
        filterOption={filterOption ?? defaultFilterOption}
        filterSort={filterSort ?? defaultFilterSort}
        fieldNames={fieldNames}
        onChange={changeSelect}
        {...otherProps}
      ></Select>
      {copy && (
        <TextUI className="sic-select-copy" onClick={() => clickCopy()}>
          <IconUI name="CopyOne" />
        </TextUI>
      )}
    </div>
  );
};
export default SelectUI;
