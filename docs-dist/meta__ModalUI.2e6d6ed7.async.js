"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[7073],{77202:function(E,o,e){e.r(o),e.d(o,{demos:function(){return D}});var m=e(15009),r=e.n(m),O=e(5574),U=e.n(O),M=e(99289),_=e.n(M),I=e(67294),x=e(16649),D={"modalui-demo-0":{component:I.memo(I.lazy(_()(r()().mark(function l(){var d,a,u,s,i,n,p,v;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=t.sent,a=d.default,u=d.useState,t.next=7,Promise.resolve().then(e.bind(e,33977));case 7:return s=t.sent,i=s.ButtonUI,n=s.ModalUI,p=s.IconUI,v=function(){var C=u(!1),f=U()(C,2),P=f[0],c=f[1],h=function(){return c(!1)};return a.createElement("div",null,a.createElement(i,{type:"primary",onClick:function(){return c(!0)}},"\u5F39\u7A97"),a.createElement(n,{isOpen:P,setIsOpen:c,icon:a.createElement(p,{name:"SwitchButton"}),title:"\u786E\u8BA4\u5F00\u542F",confirm:h},"\u60A8\u786E\u5B9A\u8981","\u5F00\u542F","\u6B64\u4F01\u4E1A\u5417\uFF1F"))},t.abrupt("return",{default:v});case 13:case"end":return t.stop()}},l)})))),asset:{type:"BLOCK",id:"modalui-demo-0",refAtomIds:["ModalUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';\r
import { ButtonUI, ModalUI, IconUI } from 'sic-ui';\r
import { Space } from 'antd';\r
\r
const App: React.FC = () => {\r
  const [isOpen, setIsOpen] = useState(false);\r
  const confirm = () => setIsOpen(false);\r
  return (\r
    <div>\r
      <ButtonUI type="primary" onClick={() => setIsOpen(true)}>\r
        \u5F39\u7A97\r
      </ButtonUI>\r
      <ModalUI isOpen={isOpen} setIsOpen={setIsOpen} icon={<IconUI name="SwitchButton" />} title={'\u786E\u8BA4\u5F00\u542F'} confirm={confirm}>\r
        \u60A8\u786E\u5B9A\u8981{'\u5F00\u542F'}\u6B64\u4F01\u4E1A\u5417\uFF1F\r
      </ModalUI>\r
    </div>\r
  );\r
};\r
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.12"}},entry:"index.tsx"},context:{react:e(67294),"sic-ui":e(33977)},renderOpts:{compile:function(){var l=_()(r()().mark(function a(){var u,s=arguments;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4019).then(e.bind(e,4019));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,s));case 3:case"end":return n.stop()}},a)}));function d(){return l.apply(this,arguments)}return d}()}}}},80796:function(E,o,e){e.r(o),e.d(o,{texts:function(){return r}});var m=e(16649);const r=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u5F39\u7A97\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:3},{value:"type",paraId:3,tocIndex:3},{value:"\u5F53\u524D TagUI \u6240\u5C5E\u7C7B\u578B",paraId:3,tocIndex:3},{value:"Number",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u5426",paraId:3,tocIndex:3},{value:"icon",paraId:3,tocIndex:3},{value:"\u5F53\u524D TagUI \u6240 \u643A\u5E26\u7684 Icon",paraId:3,tocIndex:3},{value:"ReactNode",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u5426",paraId:3,tocIndex:3}]}}]);
