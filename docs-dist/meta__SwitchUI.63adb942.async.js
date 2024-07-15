"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[3280],{78541:function(A,c,e){e.r(c),e.d(c,{demos:function(){return b}});var O=e(39346),v=e.n(O),D=e(43953),i=e.n(D),W=e(9083),I=e.n(W),T=e(91184),_=e.n(T),l=e(38497),R=e(61931),b={"switchui-demo-0":{component:l.memo(l.lazy(_()(i()().mark(function d(){var u,o,n,a,m,t,p;return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return u=s.sent,o=u.useState,s.next=6,Promise.resolve().then(e.bind(e,39902));case 6:return n=s.sent,a=n.Space,s.next=10,Promise.resolve().then(e.bind(e,21137));case 10:return m=s.sent,t=m.SwitchUI,p=function(){var U=o(1),f=I()(U,2),E=f[0],P=f[1],y=o(1),h=I()(y,2),S=h[0],F=h[1];return l.createElement(a,null,l.createElement(t,{checked:E===1,onClick:function(){return P(E===1?2:1)}}),l.createElement(t,{checkedChildren:"\u542F\u7528",unCheckedChildren:"\u7981\u7528",checked:S===1,onClick:function(){return F(S===1?2:1)}}))},s.abrupt("return",{default:p});case 14:case"end":return s.stop()}},d)})))),asset:{type:"BLOCK",id:"switchui-demo-0",refAtomIds:["SwitchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { Space } from 'antd';
import { SwitchUI } from 'sic-ui';

const App: React.FC = () => {
  const [state1, setState1] = useState(1);
  const [state2, setState2] = useState(1);
  return (
    <Space>
      <SwitchUI checked={state1 === 1 ? true : false} onClick={() => setState1(state1 === 1 ? 2 : 1)} />
      <SwitchUI
        checkedChildren="\u542F\u7528"
        unCheckedChildren="\u7981\u7528"
        checked={state2 === 1 ? true : false}
        onClick={() => setState2(state2 === 1 ? 2 : 1)}
      />
    </Space>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.19.1"},"sic-ui":{type:"NPM",value:"0.3.47"}},entry:"index.tsx"},context:{react:e(38497),antd:e(39902),"sic-ui":e(21137)},renderOpts:{compile:function(){var d=_()(i()().mark(function o(){var n,a=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3959).then(e.bind(e,73959));case 2:return t.abrupt("return",(n=t.sent).default.apply(n,a));case 3:case"end":return t.stop()}},o)}));function u(){return d.apply(this,arguments)}return u}()}},"switchui-demo-1":{component:l.memo(l.lazy(_()(i()().mark(function d(){var u,o,n,a,m,t,p,C;return i()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return u=r.sent,o=u.useState,r.next=6,Promise.resolve().then(e.bind(e,39902));case 6:return n=r.sent,a=n.Form,r.next=10,Promise.resolve().then(e.bind(e,21137));case 10:return m=r.sent,t=m.SwitchUI,p={status:1},C=function(){var f=a.useForm(),E=I()(f,1),P=E[0],y=o(),h=I()(y,2),S=h[0],F=h[1],M=function(L){F(v()(v()({},S),L))};return l.createElement(a,{onFinish:M,form:P,initialValues:p},l.createElement(a.Item,{label:"\u662F\u5426\u542F\u7528",name:"status"},l.createElement(t,null)))},r.abrupt("return",{default:C});case 15:case"end":return r.stop()}},d)})))),asset:{type:"BLOCK",id:"switchui-demo-1",refAtomIds:["SwitchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { Form } from 'antd';
import { SwitchUI } from 'sic-ui';
const initialValues = {
  status: 1,
};
const App: React.FC = () => {
  const [form] = Form.useForm();
  const [formValue, setFormValue] = useState();

  const onFinish = (value: any) => {
    setFormValue({ ...formValue, ...value });
  };

  return (
    <Form onFinish={onFinish} form={form} initialValues={initialValues}>
      <Form.Item label="\u662F\u5426\u542F\u7528" name="status">
        <SwitchUI />
      </Form.Item>
    </Form>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.19.1"},"sic-ui":{type:"NPM",value:"0.3.47"}},entry:"index.tsx"},context:{react:e(38497),antd:e(39902),"sic-ui":e(21137)},renderOpts:{compile:function(){var d=_()(i()().mark(function o(){var n,a=arguments;return i()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(3959).then(e.bind(e,73959));case 2:return t.abrupt("return",(n=t.sent).default.apply(n,a));case 3:case"end":return t.stop()}},o)}));function u(){return d.apply(this,arguments)}return u}()}}}},50251:function(A,c,e){e.r(c),e.d(c,{texts:function(){return v}});var O=e(61931);const v=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u5F00\u5173\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F48E} From \u8868\u5355\u5185\u90E8\u4F7F\u7528",paraId:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:3,tocIndex:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:3},{value:"value",paraId:4,tocIndex:3},{value:"\u503C",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:"-",paraId:4,tocIndex:3},{value:"\u662F",paraId:4,tocIndex:3}]}}]);
