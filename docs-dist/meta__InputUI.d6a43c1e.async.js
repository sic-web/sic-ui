"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[976],{53472:function(E,a,e){e.r(a),e.d(a,{demos:function(){return v}});var m=e(43953),u=e.n(m),g=e(9083),h=e.n(g),f=e(91184),c=e.n(f),p=e(38497),D=e(30044),v={"inputui-demo-0":{component:p.memo(p.lazy(c()(u()().mark(function i(){var s,t,o,_,l,n;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return s=r.sent,t=s.default,o=s.useState,r.next=7,Promise.resolve().then(e.bind(e,96236));case 7:return _=r.sent,l=_.InputUI,n=function(){var C=o(),I=h()(C,2),R=I[0],O=I[1],P=function(d){return O(d)};return t.createElement("div",null,t.createElement(l,{onChange:function(d){return console.log(d)},onchangeTime:500}),t.createElement("br",null),t.createElement("br",null),t.createElement(l.Range,{onChange:P,min:0,max:100}),JSON.stringify(R))},r.abrupt("return",{default:n});case 11:case"end":return r.stop()}},i)})))),asset:{type:"BLOCK",id:"inputui-demo-0",refAtomIds:["InputUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';\r
import { InputUI } from 'sic-ui';\r
import { Space } from 'antd';\r
\r
const App: React.FC = () => {\r
  const [inputRangeValue, setInputRangeValue] = useState();\r
\r
  const changeInputRange = (e) => setInputRangeValue(e);\r
  return (\r
    <div>\r
      <InputUI onChange={(e) => console.log(e)} onchangeTime={500} />\r
      <br />\r
      <br />\r
      <InputUI.Range onChange={changeInputRange} min={0} max={100} />\r
      {JSON.stringify(inputRangeValue)}\r
    </div>\r
  );\r
};\r
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.8"}},entry:"index.tsx"},context:{react:e(38497),"sic-ui":e(96236)},renderOpts:{compile:function(){var i=c()(u()().mark(function t(){var o,_=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3482).then(e.bind(e,73482));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,_));case 3:case"end":return n.stop()}},t)}));function s(){return i.apply(this,arguments)}return s}()}}}},85250:function(E,a,e){e.r(a),e.d(a,{texts:function(){return u}});var m=e(30044);const u=[{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:0,tocIndex:1}]}}]);
