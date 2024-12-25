"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[1611],{66582:function(C,_,e){var m;e.r(_),e.d(_,{demos:function(){return W}});var i=e(43953),s=e.n(i),P=e(39346),I=e.n(P),M=e(9083),E=e.n(M),O=e(91184),h=e.n(O),a=e(38497),B=e(52950),D=e(3806),F=e(23888),W={"searchui-demo-0":{component:a.memo(a.lazy(h()(s()().mark(function c(){var l,u,o,t,v,n,p;return s()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return l=r.sent,u=l.useState,r.next=6,Promise.resolve().then(e.bind(e,3806));case 6:return o=r.sent,t=o.Form,r.next=10,Promise.resolve().then(e.bind(e,23888));case 10:return v=r.sent,n=v.SearchUI,p=function(){var A=t.useForm(),U=E()(A,1),y=U[0],T=u(),f=E()(T,2),d=f[0],b=f[1],R=function(g,L){b(I()(I()({},d),L))};return a.createElement("div",null,a.createElement(t,{form:y,onValuesChange:R},a.createElement(t.Item,{name:"searchField"},a.createElement(n,{placeholder:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0\u3001\u7F16\u53F7"}))),a.createElement("div",null,"\u641C\u7D22\u503C\uFF1A ",d==null?void 0:d.searchField))},r.abrupt("return",{default:p});case 14:case"end":return r.stop()}},c)})))),asset:{type:"BLOCK",id:"searchui-demo-0",refAtomIds:["SearchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';\r
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
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.22.6"},"sic-ui":{type:"NPM",value:"0.4.30"}},entry:"index.tsx"},context:{react:m||(m=e.t(a,2)),antd:D,"sic-ui":F},renderOpts:{compile:function(){var c=h()(s()().mark(function u(){var o,t=arguments;return s()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(4321).then(e.bind(e,14321));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,t));case 3:case"end":return n.stop()}},u)}));function l(){return c.apply(this,arguments)}return l}()}}}},78712:function(C,_,e){e.r(_),e.d(_,{texts:function(){return i}});var m=e(52950);const i=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u641C\u7D22\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} From \u8868\u5355\u5185\u90E8\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:3},{value:"type",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"string",paraId:3,tocIndex:3},{value:"default",paraId:3,tocIndex:3},{value:"\u5426",paraId:3,tocIndex:3}]}}]);
