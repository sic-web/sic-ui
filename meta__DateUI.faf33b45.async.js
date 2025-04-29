"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[7749],{69975:function(D,u,e){var o;e.r(u),e.d(u,{demos:function(){return M}});var i=e(15009),s=e.n(i),R=e(5574),I=e.n(R),O=e(99289),p=e.n(O),c=e(67294),j=e(689),x=e(69646),M={"dateui-demo-0":{component:c.memo(c.lazy(p()(s()().mark(function m(){var l,a,r,_,d,n;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return l=t.sent,a=l.default,r=l.useState,t.next=7,Promise.resolve().then(e.bind(e,69646));case 7:return _=t.sent,d=_.DateUI,n=function(){var P=r(),h=I()(P,2),E=h[0],y=h[1],C=r(),g=I()(C,2),f=g[0],b=g[1],A=function(v){y(v)},U=function(v){b(v)};return a.createElement("div",null,a.createElement(d,{value:E,onChange:A}),a.createElement("br",null),a.createElement("br",null),a.createElement(d,{showRange:!0,value:f,onChange:U}),a.createElement("br",null),a.createElement("br",null),a.createElement("div",null,JSON.stringify(E)),a.createElement("div",null,JSON.stringify(f)))},t.abrupt("return",{default:n});case 11:case"end":return t.stop()}},m)})))),asset:{type:"BLOCK",id:"dateui-demo-0",refAtomIds:["DateUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { DateUI } from 'sic-ui';
import dayjs from 'dayjs';

const App: React.FC = () => {
  const [value, setValue] = useState();
  const [valueRange, setValueRange] = useState();
  const change = (e) => {
    setValue(e);
  };

  const changeRange = (e) => {
    setValueRange(e);
  };
  return (
    <div>
      <DateUI value={value} onChange={change} />
      <br />
      <br />
      <DateUI showRange={true} value={valueRange} onChange={changeRange} />
      <br />
      <br />
      <div>{JSON.stringify(value)}</div>
      <div>{JSON.stringify(valueRange)}</div>
    </div>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.6.10"}},entry:"index.tsx"},context:{react:o||(o=e.t(c,2)),"sic-ui":x},renderOpts:{compile:function(){var m=p()(s()().mark(function a(){var r,_=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,_));case 3:case"end":return n.stop()}},a)}));function l(){return m.apply(this,arguments)}return l}()}}}},4122:function(D,u,e){e.r(u),e.d(u,{texts:function(){return i}});var o=e(689);const i=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u65E5\u671F\u9009\u62E9\u5668\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u529F\u80FD",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5FC5\u4F20",paraId:2,tocIndex:2},{value:"value",paraId:2,tocIndex:2},{value:"\u503C",paraId:2,tocIndex:2},{value:"Arrary",paraId:2,tocIndex:2},{value:'["",""]',paraId:2,tocIndex:2},{value:"\u662F",paraId:2,tocIndex:2},{value:"onChange",paraId:2,tocIndex:2},{value:"\u53D8\u5316",paraId:2,tocIndex:2},{value:"Fun",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u662F",paraId:2,tocIndex:2},{value:"format",paraId:2,tocIndex:2},{value:"\u683C\u5F0F",paraId:2,tocIndex:2},{value:"String",paraId:2,tocIndex:2},{value:"'YYYY-MM-DD'",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"showRange",paraId:2,tocIndex:2},{value:"\u65E5\u671F\u8303\u56F4",paraId:2,tocIndex:2},{value:"Boolean",paraId:2,tocIndex:2},{value:"false",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2}]}}]);
