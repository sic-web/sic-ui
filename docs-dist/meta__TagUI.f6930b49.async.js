"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[6116],{24757:function(P,y,e){var I;e.r(y),e.d(y,{demos:function(){return M}});var T=e(43953),u=e.n(T),O=e(91184),m=e.n(O),i=e(38497),A=e(16602),U=e(23888),E=e(3806),C=e(52997),M={"tagui-demo-0":{component:i.memo(i.lazy(m()(u()().mark(function c(){var p,t,l,a,d,n,o;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return p=r.sent,t=p.default,r.next=6,Promise.resolve().then(e.bind(e,23888));case 6:return l=r.sent,a=l.TagUI,r.next=10,Promise.resolve().then(e.bind(e,3806));case 10:return d=r.sent,n=d.Space,o=function(){return t.createElement(n,{wrap:!0},t.createElement(a,null,"\u7070\u8272"),t.createElement(a,{type:1},"\u7EFF\u8272"),t.createElement(a,{type:2},"\u7D2B\u8272"),t.createElement(a,{type:3},"\u84DD\u8272"),t.createElement(a,{type:4},"\u7070\u8272"),t.createElement(a,{type:5},"\u9EC4\u8272"),t.createElement(a,{type:6},"\u7EA2\u8272"),t.createElement(a,{type:7},"\u6DF1\u7EA2"),t.createElement(a,{type:8},"\u6DE1\u9752"),t.createElement(a,{type:9},"\u7C89\u7EA2"),t.createElement(a,{type:10},"\u6A44\u6984\u8272"))},r.abrupt("return",{default:o});case 14:case"end":return r.stop()}},c)})))),asset:{type:"BLOCK",id:"tagui-demo-0",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.29"},antd:{type:"NPM",value:"5.22.6"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2)),"sic-ui":U,antd:E},renderOpts:{compile:function(){var c=m()(u()().mark(function t(){var l,a=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4321).then(e.bind(e,14321));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,a));case 3:case"end":return n.stop()}},t)}));function p(){return c.apply(this,arguments)}return p}()}},"tagui-demo-1":{component:i.memo(i.lazy(m()(u()().mark(function c(){var p,t,l,a,d,n,o,v,r,g,f,h;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return p=s.sent,t=p.default,s.next=6,Promise.resolve().then(e.bind(e,23888));case 6:return l=s.sent,a=l.TagUI,s.next=10,Promise.resolve().then(e.bind(e,52997));case 10:return d=s.sent,n=d.Currency,o=d.CheckOne,v=d.UTurnLeft,r=d.RotateOne,s.next=17,Promise.resolve().then(e.bind(e,3806));case 17:return g=s.sent,f=g.Space,h=function(){return t.createElement(f,{wrap:!0},t.createElement(a,{type:1},"\u7EFF\u8272"),t.createElement(a,{type:2,icon:t.createElement(n,null)},"\u7D2B\u8272"),t.createElement(a,{type:3,icon:t.createElement(o,null)},"\u84DD\u8272"),t.createElement(a,{type:4,icon:t.createElement(v,null)},"\u7070\u8272"),t.createElement(a,{type:5,icon:t.createElement(r,null)},"\u9EC4\u8272"))},s.abrupt("return",{default:h});case 21:case"end":return s.stop()}},c)})))),asset:{type:"BLOCK",id:"tagui-demo-1",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { TagUI, IconUI } from 'sic-ui';
import { DataFour, Currency, CheckOne, CloseOne, UTurnLeft, RotateOne } from '@icon-park/react';
import { Space } from 'antd';

const App: React.FC = () => (
  <Space wrap>
    <TagUI type={1}>\u7EFF\u8272</TagUI>
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
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.29"},"@icon-park/react":{type:"NPM",value:"1.4.2"},antd:{type:"NPM",value:"5.22.6"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2)),"sic-ui":U,"@icon-park/react":C,antd:E},renderOpts:{compile:function(){var c=m()(u()().mark(function t(){var l,a=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4321).then(e.bind(e,14321));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,a));case 3:case"end":return n.stop()}},t)}));function p(){return c.apply(this,arguments)}return p}()}},"tagui-demo-2":{component:i.memo(i.lazy(m()(u()().mark(function c(){var p,t,l,a,d,n,o;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return p=r.sent,t=p.default,r.next=6,Promise.resolve().then(e.bind(e,23888));case 6:return l=r.sent,a=l.TagUI,r.next=10,Promise.resolve().then(e.bind(e,3806));case 10:return d=r.sent,n=d.Space,o=function(){return t.createElement(n,{wrap:!0},t.createElement(a,{type:1,title:"\u5BA1\u6838\u72B6\u6001"},"\u7EFF\u8272"),t.createElement(a,{type:2,title:"\u5BA1\u6838\u72B6\u6001"},"\u7D2B\u8272"),t.createElement(a,{type:3,title:"\u5BA1\u6838\u72B6\u6001"},"\u84DD\u8272"),t.createElement(a,{type:4,title:"\u5BA1\u6838\u72B6\u6001"},"\u7070\u8272"),t.createElement(a,{type:5,title:"\u5BA1\u6838\u72B6\u6001"},"\u9EC4\u8272"),t.createElement(a,{type:6,title:"\u5BA1\u6838\u72B6\u6001"},"\u7EA2\u8272"),t.createElement(a,{type:7,title:"\u5BA1\u6838\u72B6\u6001"},"\u6DF1\u7EA2"),t.createElement(a,{type:8,title:"\u5BA1\u6838\u72B6\u6001"},"\u6DE1\u9752"),t.createElement(a,{type:9,title:"\u5BA1\u6838\u72B6\u6001"},"\u7C89\u7EA2"),t.createElement(a,{type:10,title:"\u5BA1\u6838\u72B6\u6001"},"\u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272"))},r.abrupt("return",{default:o});case 14:case"end":return r.stop()}},c)})))),asset:{type:"BLOCK",id:"tagui-demo-2",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { TagUI } from 'sic-ui';
import { Space } from 'antd';

const App: React.FC = () => (
  <Space wrap>
    <TagUI type={1} title="\u5BA1\u6838\u72B6\u6001">
      \u7EFF\u8272
    </TagUI>
    <TagUI type={2} title="\u5BA1\u6838\u72B6\u6001">
      \u7D2B\u8272
    </TagUI>
    <TagUI type={3} title="\u5BA1\u6838\u72B6\u6001">
      \u84DD\u8272
    </TagUI>
    <TagUI type={4} title="\u5BA1\u6838\u72B6\u6001">
      \u7070\u8272
    </TagUI>
    <TagUI type={5} title="\u5BA1\u6838\u72B6\u6001">
      \u9EC4\u8272
    </TagUI>
    <TagUI type={6} title="\u5BA1\u6838\u72B6\u6001">
      \u7EA2\u8272
    </TagUI>
    <TagUI type={7} title="\u5BA1\u6838\u72B6\u6001">
      \u6DF1\u7EA2
    </TagUI>
    <TagUI type={8} title="\u5BA1\u6838\u72B6\u6001">
      \u6DE1\u9752
    </TagUI>
    <TagUI type={9} title="\u5BA1\u6838\u72B6\u6001">
      \u7C89\u7EA2
    </TagUI>
    <TagUI type={10} title="\u5BA1\u6838\u72B6\u6001">
      \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272
    </TagUI>
  </Space>
);
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.29"},antd:{type:"NPM",value:"5.22.6"}},entry:"index.tsx"},context:{react:I||(I=e.t(i,2)),"sic-ui":U,antd:E},renderOpts:{compile:function(){var c=m()(u()().mark(function t(){var l,a=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4321).then(e.bind(e,14321));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,a));case 3:case"end":return n.stop()}},t)}));function p(){return c.apply(this,arguments)}return p}()}}}},7073:function(P,y,e){e.r(y),e.d(y,{texts:function(){return T}});var I=e(16602);const T=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u6807\u7B7E\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F48E} \u4F7F\u7528 icon",paraId:2},{value:"\u{1F48E} \u5E26\u6807\u9898\u4F7F\u7528",paraId:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:3},{value:"title",paraId:4,tocIndex:3},{value:"\u662F\u5426\u6709\u6807\u9898",paraId:4,tocIndex:3},{value:"String",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"type",paraId:4,tocIndex:3},{value:"\u989C\u8272\u7C7B\u578B",paraId:4,tocIndex:3},{value:"Number",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"icon",paraId:4,tocIndex:3},{value:"Icon",paraId:4,tocIndex:3},{value:"ReactNode",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"className",paraId:4,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:3},{value:"Any",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"style",paraId:4,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:3},{value:"Any",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3}]}}]);
