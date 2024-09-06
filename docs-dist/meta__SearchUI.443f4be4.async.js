"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[1611],{97570:function(f,o,e){e.r(o),e.d(o,{demos:function(){return M}});var c=e(15009),s=e.n(c),D=e(97857),p=e.n(D),C=e(5574),v=e.n(C),P=e(99289),I=e.n(P),a=e(67294),T=e(40112),M={"searchui-demo-0":{component:a.memo(a.lazy(I()(s()().mark(function _(){var u,d,l,t,i,r,h;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=n.sent,d=u.useState,n.next=6,Promise.resolve().then(e.bind(e,58955));case 6:return l=n.sent,t=l.Form,n.next=10,Promise.resolve().then(e.bind(e,33977));case 10:return i=n.sent,r=i.SearchUI,h=function(){var F=t.useForm(),O=v()(F,1),y=O[0],A=d(),E=v()(A,2),m=E[0],U=E[1],b=function(g,j){U(p()(p()({},m),j))};return a.createElement("div",null,a.createElement(t,{form:y,onValuesChange:b},a.createElement(t.Item,{name:"searchField"},a.createElement(r,{placeholder:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0\u3001\u7F16\u53F7"}))),a.createElement("div",null,"\u641C\u7D22\u503C\uFF1A ",m==null?void 0:m.searchField))},n.abrupt("return",{default:h});case 14:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"searchui-demo-0",refAtomIds:["SearchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';\r
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
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.0"},"sic-ui":{type:"NPM",value:"0.4.12"}},entry:"index.tsx"},context:{react:e(67294),antd:e(58955),"sic-ui":e(33977)},renderOpts:{compile:function(){var _=I()(s()().mark(function d(){var l,t=arguments;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(4019).then(e.bind(e,4019));case 2:return r.abrupt("return",(l=r.sent).default.apply(l,t));case 3:case"end":return r.stop()}},d)}));function u(){return _.apply(this,arguments)}return u}()}}}},74319:function(f,o,e){e.r(o),e.d(o,{texts:function(){return s}});var c=e(40112);const s=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u641C\u7D22\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} From \u8868\u5355\u5185\u90E8\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:3},{value:"type",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"string",paraId:3,tocIndex:3},{value:"default",paraId:3,tocIndex:3},{value:"\u5426",paraId:3,tocIndex:3}]}}]);
