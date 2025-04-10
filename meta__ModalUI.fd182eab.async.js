"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[7073],{77202:function(O,s,e){var i;e.r(s),e.d(s,{demos:function(){return D}});var d=e(15009),_=e.n(d),M=e(5574),U=e.n(M),h=e(99289),p=e.n(h),l=e(67294),C=e(16649),P=e(69646),D={"modalui-demo-0":{component:l.memo(l.lazy(p()(_()().mark(function c(){var u,a,o,r,m,n,v,E;return _()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=t.sent,a=u.default,o=u.useState,t.next=7,Promise.resolve().then(e.bind(e,69646));case 7:return r=t.sent,m=r.ButtonUI,n=r.ModalUI,v=r.IconUI,E=function(){var y=o(!1),f=U()(y,2),A=f[0],I=f[1],B=function(){return I(!1)};return a.createElement("div",null,a.createElement(m,{type:"primary",onClick:function(){return I(!0)}},"\u5F39\u7A97"),a.createElement(n,{isOpen:A,setIsOpen:I,icon:a.createElement(v,{name:"SwitchButton"}),title:"\u786E\u8BA4\u5F00\u542F",confirm:B},"\u60A8\u786E\u5B9A\u8981","\u5F00\u542F","\u6B64\u4F01\u4E1A\u5417\uFF1F"))},t.abrupt("return",{default:E});case 13:case"end":return t.stop()}},c)})))),asset:{type:"BLOCK",id:"modalui-demo-0",refAtomIds:["ModalUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { ButtonUI, ModalUI, IconUI } from 'sic-ui';
import { Space } from 'antd';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const confirm = () => setIsOpen(false);
  return (
    <div>
      <ButtonUI type="primary" onClick={() => setIsOpen(true)}>
        \u5F39\u7A97
      </ButtonUI>
      <ModalUI isOpen={isOpen} setIsOpen={setIsOpen} icon={<IconUI name="SwitchButton" />} title={'\u786E\u8BA4\u5F00\u542F'} confirm={confirm}>
        \u60A8\u786E\u5B9A\u8981{'\u5F00\u542F'}\u6B64\u4F01\u4E1A\u5417\uFF1F
      </ModalUI>
    </div>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.6.7"}},entry:"index.tsx"},context:{react:i||(i=e.t(l,2)),"sic-ui":P},renderOpts:{compile:function(){var c=p()(_()().mark(function a(){var o,r=arguments;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,r));case 3:case"end":return n.stop()}},a)}));function u(){return c.apply(this,arguments)}return u}()}}}},80796:function(O,s,e){e.r(s),e.d(s,{texts:function(){return d}});var i=e(16649);const d=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u5F39\u7A97\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:3},{value:"type",paraId:3,tocIndex:3},{value:"\u5F53\u524D TagUI \u6240\u5C5E\u7C7B\u578B",paraId:3,tocIndex:3},{value:"Number",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u5426",paraId:3,tocIndex:3},{value:"icon",paraId:3,tocIndex:3},{value:"\u5F53\u524D TagUI \u6240 \u643A\u5E26\u7684 Icon",paraId:3,tocIndex:3},{value:"ReactNode",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u5426",paraId:3,tocIndex:3}]}}]);
