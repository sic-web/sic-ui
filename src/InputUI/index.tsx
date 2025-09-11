import React, { useEffect, useState } from 'react';
import { Input, InputNumber } from 'antd';
import classnames from 'classnames';
import './index.scss';

let timer: any;

const InputUI = (props: any) => {
  const { value, onChange, onchangeTime, ...otherProps } = props;
  const [reactValue, setReactValue] = useState<string>();
  useEffect(() => {
    setReactValue(value);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  const valueChange = (e: any) => {
    setReactValue(e?.target?.value);

    if (onchangeTime) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        onChange?.(e?.target?.value);
      }, onchangeTime);
    } else {
      onChange?.(e?.target?.value);
    }
  };
  return <Input value={reactValue} onChange={(e) => valueChange(e)} {...otherProps} />;
};

const Range = (props: any) => {
  const { className, value, onChange, min, max, placeholder = ['请输入', '请输入'], style } = props;
  const [input1, setInput1] = useState<number>();
  const [input2, setInput2] = useState<number>();

  const triggerChange = (changedValue: { input1?: number; input2?: number }) => {
    onChange?.({ input1, input2, ...value, ...changedValue });
  };

  const onInput1 = (e?: number) => {
    setInput1(e);
    triggerChange({ input1: e });
  };
  const onInput2 = (e?: number) => {
    setInput2(e);
    triggerChange({ input2: e });
  };
  return (
    <div className={classnames('inputUI-range', className)} style={style}>
      <InputNumber
        className="inputUI-range-input1"
        placeholder={placeholder[0]}
        min={min}
        max={max}
        value={value?.input1 ?? input1}
        onChange={onInput1}
      />
      <span className="inputUI-range-to"> - </span>
      <InputNumber
        className="inputUI-range-input2"
        placeholder={placeholder[1]}
        min={min}
        max={max}
        value={value?.input2 ?? input2}
        onChange={onInput2}
      />
    </div>
  );
};

InputUI.Range = Range;
export default InputUI;
