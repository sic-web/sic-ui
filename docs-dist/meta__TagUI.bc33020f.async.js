"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[6116],{34224:function(f,c,e){e.r(c),e.d(c,{demos:function(){return C}});var U=e(15009),u=e.n(U),h=e(99289),I=e.n(h),m=e(67294),P=e(50120),C={"tagui-demo-0":{component:m.memo(m.lazy(I()(u()().mark(function s(){var o,n,l,t,p,a,i;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=r.sent,n=o.default,r.next=6,Promise.resolve().then(e.bind(e,25e3));case 6:return l=r.sent,t=l.TagUI,r.next=10,Promise.resolve().then(e.bind(e,58955));case 10:return p=r.sent,a=p.Space,i=function(){return n.createElement(a,{wrap:!0},n.createElement(t,null,"\u7070\u8272"),n.createElement(t,{type:1},"\u7EFF\u8272"),n.createElement(t,{type:2},"\u7D2B\u8272"),n.createElement(t,{type:3},"\u84DD\u8272"),n.createElement(t,{type:4},"\u7070\u8272"),n.createElement(t,{type:5},"\u9EC4\u8272"),n.createElement(t,{type:6},"\u7EA2\u8272"),n.createElement(t,{type:7},"\u6DF1\u7EA2"),n.createElement(t,{type:8},"\u6DE1\u9752"),n.createElement(t,{type:9},"\u7C89\u7EA2"),n.createElement(t,{type:10},"\u6A44\u6984\u8272"))},r.abrupt("return",{default:i});case 14:case"end":return r.stop()}},s)})))),asset:{type:"BLOCK",id:"tagui-demo-0",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';\r
import { TagUI } from 'sic-ui';\r
import { Space } from 'antd';\r
\r
const App: React.FC = () => (\r
  <Space wrap>\r
    <TagUI>\u7070\u8272</TagUI>\r
    <TagUI type={1}>\u7EFF\u8272</TagUI>\r
    <TagUI type={2}>\u7D2B\u8272</TagUI>\r
    <TagUI type={3}>\u84DD\u8272</TagUI>\r
    <TagUI type={4}>\u7070\u8272</TagUI>\r
    <TagUI type={5}>\u9EC4\u8272</TagUI>\r
    <TagUI type={6}>\u7EA2\u8272</TagUI>\r
    <TagUI type={7}>\u6DF1\u7EA2</TagUI>\r
    <TagUI type={8}>\u6DE1\u9752</TagUI>\r
    <TagUI type={9}>\u7C89\u7EA2</TagUI>\r
    <TagUI type={10}>\u6A44\u6984\u8272</TagUI>\r
  </Space>\r
);\r
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.11"},antd:{type:"NPM",value:"5.20.0"}},entry:"index.tsx"},context:{react:e(67294),"sic-ui":e(25e3),antd:e(58955)},renderOpts:{compile:function(){var s=I()(u()().mark(function n(){var l,t=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,t));case 3:case"end":return a.stop()}},n)}));function o(){return s.apply(this,arguments)}return o}()}},"tagui-demo-1":{component:m.memo(m.lazy(I()(u()().mark(function s(){var o,n,l,t,p,a,i,y,r,v,g,T,E;return u()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=d.sent,n=o.default,d.next=6,Promise.resolve().then(e.bind(e,25e3));case 6:return l=d.sent,t=l.TagUI,p=l.IconUI,d.next=11,Promise.resolve().then(e.bind(e,21097));case 11:return a=d.sent,i=a.Currency,y=a.CheckOne,r=a.UTurnLeft,v=a.RotateOne,d.next=18,Promise.resolve().then(e.bind(e,58955));case 18:return g=d.sent,T=g.Space,E=function(){return n.createElement(T,{wrap:!0},n.createElement(t,{type:1,icon:n.createElement(p,{name:!0,DataFour:!0})},"\u7EFF\u8272"),n.createElement(t,{type:2,icon:n.createElement(i,null)},"\u7D2B\u8272"),n.createElement(t,{type:3,icon:n.createElement(y,null)},"\u84DD\u8272"),n.createElement(t,{type:4,icon:n.createElement(r,null)},"\u7070\u8272"),n.createElement(t,{type:5,icon:n.createElement(v,null)},"\u9EC4\u8272"))},d.abrupt("return",{default:E});case 22:case"end":return d.stop()}},s)})))),asset:{type:"BLOCK",id:"tagui-demo-1",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';\r
import { TagUI, IconUI } from 'sic-ui';\r
import { DataFour, Currency, CheckOne, CloseOne, UTurnLeft, RotateOne } from '@icon-park/react';\r
import { Space } from 'antd';\r
\r
const App: React.FC = () => (\r
  <Space wrap>\r
    <TagUI type={1} icon={<IconUI name DataFour />}>\r
      \u7EFF\u8272\r
    </TagUI>\r
    <TagUI type={2} icon={<Currency />}>\r
      \u7D2B\u8272\r
    </TagUI>\r
    <TagUI type={3} icon={<CheckOne />}>\r
      \u84DD\u8272\r
    </TagUI>\r
    <TagUI type={4} icon={<UTurnLeft />}>\r
      \u7070\u8272\r
    </TagUI>\r
    <TagUI type={5} icon={<RotateOne />}>\r
      \u9EC4\u8272\r
    </TagUI>\r
  </Space>\r
);\r
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.11"},"@icon-park/react":{type:"NPM",value:"1.4.2"},antd:{type:"NPM",value:"5.20.0"}},entry:"index.tsx"},context:{react:e(67294),"sic-ui":e(25e3),"@icon-park/react":e(21097),antd:e(58955)},renderOpts:{compile:function(){var s=I()(u()().mark(function n(){var l,t=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,t));case 3:case"end":return a.stop()}},n)}));function o(){return s.apply(this,arguments)}return o}()}}}},7461:function(f,c,e){e.r(c),e.d(c,{texts:function(){return u}});var U=e(50120);const u=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u6807\u7B7E\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F48E} \u4F7F\u7528 icon",paraId:2},{value:"\u{1F525}TagUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:3,tocIndex:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:3},{value:"type",paraId:4,tocIndex:3},{value:"\u5F53\u524D TagUI \u6240\u5C5E\u7C7B\u578B",paraId:4,tocIndex:3},{value:"Number",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"icon",paraId:4,tocIndex:3},{value:"\u5F53\u524D TagUI \u6240 \u643A\u5E26\u7684 Icon",paraId:4,tocIndex:3},{value:"ReactNode",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"style",paraId:4,tocIndex:3},{value:"\u6837\u5F0F",paraId:4,tocIndex:3},{value:"Any",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3}]}}]);
