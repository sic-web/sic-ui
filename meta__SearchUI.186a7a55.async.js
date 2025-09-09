"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[1611],{97570:function(f,u,e){var o;e.r(u),e.d(u,{demos:function(){return y}});var P=e(15009),_=e.n(P),M=e(97857),p=e.n(M),O=e(5574),h=e.n(O),D=e(99289),v=e.n(D),a=e(67294),F=e(31071),C=e(17069),y={"searchui-demo-0":{component:a.memo(a.lazy(v()(_()().mark(function i(){var l,m,t,s,c,r,I;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return l=n.sent,m=l.useState,n.next=6,Promise.resolve().then(e.bind(e,31071));case 6:return t=n.sent,s=t.Form,n.next=10,Promise.resolve().then(e.bind(e,17069));case 10:return c=n.sent,r=c.SearchUI,I=function(){var b=s.useForm(),A=h()(b,1),j=A[0],U=m(),E=h()(U,2),d=E[0],T=E[1],R=function(S,V){T(p()(p()({},d),V))};return a.createElement("div",null,a.createElement(s,{form:j,onValuesChange:R},a.createElement(s.Item,{name:"searchField"},a.createElement(r,{placeholder:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0\u3001\u7F16\u53F7"}))),a.createElement("div",null,"\u641C\u7D22\u503C\uFF1A ",d==null?void 0:d.searchField))},n.abrupt("return",{default:I});case 14:case"end":return n.stop()}},i)})))),asset:{type:"BLOCK",id:"searchui-demo-0",refAtomIds:["SearchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
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
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.27.3"},"sic-ui":{type:"NPM",value:"0.9.1"}},entry:"index.tsx"},context:{react:o||(o=e.t(a,2)),antd:F,"sic-ui":C},renderOpts:{compile:function(){var i=v()(_()().mark(function m(){var t,s=arguments;return _()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(250).then(e.bind(e,90250));case 2:return r.abrupt("return",(t=r.sent).default.apply(t,s));case 3:case"end":return r.stop()}},m)}));function l(){return i.apply(this,arguments)}return l}()}}}},74319:function(f,u,e){e.r(u),e.d(u,{texts:function(){return o}});const o=[{value:"\u{1F48E} From \u8868\u5355\u5185\u90E8\u4F7F\u7528",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:1,tocIndex:1},{value:"type",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"default",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1}]}}]);
