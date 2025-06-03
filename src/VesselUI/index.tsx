import { Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { FilterUI, MessageUI } from 'sic-ui';
import { Vessel } from './type';

const VesselUI = (props: any) => {
  const {
    className,
    limit,
    initialTableData,
    initialFilterParams,
    pageName,
    listType,
    getTableDataFn,
    RenderHeader,
    RenderOperate,
    RenderChildren,
    filterOptions,
    ...otherProps
  } = props;
  //日期组件form实例
  const [form] = Form.useForm();
  //获取缓存中的筛选数据
  const sessionStorageValue = sessionStorage.getItem(pageName);
  const initial: any = sessionStorageValue ? JSON.parse(sessionStorageValue) : initialFilterParams;
  //当前容器组件ref
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  //页面状态  loading 为请求中
  const [pageStatus, setPageStatus] = useState<string>('loading');
  //当前组件的配置项
  const [vessel, setVessel] = useState<Vessel>({
    limit: limit,
    // 是否批量
    choice: false,
    // 批量的值
    multipleChoice: [],
    // 搜索条件
    filterParams: initial,
    // 表格设置状态
    tableSetStatus: false,
    //表头
    headerList: initialTableData,
  });
  // 表格数据
  const [tableData, setTableData] = useState<any>();

  // 获取表格数据
  const getTableData = async () => {
    setPageStatus('loading');
    sessionStorage.setItem(pageName, JSON.stringify({ ...vessel?.filterParams }));
    const { code, body, msg } = await (listType
      ? getTableDataFn(listType ?? '', vessel?.filterParams ?? {})
      : getTableDataFn(vessel?.filterParams ?? {}));
    setPageStatus('');
    if (code === '0') {
      setTableData(body);
    } else {
      MessageUI.error(msg);
    }
  };

  useEffect(() => {
    if (getTableDataFn) {
      getTableData();
      form.setFieldsValue({
        ...vessel?.filterParams,
      });
    }
  }, [vessel?.filterParams]);

  //获取日期类型字段
  const getDateKeys = (options: any) => {
    return options
      .filter((option: any) => option?.type === 'datePicker')
      .map((item: any) => ({
        key: item?.key,
        startKey: item?.startKey,
        endKey: item?.endKey,
      }));
  };

  //筛选组件值改变时
  const onFilterValuesChange = (_: any, allValues: any) => {
    const newFilterParams = { ...initialFilterParams, ...allValues };
    const dateKeys = getDateKeys(filterOptions);
    dateKeys.forEach(({ key, startKey, endKey }: any) => {
      newFilterParams[startKey] = allValues?.[key]?.[0] ?? undefined;
      newFilterParams[endKey] = allValues?.[key]?.[1] ?? undefined;
    });
    setVessel({
      ...vessel,
      filterParams: newFilterParams,
    });
  };
  //筛选组件点击重置时
  const clickReset = () => {
    setVessel({ ...vessel, filterParams: { ...initialFilterParams } });
  };
  return (
    <div
      className={`publicVessel ${className ?? ''}`}
      ref={setContainer}
      onClick={() => vessel?.tableSetStatus && setVessel({ ...vessel, tableSetStatus: false })}
    >
      {RenderHeader && (
        <div className="publicVessel-header">
          {RenderHeader === 'filter' ? (
            <FilterUI
              form={form}
              filterOptions={filterOptions}
              filterParams={vessel?.filterParams ?? {}}
              moreFilters={vessel?.moreFilters}
              setMoreFilters={(value) => setVessel({ ...vessel, moreFilters: value })}
              onValuesChange={onFilterValuesChange}
              clickReset={clickReset}
              container={container}
            />
          ) : (
            <RenderHeader vessel={vessel} setVessel={setVessel} container={container} {...otherProps} />
          )}
        </div>
      )}

      <div className="publicVessel-content">
        {RenderOperate && (
          <RenderOperate
            vessel={vessel}
            setVessel={setVessel}
            tableData={tableData}
            pageName={pageName}
            getTableData={getTableData}
            getTableDataFn={getTableDataFn}
            listType={listType}
            {...otherProps}
          />
        )}
        <div className="publicVessel-content-vessel">
          {RenderChildren && (
            <RenderChildren
              vessel={vessel}
              setVessel={setVessel}
              tableData={tableData}
              getTableData={getTableData}
              pageStatus={pageStatus}
              {...otherProps}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default VesselUI;
