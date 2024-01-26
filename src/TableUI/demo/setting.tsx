import React, { useState, useEffect } from 'react';
import { TableUI } from 'sic-ui';
import './index.scss';
const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '年龄', dataIndex: 'age', key: 'age' },
  { title: '电话', dataIndex: 'phone', key: 'phone' },
];
const initialTableHeader = [
  { name: '姓名', key: 'name', sort: 1, selected: true, disable: false, width: 220 },
  { name: '年龄', key: 'age', sort: 2, selected: true, disable: false, width: 220 },
  { name: '电话', key: 'phone', sort: 3, selected: false, disable: true, width: 220 },
];

const dataSource = [
  { name: '刘备', age: 22, phone: 15692837652 },
  { name: '关羽', age: 21, phone: 17697787678 },
  { name: '张飞', age: 18, phone: 12392880611 },
];

const DemoSetting = () => {
  const current = 1;
  const pageSize = 2;
  const total = 3;

  const [status, setStatus] = useState(false);
  const [headerList, setHeaderList] = useState(initialTableHeader);
  const [newColumns, setNewColumns] = useState(columns);
  useEffect(() => {
    const list: any = [];
    headerList?.forEach((i) => {
      newColumns.forEach((j) => {
        if (i.key === j.key) {
          list.push(j);
        }
      });
    });
    setNewColumns(list);
  }, [headerList]);

  return (
    <div className="demo-setting">
      <div className="demo-setting-operate">
        <div />
        <TableUI.Setting
          openModifyHeader={status}
          setOpenModifyHeader={(e: boolean) => setStatus(e)}
          tableHeader={headerList}
          getTableheader={(value: any) => setHeaderList(value)}
          scrollHeight={window.innerHeight - 400}
        />
      </div>
      <TableUI dataSource={dataSource} columns={newColumns} current={current} pageSize={pageSize} total={total} />
    </div>
  );
};
export default DemoSetting;
