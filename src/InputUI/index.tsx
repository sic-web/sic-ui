import React, { useState } from 'react';
import { Input, InputNumber } from 'antd';
import './index.scss';

const InputUI = (props: any) => {
  const { ...otherProps } = props;
  return <Input {...otherProps} />;
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
