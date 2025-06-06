"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[614],{57073:function(R,o,e){var d;e.r(o),e.d(o,{demos:function(){return L}});var j=e(15009),m=e.n(j),k=e(97857),l=e.n(k),A=e(5574),_=e.n(A),U=e(99289),x=e.n(U),p=e(67294),V=e(30613),g=e(5271),L={"filterui-demo-0":{component:p.memo(p.lazy(x()(m()().mark(function v(){var u,i,r,c,I,t,M,S;return m()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=a.sent,i=u.default,r=u.useState,a.next=7,Promise.resolve().then(e.bind(e,30613));case 7:return c=a.sent,I=c.Form,a.next=11,Promise.resolve().then(e.bind(e,5271));case 11:return t=a.sent,M=t.FilterUI,S=function(){var f,B=I.useForm(),K=_()(B,1),$=K[0],N=r(null),T=_()(N,2),W=T[0],G=T[1],z=r({choice:!1,multipleChoice:[],filterParams:{Status:1},tableSetStatus:!1,moreFilters:!1}),F=_()(z,2),n=F[0],y=F[1],b=[{value:1,label:"\u5F85\u652F\u4ED8"},{value:2,label:"\u5BA1\u6838\u4E2D"},{value:3,label:"\u53D1\u653E\u4E2D"},{value:4,label:"\u5DF2\u53D1\u653E"},{value:5,label:"\u5DF2\u53D6\u6D88"},{value:6,label:"\u9A73\u56DE"}],H=function(D,s){var P,h,E,O;y(l()(l()({},n),{},{filterParams:l()(l()({},s),{},{dateStart:(P=s==null||(h=s.submitTime)===null||h===void 0?void 0:h[0])!==null&&P!==void 0?P:void 0,dateEnd:(E=s==null||(O=s.submitTime)===null||O===void 0?void 0:O[1])!==null&&E!==void 0?E:void 0})}))},J=[{type:"search",label:"\u4F01\u4E1A\u540D\u79F0",key:"companyName1"},{type:"datePicker",label:"\u53D1\u653E\u65E5\u671F",key:"transTime1"},{type:"select",label:"\u72B6\u6001",key:"Status1",options:b},{type:"search",label:"\u4F01\u4E1A\u540D\u79F0",key:"companyName2"},{type:"datePicker",label:"\u53D1\u653E\u65E5\u671F",key:"transTime2"},{type:"select",label:"\u72B6\u6001",key:"Status2",options:b,isNotDelete:!0,renderProps:{}},{type:"search",label:"\u4F01\u4E1A\u540D\u79F0",key:"companyName"},{type:"datePicker",label:"\u53D1\u653E\u65E5\u671F",key:"transTime"},{type:"select",label:"\u72B6\u6001",key:"Status",options:b}],Q=function(){y(l()(l()({},n),{},{filterParams:{}}))};return i.createElement("div",{ref:G},i.createElement(M,{form:$,filterOptions:J,filterParams:(f=n==null?void 0:n.filterParams)!==null&&f!==void 0?f:{},moreFilters:n==null?void 0:n.moreFilters,setMoreFilters:function(D){return y(l()(l()({},n),{},{moreFilters:D}))},onValuesChange:H,clickReset:Q,container:W}))},a.abrupt("return",{default:S});case 15:case"end":return a.stop()}},v)})))),asset:{type:"BLOCK",id:"filterui-demo-0",refAtomIds:["FilterUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';
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
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.25.4"},"sic-ui":{type:"NPM",value:"0.7.6"}},entry:"index.tsx"},context:{react:d||(d=e.t(p,2)),antd:V,"sic-ui":g},renderOpts:{compile:function(){var v=x()(m()().mark(function i(){var r,c=arguments;return m()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(7335).then(e.bind(e,37335));case 2:return t.abrupt("return",(r=t.sent).default.apply(r,c));case 3:case"end":return t.stop()}},i)}));function u(){return v.apply(this,arguments)}return u}()}}}},30434:function(R,o,e){e.r(o),e.d(o,{texts:function(){return d}});const d=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u52A0\u8F7D\u4E2D\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u5C5E\u6027",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:2,tocIndex:3},{value:"form",paraId:2,tocIndex:3},{value:"\u8868\u5355\u5B9E\u4F8B",paraId:2,tocIndex:3},{value:"ReactNode",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"filterOptions",paraId:2,tocIndex:3},{value:"\u641C\u7D22\u7EC4\u4EF6\u914D\u7F6E",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"filterParams",paraId:2,tocIndex:3},{value:"\u7B5B\u9009\u6846\u7684\u5B57\u6BB5\u548C\u503C",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"setMoreFilters",paraId:2,tocIndex:3},{value:"\u63A7\u5236\u66F4\u591A\u7B5B\u9009\u6846\u7684\u72B6\u6001",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"onValuesChange",paraId:2,tocIndex:3},{value:"\u8868\u5355\u503C\u53D8\u5316",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"clickReset",paraId:2,tocIndex:3},{value:"\u8868\u5355\u91CD\u7F6E\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3},{value:"container",paraId:2,tocIndex:3},{value:"\u6EDA\u52A8\u56FA\u5B9A\u6307\u5B9A\u7684\u7236\u7EA7\u5143\u7D20",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"\u662F",paraId:2,tocIndex:3}]}}]);
