"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[614],{57073:function(j,o,e){var m;e.r(o),e.d(o,{demos:function(){return V}});var c=e(15009),d=e.n(c),k=e(97857),l=e.n(k),A=e(5574),p=e.n(A),U=e(99289),M=e.n(U),v=e(67294),X=e(18319),g=e(71612),L=e(42081),V={"filterui-demo-0":{component:v.memo(v.lazy(M()(d()().mark(function I(){var i,u,r,_,f,t,T,D;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return i=a.sent,u=i.default,r=i.useState,a.next=7,Promise.resolve().then(e.bind(e,71612));case 7:return _=a.sent,f=_.Form,a.next=11,Promise.resolve().then(e.bind(e,42081));case 11:return t=a.sent,T=t.FilterUI,D=function(){var y,B=f.useForm(),K=p()(B,1),W=K[0],$=r(null),F=p()($,2),N=F[0],G=F[1],z=r({choice:!1,multipleChoice:[],filterParams:{Status:1},tableSetStatus:!1,moreFilters:!1}),C=p()(z,2),n=C[0],b=C[1],P=[{value:1,label:"\u5F85\u652F\u4ED8"},{value:2,label:"\u5BA1\u6838\u4E2D"},{value:3,label:"\u53D1\u653E\u4E2D"},{value:4,label:"\u5DF2\u53D1\u653E"},{value:5,label:"\u5DF2\u53D6\u6D88"},{value:6,label:"\u9A73\u56DE"}],H=function(R,s){var h,E,O,x;b(l()(l()({},n),{},{filterParams:l()(l()({},s),{},{dateStart:(h=s==null||(E=s.submitTime)===null||E===void 0?void 0:E[0])!==null&&h!==void 0?h:void 0,dateEnd:(O=s==null||(x=s.submitTime)===null||x===void 0?void 0:x[1])!==null&&O!==void 0?O:void 0})}))},J=[{type:"search",label:"\u4F01\u4E1A\u540D\u79F0",key:"companyName1"},{type:"datePicker",label:"\u53D1\u653E\u65E5\u671F",key:"transTime1"},{type:"select",label:"\u72B6\u6001",key:"Status1",options:P},{type:"search",label:"\u4F01\u4E1A\u540D\u79F0",key:"companyName2"},{type:"datePicker",label:"\u53D1\u653E\u65E5\u671F",key:"transTime2"},{type:"select",label:"\u72B6\u6001",key:"Status2",options:P,isNotDelete:!0,renderProps:{}},{type:"search",label:"\u4F01\u4E1A\u540D\u79F0",key:"companyName"},{type:"datePicker",label:"\u53D1\u653E\u65E5\u671F",key:"transTime"},{type:"select",label:"\u72B6\u6001",key:"Status",options:P}],Q=function(){b(l()(l()({},n),{},{filterParams:{}}))};return u.createElement("div",{ref:G},u.createElement(T,{form:W,filterOptions:J,filterParams:(y=n==null?void 0:n.filterParams)!==null&&y!==void 0?y:{},moreFilters:n==null?void 0:n.moreFilters,setMoreFilters:function(R){return b(l()(l()({},n),{},{moreFilters:R}))},onValuesChange:H,clickReset:Q,container:N}))},a.abrupt("return",{default:D});case 15:case"end":return a.stop()}},I)})))),asset:{type:"BLOCK",id:"filterui-demo-0",refAtomIds:["FilterUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
import { Form, message } from 'antd';
import { FilterUI } from 'sic-ui';

