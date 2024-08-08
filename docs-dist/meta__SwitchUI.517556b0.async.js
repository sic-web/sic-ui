"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[3280],{95225:function(A,c,e){e.r(c),e.d(c,{demos:function(){return b}});var O=e(39346),v=e.n(O),D=e(43953),i=e.n(D),W=e(9083),I=e.n(W),T=e(91184),_=e.n(T),l=e(38497),R=e(25826),b={"switchui-demo-0":{component:l.memo(l.lazy(_()(i()().mark(function d(){var u,o,n,r,m,t,p;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return u=a.sent,o=u.useState,a.next=6,Promise.resolve().then(e.bind(e,58490));case 6:return n=a.sent,r=n.Space,a.next=10,Promise.resolve().then(e.bind(e,15523));case 10:return m=a.sent,t=m.SwitchUI,p=function(){var U=o(1),f=I()(U,2),E=f[0],P=f[1],y=o(1),h=I()(y,2),S=h[0],F=h[1];return l.createElement(r,null,l.createElement(t,{checked:E===1,onClick:function(){return P(E===1?2:1)}}),l.createElement(t,{checkedChildren:"\u542F\u7528",unCheckedChildren:"\u7981\u7528",checked:S===1,onClick:function(){return F(S===1?2:1)}}))},a.abrupt("return",{default:p});case 14:case"end":return a.stop()}},d)})))),asset:{type:"BLOCK",id:"switchui-demo-0",refAtomIds:["SwitchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';\r
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
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.0"},"sic-ui":{type:"NPM",value:"0.4.5"}},entry:"index.tsx"},context:{react:e(38497),antd:e(58490),"sic-ui":e(15523)},renderOpts:{compile:function(){var d=_()(i()().mark(function o(){var n,r=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3482).then(e.bind(e,73482));case 2:return t.abrupt("return",(n=t.sent).default.apply(n,r));case 3:case"end":return t.stop()}},o)}));function u(){return d.apply(this,arguments)}return u}()}},"switchui-demo-1":{component:l.memo(l.lazy(_()(i()().mark(function d(){var u,o,n,r,m,t,p,C;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return u=s.sent,o=u.useState,s.next=6,Promise.resolve().then(e.bind(e,58490));case 6:return n=s.sent,r=n.Form,s.next=10,Promise.resolve().then(e.bind(e,15523));case 10:return m=s.sent,t=m.SwitchUI,p={status:1},C=function(){var f=r.useForm(),E=I()(f,1),P=E[0],y=o(),h=I()(y,2),S=h[0],F=h[1],M=function(L){F(v()(v()({},S),L))};return l.createElement(r,{onFinish:M,form:P,initialValues:p},l.createElement(r.Item,{label:"\u662F\u5426\u542F\u7528",name:"status"},l.createElement(t,null)))},s.abrupt("return",{default:C});case 15:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"switchui-demo-1",refAtomIds:["SwitchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';\r
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
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.20.0"},"sic-ui":{type:"NPM",value:"0.4.5"}},entry:"index.tsx"},context:{react:e(38497),antd:e(58490),"sic-ui":e(15523)},renderOpts:{compile:function(){var d=_()(i()().mark(function o(){var n,r=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3482).then(e.bind(e,73482));case 2:return t.abrupt("return",(n=t.sent).default.apply(n,r));case 3:case"end":return t.stop()}},o)}));function u(){return d.apply(this,arguments)}return u}()}}}},32186:function(A,c,e){e.r(c),e.d(c,{texts:function(){return v}});var O=e(25826);const v=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u5F00\u5173\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F48E} From \u8868\u5355\u5185\u90E8\u4F7F\u7528",paraId:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:3,tocIndex:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:3},{value:"value",paraId:4,tocIndex:3},{value:"\u503C",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u662F",paraId:4,tocIndex:3}]}}]);
