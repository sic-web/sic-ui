import { Flex, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { IconUI } from 'sic-ui';
import './index.scss';
// 搜索框
let timer: any;
const SearchUI = (props: any) => {
  const { value, placeholder, onChange } = props;
  const [reactValue, setReactValue] = useState<string>();
  useEffect(() => {
    setReactValue(value);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  const valueChange = (e: any) => {
    if (e?.type === 'change' || e?.type === 'compositionend') {
      setReactValue(e.target.value);
      clearTimeout(timer);
      timer = setTimeout(() => {
        onChange(e.target.value.trim());
      }, 500);
    }
  };

  return (
    <Input.Search
      value={reactValue}
      className="sic-searchui"
      onChange={(e: any) => valueChange(e)}
      allowClear
      onSearch={(e) => onChange(e.trim())}
      placeholder={placeholder}
      enterButton={
        <Flex align="center" gap={4}>
          <IconUI name="Search" />
          <div>搜索</div>
        </Flex>
      }
    />
  );
};
export default SearchUI;
