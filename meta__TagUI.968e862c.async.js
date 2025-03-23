"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[6116],{34224:function(P,y,e){var I;e.r(y),e.d(y,{demos:function(){return x}});var T=e(15009),i=e.n(T),O=e(99289),m=e.n(O),c=e(67294),A=e(50120),U=e(19180),E=e(76558),M=e(4249),x={"tagui-demo-0":{component:c.memo(c.lazy(m()(i()().mark(function s(){var p,t,l,n,u,a,o;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return p=r.sent,t=p.default,r.next=6,Promise.resolve().then(e.bind(e,19180));case 6:return l=r.sent,n=l.TagUI,r.next=10,Promise.resolve().then(e.bind(e,76558));case 10:return u=r.sent,a=u.Space,o=function(){return t.createElement(a,{wrap:!0},t.createElement(n,null,"\u7070\u8272"),t.createElement(n,{type:1},"\u7EFF\u8272"),t.createElement(n,{type:2},"\u7D2B\u8272"),t.createElement(n,{type:3},"\u84DD\u8272"),t.createElement(n,{type:4},"\u7070\u8272"),t.createElement(n,{type:5},"\u9EC4\u8272"),t.createElement(n,{type:6},"\u7EA2\u8272"),t.createElement(n,{type:7},"\u6DF1\u7EA2"),t.createElement(n,{type:8},"\u6DE1\u9752"),t.createElement(n,{type:9},"\u7C89\u7EA2"),t.createElement(n,{type:10},"\u6A44\u6984\u8272"))},r.abrupt("return",{default:o});case 14:case"end":return r.stop()}},s)})))),asset:{type:"BLOCK",id:"tagui-demo-0",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.6.2"},antd:{type:"NPM",value:"5.24.4"}},entry:"index.tsx"},context:{react:I||(I=e.t(c,2)),"sic-ui":U,antd:E},renderOpts:{compile:function(){var s=m()(i()().mark(function t(){var l,n=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,n));case 3:case"end":return a.stop()}},t)}));function p(){return s.apply(this,arguments)}return p}()}},"tagui-demo-1":{component:c.memo(c.lazy(m()(i()().mark(function s(){var p,t,l,n,u,a,o,v,r,g,f,h;return i()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return p=d.sent,t=p.default,d.next=6,Promise.resolve().then(e.bind(e,19180));case 6:return l=d.sent,n=l.TagUI,d.next=10,Promise.resolve().then(e.bind(e,4249));case 10:return u=d.sent,a=u.Currency,o=u.CheckOne,v=u.UTurnLeft,r=u.RotateOne,d.next=17,Promise.resolve().then(e.bind(e,76558));case 17:return g=d.sent,f=g.Space,h=function(){return t.createElement(f,{wrap:!0},t.createElement(n,{type:1},"\u7EFF\u8272"),t.createElement(n,{type:2,icon:t.createElement(a,null)},"\u7D2B\u8272"),t.createElement(n,{type:3,icon:t.createElement(o,null)},"\u84DD\u8272"),t.createElement(n,{type:4,icon:t.createElement(v,null)},"\u7070\u8272"),t.createElement(n,{type:5,icon:t.createElement(r,null)},"\u9EC4\u8272"),t.createElement(n,{dataIndex:2,options:[{value:1,label:"\u5F85\u7B7E\u7EA6"},{value:2,label:"\u5DF2\u7B7E\u7EA6"}]}))},d.abrupt("return",{default:h});case 21:case"end":return d.stop()}},s)})))),asset:{type:"BLOCK",id:"tagui-demo-1",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
    <TagUI
      dataIndex={2}
      options={[
        { value: 1, label: '\u5F85\u7B7E\u7EA6' },
        { value: 2, label: '\u5DF2\u7B7E\u7EA6' },
      ]}
    ></TagUI>
  </Space>
);
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.6.2"},"@icon-park/react":{type:"NPM",value:"1.4.2"},antd:{type:"NPM",value:"5.24.4"}},entry:"index.tsx"},context:{react:I||(I=e.t(c,2)),"sic-ui":U,"@icon-park/react":M,antd:E},renderOpts:{compile:function(){var s=m()(i()().mark(function t(){var l,n=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,n));case 3:case"end":return a.stop()}},t)}));function p(){return s.apply(this,arguments)}return p}()}},"tagui-demo-2":{component:c.memo(c.lazy(m()(i()().mark(function s(){var p,t,l,n,u,a,o;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return p=r.sent,t=p.default,r.next=6,Promise.resolve().then(e.bind(e,19180));case 6:return l=r.sent,n=l.TagUI,r.next=10,Promise.resolve().then(e.bind(e,76558));case 10:return u=r.sent,a=u.Space,o=function(){return t.createElement(a,{wrap:!0},t.createElement(n,{type:1,title:"\u5BA1\u6838\u72B6\u6001"},"\u7EFF\u8272"),t.createElement(n,{type:2,title:"\u5BA1\u6838\u72B6\u6001"},"\u7D2B\u8272"),t.createElement(n,{type:3,title:"\u5BA1\u6838\u72B6\u6001"},"\u84DD\u8272"),t.createElement(n,{type:4,title:"\u5BA1\u6838\u72B6\u6001"},"\u7070\u8272"),t.createElement(n,{type:5,title:"\u5BA1\u6838\u72B6\u6001"},"\u9EC4\u8272"),t.createElement(n,{type:6,title:"\u5BA1\u6838\u72B6\u6001"},"\u7EA2\u8272"),t.createElement(n,{type:7,title:"\u5BA1\u6838\u72B6\u6001"},"\u6DF1\u7EA2"),t.createElement(n,{type:8,title:"\u5BA1\u6838\u72B6\u6001"},"\u6DE1\u9752"),t.createElement(n,{type:9,title:"\u5BA1\u6838\u72B6\u6001"},"\u7C89\u7EA2"),t.createElement(n,{type:10,title:"\u5BA1\u6838\u72B6\u6001"},"\u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272"))},r.abrupt("return",{default:o});case 14:case"end":return r.stop()}},s)})))),asset:{type:"BLOCK",id:"tagui-demo-2",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.6.2"},antd:{type:"NPM",value:"5.24.4"}},entry:"index.tsx"},context:{react:I||(I=e.t(c,2)),"sic-ui":U,antd:E},renderOpts:{compile:function(){var s=m()(i()().mark(function t(){var l,n=arguments;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(7335).then(e.bind(e,37335));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,n));case 3:case"end":return a.stop()}},t)}));function p(){return s.apply(this,arguments)}return p}()}}}},7461:function(P,y,e){e.r(y),e.d(y,{texts:function(){return T}});var I=e(50120);const T=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u6807\u7B7E\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F48E} \u4F7F\u7528 icon",paraId:2},{value:"\u{1F48E} \u5E26\u6807\u9898\u4F7F\u7528",paraId:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:3},{value:"title",paraId:4,tocIndex:3},{value:"\u662F\u5426\u6709\u6807\u9898",paraId:4,tocIndex:3},{value:"String",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"type",paraId:4,tocIndex:3},{value:"\u989C\u8272\u7C7B\u578B",paraId:4,tocIndex:3},{value:"Number",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"icon",paraId:4,tocIndex:3},{value:"Icon",paraId:4,tocIndex:3},{value:"ReactNode",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"className",paraId:4,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:3},{value:"Any",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"style",paraId:4,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:3},{value:"Any",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3}]}}]);
