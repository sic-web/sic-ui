import React from 'react';
import './index.scss';

const DescribeUI = (props: any) => {
  const { dataSource } = props;
  const newProps = dataSource?.reduce((result: any, item: any) => {
    // 检查 line 是否存在于结果数组的最后一个子数组中
    const lastLine = result.length > 0 ? result[result.length - 1] : null;
    if (lastLine && lastLine[0]?.line === item.line) {
      // 如果存在，将当前项目添加到最后一个子数组中
      lastLine?.push(item);
    } else {
      // 如果不存在，创建一个新的子数组并将当前项目添加到其中
      result.push([item]);
    }
    return result;
  }, []);

  return (
    <div className="sic-describeui">
      {newProps?.map((item: any, index: number) => {
        return (
          <div className="sic-describeui-line" key={index}>
            {item?.map(
              (i: any, idx: number) =>
                (!i?.noDataHide || i?.children) && (
                  <div className="sic-describeui-elemnet" style={{ flex: i?.flex }} key={idx}>
                    <div className="sic-describeui-elemnet-title">{i?.title}</div>
                    <div className="sic-describeui-elemnet-children">{i?.children}</div>
                  </div>
                ),
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DescribeUI;
