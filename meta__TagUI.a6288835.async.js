"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[6116],{34224:function(O,v,n){var I;n.r(v),n.d(v,{demos:function(){return C}});var P=n(15009),u=n.n(P),R=n(99289),g=n.n(R),m=n(67294),U=n(31071),E=n(17069),h=n(16704),C={"tagui-demo-0":{component:m.memo(m.lazy(g()(u()().mark(function c(){var p,t,a,i,s,e,d;return u()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return p=r.sent,t=p.default,r.next=6,Promise.resolve().then(n.bind(n,31071));case 6:return a=r.sent,i=a.Space,r.next=10,Promise.resolve().then(n.bind(n,17069));case 10:return s=r.sent,e=s.TagUI,d=function(){return t.createElement(i,{wrap:!0},t.createElement(e,null,"\u7070\u8272"),t.createElement(e,{type:"primary"},"\u4E3B\u9898\u8272"),t.createElement(e,{type:1},"\u7EFF\u8272"),t.createElement(e,{type:2},"\u7D2B\u8272"),t.createElement(e,{type:3},"\u84DD\u8272"),t.createElement(e,{type:4},"\u7070\u8272"),t.createElement(e,{type:5},"\u9EC4\u8272"),t.createElement(e,{type:6},"\u7EA2\u8272"),t.createElement(e,{type:7},"\u6DF1\u7EA2"),t.createElement(e,{type:8},"\u6DE1\u9752"),t.createElement(e,{type:9},"\u7C89\u7EA2"),t.createElement(e,{type:10},"\u6A44\u6984\u8272"),t.createElement(e,{type:1,size:"large"},"\u603B\u91D1\u989D"))},r.abrupt("return",{default:d});case 14:case"end":return r.stop()}},c)})))),asset:{type:"BLOCK",id:"tagui-demo-0",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Space } from 'antd';
import { TagUI } from 'sic-ui';

const App: React.FC = () => (
  <Space wrap>
    <TagUI>\u7070\u8272</TagUI>
    <TagUI type="primary">\u4E3B\u9898\u8272</TagUI>
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
    <TagUI type={1} size="large">
      \u603B\u91D1\u989D
    </TagUI>
  </Space>
);
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.27.3"},"sic-ui":{type:"NPM",value:"0.9.2"}},entry:"index.tsx"},context:{react:I||(I=n.t(m,2)),antd:U,"sic-ui":E},renderOpts:{compile:function(){var c=g()(u()().mark(function t(){var a,i=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,i));case 3:case"end":return e.stop()}},t)}));function p(){return c.apply(this,arguments)}return p}()}},"tagui-demo-1":{component:m.memo(m.lazy(g()(u()().mark(function c(){var p,t,a,i,s,e,d,y,r,T,l,f;return u()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return p=o.sent,t=p.default,o.next=6,Promise.resolve().then(n.bind(n,31071));case 6:return a=o.sent,i=a.Space,o.next=10,Promise.resolve().then(n.bind(n,17069));case 10:return s=o.sent,e=s.TagUI,o.next=14,Promise.resolve().then(n.bind(n,16704));case 14:return d=o.sent,y=d.CheckOne,r=d.Currency,T=d.RotateOne,l=d.UTurnLeft,f=function(){return t.createElement(i,{wrap:!0},t.createElement(e,{type:1},"\u7EFF\u8272"),t.createElement(e,{type:2,icon:t.createElement(r,null)},"\u7D2B\u8272"),t.createElement(e,{type:3,icon:t.createElement(y,null)},"\u84DD\u8272"),t.createElement(e,{type:4,icon:t.createElement(l,null)},"\u7070\u8272"),t.createElement(e,{type:5,icon:t.createElement(T,null)},"\u9EC4\u8272"),t.createElement(e,{dataIndex:2,options:[{value:1,label:"\u5F85\u7B7E\u7EA6"},{value:2,label:"\u5DF2\u7B7E\u7EA6"}]}),t.createElement(e,{type:1,size:"large",icon:t.createElement(T,null)},"\u603B\u91D1\u989D"))},o.abrupt("return",{default:f});case 21:case"end":return o.stop()}},c)})))),asset:{type:"BLOCK",id:"tagui-demo-1",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Space } from 'antd';
import { IconUI, TagUI } from 'sic-ui';
import { CheckOne, CloseOne, Currency, DataFour, RotateOne, UTurnLeft } from '@icon-park/react';

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
    <TagUI
      dataIndex={2}
      options={[
        { value: 1, label: '\u5F85\u7B7E\u7EA6' },
        { value: 2, label: '\u5DF2\u7B7E\u7EA6' },
      ]}
    ></TagUI>
    <TagUI type={1} size="large" icon={<RotateOne />}>
      \u603B\u91D1\u989D
    </TagUI>
  </Space>
);
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.27.3"},"sic-ui":{type:"NPM",value:"0.9.2"},"@icon-park/react":{type:"NPM",value:"1.4.2"}},entry:"index.tsx"},context:{react:I||(I=n.t(m,2)),antd:U,"sic-ui":E,"@icon-park/react":h},renderOpts:{compile:function(){var c=g()(u()().mark(function t(){var a,i=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,i));case 3:case"end":return e.stop()}},t)}));function p(){return c.apply(this,arguments)}return p}()}},"tagui-demo-2":{component:m.memo(m.lazy(g()(u()().mark(function c(){var p,t,a,i,s,e,d,y,r;return u()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return p=l.sent,t=p.default,l.next=6,Promise.resolve().then(n.bind(n,31071));case 6:return a=l.sent,i=a.Space,l.next=10,Promise.resolve().then(n.bind(n,17069));case 10:return s=l.sent,e=s.TagUI,l.next=14,Promise.resolve().then(n.bind(n,16704));case 14:return d=l.sent,y=d.RotateOne,r=function(){return t.createElement(i,{wrap:!0},t.createElement(e,{type:"primary",title:"\u5BA1\u6838\u72B6\u6001"},"\u4E3B\u9898\u8272"),t.createElement(e,{type:1,title:"\u5BA1\u6838\u72B6\u6001"},"\u7EFF\u8272"),t.createElement(e,{type:2,title:"\u5BA1\u6838\u72B6\u6001"},"\u7D2B\u8272"),t.createElement(e,{type:3,title:"\u5BA1\u6838\u72B6\u6001"},"\u84DD\u8272"),t.createElement(e,{type:4,title:"\u5BA1\u6838\u72B6\u6001"},"\u7070\u8272"),t.createElement(e,{type:5,title:"\u5BA1\u6838\u72B6\u6001"},"\u9EC4\u8272"),t.createElement(e,{type:6,title:"\u5BA1\u6838\u72B6\u6001"},"\u7EA2\u8272"),t.createElement(e,{type:7,title:"\u5BA1\u6838\u72B6\u6001"},"\u6DF1\u7EA2"),t.createElement(e,{type:8,title:"\u5BA1\u6838\u72B6\u6001",icon:t.createElement(y,null)},"\u6DE1\u9752"),t.createElement(e,{type:9,title:"\u5BA1\u6838\u72B6\u6001",icon:t.createElement(y,null)},"\u7C89\u7EA2"),t.createElement(e,{type:10,title:"\u5BA1\u6838\u72B6\u6001",icon:t.createElement(y,null)},"\u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272"))},l.abrupt("return",{default:r});case 18:case"end":return l.stop()}},c)})))),asset:{type:"BLOCK",id:"tagui-demo-2",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Space } from 'antd';
import { TagUI } from 'sic-ui';
import { CheckOne, CloseOne, Currency, DataFour, RotateOne, UTurnLeft } from '@icon-park/react';

