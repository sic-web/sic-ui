"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[854],{47029:function(M,v,e){var c;e.r(v),e.d(v,{demos:function(){return z}});var A=e(5574),P=e.n(A),C=e(15009),l=e.n(C),R=e(99289),I=e.n(R),u=e(67294),g=e(31071),y=e(17069),z={"imageui-demo-0":{component:u.memo(u.lazy(I()(l()().mark(function d(){var s,t,r,o,p,a,m;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=n.sent,t=s.default,n.next=6,Promise.resolve().then(e.bind(e,31071));case 6:return r=n.sent,o=r.Space,n.next=10,Promise.resolve().then(e.bind(e,17069));case 10:return p=n.sent,a=p.ImageUI,m=function(){return t.createElement(o,null,t.createElement(a,{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:200,height:200}),t.createElement(a,{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:200,height:200,maskType:2}),t.createElement(a,{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:200,height:200,maskType:3}))},n.abrupt("return",{default:m});case 14:case"end":return n.stop()}},d)})))),asset:{type:"BLOCK",id:"imageui-demo-0",refAtomIds:["ImageUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Space } from 'antd';
import { ImageUI } from 'sic-ui';

const App: React.FC = () => (
  <Space>
    <ImageUI src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={200} height={200} />
    <ImageUI src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={200} height={200} maskType={2} />
    <ImageUI src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={200} height={200} maskType={3} />
  </Space>
);
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.27.3"},"sic-ui":{type:"NPM",value:"0.9.2"}},entry:"index.tsx"},context:{react:c||(c=e.t(u,2)),antd:g,"sic-ui":y},renderOpts:{compile:function(){var d=I()(l()().mark(function t(){var r,o=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,o));case 3:case"end":return a.stop()}},t)}));function s(){return d.apply(this,arguments)}return s}()}},"imageui-demo-1":{component:u.memo(u.lazy(I()(l()().mark(function d(){var s,t,r,o,p,a,m;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=n.sent,t=s.default,n.next=6,Promise.resolve().then(e.bind(e,31071));case 6:return r=n.sent,o=r.Space,n.next=10,Promise.resolve().then(e.bind(e,17069));case 10:return p=n.sent,a=p.ImageUI,m=function(){var i=["https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp","https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp","https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"],f="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp";return t.createElement(o,null,t.createElement(a.PreviewGroupUI,{items:i},t.createElement(a,{width:200,src:f})),t.createElement(a.PreviewGroupUI,{items:i},t.createElement(a,{maskType:2,width:200,src:f}),t.createElement(a,{maskType:3,width:200,src:f})))},n.abrupt("return",{default:m});case 14:case"end":return n.stop()}},d)})))),asset:{type:"BLOCK",id:"imageui-demo-1",refAtomIds:["ImageUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Space } from 'antd';
import { ImageUI } from 'sic-ui';

