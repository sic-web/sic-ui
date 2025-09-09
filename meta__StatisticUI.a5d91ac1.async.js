"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[9523],{97439:function(o,p,e){e.r(p),e.d(p,{demos:function(){return b}});var v=e(15009),n=e.n(v),c=e(99289),y=e.n(c),u=e(67294),s=e(17069),b={"statisticui-demo-0":{component:u.memo(u.lazy(y()(n()().mark(function d(){var t,i,r;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,17069));case 2:return t=a.sent,i=t.StatisticUI,r=function(){var I=[{id:1,label:"\u603B\u8BA1",value:.12,type:"primary",suffix:"\u7B14"},{id:2,label:"\u5B9E\u53D1",value:"123.00",type:"primary"},{id:3,label:"\u670D\u52A1\u8D39",value:"12%",type:3,rawValue:!0},{id:4,label:"\u6D6E\u70B9\u6570",value:123.456,type:"primary"},{id:5,label:"\u6574\u6570",value:100,type:"primary"},{id:6,label:"\u8D1F\u6570",value:-99.99,type:"primary"},{id:7,label:"\u79D1\u5B66\u8BA1\u6570\u6CD5",value:"1.23e4",type:"primary"},{id:8,label:"\u5E26\u7A7A\u683C",value:"  200.00  ",type:"primary"},{id:9,label:"\u5C0F\u6570\u70B9\u540E\u65E0\u6570\u5B57",value:"123.",type:"primary"},{id:10,label:"\u7EAF\u5C0F\u6570",value:".45",type:"primary"},{id:11,label:"\u957F\u5C0F\u6570",value:"123.456789",type:"primary"},{id:12,label:"\u591A0\u7ED3\u5C3E",value:"123.000000",type:"primary"},{id:13,label:"\u4E2D\u6587",value:"\u4F60\u597D",type:"primary"},{id:14,label:"\u767E\u5206\u53F7\u65E0\u6570\u5B57",value:"%",type:"primary"},{id:15,label:"\u767E\u5206\u53F7\u5E26\u5B57\u6BCD",value:"12%abc",type:"primary"},{id:16,label:"\u975E\u6CD5\u5B57\u7B26",value:"abc123",type:"primary"},{id:17,label:"\u591A\u4E2A\u5C0F\u6570\u70B9",value:"123.45.67",type:"primary"},{id:18,label:"\u7279\u6B8A\u7B26\u53F7",value:"$123",type:"primary"},{id:19,label:"null \u503C",value:null,type:"primary"},{id:20,label:"undefined",value:void 0,type:"primary"},{id:21,label:"NaN",value:NaN,type:"primary"},{id:22,label:"Infinity",value:1/0,type:"primary"},{id:23,label:"\u5E03\u5C14\u503C",value:!0,type:"primary"},{id:24,label:"\u5BF9\u8C61",value:{},type:"primary"},{id:25,label:"\u6570\u7EC4",value:[],type:"primary"},{id:26,label:"\u5F3A\u5236\u4E24\u4F4D\u5C0F\u6570",value:123,decimals:2,type:"primary"},{id:27,label:"\u5F3A\u5236\u96F6\u4F4D\u5C0F\u6570",value:"123.45",decimals:0,type:"primary"},{id:28,label:"rawValue \u663E\u793A\u539F\u59CB\u503C",value:"123.00",rawValue:!0,type:"primary"}];return u.createElement(i,{items:I})},a.abrupt("return",{default:r});case 6:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"statisticui-demo-0",refAtomIds:["StatisticUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { Space } from 'antd';
import { StatisticUI } from 'sic-ui';

