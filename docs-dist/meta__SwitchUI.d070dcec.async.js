"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[3280],{52858:function(U,c,e){e.r(c),e.d(c,{demos:function(){return b}});var M=e(97857),v=e.n(M),A=e(15009),o=e.n(A),j=e(5574),I=e.n(j),T=e(99289),f=e.n(T),u=e(67294),R=e(36370),b={"switchui-demo-0":{component:u.memo(u.lazy(f()(o()().mark(function d(){var i,l,n,r,m,t,p;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return i=s.sent,l=i.useState,s.next=6,Promise.resolve().then(e.bind(e,93803));case 6:return n=s.sent,r=n.Space,s.next=10,Promise.resolve().then(e.bind(e,42081));case 10:return m=s.sent,t=m.SwitchUI,p=function(){var O=l(1),_=I()(O,2),E=_[0],P=_[1],D=l(1),h=I()(D,2),S=h[0],y=h[1];return u.createElement(r,null,u.createElement(t,{checked:E===1,onClick:function(){return P(E===1?2:1)}}),u.createElement(t,{checkedChildren:"\u542F\u7528",unCheckedChildren:"\u7981\u7528",checked:S===1,onClick:function(){return y(S===1?2:1)}}))},s.abrupt("return",{default:p});case 14:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"switchui-demo-0",refAtomIds:["SwitchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';\r
import { Space } from 'antd';\r
import { SwitchUI } from 'sic-ui';\r
\r
const App: React.FC = () => {\r
  const [state1, setState1] = useState(1);\r
  const [state2, setState2] = useState(1);\r
  return (\r
    <Space>\r
      <SwitchUI checked={state1 === 1 ? true : false} onClick={() => setState1(state1 === 1 ? 2 : 1)} />\r
      <SwitchUI\r
        checkedChildren="\u542F\u7528"\r
        unCheckedChildren="\u7981\u7528"\r
        checked={state2 === 1 ? true : false}\r
        onClick={() => setState2(state2 === 1 ? 2 : 1)}\r
      />\r
    </Space>\r
  );\r
};\r
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.0"},"sic-ui":{type:"NPM",value:"0.4.28"}},entry:"index.tsx"},context:{react:e(67294),antd:e(93803),"sic-ui":e(42081)},renderOpts:{compile:function(){var d=f()(o()().mark(function l(){var n,r=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(n=t.sent).default.apply(n,r));case 3:case"end":return t.stop()}},l)}));function i(){return d.apply(this,arguments)}return i}()}},"switchui-demo-1":{component:u.memo(u.lazy(f()(o()().mark(function d(){var i,l,n,r,m,t,p,C;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return i=a.sent,l=i.useState,a.next=6,Promise.resolve().then(e.bind(e,93803));case 6:return n=a.sent,r=n.Form,a.next=10,Promise.resolve().then(e.bind(e,42081));case 10:return m=a.sent,t=m.SwitchUI,p={status:1},C=function(){var _=r.useForm(),E=I()(_,1),P=E[0],D=l(),h=I()(D,2),S=h[0],y=h[1],F=function(L){y(v()(v()({},S),L))};return u.createElement(r,{onFinish:F,form:P,initialValues:p},u.createElement(r.Item,{label:"\u662F\u5426\u542F\u7528",name:"status"},u.createElement(t,null)))},a.abrupt("return",{default:C});case 15:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"switchui-demo-1",refAtomIds:["SwitchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';\r
import { Form } from 'antd';\r
import { SwitchUI } from 'sic-ui';\r
const initialValues = {\r
  status: 1,\r
};\r
const App: React.FC = () => {\r
  const [form] = Form.useForm();\r
  const [formValue, setFormValue] = useState();\r
\r
  const onFinish = (value: any) => {\r
    setFormValue({ ...formValue, ...value });\r
  };\r
\r
  return (\r
    <Form onFinish={onFinish} form={form} initialValues={initialValues}>\r
      <Form.Item label="\u662F\u5426\u542F\u7528" name="status">\r
        <SwitchUI />\r
      </Form.Item>\r
    </Form>\r
  );\r
};\r
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.0"},"sic-ui":{type:"NPM",value:"0.4.28"}},entry:"index.tsx"},context:{react:e(67294),antd:e(93803),"sic-ui":e(42081)},renderOpts:{compile:function(){var d=f()(o()().mark(function l(){var n,r=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(4019).then(e.bind(e,4019));case 2:return t.abrupt("return",(n=t.sent).default.apply(n,r));case 3:case"end":return t.stop()}},l)}));function i(){return d.apply(this,arguments)}return i}()}}}},45617:function(U,c,e){e.r(c),e.d(c,{texts:function(){return v}});var M=e(36370);const v=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u5F00\u5173\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F48E} From \u8868\u5355\u5185\u90E8\u4F7F\u7528",paraId:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:3,tocIndex:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:3},{value:"value",paraId:4,tocIndex:3},{value:"\u503C",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u662F",paraId:4,tocIndex:3}]}}]);
