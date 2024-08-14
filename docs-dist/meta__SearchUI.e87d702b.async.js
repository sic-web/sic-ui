"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[1611],{70362:function(f,s,e){e.r(s),e.d(s,{demos:function(){return F}});var c=e(43953),t=e.n(c),C=e(39346),v=e.n(C),P=e(9083),I=e.n(P),M=e(91184),h=e.n(M),a=e(38497),T=e(69881),F={"searchui-demo-0":{component:a.memo(a.lazy(h()(t()().mark(function m(){var u,_,l,o,i,n,p;return t()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return u=r.sent,_=u.useState,r.next=6,Promise.resolve().then(e.bind(e,99256));case 6:return l=r.sent,o=l.Form,r.next=10,Promise.resolve().then(e.bind(e,10020));case 10:return i=r.sent,n=i.SearchUI,p=function(){var O=o.useForm(),D=I()(O,1),W=D[0],y=_(),E=I()(y,2),d=E[0],A=E[1],U=function(g,b){A(v()(v()({},d),b))};return a.createElement("div",null,a.createElement(o,{form:W,onValuesChange:U},a.createElement(o.Item,{name:"searchField"},a.createElement(n,{placeholder:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0\u3001\u7F16\u53F7"}))),a.createElement("div",null,"\u641C\u7D22\u503C\uFF1A ",d==null?void 0:d.searchField))},r.abrupt("return",{default:p});case 14:case"end":return r.stop()}},m)})))),asset:{type:"BLOCK",id:"searchui-demo-0",refAtomIds:["SearchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';\r
import { Form } from 'antd';\r
import { SearchUI } from 'sic-ui';\r
\r
const App: React.FC = () => {\r
  const [form] = Form.useForm();\r
  const [formValue, setFormValue] = useState();\r
\r
  const onValuesChange = (_: any, allValues: any) => {\r
    setFormValue({ ...formValue, ...allValues });\r
  };\r
\r
  return (\r
    <div>\r
      <Form form={form} onValuesChange={onValuesChange}>\r
        <Form.Item name="searchField">\r
          <SearchUI placeholder="\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0\u3001\u7F16\u53F7" />\r
        </Form.Item>\r
      </Form>\r
      <div>\u641C\u7D22\u503C\uFF1A {formValue?.searchField}</div>\r
    </div>\r
  );\r
};\r
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.1"},"sic-ui":{type:"NPM",value:"0.4.7"}},entry:"index.tsx"},context:{react:e(38497),antd:e(99256),"sic-ui":e(10020)},renderOpts:{compile:function(){var m=h()(t()().mark(function _(){var l,o=arguments;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(3482).then(e.bind(e,73482));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,o));case 3:case"end":return n.stop()}},_)}));function u(){return m.apply(this,arguments)}return u}()}}}},90666:function(f,s,e){e.r(s),e.d(s,{texts:function(){return t}});var c=e(69881);const t=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u641C\u7D22\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} From \u8868\u5355\u5185\u90E8\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:3},{value:"type",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"string",paraId:3,tocIndex:3},{value:"default",paraId:3,tocIndex:3},{value:"\u5426",paraId:3,tocIndex:3}]}}]);
