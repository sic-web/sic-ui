"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[2408],{45611:function(y,o,e){var i;e.r(o),e.d(o,{demos:function(){return O}});var C=e(15009),d=e.n(C),P=e(5574),U=e.n(P),h=e(99289),v=e.n(h),I=e(67294),g=e(30613),M=e(34322),O={"notificationui-demo-0":{component:I.memo(I.lazy(v()(d()().mark(function m(){var r,n,s,l,_,t,f,u,E;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=a.sent,n=r.default,s=r.useState,a.next=7,Promise.resolve().then(e.bind(e,30613));case 7:return l=a.sent,_=l.Space,a.next=11,Promise.resolve().then(e.bind(e,34322));case 11:return t=a.sent,f=t.NotificationUI,u=t.ButtonUI,E=function(){var B=s(),x=U()(B,2),D=x[0],c=x[1];return n.createElement("div",null,n.createElement(_,null,n.createElement(u,{onClick:function(){c({type:"success",description:"\u6210\u529F\u63D0\u793A\u6D88\u606F"})}},"\u6210\u529F"),n.createElement(u,{onClick:function(){c({type:"error",description:"\u5931\u8D25\u63D0\u793A\u6D88\u606F"})}},"\u5931\u8D25"),n.createElement(u,{onClick:function(){c({type:"info",description:"\u63D0\u793A\u6D88\u606F"})}},"\u63D0\u793A"),n.createElement(u,{onClick:function(){c({type:"warning",description:"\u8B66\u544A\u63D0\u793A\u6D88\u606F"})}},"\u8B66\u544A")),n.createElement(f,{notmsg:D}))},a.abrupt("return",{default:E});case 16:case"end":return a.stop()}},m)})))),asset:{type:"BLOCK",id:"notificationui-demo-0",refAtomIds:["NotificationUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Space } from 'antd';
import { NotificationUI, ButtonUI } from 'sic-ui';

const App: React.FC = () => {
  // \u63D0\u793A\u6D88\u606F
  const [notmsg, setNotmsg] = useState();

  return (
    <div>
      <Space>
        <ButtonUI
          onClick={() => {
            setNotmsg({ type: 'success', description: '\u6210\u529F\u63D0\u793A\u6D88\u606F' });
          }}
        >
          \u6210\u529F
        </ButtonUI>
        <ButtonUI
          onClick={() => {
            setNotmsg({ type: 'error', description: '\u5931\u8D25\u63D0\u793A\u6D88\u606F' });
          }}
        >
          \u5931\u8D25
        </ButtonUI>
        <ButtonUI
          onClick={() => {
            setNotmsg({ type: 'info', description: '\u63D0\u793A\u6D88\u606F' });
          }}
        >
          \u63D0\u793A
        </ButtonUI>
        <ButtonUI
          onClick={() => {
            setNotmsg({ type: 'warning', description: '\u8B66\u544A\u63D0\u793A\u6D88\u606F' });
          }}
        >
          \u8B66\u544A
        </ButtonUI>
      </Space>
      <NotificationUI notmsg={notmsg} />
    </div>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.25.4"},"sic-ui":{type:"NPM",value:"0.7.1"}},entry:"index.tsx"},context:{react:i||(i=e.t(I,2)),antd:g,"sic-ui":M},renderOpts:{compile:function(){var m=v()(d()().mark(function n(){var s,l=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,l));case 3:case"end":return t.stop()}},n)}));function r(){return m.apply(this,arguments)}return r}()}}}},6376:function(y,o,e){e.r(o),e.d(o,{texts:function(){return i}});const i=[{value:`\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u6D88\u606F\u63D0\u9192\u7EC4\u4EF6
`,paraId:0},{value:`
\u539F\u56E0\uFF1A\u53F3\u4E0A\u89D2\u770B\u4E0D\u6E05`,paraId:0},{value:"\u{1F48E} \u6D88\u606F\u63D0\u9192\u7EC4\u4EF6",paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:2,tocIndex:3},{value:"notimsg",paraId:2,tocIndex:3},{value:"\u63D0\u793A\u6D88\u606F",paraId:2,tocIndex:3},{value:"Object",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:4},{value:"\u8BF4\u660E",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:4},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:4},{value:"type",paraId:3,tocIndex:4},{value:"\u7C7B\u578B",paraId:3,tocIndex:4},{value:"success error info warning",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"\u662F",paraId:3,tocIndex:4},{value:"description",paraId:3,tocIndex:4},{value:"\u63D0\u793A\u6D88\u606F",paraId:3,tocIndex:4},{value:"String",paraId:3,tocIndex:4},{value:"-",paraId:3,tocIndex:4},{value:"\u662F",paraId:3,tocIndex:4},{value:"message",paraId:3,tocIndex:4},{value:"\u63D0\u793A\u6D88\u606F",paraId:3,tocIndex:4},{value:"String",paraId:3,tocIndex:4},{value:"\u7CFB\u7EDF\u63D0\u793A",paraId:3,tocIndex:4},{value:"\u5426",paraId:3,tocIndex:4}]}}]);
