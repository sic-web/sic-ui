"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[7749],{69975:function(f,r,e){var s;e.r(r),e.d(r,{demos:function(){return y}});var R=e(15009),d=e.n(R),D=e(5574),v=e.n(D),x=e(99289),I=e.n(x),_=e(67294),O=e(17069),y={"dateui-demo-0":{component:_.memo(_.lazy(I()(d()().mark(function c(){var l,a,u,o,i,n;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return l=t.sent,a=l.default,u=l.useState,t.next=7,Promise.resolve().then(e.bind(e,17069));case 7:return o=t.sent,i=o.DateUI,n=function(){var M=u(),p=v()(M,2),h=p[0],P=p[1],b=u(),g=v()(b,2),E=g[0],C=g[1],A=function(m){P(m)},U=function(m){C(m)};return a.createElement("div",null,a.createElement(i,{value:h,onChange:A}),a.createElement("br",null),a.createElement("br",null),a.createElement(i,{showRange:!0,value:E,onChange:U}),a.createElement("br",null),a.createElement("br",null),a.createElement("div",null,JSON.stringify(h)),a.createElement("div",null,JSON.stringify(E)))},t.abrupt("return",{default:n});case 11:case"end":return t.stop()}},c)})))),asset:{type:"BLOCK",id:"dateui-demo-0",refAtomIds:["DateUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.9.1"}},entry:"index.tsx"},context:{react:s||(s=e.t(_,2)),"sic-ui":O},renderOpts:{compile:function(){var c=I()(d()().mark(function a(){var u,o=arguments;return d()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,o));case 3:case"end":return n.stop()}},a)}));function l(){return c.apply(this,arguments)}return l}()}}}},4122:function(f,r,e){e.r(r),e.d(r,{texts:function(){return s}});const s=[{value:"\u{1F48E} \u57FA\u7840\u529F\u80FD",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:1,tocIndex:1},{value:"value",paraId:1,tocIndex:1},{value:"\u503C",paraId:1,tocIndex:1},{value:"Arrary",paraId:1,tocIndex:1},{value:'["",""]',paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"onChange",paraId:1,tocIndex:1},{value:"\u53D8\u5316",paraId:1,tocIndex:1},{value:"Fun",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"format",paraId:1,tocIndex:1},{value:"\u683C\u5F0F",paraId:1,tocIndex:1},{value:"String",paraId:1,tocIndex:1},{value:"'YYYY-MM-DD'",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"showRange",paraId:1,tocIndex:1},{value:"\u65E5\u671F\u8303\u56F4",paraId:1,tocIndex:1},{value:"Boolean",paraId:1,tocIndex:1},{value:"false",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1}]}}]);