const App: React.FC = () => {
  const items = [
    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
  ];

  const src = 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp';

  return (
    <Space>
      <ImageUI.PreviewGroupUI items={items}>
        <ImageUI width={200} src={src} />
      </ImageUI.PreviewGroupUI>

      <ImageUI.PreviewGroupUI items={items}>
        <ImageUI maskType={2} width={200} src={src} />
        <ImageUI maskType={3} width={200} src={src} />
      </ImageUI.PreviewGroupUI>
    </Space>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.27.3"},"sic-ui":{type:"NPM",value:"0.9.2"}},entry:"index.tsx"},context:{react:c||(c=e.t(u,2)),antd:g,"sic-ui":y},renderOpts:{compile:function(){var d=I()(l()().mark(function t(){var r,o=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,o));case 3:case"end":return a.stop()}},t)}));function s(){return d.apply(this,arguments)}return s}()}},"imageui-demo-2":{component:u.memo(u.lazy(I()(l()().mark(function d(){var s,t,r,o,p,a,m,h,n;return l()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=i.sent,t=s.default,r=s.useState,i.next=7,Promise.resolve().then(e.bind(e,31071));case 7:return o=i.sent,p=o.Button,a=o.Space,i.next=12,Promise.resolve().then(e.bind(e,17069));case 12:return m=i.sent,h=m.ImageUI,n=function(){var O=r(!1),j=P()(O,2),T=j[0],U=j[1],B=r(!1),w=P()(B,2),L=w[0],V=w[1],W=["https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp","https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp","https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"],S="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png";return t.createElement(t.Fragment,null,t.createElement(a,null,t.createElement(p,{type:"primary",onClick:function(){return U(!0)}},"\u9884\u89C8-\u591A\u5F20\u56FE\u7247"),t.createElement(p,{type:"primary",onClick:function(){return V(!0)}},"\u9884\u89C8-\u5355\u5F20\u56FE\u7247")),t.createElement(a,null,t.createElement(h.PreviewGroupUI,{preview:{visible:T,onVisibleChange:function(x){return U(x)}},items:W})),t.createElement(h,{style:{display:"none"},preview:{visible:L,src:S,onVisibleChange:function(x){return V(x)}},src:S,width:200,height:200}))},i.abrupt("return",{default:n});case 16:case"end":return i.stop()}},d)})))),asset:{type:"BLOCK",id:"imageui-demo-2",refAtomIds:["ImageUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { ImageUI } from 'sic-ui';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [singleVisible, setSingleVsible] = useState(false);

  const items = [
    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
  ];

  const src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
  return (
    <>
      <Space>
        <Button type="primary" onClick={() => setVisible(true)}>
          \u9884\u89C8-\u591A\u5F20\u56FE\u7247
        </Button>
        <Button type="primary" onClick={() => setSingleVsible(true)}>
          \u9884\u89C8-\u5355\u5F20\u56FE\u7247
        </Button>
      </Space>
      <Space>
        <ImageUI.PreviewGroupUI
          preview={{
            visible,
            onVisibleChange: (value) => setVisible(value),
          }}
          items={items}
        />
      </Space>
      <ImageUI
        style={{ display: 'none' }}
        preview={{
          visible: singleVisible,
          src: src,
          onVisibleChange: (value) => setSingleVsible(value),
        }}
        src={src}
        width={200}
        height={200}
      />
    </>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.27.3"},"sic-ui":{type:"NPM",value:"0.9.2"}},entry:"index.tsx"},context:{react:c||(c=e.t(u,2)),antd:g,"sic-ui":y},renderOpts:{compile:function(){var d=I()(l()().mark(function t(){var r,o=arguments;return l()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(r=a.sent).default.apply(r,o));case 3:case"end":return a.stop()}},t)}));function s(){return d.apply(this,arguments)}return s}()}}}},48932:function(M,v,e){e.r(v),e.d(v,{texts:function(){return c}});const c=[{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:0,tocIndex:0},{value:"\u{1F48E} \u76F8\u518C\u6A21\u5F0F",paraId:1},{value:"\u{1F48E} \u53D7\u63A7\u6A21\u5F0F",paraId:2},{value:"ImageUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:3,tocIndex:1},{value:"\u5C5E\u6027",paraId:4,tocIndex:1},{value:"\u8BF4\u660E",paraId:4,tocIndex:1},{value:"\u7C7B\u578B",paraId:4,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:1},{value:"src",paraId:4,tocIndex:1},{value:"\u5730\u5740",paraId:4,tocIndex:1},{value:"String",paraId:4,tocIndex:1},{value:"-",paraId:4,tocIndex:1},{value:"\u662F",paraId:4,tocIndex:1},{value:"width",paraId:4,tocIndex:1},{value:"\u5BBD\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"-",paraId:4,tocIndex:1},{value:"\u5426",paraId:4,tocIndex:1},{value:"height",paraId:4,tocIndex:1},{value:"\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"-",paraId:4,tocIndex:1},{value:"\u5426",paraId:4,tocIndex:1},{value:"preview",paraId:4,tocIndex:1},{value:"\u662F\u5426\u53EF\u9884\u89C8",paraId:4,tocIndex:1},{value:"Boolean",paraId:4,tocIndex:1},{value:"true",paraId:4,tocIndex:1},{value:"\u5426",paraId:4,tocIndex:1},{value:"maskType",paraId:4,tocIndex:1},{value:"\u8499\u5C42\u7C7B\u578B",paraId:4,tocIndex:1},{value:"Number",paraId:4,tocIndex:1},{value:"1",paraId:4,tocIndex:1},{value:"\u5426",paraId:4,tocIndex:1},{value:"className",paraId:4,tocIndex:1},{value:"\u7C7B\u540D",paraId:4,tocIndex:1},{value:"String",paraId:4,tocIndex:1},{value:"-",paraId:4,tocIndex:1},{value:"\u5426",paraId:4,tocIndex:1},{value:"style",paraId:4,tocIndex:1},{value:"\u6837\u5F0F",paraId:4,tocIndex:1},{value:"React.CSSProperties",paraId:4,tocIndex:1},{value:"-",paraId:4,tocIndex:1},{value:"\u5426",paraId:4,tocIndex:1},{value:"clickOtherButton",paraId:4,tocIndex:1},{value:"\u70B9\u51FB\u8499\u5C42\u53F3\u8FB9\u6309\u94AE\u540E\u56DE\u8C03",paraId:4,tocIndex:1},{value:"()=>void",paraId:4,tocIndex:1},{value:"-",paraId:4,tocIndex:1},{value:"\u5426",paraId:4,tocIndex:1},{value:"PreviewGroupUI",paraId:5,tocIndex:1},{value:"\u5C5E\u6027",paraId:6,tocIndex:1},{value:"\u8BF4\u660E",paraId:6,tocIndex:1},{value:"\u7C7B\u578B",paraId:6,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:6,tocIndex:1},{value:"item",paraId:6,tocIndex:1},{value:"\u9884\u89C8\u6570\u7EC4",paraId:6,tocIndex:1},{value:"string[] | { src: string, crossOrigin: string, ... }[]",paraId:6,tocIndex:1},{value:"-",paraId:6,tocIndex:1},{value:"\u662F",paraId:6,tocIndex:1},{value:"preview",paraId:6,tocIndex:1},{value:"\u662F\u5426\u53EF\u9884\u89C8",paraId:6,tocIndex:1},{value:"Boolean | PreviewGroupType(\u53EF\u53C2\u8003 antd)",paraId:6,tocIndex:1},{value:"true",paraId:6,tocIndex:1},{value:"\u5426",paraId:6,tocIndex:1},{value:"children",paraId:6,tocIndex:1},{value:"\u5B50\u8282\u70B9",paraId:6,tocIndex:1},{value:"ReactNode",paraId:6,tocIndex:1},{value:"-",paraId:6,tocIndex:1},{value:"\u5426",paraId:6,tocIndex:1}]}}]);
