import React from 'react';
import './index.scss';

interface IProps {
  value: string;
  style?: any;
}

const PassStrong = [
  { level: 0, text: '' },
  { level: 1, text: '弱' },
  { level: 2, text: '中' },
  { level: 3, text: '强' },
];

const getLevel = (str: string) => {
  let level = 0;
  if (/\d/.test(str)) {
    level = level + 1;
  }
  if (/[a-zA-Z]/.test(str)) {
    level = level + 1;
  }
  if (/[^a-zA-Z0-9\s]/.test(str)) {
    level = level + 1;
  }
  return level;
};

const StrongCheck = (value: string) => {
  const current = PassStrong?.filter((item) => item?.level === getLevel(value))?.[0];
  return (
    <div className="passwordStrongUI-check">
      <div className="bar">
        <div className="one" style={{ backgroundColor: current?.level >= 1 ? '#FAD39A' : '#f0f0f0' }} />
        <div className="two" style={{ backgroundColor: current?.level >= 2 ? '#A6E29D' : '#f0f0f0' }} />
        <div className="three" style={{ backgroundColor: current?.level === 3 ? '#1EAF69' : '#f0f0f0' }} />
      </div>
      <div className="text">{current?.text}</div>
    </div>
  );
};

const PasswordStrongUI = (props: IProps) => {
  const { value, style } = props;
  return (
    <div className="passwordStrongUI" style={style}>
      <div className="line1">密码强度：{StrongCheck(value)}</div>
      <div>密码强度8～32位，包含数字、大/小写字母、特殊字符。</div>
    </div>
  );
};
export default PasswordStrongUI;
