import React, { useState, useEffect } from 'react';
import { Input, InputNumber } from 'antd';
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
  const { value, onChange, min, max, style } = props;
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
    <div className="sic-inputui-range" style={style}>
      <InputNumber className="range-input1" placeholder={min} value={value?.input1 ?? input1} onChange={onInput1} />
      <span className="range-to"> - </span>
      <InputNumber className="range-input2" placeholder={max} value={value?.input2 ?? input2} onChange={onInput2} />
    </div>
  );
};

InputUI.Range = Range;
export default InputUI;