const App: React.FC = () => {
  const [form] = Form.useForm();

  const [container, setContainer] = useState(null);
  // \u72B6\u6001\u5BB9\u5668
  const [vessel, setVessel] = useState({
    // \u662F\u5426\u6279\u91CF
    choice: false,
    // \u6279\u91CF\u7684\u503C
    multipleChoice: [],
    // \u641C\u7D22\u6761\u4EF6
    filterParams: {
      Status: 1,
    },
    // \u8868\u683C\u8BBE\u7F6E\u72B6\u6001
    tableSetStatus: false,
    // \u66F4\u591A\u7B5B\u9009\u7684\u72B6\u6001
    moreFilters: false,
  });
  const projectStatusOptions = [
    { value: 1, label: '\u5F85\u652F\u4ED8' },
    { value: 2, label: '\u5BA1\u6838\u4E2D' },
    { value: 3, label: '\u53D1\u653E\u4E2D' },
    { value: 4, label: '\u5DF2\u53D1\u653E' },
    { value: 5, label: '\u5DF2\u53D6\u6D88' },
    { value: 6, label: '\u9A73\u56DE' },
  ];
  const onValuesChange = (changedValues: any, allValues: any) => {
    setVessel({
      ...vessel,
      filterParams: {
        ...allValues,
        dateStart: allValues?.submitTime?.[0] ?? undefined,
        dateEnd: allValues?.submitTime?.[1] ?? undefined,
      },
    });
  };
  const filterOptions = [
    { type: 'search', label: '\u4F01\u4E1A\u540D\u79F0', key: 'companyName1' },
    { type: 'datePicker', label: '\u53D1\u653E\u65E5\u671F', key: 'transTime1' },
    { type: 'select', label: '\u72B6\u6001', key: 'Status1', options: projectStatusOptions },
    { type: 'search', label: '\u4F01\u4E1A\u540D\u79F0', key: 'companyName2' },
    { type: 'datePicker', label: '\u53D1\u653E\u65E5\u671F', key: 'transTime2' },
    { type: 'select', label: '\u72B6\u6001', key: 'Status2', options: projectStatusOptions, isNotDelete: true, renderProps: {} },
    { type: 'search', label: '\u4F01\u4E1A\u540D\u79F0', key: 'companyName' },
    { type: 'datePicker', label: '\u53D1\u653E\u65E5\u671F', key: 'transTime' },
    { type: 'select', label: '\u72B6\u6001', key: 'Status', options: projectStatusOptions },
  ];
  const clickReset = () => {
    setVessel({ ...vessel, filterParams: {} });
  };
  return (
    <div ref={setContainer}>
      <FilterUI
        form={form}
        filterOptions={filterOptions}
        filterParams={vessel?.filterParams ?? {}}
        moreFilters={vessel?.moreFilters}
        setMoreFilters={(value) => setVessel({ ...vessel, moreFilters: value })}
        onValuesChange={onValuesChange}
        clickReset={clickReset}
        container={container}
      />
    </div>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.24.4"},"sic-ui":{type:"NPM",value:"0.5.2"}},entry:"index.tsx"},context:{react:m||(m=e.t(v,2)),antd:g,"sic-ui":L},renderOpts:{compile:function(){var I=M()(d()().mark(function u(){var r,_=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,_));case 3:case"end":return t.stop()}},u)}));function i(){return I.apply(this,arguments)}return i}()}}}},30434:function(j,o,e){e.r(o),e.d(o,{texts:function(){return c}});var m=e(18319);const c=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u52A0\u8F7D\u4E2D\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:3},{value:"form",paraId:3,tocIndex:3},{value:"\u8868\u5355\u5B9E\u4F8B",paraId:3,tocIndex:3},{value:"ReactNode",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"filterOptions",paraId:3,tocIndex:3},{value:"\u641C\u7D22\u7EC4\u4EF6\u914D\u7F6E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"filterParams",paraId:3,tocIndex:3},{value:"\u7B5B\u9009\u6846\u7684\u5B57\u6BB5\u548C\u503C",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"setMoreFilters",paraId:3,tocIndex:3},{value:"\u63A7\u5236\u66F4\u591A\u7B5B\u9009\u6846\u7684\u72B6\u6001",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"onValuesChange",paraId:3,tocIndex:3},{value:"\u8868\u5355\u503C\u53D8\u5316",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"clickReset",paraId:3,tocIndex:3},{value:"\u8868\u5355\u91CD\u7F6E\u4E8B\u4EF6",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"container",paraId:3,tocIndex:3},{value:"\u6EDA\u52A8\u56FA\u5B9A\u6307\u5B9A\u7684\u7236\u7EA7\u5143\u7D20",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3}]}}]);
