import React from 'react';
const TextUI = (props: any) => {
  const { type = 'default', style, ...otherProps } = props;
  const textStyle = (type: string, style: any) => {
    let changeStyle: any = { cursor: 'pointer' };
    switch (type) {
      case 'default':
        changeStyle.color = 'var(--textcolor)';
        return { ...changeStyle, ...style };
      case 'danger':
        changeStyle.color = 'var(--red)';
        return { ...changeStyle, ...style };
    }
  };
  return (
    <div style={textStyle(type, style)} {...otherProps}>
      {props?.children}
    </div>
  );
};

export default TextUI;
