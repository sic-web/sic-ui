import React from 'react';
import { Tiga } from 'sic-ui';

// 费率类型
export const FEERATETYPE = [
  { value: 1, label: '固定费率', type: 1 },
  { value: 2, label: '区间费率', type: 2 },
  { value: 3, label: '抽成费率', type: 3 },
];

const DemoQuickType = () => {
  const columns1 = [
    { key: 'name', name: '姓名' },
    { key: 'age', name: '年龄' },
    { key: 'phone', name: '电话' },
    { key: 'money', name: '金额', type: 'amount', transform: { rule: 'num_expand_100' } },
    { key: 'percentage', name: '百分比', type: 'amount', transform: { rule: 'num_reduce_100_%' } },
    { key: 'type', name: '标签', type: 'tagui', transform: { ruleList: FEERATETYPE } },
  ];

  const dataSource = [
    { name: '刘备', age: 22, phone: 15692837652, money: 200, percentage: 0.02, type: 1 },
    { name: '关羽', age: 21, phone: 17697787678, money: 200, percentage: 0.2, type: 2 },
    { name: '张飞', age: 18, phone: 12392880611, money: 200, percentage: 0.1, type: 3 },
    { name: '赵云', age: 19, phone: 12392880611, money: 200, percentage: 1, type: 1 },
  ];

  const current = 1;
  const pageSize = 10;
  const total = 4;
  const tableParams = { dataSource: dataSource, pageSize: pageSize, current, total };

  return (
    <div>
      金额模式
      <Tiga rowKey="name" tableHeader={columns1} {...tableParams} />
    </div>
  );
};
export default DemoQuickType;
