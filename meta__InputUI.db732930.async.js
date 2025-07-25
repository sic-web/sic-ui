"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[976],{57385:function(E,s,e){var i;e.r(s),e.d(s,{demos:function(){return O}});var g=e(15009),_=e.n(g),I=e(5574),f=e.n(I),v=e(99289),p=e.n(v),m=e(67294),R=e(11952),O={"inputui-demo-0":{component:m.memo(m.lazy(p()(_()().mark(function d(){var r,t,a,o,l,n;return _()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=u.sent,t=r.default,a=r.useState,u.next=7,Promise.resolve().then(e.bind(e,11952));case 7:return o=u.sent,l=o.InputUI,n=function(){var P=a(),h=f()(P,2),M=h[0],C=h[1],D=function(c){return C(c)};return t.createElement("div",null,t.createElement(l,{onChange:function(c){return console.log(c)},onchangeTime:500}),t.createElement("br",null),t.createElement("br",null),t.createElement(l.Range,{onChange:D,min:0,max:100}),JSON.stringify(M))},u.abrupt("return",{default:n});case 11:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"inputui-demo-0",refAtomIds:["InputUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.8.7"}},entry:"index.tsx"},context:{react:i||(i=e.t(m,2)),"sic-ui":R},renderOpts:{compile:function(){var d=p()(_()().mark(function t(){var a,o=arguments;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},t)}));function r(){return d.apply(this,arguments)}return r}()}}}},97319:function(E,s,e){e.r(s),e.d(s,{texts:function(){return i}});const i=[{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:0,tocIndex:1}]}}]);
