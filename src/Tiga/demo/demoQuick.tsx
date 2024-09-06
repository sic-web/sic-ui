import React, { useState, useEffect } from 'react';
import { Tiga, LoadingUI } from 'sic-ui';

const DemoQuick = () => {
  const [data, setData] = useState<any>();
  const columns1 = [
    { key: 'name', name: '姓名' },
    { key: 'age', name: '年龄' },
    { key: 'phone', name: '电话' },
  ];
  const columns2 = [
    { key: 'name', name: '姓名', sort: 1 },
    { key: 'age', name: '年龄', sort: 4 },
    { key: 'phone', name: '电话', sort: 3 },
  ];
  const columns3 = [
    { key: 'name', name: '姓名', sort: 1 },
    { key: 'age', name: '年龄', sort: 4 },
    { key: 'phone', name: '电话', sort: 3, selected: false },
    { key: 'fighting', name: '战力', sort: 2 },
  ];
  const dataSource = [
    { name: '刘备', age: 22, phone: 15692837652, fighting: 6 },
    { name: '关羽', age: 21, phone: 17697787678, fighting: 9 },
    { name: '张飞', age: 18, phone: 12392880611, fighting: 7 },
    { name: '赵云', age: 19, phone: 12392880611, fighting: 8 },
  ];
  const current = 1;
  const pageSize = 10;
  const total = 4;
  const tableParams = { dataSource: data, pageSize: pageSize, current, total };
  useEffect(() => {
    setTimeout(() => {
      setData(dataSource);
    }, 2000);
  }, []);
  return (
    <div>
      基础模式
      <LoadingUI isShowLoading={!data}>
        <Tiga rowKey="name" tableHeader={columns1} {...tableParams} />
      </LoadingUI>
      带有排序
      <Tiga rowKey="name" tableHeader={columns2} {...tableParams} />
      带有禁用
      <Tiga rowKey="name" tableHeader={columns3} {...tableParams} />
    </div>
  );
};
export default DemoQuick;
