"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[7749],{6227:function(D,u,e){var _;e.r(u),e.d(u,{demos:function(){return x}});var c=e(43953),d=e.n(c),R=e(9083),m=e.n(R),C=e(91184),p=e.n(C),i=e(38497),T=e(94663),O=e(95342),x={"dateui-demo-0":{component:i.memo(i.lazy(p()(d()().mark(function v(){var l,a,r,s,o,n;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return l=t.sent,a=l.default,r=l.useState,t.next=7,Promise.resolve().then(e.bind(e,95342));case 7:return s=t.sent,o=s.DateUI,n=function(){var M=r(),E=m()(M,2),g=E[0],P=E[1],y=r(),h=m()(y,2),f=h[0],b=h[1],A=function(I){P(I)},U=function(I){b(I)};return a.createElement("div",null,a.createElement(o,{value:g,onChange:A}),a.createElement("br",null),a.createElement("br",null),a.createElement(o,{showRange:!0,value:f,onChange:U}),a.createElement("br",null),a.createElement("br",null),a.createElement("div",null,JSON.stringify(g)),a.createElement("div",null,JSON.stringify(f)))},t.abrupt("return",{default:n});case 11:case"end":return t.stop()}},v)})))),asset:{type:"BLOCK",id:"dateui-demo-0",refAtomIds:["DateUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';\r
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
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.13"}},entry:"index.tsx"},context:{react:_||(_=e.t(i,2)),"sic-ui":O},renderOpts:{compile:function(){var v=p()(d()().mark(function a(){var r,s=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(5302).then(e.bind(e,15302));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,s));case 3:case"end":return n.stop()}},a)}));function l(){return v.apply(this,arguments)}return l}()}}}},51762:function(D,u,e){e.r(u),e.d(u,{texts:function(){return c}});var _=e(94663);const c=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u65E5\u671F\u9009\u62E9\u5668\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u529F\u80FD",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5FC5\u4F20",paraId:2,tocIndex:2},{value:"value",paraId:2,tocIndex:2},{value:"\u503C",paraId:2,tocIndex:2},{value:"Arrary",paraId:2,tocIndex:2},{value:'["",""]',paraId:2,tocIndex:2},{value:"\u662F",paraId:2,tocIndex:2},{value:"onChange",paraId:2,tocIndex:2},{value:"\u53D8\u5316",paraId:2,tocIndex:2},{value:"Fun",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u662F",paraId:2,tocIndex:2},{value:"format",paraId:2,tocIndex:2},{value:"\u683C\u5F0F",paraId:2,tocIndex:2},{value:"String",paraId:2,tocIndex:2},{value:"'YYYY-MM-DD'",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"showRange",paraId:2,tocIndex:2},{value:"\u65E5\u671F\u8303\u56F4",paraId:2,tocIndex:2},{value:"Boolean",paraId:2,tocIndex:2},{value:"false",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2}]}}]);
