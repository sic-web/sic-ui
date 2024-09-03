"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[6116],{91511:function(h,I,e){var i;e.r(I),e.d(I,{demos:function(){return D}});var v=e(43953),c=e.n(v),C=e(91184),y=e.n(C),p=e(38497),R=e(32668),g=e(84351),E=e(44450),M=e(65014),D={"tagui-demo-0":{component:p.memo(p.lazy(y()(c()().mark(function d(){var u,n,l,a,s,t,m;return c()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return u=r.sent,n=u.default,r.next=6,Promise.resolve().then(e.bind(e,84351));case 6:return l=r.sent,a=l.TagUI,r.next=10,Promise.resolve().then(e.bind(e,44450));case 10:return s=r.sent,t=s.Space,m=function(){return n.createElement(t,{wrap:!0},n.createElement(a,null,"\u7070\u8272"),n.createElement(a,{type:1},"\u7EFF\u8272"),n.createElement(a,{type:2},"\u7D2B\u8272"),n.createElement(a,{type:3},"\u84DD\u8272"),n.createElement(a,{type:4},"\u7070\u8272"),n.createElement(a,{type:5},"\u9EC4\u8272"),n.createElement(a,{type:6},"\u7EA2\u8272"),n.createElement(a,{type:7},"\u6DF1\u7EA2"),n.createElement(a,{type:8},"\u6DE1\u9752"),n.createElement(a,{type:9},"\u7C89\u7EA2"),n.createElement(a,{type:10},"\u6A44\u6984\u8272"))},r.abrupt("return",{default:m});case 14:case"end":return r.stop()}},d)})))),asset:{type:"BLOCK",id:"tagui-demo-0",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { TagUI } from 'sic-ui';
import { Space } from 'antd';

const App: React.FC = () => (
  <Space wrap>
    <TagUI>\u7070\u8272</TagUI>
    <TagUI type={1}>\u7EFF\u8272</TagUI>
    <TagUI type={2}>\u7D2B\u8272</TagUI>
    <TagUI type={3}>\u84DD\u8272</TagUI>
    <TagUI type={4}>\u7070\u8272</TagUI>
    <TagUI type={5}>\u9EC4\u8272</TagUI>
    <TagUI type={6}>\u7EA2\u8272</TagUI>
    <TagUI type={7}>\u6DF1\u7EA2</TagUI>
    <TagUI type={8}>\u6DE1\u9752</TagUI>
    <TagUI type={9}>\u7C89\u7EA2</TagUI>
    <TagUI type={10}>\u6A44\u6984\u8272</TagUI>
  </Space>
);
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.11"},antd:{type:"NPM",value:"5.20.4"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2)),"sic-ui":g,antd:E},renderOpts:{compile:function(){var d=y()(c()().mark(function n(){var l,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1829).then(e.bind(e,71829));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,a));case 3:case"end":return t.stop()}},n)}));function u(){return d.apply(this,arguments)}return u}()}},"tagui-demo-1":{component:p.memo(p.lazy(y()(c()().mark(function d(){var u,n,l,a,s,t,m,U,r,T,f,P,O;return c()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return u=o.sent,n=u.default,o.next=6,Promise.resolve().then(e.bind(e,84351));case 6:return l=o.sent,a=l.TagUI,s=l.IconUI,o.next=11,Promise.resolve().then(e.bind(e,65014));case 11:return t=o.sent,m=t.Currency,U=t.CheckOne,r=t.UTurnLeft,T=t.RotateOne,o.next=18,Promise.resolve().then(e.bind(e,44450));case 18:return f=o.sent,P=f.Space,O=function(){return n.createElement(P,{wrap:!0},n.createElement(a,{type:1,icon:n.createElement(s,{name:!0,DataFour:!0})},"\u7EFF\u8272"),n.createElement(a,{type:2,icon:n.createElement(m,null)},"\u7D2B\u8272"),n.createElement(a,{type:3,icon:n.createElement(U,null)},"\u84DD\u8272"),n.createElement(a,{type:4,icon:n.createElement(r,null)},"\u7070\u8272"),n.createElement(a,{type:5,icon:n.createElement(T,null)},"\u9EC4\u8272"))},o.abrupt("return",{default:O});case 22:case"end":return o.stop()}},d)})))),asset:{type:"BLOCK",id:"tagui-demo-1",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { TagUI, IconUI } from 'sic-ui';
import { DataFour, Currency, CheckOne, CloseOne, UTurnLeft, RotateOne } from '@icon-park/react';
import { Space } from 'antd';

const App: React.FC = () => (
  <Space wrap>
    <TagUI type={1} icon={<IconUI name DataFour />}>
      \u7EFF\u8272
    </TagUI>
    <TagUI type={2} icon={<Currency />}>
      \u7D2B\u8272
    </TagUI>
    <TagUI type={3} icon={<CheckOne />}>
      \u84DD\u8272
    </TagUI>
    <TagUI type={4} icon={<UTurnLeft />}>
      \u7070\u8272
    </TagUI>
    <TagUI type={5} icon={<RotateOne />}>
      \u9EC4\u8272
    </TagUI>
  </Space>
);
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.11"},"@icon-park/react":{type:"NPM",value:"1.4.2"},antd:{type:"NPM",value:"5.20.4"}},entry:"index.tsx"},context:{react:i||(i=e.t(p,2)),"sic-ui":g,"@icon-park/react":M,antd:E},renderOpts:{compile:function(){var d=y()(c()().mark(function n(){var l,a=arguments;return c()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(1829).then(e.bind(e,71829));case 2:return t.abrupt("return",(l=t.sent).default.apply(l,a));case 3:case"end":return t.stop()}},n)}));function u(){return d.apply(this,arguments)}return u}()}}}},25788:function(h,I,e){e.r(I),e.d(I,{texts:function(){return v}});var i=e(32668);const v=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u6807\u7B7E\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F48E} \u4F7F\u7528 icon",paraId:2},{value:"\u{1F525}TagUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:3,tocIndex:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:3},{value:"type",paraId:4,tocIndex:3},{value:"\u5F53\u524D TagUI \u6240\u5C5E\u7C7B\u578B",paraId:4,tocIndex:3},{value:"Number",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"icon",paraId:4,tocIndex:3},{value:"\u5F53\u524D TagUI \u6240 \u643A\u5E26\u7684 Icon",paraId:4,tocIndex:3},{value:"ReactNode",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"style",paraId:4,tocIndex:3},{value:"\u6837\u5F0F",paraId:4,tocIndex:3},{value:"Any",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3}]}}]);
