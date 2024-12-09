"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[976],{57385:function(E,a,e){e.r(a),e.d(a,{demos:function(){return v}});var m=e(15009),r=e.n(m),g=e(5574),h=e.n(g),f=e(99289),p=e.n(f),c=e(67294),M=e(3149),v={"inputui-demo-0":{component:c.memo(c.lazy(p()(r()().mark(function _(){var s,t,l,i,o,n;return r()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=u.sent,t=s.default,l=s.useState,u.next=7,Promise.resolve().then(e.bind(e,42081));case 7:return i=u.sent,o=i.InputUI,n=function(){var C=l(),I=h()(C,2),D=I[0],R=I[1],O=function(d){return R(d)};return t.createElement("div",null,t.createElement(o,{onChange:function(d){return console.log(d)},onchangeTime:500}),t.createElement("br",null),t.createElement("br",null),t.createElement(o.Range,{onChange:O,min:0,max:100}),JSON.stringify(D))},u.abrupt("return",{default:n});case 11:case"end":return u.stop()}},_)})))),asset:{type:"BLOCK",id:"inputui-demo-0",refAtomIds:["InputUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';\r
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
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.28"}},entry:"index.tsx"},context:{react:e(67294),"sic-ui":e(42081)},renderOpts:{compile:function(){var _=p()(r()().mark(function t(){var l,i=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,i));case 3:case"end":return n.stop()}},t)}));function s(){return _.apply(this,arguments)}return s}()}}}},97319:function(E,a,e){e.r(a),e.d(a,{texts:function(){return r}});var m=e(3149);const r=[{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:0,tocIndex:1}]}}]);
