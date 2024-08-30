"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[976],{38758:function(g,a,e){var i;e.r(a),e.d(a,{demos:function(){return R}});var d=e(43953),_=e.n(d),h=e(9083),v=e.n(h),f=e(91184),E=e.n(f),m=e(38497),W=e(71216),C=e(84351),R={"inputui-demo-0":{component:m.memo(m.lazy(E()(_()().mark(function c(){var u,t,s,o,l,n;return _()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return u=r.sent,t=u.default,s=u.useState,r.next=7,Promise.resolve().then(e.bind(e,84351));case 7:return o=r.sent,l=o.InputUI,n=function(){var O=s(),I=v()(O,2),P=I[0],M=I[1],D=function(p){return M(p)};return t.createElement("div",null,t.createElement(l,{onChange:function(p){return console.log(p)},onchangeTime:500}),t.createElement("br",null),t.createElement("br",null),t.createElement(l.Range,{onChange:D,min:0,max:100}),JSON.stringify(P))},r.abrupt("return",{default:n});case 11:case"end":return r.stop()}},c)})))),asset:{type:"BLOCK",id:"inputui-demo-0",refAtomIds:["InputUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';\r
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
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.10"}},entry:"index.tsx"},context:{react:i||(i=e.t(m,2)),"sic-ui":C},renderOpts:{compile:function(){var c=E()(_()().mark(function t(){var s,o=arguments;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(1829).then(e.bind(e,71829));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,o));case 3:case"end":return n.stop()}},t)}));function u(){return c.apply(this,arguments)}return u}()}}}},4843:function(g,a,e){e.r(a),e.d(a,{texts:function(){return d}});var i=e(71216);const d=[{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:0,tocIndex:1}]}}]);
