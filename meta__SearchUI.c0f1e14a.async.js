"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[1611],{97570:function(P,s,e){var d;e.r(s),e.d(s,{demos:function(){return A}});var i=e(15009),t=e.n(i),M=e(97857),p=e.n(M),O=e(5574),v=e.n(O),D=e(99289),I=e.n(D),a=e(67294),B=e(40112),C=e(76558),F=e(19180),A={"searchui-demo-0":{component:a.memo(a.lazy(I()(t()().mark(function c(){var o,l,u,_,h,r,E;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=n.sent,l=o.useState,n.next=6,Promise.resolve().then(e.bind(e,76558));case 6:return u=n.sent,_=u.Form,n.next=10,Promise.resolve().then(e.bind(e,19180));case 10:return h=n.sent,r=h.SearchUI,E=function(){var U=_.useForm(),y=v()(U,1),T=y[0],b=l(),f=v()(b,2),m=f[0],j=f[1],R=function(W,L){j(p()(p()({},m),L))};return a.createElement("div",null,a.createElement(_,{form:T,onValuesChange:R},a.createElement(_.Item,{name:"searchField"},a.createElement(r,{placeholder:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0\u3001\u7F16\u53F7"}))),a.createElement("div",null,"\u641C\u7D22\u503C\uFF1A ",m==null?void 0:m.searchField))},n.abrupt("return",{default:E});case 14:case"end":return n.stop()}},c)})))),asset:{type:"BLOCK",id:"searchui-demo-0",refAtomIds:["SearchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { Form } from 'antd';
import { SearchUI } from 'sic-ui';

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [formValue, setFormValue] = useState();

  const onValuesChange = (_: any, allValues: any) => {
    setFormValue({ ...formValue, ...allValues });
  };

  return (
    <div>
      <Form form={form} onValuesChange={onValuesChange}>
        <Form.Item name="searchField">
          <SearchUI placeholder="\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0\u3001\u7F16\u53F7" />
        </Form.Item>
      </Form>
      <div>\u641C\u7D22\u503C\uFF1A {formValue?.searchField}</div>
    </div>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.24.4"},"sic-ui":{type:"NPM",value:"0.6.1"}},entry:"index.tsx"},context:{react:d||(d=e.t(a,2)),antd:C,"sic-ui":F},renderOpts:{compile:function(){var c=I()(t()().mark(function l(){var u,_=arguments;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(7335).then(e.bind(e,37335));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,_));case 3:case"end":return r.stop()}},l)}));function o(){return c.apply(this,arguments)}return o}()}}}},74319:function(P,s,e){e.r(s),e.d(s,{texts:function(){return i}});var d=e(40112);const i=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u641C\u7D22\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} From \u8868\u5355\u5185\u90E8\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:3},{value:"type",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"string",paraId:3,tocIndex:3},{value:"default",paraId:3,tocIndex:3},{value:"\u5426",paraId:3,tocIndex:3}]}}]);
