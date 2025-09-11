import React, { useEffect, useState } from 'react';
import { Flex, Input } from 'antd';
import { IconUI } from 'sic-ui';
import './index.scss';

// 搜索框
let timer: any;
const SearchUI = (props: any) => {
  const { value, placeholder, onChange } = props;
  const [searchValue, setSearchValue] = useState<string>();
  useEffect(() => {
    setSearchValue(value);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  const valueChange = (e: any) => {
    if (e?.type === 'change' || e?.type === 'compositionend') {
      setSearchValue(e.target.value);
      clearTimeout(timer);
      timer = setTimeout(() => {
        onChange(e.target.value.trim());
      }, 500);
    }
  };

  return (
    <Input.Search
      value={searchValue}
      className="searchUI"
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
