"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[3280],{17584:function(T,c,e){var _;e.r(c),e.d(c,{demos:function(){return B}});var S=e(39346),F=e.n(S),L=e(43953),i=e.n(L),R=e(9083),v=e.n(R),b=e(91184),I=e.n(b),n=e(38497),$=e(72027),U=e(29966),A=e(25036),B={"switchui-demo-0":{component:n.memo(n.lazy(I()(i()().mark(function d(){var o,l,r,a,m,t,p;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return o=s.sent,l=o.useState,s.next=6,Promise.resolve().then(e.bind(e,29966));case 6:return r=s.sent,a=r.Space,s.next=10,Promise.resolve().then(e.bind(e,25036));case 10:return m=s.sent,t=m.SwitchUI,p=function(){var W=l(1),f=v()(W,2),E=f[0],M=f[1],O=l(1),h=v()(O,2),C=h[0],y=h[1];return n.createElement(a,null,n.createElement(t,{checked:E===1,onClick:function(){return M(E===1?2:1)}}),n.createElement(t,{checkedChildren:"\u542F\u7528",unCheckedChildren:"\u7981\u7528",checked:C===1,onClick:function(){return y(C===1?2:1)}}))},s.abrupt("return",{default:p});case 14:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"switchui-demo-0",refAtomIds:["SwitchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';\r
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
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.5"},"sic-ui":{type:"NPM",value:"0.4.25"}},entry:"index.tsx"},context:{react:_||(_=e.t(n,2)),antd:U,"sic-ui":A},renderOpts:{compile:function(){var d=I()(i()().mark(function l(){var r,a=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8350).then(e.bind(e,48350));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},l)}));function o(){return d.apply(this,arguments)}return o}()}},"switchui-demo-1":{component:n.memo(n.lazy(I()(i()().mark(function d(){var o,l,r,a,m,t,p,P;return i()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return o=u.sent,l=o.useState,u.next=6,Promise.resolve().then(e.bind(e,29966));case 6:return r=u.sent,a=r.Form,u.next=10,Promise.resolve().then(e.bind(e,25036));case 10:return m=u.sent,t=m.SwitchUI,p={status:1},P=function(){var f=a.useForm(),E=v()(f,1),M=E[0],O=l(),h=v()(O,2),C=h[0],y=h[1],D=function(K){y(F()(F()({},C),K))};return n.createElement(a,{onFinish:D,form:M,initialValues:p},n.createElement(a.Item,{label:"\u662F\u5426\u542F\u7528",name:"status"},n.createElement(t,null)))},u.abrupt("return",{default:P});case 15:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"switchui-demo-1",refAtomIds:["SwitchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';\r
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
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.5"},"sic-ui":{type:"NPM",value:"0.4.25"}},entry:"index.tsx"},context:{react:_||(_=e.t(n,2)),antd:U,"sic-ui":A},renderOpts:{compile:function(){var d=I()(i()().mark(function l(){var r,a=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8350).then(e.bind(e,48350));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,a));case 3:case"end":return t.stop()}},l)}));function o(){return d.apply(this,arguments)}return o}()}}}},77532:function(T,c,e){e.r(c),e.d(c,{texts:function(){return S}});var _=e(72027);const S=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u5F00\u5173\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F48E} From \u8868\u5355\u5185\u90E8\u4F7F\u7528",paraId:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:3,tocIndex:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:3},{value:"value",paraId:4,tocIndex:3},{value:"\u503C",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u662F",paraId:4,tocIndex:3}]}}]);
