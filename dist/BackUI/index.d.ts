import React from 'react';
import './index.scss';
interface IProps {
    to?: any;
    before?: string;
    current?: string;
    style?: {
        [key: string]: string | number;
    };
}
declare const BackUI: (props: IProps) => React.JSX.Element;
export default BackUI;
