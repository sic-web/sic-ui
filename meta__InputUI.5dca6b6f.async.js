"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[976],{57385:function(I,_,e){var l;e.r(_),e.d(_,{demos:function(){return O}});var m=e(15009),a=e.n(m),g=e(5574),v=e.n(g),f=e(99289),h=e.n(f),d=e(67294),A=e(3149),R=e(19180),O={"inputui-demo-0":{component:d.memo(d.lazy(h()(a()().mark(function c(){var r,t,s,i,o,n;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=u.sent,t=r.default,s=r.useState,u.next=7,Promise.resolve().then(e.bind(e,19180));case 7:return i=u.sent,o=i.InputUI,n=function(){var P=s(),E=v()(P,2),M=E[0],D=E[1],C=function(p){return D(p)};return t.createElement("div",null,t.createElement(o,{onChange:function(p){return console.log(p)},onchangeTime:500}),t.createElement("br",null),t.createElement("br",null),t.createElement(o.Range,{onChange:C,min:0,max:100}),JSON.stringify(M))},u.abrupt("return",{default:n});case 11:case"end":return u.stop()}},c)})))),asset:{type:"BLOCK",id:"inputui-demo-0",refAtomIds:["InputUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { InputUI } from 'sic-ui';
import { Space } from 'antd';

const App: React.FC = () => {
  const [inputRangeValue, setInputRangeValue] = useState();

  const changeInputRange = (e) => setInputRangeValue(e);
  return (
    <div>
      <InputUI onChange={(e) => console.log(e)} onchangeTime={500} />
      <br />
      <br />
      <InputUI.Range onChange={changeInputRange} min={0} max={100} />
      {JSON.stringify(inputRangeValue)}
    </div>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.6.2"}},entry:"index.tsx"},context:{react:l||(l=e.t(d,2)),"sic-ui":R},renderOpts:{compile:function(){var c=h()(a()().mark(function t(){var s,i=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,i));case 3:case"end":return n.stop()}},t)}));function r(){return c.apply(this,arguments)}return r}()}}}},97319:function(I,_,e){e.r(_),e.d(_,{texts:function(){return m}});var l=e(3149);const m=[{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:0,tocIndex:1}]}}]);
