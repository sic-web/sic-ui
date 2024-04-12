import React, { useState, useEffect } from 'react';
import { Form, Affix, Space, Cascader } from 'antd';
import { ButtonUI, SearchUI, SelectUI, IconUI, DateUI } from 'sic-ui';
import './index.scss';
interface IProps {
  form: any;
  filterOptions: FilterOption[];
  filterParams: any;
  moreFilters?: boolean;
  setMoreFilters?: (value: boolean) => void;
  onValuesChange?: any;
  clickReset?: any;
  container: HTMLDivElement | null;
  showFilterText?: boolean;
}

interface FilterOption {
  type?: string;
  label?: string;
  key?: string;
  options?: any[];
  startKey?: string;
  endKey?: string;
  value?: any;
  render?: () => React.ReactNode;
  renderProps?: any;
  renderValue?: string;
  isNotDelete?: boolean;
}

const FilterUI = (props: IProps) => {
  const {
    form,
    filterOptions,
    filterParams,
    moreFilters = false,
    setMoreFilters,
    onValuesChange,
    clickReset,
    container,
    showFilterText = true,
  } = props;
  //默认展示的表单
  const [visibleOptions, setVisibleOptions] = useState<FilterOption[]>([]);
  //更多筛选的表单
  const [moreOptions, setMoreOptions] = useState<FilterOption[]>([]);
  //目前筛选的值
  const [filterName, setFilterName] = useState<FilterOption[]>([]);
  //区分默认展示和更多筛选表单
  const sliceOptions = () => {
    const maxVisibleOptions = 6;
    const totalOptions = filterOptions.length;

    if (totalOptions <= maxVisibleOptions) {
      setVisibleOptions(filterOptions);
      setMoreOptions([]);
    } else {
      setVisibleOptions(filterOptions.slice(0, maxVisibleOptions));
      setMoreOptions(filterOptions.slice(maxVisibleOptions));
    }
  };
  //获取层级最后一个选中项的值
  const findCascaderLabel = (arr: any, query: any) => {
    if (query.length === 0) {
      return null;
    }
    const findItemRecursive = (currentArray: any, currentIndex: any): any => {
      const currentValue = query[currentIndex];
      const foundItem = currentArray.find((item: any) => item.value === currentValue);
      if (!foundItem) {
        return null;
      }
      if (currentIndex === query.length - 1) {
        return foundItem;
      }
      return findItemRecursive(foundItem.children, currentIndex + 1);
    };
    return findItemRecursive(arr, 0);
  };
  //获取筛选的值
  const getFilterName = () => {
    const filterNames: FilterOption[] = [];
    filterOptions.forEach((item) => {
      if (item?.type === 'search' && item?.key && filterParams[item.key]) {
        filterNames.push({
          ...item,
          label: '搜索',
          value: filterParams[item.key],
        });
      }
      if (item?.type === 'select' && item?.key && filterParams[item.key]) {
        filterNames.push({
          ...item,
          value: item?.options?.find((i) => i.value === filterParams[item.key ?? ''])?.label,
        });
      }

      if (item?.type === 'datePicker' && item?.key && filterParams[item.key]?.[0] && filterParams[item.key]?.[1]) {
        filterNames.push({
          ...item,
          value: Array.isArray(filterParams[item.key])
            ? filterParams[item.key]?.[0] + ' 至 ' + filterParams[item.key]?.[1]
            : filterParams[item.key],
        });
      }
      if (item?.type === 'cascader' && item?.key && filterParams[item.key]) {
        const cascaderValue = findCascaderLabel(item?.options, filterParams[item.key]);
        filterNames.push({
          ...item,
          value: cascaderValue?.label,
        });
      }
      if (item?.type === 'custom' && item?.renderValue) {
        filterNames.push({
          ...item,
          value: item?.renderValue,
        });
      }
    });

    setFilterName(filterNames);
  };
  useEffect(() => {
    sliceOptions();
  }, [filterOptions]);
  useEffect(() => {
    getFilterName();
  }, [filterParams, filterOptions]);

  //根据type生成form item
  const renderFilterComponent = (option: FilterOption) => {
    if (option?.type === 'custom' && option.render) {
      return (
        <Form.Item key={option.key} name={option.key} label={option.label}>
          {option.render()}
        </Form.Item>
      );
    } else {
      switch (option.type) {
        case 'search':
          return (
            <Form.Item key={option.key} name={option.key}>
              <SearchUI placeholder={option.label} {...option?.renderProps} />
            </Form.Item>
          );
        case 'select':
          return (
            <Form.Item key={option.key} name={option.key} label={option.label}>
              <SelectUI options={option.options || []} placeholder={`请选择${option.label}`} {...option?.renderProps} />
            </Form.Item>
          );
        case 'datePicker':
          return (
            <Form.Item key={option.key} name={option.key} label={option.label}>
              <DateUI isShowSelect={true} {...option?.renderProps} />
            </Form.Item>
          );
        case 'cascader':
          return (
            <Form.Item key={option.key} name={option.key} label={option.label}>
              <Cascader
                options={option.options}
                placeholder={`请选择${option.label}`}
                changeOnSelect
                expandTrigger="hover"
                displayRender={(e: any) => e[e.length - 1]}
                {...option?.renderProps}
              />
            </Form.Item>
          );

        default:
          return;
      }
    }
  };

  const formReset = () => {
    form.resetFields();
    clickReset();
  };

  const clickFilterName = (item: { key?: string; isNotDelete?: boolean }) => {
    const formData = form.getFieldsValue();
    if (item?.key && !item?.isNotDelete) {
      form.setFieldsValue({
        [item.key]: undefined,
      });
      onValuesChange(
        { [item.key]: undefined },
        {
          ...formData,
          [item.key]: undefined,
        },
      );
    }
  };
  return (
    <div className="sicFilterUI" onClick={(e) => e.stopPropagation()}>
      <div className="sicFilterUI-content">
        <Form className="sicFilterUI-content-form" form={form} onValuesChange={onValuesChange}>
          {visibleOptions.map(renderFilterComponent)}
          <div className="sicFilterUI-content-moreForm" style={{ display: moreFilters ? 'flex' : 'none' }}>
            {moreOptions.map(renderFilterComponent)}
          </div>
        </Form>
        <div className="sicFilterUI-content-operate">
          <ButtonUI type="primary" icon={<IconUI name="Clear" />} onClick={formReset}>
            重置
          </ButtonUI>
          {moreOptions && moreOptions?.length > 0 && setMoreFilters && (
            <div className="operate-more" onClick={() => setMoreFilters(!moreFilters)}>
              {moreFilters ? '关闭更多' : '更多筛选'}
              <IconUI name="Right" size="20px" style={{ transform: moreFilters ? 'rotate(270deg)' : 'rotate(90deg)' }} />
            </div>
          )}
        </div>
      </div>
      {filterName.length > 0 && showFilterText && (
        <Affix offsetTop={0} target={() => container}>
          <div className="sicFilterUI-filter">
            <div className="sicFilterUI-filter-title">已筛条件：</div>
            <div className="sicFilterUI-filter-content">
              <Space>
                {filterName.map((item) => {
                  return (
                    <div className="sicFilterUI-filter-content-item" key={item?.key} onClick={() => clickFilterName(item)}>
                      {item?.label + '：'}
                      {item?.value}

                      {!item?.isNotDelete && (
                        <IconUI name="CloseOne" theme="filled" size="14" fill="var(--textcolor)" style={{ marginLeft: 4 }} />
                      )}
                    </div>
                  );
                })}
              </Space>
            </div>
          </div>
        </Affix>
      )}
    </div>
  );
};
export default FilterUI;
