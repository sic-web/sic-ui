"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[6116],{34224:function(P,v,t){var m;t.r(v),t.d(v,{demos:function(){return C}});var O=t(15009),u=t.n(O),R=t(99289),g=t.n(R),d=t(67294),U=t(5271),E=t(30613),h=t(16704),C={"tagui-demo-0":{component:d.memo(d.lazy(g()(u()().mark(function c(){var i,e,r,n,o,a,I;return u()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(t.t.bind(t,67294,19));case 2:return i=l.sent,e=i.default,l.next=6,Promise.resolve().then(t.bind(t,5271));case 6:return r=l.sent,n=r.TagUI,l.next=10,Promise.resolve().then(t.bind(t,30613));case 10:return o=l.sent,a=o.Space,I=function(){return e.createElement(a,{wrap:!0},e.createElement(n,null,"\u7070\u8272"),e.createElement(n,{type:"primary"},"\u4E3B\u9898\u8272"),e.createElement(n,{type:1},"\u7EFF\u8272"),e.createElement(n,{type:2},"\u7D2B\u8272"),e.createElement(n,{type:3},"\u84DD\u8272"),e.createElement(n,{type:4},"\u7070\u8272"),e.createElement(n,{type:5},"\u9EC4\u8272"),e.createElement(n,{type:6},"\u7EA2\u8272"),e.createElement(n,{type:7},"\u6DF1\u7EA2"),e.createElement(n,{type:8},"\u6DE1\u9752"),e.createElement(n,{type:9},"\u7C89\u7EA2"),e.createElement(n,{type:10},"\u6A44\u6984\u8272"),e.createElement(n,{type:1,size:"large"},"\u603B\u91D1\u989D"))},l.abrupt("return",{default:I});case 14:case"end":return l.stop()}},c)})))),asset:{type:"BLOCK",id:"tagui-demo-0",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { TagUI } from 'sic-ui';
import { Space } from 'antd';

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
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.8.3"},antd:{type:"NPM",value:"5.26.2"}},entry:"index.tsx"},context:{react:m||(m=t.t(d,2)),"sic-ui":U,antd:E},renderOpts:{compile:function(){var c=g()(u()().mark(function e(){var r,n=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([t.e(7335),t.e(4542)]).then(t.bind(t,37335));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,n));case 3:case"end":return a.stop()}},e)}));function i(){return c.apply(this,arguments)}return i}()}},"tagui-demo-1":{component:d.memo(d.lazy(g()(u()().mark(function c(){var i,e,r,n,o,a,I,y,l,T,p,f;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(t.t.bind(t,67294,19));case 2:return i=s.sent,e=i.default,s.next=6,Promise.resolve().then(t.bind(t,5271));case 6:return r=s.sent,n=r.TagUI,s.next=10,Promise.resolve().then(t.bind(t,16704));case 10:return o=s.sent,a=o.Currency,I=o.CheckOne,y=o.UTurnLeft,l=o.RotateOne,s.next=17,Promise.resolve().then(t.bind(t,30613));case 17:return T=s.sent,p=T.Space,f=function(){return e.createElement(p,{wrap:!0},e.createElement(n,{type:1},"\u7EFF\u8272"),e.createElement(n,{type:2,icon:e.createElement(a,null)},"\u7D2B\u8272"),e.createElement(n,{type:3,icon:e.createElement(I,null)},"\u84DD\u8272"),e.createElement(n,{type:4,icon:e.createElement(y,null)},"\u7070\u8272"),e.createElement(n,{type:5,icon:e.createElement(l,null)},"\u9EC4\u8272"),e.createElement(n,{dataIndex:2,options:[{value:1,label:"\u5F85\u7B7E\u7EA6"},{value:2,label:"\u5DF2\u7B7E\u7EA6"}]}),e.createElement(n,{type:1,size:"large",icon:e.createElement(l,null)},"\u603B\u91D1\u989D"))},s.abrupt("return",{default:f});case 21:case"end":return s.stop()}},c)})))),asset:{type:"BLOCK",id:"tagui-demo-1",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
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
    <TagUI type={1} size="large" icon={<RotateOne />}>
      \u603B\u91D1\u989D
    </TagUI>
  </Space>
);
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.8.3"},"@icon-park/react":{type:"NPM",value:"1.4.2"},antd:{type:"NPM",value:"5.26.2"}},entry:"index.tsx"},context:{react:m||(m=t.t(d,2)),"sic-ui":U,"@icon-park/react":h,antd:E},renderOpts:{compile:function(){var c=g()(u()().mark(function e(){var r,n=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([t.e(7335),t.e(4542)]).then(t.bind(t,37335));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,n));case 3:case"end":return a.stop()}},e)}));function i(){return c.apply(this,arguments)}return i}()}},"tagui-demo-2":{component:d.memo(d.lazy(g()(u()().mark(function c(){var i,e,r,n,o,a,I,y,l;return u()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(t.t.bind(t,67294,19));case 2:return i=p.sent,e=i.default,p.next=6,Promise.resolve().then(t.bind(t,5271));case 6:return r=p.sent,n=r.TagUI,p.next=10,Promise.resolve().then(t.bind(t,30613));case 10:return o=p.sent,a=o.Space,p.next=14,Promise.resolve().then(t.bind(t,16704));case 14:return I=p.sent,y=I.RotateOne,l=function(){return e.createElement(a,{wrap:!0},e.createElement(n,{type:"primary",title:"\u5BA1\u6838\u72B6\u6001"},"\u4E3B\u9898\u8272"),e.createElement(n,{type:1,title:"\u5BA1\u6838\u72B6\u6001"},"\u7EFF\u8272"),e.createElement(n,{type:2,title:"\u5BA1\u6838\u72B6\u6001"},"\u7D2B\u8272"),e.createElement(n,{type:3,title:"\u5BA1\u6838\u72B6\u6001"},"\u84DD\u8272"),e.createElement(n,{type:4,title:"\u5BA1\u6838\u72B6\u6001"},"\u7070\u8272"),e.createElement(n,{type:5,title:"\u5BA1\u6838\u72B6\u6001"},"\u9EC4\u8272"),e.createElement(n,{type:6,title:"\u5BA1\u6838\u72B6\u6001"},"\u7EA2\u8272"),e.createElement(n,{type:7,title:"\u5BA1\u6838\u72B6\u6001"},"\u6DF1\u7EA2"),e.createElement(n,{type:8,title:"\u5BA1\u6838\u72B6\u6001",icon:e.createElement(y,null)},"\u6DE1\u9752"),e.createElement(n,{type:9,title:"\u5BA1\u6838\u72B6\u6001",icon:e.createElement(y,null)},"\u7C89\u7EA2"),e.createElement(n,{type:10,title:"\u5BA1\u6838\u72B6\u6001",icon:e.createElement(y,null)},"\u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272"))},p.abrupt("return",{default:l});case 18:case"end":return p.stop()}},c)})))),asset:{type:"BLOCK",id:"tagui-demo-2",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { TagUI } from 'sic-ui';
import { Space } from 'antd';
import { DataFour, Currency, CheckOne, CloseOne, UTurnLeft, RotateOne } from '@icon-park/react';

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
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.8.3"},antd:{type:"NPM",value:"5.26.2"},"@icon-park/react":{type:"NPM",value:"1.4.2"}},entry:"index.tsx"},context:{react:m||(m=t.t(d,2)),"sic-ui":U,antd:E,"@icon-park/react":h},renderOpts:{compile:function(){var c=g()(u()().mark(function e(){var r,n=arguments;return u()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([t.e(7335),t.e(4542)]).then(t.bind(t,37335));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,n));case 3:case"end":return a.stop()}},e)}));function i(){return c.apply(this,arguments)}return i}()}}}},7461:function(P,v,t){t.r(v),t.d(v,{texts:function(){return m}});const m=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u6807\u7B7E\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F48E} \u4F7F\u7528 icon",paraId:2},{value:"\u{1F48E} \u5E26\u6807\u9898\u4F7F\u7528",paraId:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:3},{value:"title",paraId:4,tocIndex:3},{value:"\u662F\u5426\u6709\u6807\u9898",paraId:4,tocIndex:3},{value:"String",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"type",paraId:4,tocIndex:3},{value:"\u989C\u8272\u7C7B\u578B",paraId:4,tocIndex:3},{value:"Number",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"icon",paraId:4,tocIndex:3},{value:"Icon",paraId:4,tocIndex:3},{value:"ReactNode",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"className",paraId:4,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:4,tocIndex:3},{value:"Any",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3},{value:"style",paraId:4,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:4,tocIndex:3},{value:"Any",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u5426",paraId:4,tocIndex:3}]}}]);
