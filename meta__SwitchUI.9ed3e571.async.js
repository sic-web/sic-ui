"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[3280],{52858:function(b,_,e){var c;e.r(_),e.d(_,{demos:function(){return B}});var j=e(97857),O=e.n(j),L=e(15009),o=e.n(L),R=e(5574),v=e.n(R),T=e(99289),I=e.n(T),n=e(67294),A=e(30613),D=e(11952),B={"switchui-demo-0":{component:n.memo(n.lazy(I()(o()().mark(function m(){var l,i,s,a,d,t,p;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return l=r.sent,i=l.useState,r.next=6,Promise.resolve().then(e.bind(e,30613));case 6:return s=r.sent,a=s.Space,r.next=10,Promise.resolve().then(e.bind(e,11952));case 10:return d=r.sent,t=d.SwitchUI,p=function(){var U=i(1),f=v()(U,2),E=f[0],y=f[1],C=i(1),h=v()(C,2),S=h[0],M=h[1];return n.createElement(a,null,n.createElement(t,{checked:E===1,onClick:function(){return y(E===1?2:1)}}),n.createElement(t,{checkedChildren:"\u542F\u7528",unCheckedChildren:"\u7981\u7528",checked:S===1,onClick:function(){return M(S===1?2:1)}}))},r.abrupt("return",{default:p});case 14:case"end":return r.stop()}},m)})))),asset:{type:"BLOCK",id:"switchui-demo-0",refAtomIds:["SwitchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
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
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.26.6"},"sic-ui":{type:"NPM",value:"0.8.10"}},entry:"index.tsx"},context:{react:c||(c=e.t(n,2)),antd:A,"sic-ui":D},renderOpts:{compile:function(){var m=I()(o()().mark(function i(){var s,a=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,a));case 3:case"end":return t.stop()}},i)}));function l(){return m.apply(this,arguments)}return l}()}},"switchui-demo-1":{component:n.memo(n.lazy(I()(o()().mark(function m(){var l,i,s,a,d,t,p,P;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return l=u.sent,i=l.useState,u.next=6,Promise.resolve().then(e.bind(e,30613));case 6:return s=u.sent,a=s.Form,u.next=10,Promise.resolve().then(e.bind(e,11952));case 10:return d=u.sent,t=d.SwitchUI,p={status:1},P=function(){var f=a.useForm(),E=v()(f,1),y=E[0],C=i(),h=v()(C,2),S=h[0],M=h[1],F=function(K){M(O()(O()({},S),K))};return n.createElement(a,{onFinish:F,form:y,initialValues:p},n.createElement(a.Item,{label:"\u662F\u5426\u542F\u7528",name:"status"},n.createElement(t,null)))},u.abrupt("return",{default:P});case 15:case"end":return u.stop()}},m)})))),asset:{type:"BLOCK",id:"switchui-demo-1",refAtomIds:["SwitchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
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
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.26.6"},"sic-ui":{type:"NPM",value:"0.8.10"}},entry:"index.tsx"},context:{react:c||(c=e.t(n,2)),antd:A,"sic-ui":D},renderOpts:{compile:function(){var m=I()(o()().mark(function i(){var s,a=arguments;return o()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(250).then(e.bind(e,90250));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,a));case 3:case"end":return t.stop()}},i)}));function l(){return m.apply(this,arguments)}return l}()}}}},45617:function(b,_,e){e.r(_),e.d(_,{texts:function(){return c}});const c=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u5F00\u5173\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F48E} From \u8868\u5355\u5185\u90E8\u4F7F\u7528",paraId:2},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:3},{value:"value",paraId:3,tocIndex:3},{value:"\u503C",paraId:3,tocIndex:3},{value:"number",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3}]}}]);
