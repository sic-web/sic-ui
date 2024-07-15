"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[839],{48158:function(m,i,e){e.r(i),e.d(i,{demos:function(){return h}});var s=e(43953),a=e.n(s),p=e(91184),v=e.n(p),I=e(38497),x=e(29154),h={"describeui-demo-0":{component:I.memo(I.lazy(v()(a()().mark(function u(){var c,n,d,r,o;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return c=t.sent,n=c.default,t.next=6,Promise.resolve().then(e.bind(e,21137));case 6:return d=t.sent,r=d.DescribeUI,o=function(){var _=[{title:"\u4EE3\u7406\u7C7B\u578B",line:1,children:"\u76F4\u5BA2",noDataHide:!0},{title:"\u4EE3\u7406\u540D\u79F0",line:1,children:"\u4E16\u53D1\u56FD\u9645\u8D38\u6613(\u4E0A\u6D77)\u6709\u9650\u516C\u53F8"},{title:"\u4EE3\u7406\u59D3\u540D",line:2,children:"\u674E\u653F"},{title:"\u624B\u673A\u53F7",line:2,children:"\u7269\u6D41\u884C\u4E1A"},{title:n.createElement("div",null,"\u8FD0\u8425\u4E13\u5458\u8FD0\u8425\u4E13\u5458"),line:3,children:"\u8D75\u5A01\u7693"},{title:"\u9500\u552E\u4E13\u5458",line:3,children:"\u51AF\u6770"}],E=[{title:"\u6807\u98981",line:1,children:"\u5185\u5BB9"},{title:"\u6807\u98982",line:2,children:"\u5185\u5BB9"},{title:"\u6807\u98983",line:2,children:"\u5185\u5BB9"},{title:"\u6807\u98983",line:3,children:n.createElement("div",null,"444")},{title:"\u6807\u98983",line:3,children:n.createElement("div",null,"444")},{title:"\u6807\u98983",line:3,children:n.createElement("div",null,"444")},{title:"\u6807\u98983",line:4,children:n.createElement("div",null,"444")},{title:"\u6807\u98983",line:4,children:n.createElement("div",null,"444")},{title:"\u6807\u98983",line:4,children:"",noDataHide:!0},{title:"\u6807\u98983",line:4,children:n.createElement("div",null,"444")}];return n.createElement("div",null,n.createElement("div",null,"\u57FA\u672C\u7ED3\u6784"),n.createElement("br",null),n.createElement(r,{dataSource:_}),n.createElement("br",null),n.createElement("div",null,"\u591A\u5C42\u7ED3\u6784"),n.createElement("br",null),n.createElement(r,{dataSource:E}))},t.abrupt("return",{default:o});case 10:case"end":return t.stop()}},u)})))),asset:{type:"BLOCK",id:"describeui-demo-0",refAtomIds:["DescribeUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { DescribeUI } from 'sic-ui';

const App: React.FC = () => {
  const dataSource1 = [
    {
      title: '\u4EE3\u7406\u7C7B\u578B',
      line: 1,
      children: '\u76F4\u5BA2',
      noDataHide: true,
    },
    {
      title: '\u4EE3\u7406\u540D\u79F0',
      line: 1,
      children: '\u4E16\u53D1\u56FD\u9645\u8D38\u6613(\u4E0A\u6D77)\u6709\u9650\u516C\u53F8',
    },
    {
      title: '\u4EE3\u7406\u59D3\u540D',
      line: 2,
      children: '\u674E\u653F',
    },
    {
      title: '\u624B\u673A\u53F7',
      line: 2,
      children: '\u7269\u6D41\u884C\u4E1A',
    },

    {
      title: <div>\u8FD0\u8425\u4E13\u5458\u8FD0\u8425\u4E13\u5458</div>,
      line: 3,
      children: '\u8D75\u5A01\u7693',
    },

    {
      title: '\u9500\u552E\u4E13\u5458',
      line: 3,
      children: '\u51AF\u6770',
    },
  ];
  const dataSource2 = [
    {
      title: '\u6807\u98981',
      line: 1,
      children: '\u5185\u5BB9',
    },
    {
      title: '\u6807\u98982',
      line: 2,
      children: '\u5185\u5BB9',
    },
    {
      title: '\u6807\u98983',
      line: 2,
      children: '\u5185\u5BB9',
    },

    {
      title: '\u6807\u98983',
      line: 3,
      children: <div>444</div>,
    },

    {
      title: '\u6807\u98983',
      line: 3,
      children: <div>444</div>,
    },

    {
      title: '\u6807\u98983',
      line: 3,
      children: <div>444</div>,
    },
    {
      title: '\u6807\u98983',
      line: 4,
      children: <div>444</div>,
    },

    {
      title: '\u6807\u98983',
      line: 4,
      children: <div>444</div>,
    },

    {
      title: '\u6807\u98983',
      line: 4,
      children: '',
      noDataHide: true,
    },
    {
      title: '\u6807\u98983',
      line: 4,
      children: <div>444</div>,
    },
  ];
  return (
    <div>
      <div>\u57FA\u672C\u7ED3\u6784</div>
      <br />
      <DescribeUI dataSource={dataSource1} />
      <br />
      <div>\u591A\u5C42\u7ED3\u6784</div>
      <br />
      <DescribeUI dataSource={dataSource2} />
    </div>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.3.47"}},entry:"index.tsx"},context:{react:e(38497),"sic-ui":e(21137)},renderOpts:{compile:function(){var u=v()(a()().mark(function n(){var d,r=arguments;return a()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(3959).then(e.bind(e,73959));case 2:return l.abrupt("return",(d=l.sent).default.apply(d,r));case 3:case"end":return l.stop()}},n)}));function c(){return u.apply(this,arguments)}return c}()}}}},56352:function(m,i,e){e.r(i),e.d(i,{texts:function(){return a}});var s=e(29154);const a=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u63CF\u8FF0\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:3},{value:"line",paraId:3,tocIndex:3},{value:"\u884C\u6570",paraId:3,tocIndex:3},{value:"Number",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"title",paraId:3,tocIndex:3},{value:"\u6807\u9898",paraId:3,tocIndex:3},{value:"String",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"children",paraId:3,tocIndex:3},{value:"\u5185\u5BB9",paraId:3,tocIndex:3},{value:"ReactNode",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"noDataHide",paraId:3,tocIndex:3},{value:"\u6CA1\u6709\u503C\u65F6\u662F\u5426\u9690\u85CF\u5F53\u524D\u9879",paraId:3,tocIndex:3},{value:"Boolean",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u5426",paraId:3,tocIndex:3},{value:"flex",paraId:3,tocIndex:3},{value:"\u5BBD\u5EA6",paraId:3,tocIndex:3},{value:"Number",paraId:3,tocIndex:3},{value:"1",paraId:3,tocIndex:3},{value:"\u5426",paraId:3,tocIndex:3}]}}]);
