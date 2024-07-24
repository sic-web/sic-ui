"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[1611],{50852:function(f,s,e){e.r(s),e.d(s,{demos:function(){return F}});var c=e(43953),t=e.n(c),C=e(39346),v=e.n(C),P=e(9083),I=e.n(P),M=e(91184),h=e.n(M),r=e(38497),T=e(96271),F={"searchui-demo-0":{component:r.memo(r.lazy(h()(t()().mark(function m(){var u,_,l,o,i,a,p;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return u=n.sent,_=u.useState,n.next=6,Promise.resolve().then(e.bind(e,77635));case 6:return l=n.sent,o=l.Form,n.next=10,Promise.resolve().then(e.bind(e,44956));case 10:return i=n.sent,a=i.SearchUI,p=function(){var O=o.useForm(),D=I()(O,1),W=D[0],y=_(),E=I()(y,2),d=E[0],A=E[1],U=function(g,b){A(v()(v()({},d),b))};return r.createElement("div",null,r.createElement(o,{form:W,onValuesChange:U},r.createElement(o.Item,{name:"searchField"},r.createElement(a,{placeholder:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0\u3001\u7F16\u53F7"}))),r.createElement("div",null,"\u641C\u7D22\u503C\uFF1A ",d==null?void 0:d.searchField))},n.abrupt("return",{default:p});case 14:case"end":return n.stop()}},m)})))),asset:{type:"BLOCK",id:"searchui-demo-0",refAtomIds:["SearchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
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
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.19.3"},"sic-ui":{type:"NPM",value:"0.3.54"}},entry:"index.tsx"},context:{react:e(38497),antd:e(77635),"sic-ui":e(44956)},renderOpts:{compile:function(){var m=h()(t()().mark(function _(){var l,o=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(6628).then(e.bind(e,76628));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,o));case 3:case"end":return a.stop()}},_)}));function u(){return m.apply(this,arguments)}return u}()}}}},61621:function(f,s,e){e.r(s),e.d(s,{texts:function(){return t}});var c=e(96271);const t=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u641C\u7D22\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} From \u8868\u5355\u5185\u90E8\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:3},{value:"type",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"string",paraId:3,tocIndex:3},{value:"default",paraId:3,tocIndex:3},{value:"\u5426",paraId:3,tocIndex:3}]}}]);
