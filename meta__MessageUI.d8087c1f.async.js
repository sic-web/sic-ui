"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[5524],{93195:function(E,t,e){var u;e.r(t),e.d(t,{demos:function(){return P}});var h=e(15009),l=e.n(h),_=e(99289),p=e.n(_),m=e(67294),U=e(31071),C=e(17069),x=e(91762),P={"messageui-demo-0":{component:m.memo(m.lazy(p()(l()().mark(function g(){var d,s,r,i,c,n,o,v,M,f;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=a.sent,s=d.default,a.next=6,Promise.resolve().then(e.bind(e,31071));case 6:return r=a.sent,i=r.Space,a.next=10,Promise.resolve().then(e.bind(e,17069));case 10:return c=a.sent,n=c.ButtonUI,o=c.MessageUI,a.next=15,Promise.resolve().then(e.bind(e,91762));case 15:return v=a.sent,M=v.ExclamationCircleFilled,f=function(){var B=function(){o.success("\u6210\u529F")},O=function(){o.error("\u5931\u8D25")},y=function(){o.info({content:"\u9ED8\u8BA4",icon:s.createElement(M,{style:{color:"#fff"}})})},D=function(){o.warning("\u8B66\u544A")},A=function(){o.loading("\u52A0\u8F7D")};return s.createElement(i,null,s.createElement(n,{onClick:B},"\u63D0\u793A(\u6210\u529F)"),s.createElement(n,{onClick:O},"\u63D0\u793A(\u5931\u8D25)"),s.createElement(n,{onClick:y},"\u63D0\u793A(\u9ED8\u8BA4)"),s.createElement(n,{onClick:D},"\u63D0\u793A(\u8B66\u544A)"),s.createElement(n,{onClick:A},"\u63D0\u793A(\u52A0\u8F7D)"))},a.abrupt("return",{default:f});case 19:case"end":return a.stop()}},g)})))),asset:{type:"BLOCK",id:"messageui-demo-0",refAtomIds:["MessageUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Space, message } from 'antd';
import { ButtonUI, IconUI, MessageUI } from 'sic-ui';
import { ExclamationCircleFilled } from '@ant-design/icons';

const App: React.FC = () => {
  const showMessageSuccess = () => {
    MessageUI.success('\u6210\u529F');
  };
  const showMessageError = () => {
    MessageUI.error('\u5931\u8D25');
  };
  const showMessageInfo = () => {
    MessageUI.info({
      content: '\u9ED8\u8BA4',
      icon: <ExclamationCircleFilled style={{ color: '#fff' }} />,
    });
    // MessageUI.info('\u9ED8\u8BA4');
  };

  const showMessageWarning = () => {
    MessageUI.warning('\u8B66\u544A');
  };
  const showMessageLoading = () => {
    MessageUI.loading('\u52A0\u8F7D');
  };

  return (
    <Space>
      <ButtonUI onClick={showMessageSuccess}>\u63D0\u793A(\u6210\u529F)</ButtonUI>
      <ButtonUI onClick={showMessageError}>\u63D0\u793A(\u5931\u8D25)</ButtonUI>
      <ButtonUI onClick={showMessageInfo}>\u63D0\u793A(\u9ED8\u8BA4)</ButtonUI>
      <ButtonUI onClick={showMessageWarning}>\u63D0\u793A(\u8B66\u544A)</ButtonUI>
      <ButtonUI onClick={showMessageLoading}>\u63D0\u793A(\u52A0\u8F7D)</ButtonUI>
    </Space>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.27.1"},"sic-ui":{type:"NPM",value:"0.9.0"},"@ant-design/icons":{type:"NPM",value:"5.6.1"}},entry:"index.tsx"},context:{react:u||(u=e.t(m,2)),antd:U,"sic-ui":C,"@ant-design/icons":x},renderOpts:{compile:function(){var g=p()(l()().mark(function s(){var r,i=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,i));case 3:case"end":return n.stop()}},s)}));function d(){return g.apply(this,arguments)}return d}()}}}},9775:function(E,t,e){e.r(t),e.d(t,{texts:function(){return u}});const u=[{value:"\u6D88\u606F\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:1},{value:"\u{1F525}MessageUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:2},{value:"\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E00\u4E9B\u9759\u6001\u65B9\u6CD5\uFF0C\u4F7F\u7528\u65B9\u5F0F\u548C\u53C2\u6570\u5982\u4E0B\uFF1A",paraId:3,tocIndex:2},{value:"message.success(content, [duration], onClose)",paraId:4,tocIndex:2},{value:"message.error(content, [duration], onClose)",paraId:4,tocIndex:2},{value:"message.info(content, [duration], onClose)",paraId:4,tocIndex:2},{value:"message.warning(content, [duration], onClose)",paraId:4,tocIndex:2},{value:"message.loading(content, [duration], onClose)",paraId:4,tocIndex:2},{value:"\u5C5E\u6027",paraId:5,tocIndex:2},{value:"\u8BF4\u660E",paraId:5,tocIndex:2},{value:"\u7C7B\u578B",paraId:5,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:2},{value:"\u662F\u5426\u5FC5\u4F20",paraId:5,tocIndex:2},{value:"content",paraId:5,tocIndex:2},{value:"\u63D0\u793A\u5185\u5BB9",paraId:5,tocIndex:2},{value:"Number",paraId:5,tocIndex:2},{value:"ReactNode / config",paraId:5,tocIndex:2},{value:"\u5426",paraId:5,tocIndex:2},{value:"duration",paraId:5,tocIndex:2},{value:"\u81EA\u52A8\u5173\u95ED\u7684\u5EF6\u65F6\uFF0C\u5355\u4F4D\u79D2\u3002\u8BBE\u4E3A 0 \u65F6\u4E0D\u81EA\u52A8\u5173\u95ED",paraId:5,tocIndex:2},{value:"number",paraId:5,tocIndex:2},{value:"3s",paraId:5,tocIndex:2},{value:"\u5426",paraId:5,tocIndex:2},{value:"onClose",paraId:5,tocIndex:2},{value:"\u5173\u95ED\u65F6\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570",paraId:5,tocIndex:2},{value:"function",paraId:5,tocIndex:2},{value:"-",paraId:5,tocIndex:2},{value:"\u5426",paraId:5,tocIndex:2}]}}]);
