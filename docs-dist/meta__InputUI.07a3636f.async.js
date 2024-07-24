"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[976],{41056:function(E,r,e){e.r(r),e.d(r,{demos:function(){return v}});var m=e(43953),a=e.n(m),g=e(9083),h=e.n(g),f=e(91184),c=e.n(f),p=e(38497),D=e(84967),v={"inputui-demo-0":{component:p.memo(p.lazy(c()(a()().mark(function i(){var s,t,o,_,l,n;return a()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return s=u.sent,t=s.default,o=s.useState,u.next=7,Promise.resolve().then(e.bind(e,44956));case 7:return _=u.sent,l=_.InputUI,n=function(){var C=o(),I=h()(C,2),R=I[0],O=I[1],P=function(d){return O(d)};return t.createElement("div",null,t.createElement(l,{onChange:function(d){return console.log(d)},onchangeTime:500}),t.createElement("br",null),t.createElement("br",null),t.createElement(l.Range,{onChange:P,min:0,max:100}),JSON.stringify(R))},u.abrupt("return",{default:n});case 11:case"end":return u.stop()}},i)})))),asset:{type:"BLOCK",id:"inputui-demo-0",refAtomIds:["InputUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.3.54"}},entry:"index.tsx"},context:{react:e(38497),"sic-ui":e(44956)},renderOpts:{compile:function(){var i=c()(a()().mark(function t(){var o,_=arguments;return a()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(6628).then(e.bind(e,76628));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,_));case 3:case"end":return n.stop()}},t)}));function s(){return i.apply(this,arguments)}return s}()}}}},76690:function(E,r,e){e.r(r),e.d(r,{texts:function(){return a}});var m=e(84967);const a=[{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:0,tocIndex:1}]}}]);
