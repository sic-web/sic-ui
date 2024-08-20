"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[2408],{65341:function(x,o,e){e.r(o),e.d(o,{demos:function(){return P}});var m=e(43953),a=e.n(m),U=e(9083),y=e.n(U),g=e(91184),_=e.n(g),v=e(38497),O=e(45474),P={"notificationui-demo-0":{component:v.memo(v.lazy(_()(a()().mark(function c(){var d,n,s,u,I,t,f,i,E;return a()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return d=r.sent,n=d.default,s=d.useState,r.next=7,Promise.resolve().then(e.bind(e,98438));case 7:return u=r.sent,I=u.Space,r.next=11,Promise.resolve().then(e.bind(e,96236));case 11:return t=r.sent,f=t.NotificationUI,i=t.ButtonUI,E=function(){var B=s(),C=y()(B,2),M=C[0],l=C[1];return n.createElement("div",null,n.createElement(I,null,n.createElement(i,{onClick:function(){l({type:"success",description:"\u6210\u529F\u63D0\u793A\u6D88\u606F"})}},"\u6210\u529F"),n.createElement(i,{onClick:function(){l({type:"error",description:"\u5931\u8D25\u63D0\u793A\u6D88\u606F"})}},"\u5931\u8D25"),n.createElement(i,{onClick:function(){l({type:"info",description:"\u63D0\u793A\u6D88\u606F"})}},"\u63D0\u793A"),n.createElement(i,{onClick:function(){l({type:"warning",description:"\u8B66\u544A\u63D0\u793A\u6D88\u606F"})}},"\u8B66\u544A")),n.createElement(f,{notmsg:M}))},r.abrupt("return",{default:E});case 16:case"end":return r.stop()}},c)})))),asset:{type:"BLOCK",id:"notificationui-demo-0",refAtomIds:["NotificationUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';\r
import { Space } from 'antd';\r
import { NotificationUI, ButtonUI } from 'sic-ui';\r
\r
const App: React.FC = () => {\r
  // \u63D0\u793A\u6D88\u606F\r
  const [notmsg, setNotmsg] = useState();\r
\r
  return (\r
    <div>\r
      <Space>\r
        <ButtonUI\r
          onClick={() => {\r
            setNotmsg({ type: 'success', description: '\u6210\u529F\u63D0\u793A\u6D88\u606F' });\r
          }}\r
        >\r
          \u6210\u529F\r
        </ButtonUI>\r
        <ButtonUI\r
          onClick={() => {\r
            setNotmsg({ type: 'error', description: '\u5931\u8D25\u63D0\u793A\u6D88\u606F' });\r
          }}\r
        >\r
          \u5931\u8D25\r
        </ButtonUI>\r
        <ButtonUI\r
          onClick={() => {\r
            setNotmsg({ type: 'info', description: '\u63D0\u793A\u6D88\u606F' });\r
          }}\r
        >\r
          \u63D0\u793A\r
        </ButtonUI>\r
        <ButtonUI\r
          onClick={() => {\r
            setNotmsg({ type: 'warning', description: '\u8B66\u544A\u63D0\u793A\u6D88\u606F' });\r
          }}\r
        >\r
          \u8B66\u544A\r
        </ButtonUI>\r
      </Space>\r
      <NotificationUI notmsg={notmsg} />\r
    </div>\r
  );\r
};\r
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.2"},"sic-ui":{type:"NPM",value:"0.4.8"}},entry:"index.tsx"},context:{react:e(38497),antd:e(98438),"sic-ui":e(96236)},renderOpts:{compile:function(){var c=_()(a()().mark(function n(){var s,u=arguments;return a()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3482).then(e.bind(e,73482));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,u));case 3:case"end":return t.stop()}},n)}));function d(){return c.apply(this,arguments)}return d}()}}}},1752:function(x,o,e){e.r(o),e.d(o,{texts:function(){return a}});var m=e(45474);const a=[{value:`\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u6D88\u606F\u63D0\u9192\u7EC4\u4EF6\r
`,paraId:0},{value:`\r
\u539F\u56E0\uFF1A\u53F3\u4E0A\u89D2\u770B\u4E0D\u6E05`,paraId:0},{value:"\u{1F48E} \u6D88\u606F\u63D0\u9192\u7EC4\u4EF6",paraId:1,tocIndex:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:3},{value:"notimsg",paraId:3,tocIndex:3},{value:"\u63D0\u793A\u6D88\u606F",paraId:3,tocIndex:3},{value:"Object",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:4},{value:"\u8BF4\u660E",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:4},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:4},{value:"type",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"success error info warning",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u662F",paraId:4,tocIndex:4},{value:"description",paraId:4,tocIndex:4},{value:"\u63D0\u793A\u6D88\u606F",paraId:4,tocIndex:4},{value:"String",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u662F",paraId:4,tocIndex:4},{value:"message",paraId:4,tocIndex:4},{value:"\u63D0\u793A\u6D88\u606F",paraId:4,tocIndex:4},{value:"String",paraId:4,tocIndex:4},{value:"\u7CFB\u7EDF\u63D0\u793A",paraId:4,tocIndex:4},{value:"\u5426",paraId:4,tocIndex:4}]}}]);
