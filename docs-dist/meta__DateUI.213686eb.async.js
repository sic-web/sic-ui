"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[7749],{69975:function(h,l,e){e.r(l),e.d(l,{demos:function(){return x}});var _=e(15009),r=e.n(_),f=e(5574),v=e.n(f),R=e(99289),m=e.n(R),I=e(67294),U=e(689),x={"dateui-demo-0":{component:I.memo(I.lazy(m()(r()().mark(function i(){var d,a,u,s,o,n;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,a=d.default,u=d.useState,t.next=7,Promise.resolve().then(e.bind(e,42081));case 7:return s=t.sent,o=s.DateUI,n=function(){var C=u(),p=v()(C,2),g=p[0],O=p[1],y=u(),E=v()(y,2),D=E[0],M=E[1],P=function(c){O(c)},b=function(c){M(c)};return a.createElement("div",null,a.createElement(o,{value:g,onChange:P}),a.createElement("br",null),a.createElement("br",null),a.createElement(o,{showRange:!0,value:D,onChange:b}),a.createElement("br",null),a.createElement("br",null),a.createElement("div",null,JSON.stringify(g)),a.createElement("div",null,JSON.stringify(D)))},t.abrupt("return",{default:n});case 11:case"end":return t.stop()}},i)})))),asset:{type:"BLOCK",id:"dateui-demo-0",refAtomIds:["DateUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';\r
import { DateUI } from 'sic-ui';\r
import dayjs from 'dayjs';\r
\r
const App: React.FC = () => {\r
  const [value, setValue] = useState();\r
  const [valueRange, setValueRange] = useState();\r
  const change = (e) => {\r
    setValue(e);\r
  };\r
\r
  const changeRange = (e) => {\r
    setValueRange(e);\r
  };\r
  return (\r
    <div>\r
      <DateUI value={value} onChange={change} />\r
      <br />\r
      <br />\r
      <DateUI showRange={true} value={valueRange} onChange={changeRange} />\r
      <br />\r
      <br />\r
      <div>{JSON.stringify(value)}</div>\r
      <div>{JSON.stringify(valueRange)}</div>\r
    </div>\r
  );\r
};\r
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.28"}},entry:"index.tsx"},context:{react:e(67294),"sic-ui":e(42081)},renderOpts:{compile:function(){var i=m()(r()().mark(function a(){var u,s=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,s));case 3:case"end":return n.stop()}},a)}));function d(){return i.apply(this,arguments)}return d}()}}}},4122:function(h,l,e){e.r(l),e.d(l,{texts:function(){return r}});var _=e(689);const r=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u65E5\u671F\u9009\u62E9\u5668\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u529F\u80FD",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5FC5\u4F20",paraId:2,tocIndex:2},{value:"value",paraId:2,tocIndex:2},{value:"\u503C",paraId:2,tocIndex:2},{value:"Arrary",paraId:2,tocIndex:2},{value:'["",""]',paraId:2,tocIndex:2},{value:"\u662F",paraId:2,tocIndex:2},{value:"onChange",paraId:2,tocIndex:2},{value:"\u53D8\u5316",paraId:2,tocIndex:2},{value:"Fun",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u662F",paraId:2,tocIndex:2},{value:"format",paraId:2,tocIndex:2},{value:"\u683C\u5F0F",paraId:2,tocIndex:2},{value:"String",paraId:2,tocIndex:2},{value:"'YYYY-MM-DD'",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"showRange",paraId:2,tocIndex:2},{value:"\u65E5\u671F\u8303\u56F4",paraId:2,tocIndex:2},{value:"Boolean",paraId:2,tocIndex:2},{value:"false",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2}]}}]);
