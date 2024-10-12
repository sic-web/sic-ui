"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[2408],{10746:function(U,r,e){var c;e.r(r),e.d(r,{demos:function(){return g}});var I=e(43953),i=e.n(I),P=e(9083),M=e.n(P),O=e(91184),E=e.n(O),_=e(38497),A=e(30135),y=e(34271),D=e(40570),g={"notificationui-demo-0":{component:_.memo(_.lazy(E()(i()().mark(function p(){var o,n,d,u,m,t,f,s,C;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return o=a.sent,n=o.default,d=o.useState,a.next=7,Promise.resolve().then(e.bind(e,34271));case 7:return u=a.sent,m=u.Space,a.next=11,Promise.resolve().then(e.bind(e,40570));case 11:return t=a.sent,f=t.NotificationUI,s=t.ButtonUI,C=function(){var B=d(),x=M()(B,2),h=x[0],l=x[1];return n.createElement("div",null,n.createElement(m,null,n.createElement(s,{onClick:function(){l({type:"success",description:"\u6210\u529F\u63D0\u793A\u6D88\u606F"})}},"\u6210\u529F"),n.createElement(s,{onClick:function(){l({type:"error",description:"\u5931\u8D25\u63D0\u793A\u6D88\u606F"})}},"\u5931\u8D25"),n.createElement(s,{onClick:function(){l({type:"info",description:"\u63D0\u793A\u6D88\u606F"})}},"\u63D0\u793A"),n.createElement(s,{onClick:function(){l({type:"warning",description:"\u8B66\u544A\u63D0\u793A\u6D88\u606F"})}},"\u8B66\u544A")),n.createElement(f,{notmsg:h}))},a.abrupt("return",{default:C});case 16:case"end":return a.stop()}},p)})))),asset:{type:"BLOCK",id:"notificationui-demo-0",refAtomIds:["NotificationUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';\r
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
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.3"},"sic-ui":{type:"NPM",value:"0.4.21"}},entry:"index.tsx"},context:{react:c||(c=e.t(_,2)),antd:y,"sic-ui":D},renderOpts:{compile:function(){var p=E()(i()().mark(function n(){var d,u=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4281).then(e.bind(e,20075));case 2:return t.abrupt("return",(d=t.sent).default.apply(d,u));case 3:case"end":return t.stop()}},n)}));function o(){return p.apply(this,arguments)}return o}()}}}},11444:function(U,r,e){e.r(r),e.d(r,{texts:function(){return I}});var c=e(30135);const I=[{value:`\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u6D88\u606F\u63D0\u9192\u7EC4\u4EF6\r
`,paraId:0},{value:`\r
\u539F\u56E0\uFF1A\u53F3\u4E0A\u89D2\u770B\u4E0D\u6E05`,paraId:0},{value:"\u{1F48E} \u6D88\u606F\u63D0\u9192\u7EC4\u4EF6",paraId:1,tocIndex:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:3},{value:"notimsg",paraId:3,tocIndex:3},{value:"\u63D0\u793A\u6D88\u606F",paraId:3,tocIndex:3},{value:"Object",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:4},{value:"\u8BF4\u660E",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:4},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:4},{value:"type",paraId:4,tocIndex:4},{value:"\u7C7B\u578B",paraId:4,tocIndex:4},{value:"success error info warning",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u662F",paraId:4,tocIndex:4},{value:"description",paraId:4,tocIndex:4},{value:"\u63D0\u793A\u6D88\u606F",paraId:4,tocIndex:4},{value:"String",paraId:4,tocIndex:4},{value:"-",paraId:4,tocIndex:4},{value:"\u662F",paraId:4,tocIndex:4},{value:"message",paraId:4,tocIndex:4},{value:"\u63D0\u793A\u6D88\u606F",paraId:4,tocIndex:4},{value:"String",paraId:4,tocIndex:4},{value:"\u7CFB\u7EDF\u63D0\u793A",paraId:4,tocIndex:4},{value:"\u5426",paraId:4,tocIndex:4}]}}]);