const App: React.FC = () => (
  <Space wrap>
    <TagUI type="primary" title="\u5BA1\u6838\u72B6\u6001">
      \u4E3B\u9898\u8272
    </TagUI>
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
    <TagUI type={8} title="\u5BA1\u6838\u72B6\u6001" icon={<RotateOne />}>
      \u6DE1\u9752
    </TagUI>
    <TagUI type={9} title="\u5BA1\u6838\u72B6\u6001" icon={<RotateOne />}>
      \u7C89\u7EA2
    </TagUI>
    <TagUI type={10} title="\u5BA1\u6838\u72B6\u6001" icon={<RotateOne />}>
      \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272
    </TagUI>
  </Space>
);
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.27.3"},"sic-ui":{type:"NPM",value:"0.9.2"},"@icon-park/react":{type:"NPM",value:"1.4.2"}},entry:"index.tsx"},context:{react:I||(I=n.t(m,2)),antd:U,"sic-ui":E,"@icon-park/react":h},renderOpts:{compile:function(){var c=g()(u()().mark(function t(){var a,i=arguments;return u()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,i));case 3:case"end":return e.stop()}},t)}));function p(){return c.apply(this,arguments)}return p}()}}}},7461:function(O,v,n){n.r(v),n.d(v,{texts:function(){return I}});const I=[{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:0,tocIndex:0},{value:"\u{1F48E} \u4F7F\u7528 icon",paraId:1},{value:"\u{1F48E} \u5E26\u6807\u9898\u4F7F\u7528",paraId:2},{value:"\u5C5E\u6027",paraId:3,tocIndex:1},{value:"\u8BF4\u660E",paraId:3,tocIndex:1},{value:"\u7C7B\u578B",paraId:3,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:1},{value:"title",paraId:3,tocIndex:1},{value:"\u662F\u5426\u6709\u6807\u9898",paraId:3,tocIndex:1},{value:"String",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"\u5426",paraId:3,tocIndex:1},{value:"type",paraId:3,tocIndex:1},{value:"\u989C\u8272\u7C7B\u578B",paraId:3,tocIndex:1},{value:"Number",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"\u5426",paraId:3,tocIndex:1},{value:"icon",paraId:3,tocIndex:1},{value:"Icon",paraId:3,tocIndex:1},{value:"ReactNode",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"\u5426",paraId:3,tocIndex:1},{value:"className",paraId:3,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:3,tocIndex:1},{value:"Any",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"\u5426",paraId:3,tocIndex:1},{value:"style",paraId:3,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:3,tocIndex:1},{value:"Any",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"\u5426",paraId:3,tocIndex:1}]}}]);