const App: React.FC = () => {
  const Items = [
    // \u5408\u6CD5\u6570\u5B57
    { id: 1, label: '\u603B\u8BA1', value: 0.12, type: 'primary', suffix: '\u7B14' },
    { id: 2, label: '\u5B9E\u53D1', value: '123.00', type: 'primary' },
    { id: 3, label: '\u670D\u52A1\u8D39', value: '12%', type: 3, rawValue: true },
    { id: 4, label: '\u6D6E\u70B9\u6570', value: 123.456, type: 'primary' },
    { id: 5, label: '\u6574\u6570', value: 100, type: 'primary' },
    { id: 6, label: '\u8D1F\u6570', value: -99.99, type: 'primary' },
    { id: 7, label: '\u79D1\u5B66\u8BA1\u6570\u6CD5', value: '1.23e4', type: 'primary' },

    // \u5B57\u7B26\u4E32\u683C\u5F0F\u7684\u6570\u5B57
    { id: 8, label: '\u5E26\u7A7A\u683C', value: '  200.00  ', type: 'primary' },
    { id: 9, label: '\u5C0F\u6570\u70B9\u540E\u65E0\u6570\u5B57', value: '123.', type: 'primary' },
    { id: 10, label: '\u7EAF\u5C0F\u6570', value: '.45', type: 'primary' },
    { id: 11, label: '\u957F\u5C0F\u6570', value: '123.456789', type: 'primary' },
    { id: 12, label: '\u591A0\u7ED3\u5C3E', value: '123.000000', type: 'primary' },

    // \u975E\u6CD5\u6570\u5B57
    { id: 13, label: '\u4E2D\u6587', value: '\u4F60\u597D', type: 'primary' },
    { id: 14, label: '\u767E\u5206\u53F7\u65E0\u6570\u5B57', value: '%', type: 'primary' },
    { id: 15, label: '\u767E\u5206\u53F7\u5E26\u5B57\u6BCD', value: '12%abc', type: 'primary' },
    { id: 16, label: '\u975E\u6CD5\u5B57\u7B26', value: 'abc123', type: 'primary' },
    { id: 17, label: '\u591A\u4E2A\u5C0F\u6570\u70B9', value: '123.45.67', type: 'primary' },
    { id: 18, label: '\u7279\u6B8A\u7B26\u53F7', value: '$123', type: 'primary' },
    { id: 19, label: 'null \u503C', value: null, type: 'primary' },
    { id: 20, label: 'undefined', value: undefined, type: 'primary' },
    { id: 21, label: 'NaN', value: NaN, type: 'primary' },
    { id: 22, label: 'Infinity', value: Infinity, type: 'primary' },
    { id: 23, label: '\u5E03\u5C14\u503C', value: true, type: 'primary' },
    { id: 24, label: '\u5BF9\u8C61', value: {}, type: 'primary' },
    { id: 25, label: '\u6570\u7EC4', value: [], type: 'primary' },

    // \u624B\u52A8\u6307\u5B9A decimals \u7684\u60C5\u51B5
    { id: 26, label: '\u5F3A\u5236\u4E24\u4F4D\u5C0F\u6570', value: 123, decimals: 2, type: 'primary' },
    { id: 27, label: '\u5F3A\u5236\u96F6\u4F4D\u5C0F\u6570', value: '123.45', decimals: 0, type: 'primary' },
    { id: 28, label: 'rawValue \u663E\u793A\u539F\u59CB\u503C', value: '123.00', rawValue: true, type: 'primary' },
  ];
  return <StatisticUI items={Items}></StatisticUI>;
};
export default App;`},"sic-ui":{type:"NPM",value:"0.9.1"}},entry:"index.tsx"},context:{"sic-ui":s},renderOpts:{compile:function(){var d=y()(n()().mark(function i(){var r,m=arguments;return n()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(250).then(e.bind(e,90250));case 2:return l.abrupt("return",(r=l.sent).default.apply(r,m));case 3:case"end":return l.stop()}},i)}));function t(){return d.apply(this,arguments)}return t}()}},"statisticui-demo-1":{component:u.memo(u.lazy(y()(n()().mark(function d(){var t,i,r;return n()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.bind(e,17069));case 2:return t=a.sent,i=t.StatisticUI,r=function(){var I=[{id:4,label:"0.1",value:.1,type:"primary"},{id:5,label:"0.2",value:.2,type:"primary"},{id:6,label:"0.2+0.1",value:.3,type:"primary"},{id:7,label:"0.7+0.1",value:.9,type:"primary"},{id:8,label:"1.0-0.9",value:.1,type:"primary"},{id:9,label:"\u6781\u5927\u6570\u5B57\u7B26\u4E32",value:"999999999999999",type:"primary"},{id:10,label:"\u6781\u5C0F\u6570\u5B57\u7B26\u4E32",value:"0.0000000000000001",type:"primary"},{id:11,label:"\u79D1\u5B66\u8BA1\u6570\u6CD5",value:"1.23e-10",type:"primary"},{id:12,label:"\u957F\u6D6E\u70B9\u6570",value:.12345678901234568,type:"primary"}];return u.createElement(i,{items:I})},a.abrupt("return",{default:r});case 6:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"statisticui-demo-1",refAtomIds:["StatisticUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { Space } from 'antd';
import { StatisticUI } from 'sic-ui';

const App: React.FC = () => {
  const Items = [
    // \u7CBE\u5EA6\u4E22\u5931\u6848\u4F8B
    { id: 4, label: '0.1', value: 0.1, type: 'primary' }, // 0.1 \u2192 1 \u4F4D\u5C0F\u6570
    { id: 5, label: '0.2', value: 0.2, type: 'primary' }, // 0.2 \u2192 1 \u4F4D\u5C0F\u6570
    { id: 6, label: '0.2+0.1', value: 0.3, type: 'primary' }, // 0.30000000000000004 \u2192 16 \u4F4D\u5C0F\u6570
    { id: 7, label: '0.7+0.1', value: 0.9, type: 'primary' }, // 0.7999999999999999 \u2192 16 \u4F4D\u5C0F\u6570
    { id: 8, label: '1.0-0.9', value: 0.1, type: 'primary' }, // 0.09999999999999998 \u2192 17 \u4F4D\u5C0F\u6570
    { id: 9, label: '\u6781\u5927\u6570\u5B57\u7B26\u4E32', value: '999999999999999', type: 'primary' }, // \u8F6C\u6210 number \u540E\u53D8\u4E3A 10000000000000000
    { id: 10, label: '\u6781\u5C0F\u6570\u5B57\u7B26\u4E32', value: '0.0000000000000001', type: 'primary' }, // \u8F6C\u6210 number \u540E\u4ECD\u4FDD\u7559
    { id: 11, label: '\u79D1\u5B66\u8BA1\u6570\u6CD5', value: '1.23e-10', type: 'primary' }, // \u5C0F\u6570\u90E8\u5206\u8BC6\u522B\u4E3A 12 \u4F4D
    { id: 12, label: '\u957F\u6D6E\u70B9\u6570', value: 0.1234567890123456789, type: 'primary' }, // \u591A\u4F59\u4F4D\u88AB\u622A\u65AD
  ];
  return <StatisticUI items={Items}></StatisticUI>;
};
export default App;`},"sic-ui":{type:"NPM",value:"0.9.1"}},entry:"index.tsx"},context:{"sic-ui":s},renderOpts:{compile:function(){var d=y()(n()().mark(function i(){var r,m=arguments;return n()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(250).then(e.bind(e,90250));case 2:return l.abrupt("return",(r=l.sent).default.apply(r,m));case 3:case"end":return l.stop()}},i)}));function t(){return d.apply(this,arguments)}return t}()}}}},16923:function(o,p,e){e.r(p),e.d(p,{texts:function(){return v}});const v=[{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:0,tocIndex:0},{value:"\u{1F48E} \u9AD8\u7CBE\u5EA6",paraId:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:1},{value:"\u8BF4\u660E",paraId:2,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:2,tocIndex:1},{value:"className",paraId:2,tocIndex:1},{value:"\u7C7B\u540D",paraId:2,tocIndex:1},{value:"string",paraId:2,tocIndex:1},{value:"\u5426",paraId:2,tocIndex:1},{value:"duration",paraId:2,tocIndex:1},{value:"\u52A8\u753B\u65F6\u95F4 \u4F20 0.1 \u65E0\u52A8\u753B",paraId:2,tocIndex:1},{value:"number",paraId:2,tocIndex:1},{value:"2",paraId:2,tocIndex:1},{value:"\u5426",paraId:2,tocIndex:1},{value:"\u5C5E\u6027",paraId:3,tocIndex:2},{value:"\u8BF4\u660E",paraId:3,tocIndex:2},{value:"\u7C7B\u578B",paraId:3,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:2},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:2},{value:"id",paraId:3,tocIndex:2},{value:"\u552F\u4E00\u6807\u8BC6",paraId:3,tocIndex:2},{value:"number",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u662F",paraId:3,tocIndex:2},{value:"label",paraId:3,tocIndex:2},{value:"\u6807\u7B7E\u540D",paraId:3,tocIndex:2},{value:"string",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"value",paraId:3,tocIndex:2},{value:"\u663E\u793A\u6570\u503C",paraId:3,tocIndex:2},{value:"number | string",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"type",paraId:3,tocIndex:2},{value:"Tag \u989C\u8272\u7C7B\u578B",paraId:3,tocIndex:2},{value:"string | number | 'primary'",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"colon",paraId:3,tocIndex:2},{value:"\u662F\u5426\u663E\u793A\u5192\u53F7",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"true",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"suffix",paraId:3,tocIndex:2},{value:"\u5355\u4F4D\u540E\u7F00",paraId:3,tocIndex:2},{value:"string",paraId:3,tocIndex:2},{value:"-",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"decimals",paraId:3,tocIndex:2},{value:"\u5C0F\u6570\u4F4D\u6570",paraId:3,tocIndex:2},{value:"number",paraId:3,tocIndex:2},{value:"\u81EA\u52A8\u8BC6\u522B",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"separator",paraId:3,tocIndex:2},{value:"\u5343\u5206\u4F4D\u7B26\u53F7",paraId:3,tocIndex:2},{value:"string",paraId:3,tocIndex:2},{value:"``",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2},{value:"rawValue",paraId:3,tocIndex:2},{value:"\u662F\u5426\u663E\u793A\u539F\u59CB\u6570\u636E",paraId:3,tocIndex:2},{value:"boolean",paraId:3,tocIndex:2},{value:"false",paraId:3,tocIndex:2},{value:"\u5426",paraId:3,tocIndex:2}]}}]);
