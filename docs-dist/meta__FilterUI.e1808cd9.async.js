"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[614],{66014:function(W,o,e){var c;e.r(o),e.d(o,{demos:function(){return V}});var m=e(43953),d=e.n(m),k=e(39346),n=e.n(k),A=e(9083),p=e.n(A),U=e(91184),x=e.n(U),v=e(38497),X=e(68332),g=e(29966),L=e(14735),V={"filterui-demo-0":{component:v.memo(v.lazy(x()(d()().mark(function I(){var i,u,s,_,f,t,M,T;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return i=a.sent,u=i.default,s=i.useState,a.next=7,Promise.resolve().then(e.bind(e,29966));case 7:return _=a.sent,f=_.Form,a.next=11,Promise.resolve().then(e.bind(e,14735));case 11:return t=a.sent,M=t.FilterUI,T=function(){var y,j=f.useForm(),B=p()(j,1),K=B[0],$=s(null),D=p()($,2),N=D[0],G=D[1],z=s({choice:!1,multipleChoice:[],filterParams:{Status:1},tableSetStatus:!1,moreFilters:!1}),F=p()(z,2),r=F[0],b=F[1],P=[{value:1,label:"\u5F85\u652F\u4ED8"},{value:2,label:"\u5BA1\u6838\u4E2D"},{value:3,label:"\u53D1\u653E\u4E2D"},{value:4,label:"\u5DF2\u53D1\u653E"},{value:5,label:"\u5DF2\u53D6\u6D88"},{value:6,label:"\u9A73\u56DE"}],H=function(R,l){var E,h,O,C;b(n()(n()({},r),{},{filterParams:n()(n()({},l),{},{dateStart:(E=l==null||(h=l.submitTime)===null||h===void 0?void 0:h[0])!==null&&E!==void 0?E:void 0,dateEnd:(O=l==null||(C=l.submitTime)===null||C===void 0?void 0:C[1])!==null&&O!==void 0?O:void 0})}))},J=[{type:"search",label:"\u4F01\u4E1A\u540D\u79F0",key:"companyName1"},{type:"datePicker",label:"\u53D1\u653E\u65E5\u671F",key:"transTime1"},{type:"select",label:"\u72B6\u6001",key:"Status1",options:P},{type:"search",label:"\u4F01\u4E1A\u540D\u79F0",key:"companyName2"},{type:"datePicker",label:"\u53D1\u653E\u65E5\u671F",key:"transTime2"},{type:"select",label:"\u72B6\u6001",key:"Status2",options:P,isNotDelete:!0,renderProps:{}},{type:"search",label:"\u4F01\u4E1A\u540D\u79F0",key:"companyName"},{type:"datePicker",label:"\u53D1\u653E\u65E5\u671F",key:"transTime"},{type:"select",label:"\u72B6\u6001",key:"Status",options:P}],Q=function(){b(n()(n()({},r),{},{filterParams:{}}))};return u.createElement("div",{ref:G},u.createElement(M,{form:K,filterOptions:J,filterParams:(y=r==null?void 0:r.filterParams)!==null&&y!==void 0?y:{},moreFilters:r==null?void 0:r.moreFilters,setMoreFilters:function(R){return b(n()(n()({},r),{},{moreFilters:R}))},onValuesChange:H,clickReset:Q,container:N}))},a.abrupt("return",{default:T});case 15:case"end":return a.stop()}},I)})))),asset:{type:"BLOCK",id:"filterui-demo-0",refAtomIds:["FilterUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState, useEffect } from 'react';\r
import { Form, message } from 'antd';\r
import { FilterUI } from 'sic-ui';\r
\r
const App: React.FC = () => {\r
  const [form] = Form.useForm();\r
\r
  const [container, setContainer] = useState(null);\r
  // \u72B6\u6001\u5BB9\u5668\r
  const [vessel, setVessel] = useState({\r
    // \u662F\u5426\u6279\u91CF\r
    choice: false,\r
    // \u6279\u91CF\u7684\u503C\r
    multipleChoice: [],\r
    // \u641C\u7D22\u6761\u4EF6\r
    filterParams: {\r
      Status: 1,\r
    },\r
    // \u8868\u683C\u8BBE\u7F6E\u72B6\u6001\r
    tableSetStatus: false,\r
    // \u66F4\u591A\u7B5B\u9009\u7684\u72B6\u6001\r
    moreFilters: false,\r
  });\r
  const projectStatusOptions = [\r
    { value: 1, label: '\u5F85\u652F\u4ED8' },\r
    { value: 2, label: '\u5BA1\u6838\u4E2D' },\r
    { value: 3, label: '\u53D1\u653E\u4E2D' },\r
    { value: 4, label: '\u5DF2\u53D1\u653E' },\r
    { value: 5, label: '\u5DF2\u53D6\u6D88' },\r
    { value: 6, label: '\u9A73\u56DE' },\r
  ];\r
  const onValuesChange = (changedValues: any, allValues: any) => {\r
    setVessel({\r
      ...vessel,\r
      filterParams: {\r
        ...allValues,\r
        dateStart: allValues?.submitTime?.[0] ?? undefined,\r
        dateEnd: allValues?.submitTime?.[1] ?? undefined,\r
      },\r
    });\r
  };\r
  const filterOptions = [\r
    { type: 'search', label: '\u4F01\u4E1A\u540D\u79F0', key: 'companyName1' },\r
    { type: 'datePicker', label: '\u53D1\u653E\u65E5\u671F', key: 'transTime1' },\r
    { type: 'select', label: '\u72B6\u6001', key: 'Status1', options: projectStatusOptions },\r
    { type: 'search', label: '\u4F01\u4E1A\u540D\u79F0', key: 'companyName2' },\r
    { type: 'datePicker', label: '\u53D1\u653E\u65E5\u671F', key: 'transTime2' },\r
    { type: 'select', label: '\u72B6\u6001', key: 'Status2', options: projectStatusOptions, isNotDelete: true, renderProps: {} },\r
    { type: 'search', label: '\u4F01\u4E1A\u540D\u79F0', key: 'companyName' },\r
    { type: 'datePicker', label: '\u53D1\u653E\u65E5\u671F', key: 'transTime' },\r
    { type: 'select', label: '\u72B6\u6001', key: 'Status', options: projectStatusOptions },\r
  ];\r
  const clickReset = () => {\r
    setVessel({ ...vessel, filterParams: {} });\r
  };\r
  return (\r
    <div ref={setContainer}>\r
      <FilterUI\r
        form={form}\r
        filterOptions={filterOptions}\r
        filterParams={vessel?.filterParams ?? {}}\r
        moreFilters={vessel?.moreFilters}\r
        setMoreFilters={(value) => setVessel({ ...vessel, moreFilters: value })}\r
        onValuesChange={onValuesChange}\r
        clickReset={clickReset}\r
        container={container}\r
      />\r
    </div>\r
  );\r
};\r
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.5"},"sic-ui":{type:"NPM",value:"0.4.26"}},entry:"index.tsx"},context:{react:c||(c=e.t(v,2)),antd:g,"sic-ui":L},renderOpts:{compile:function(){var I=x()(d()().mark(function u(){var s,_=arguments;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.e(8350).then(e.bind(e,48350));case 2:return t.abrupt("return",(s=t.sent).default.apply(s,_));case 3:case"end":return t.stop()}},u)}));function i(){return I.apply(this,arguments)}return i}()}}}},14939:function(W,o,e){e.r(o),e.d(o,{texts:function(){return m}});var c=e(68332);const m=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u52A0\u8F7D\u4E2D\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:3},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:3},{value:"form",paraId:3,tocIndex:3},{value:"\u8868\u5355\u5B9E\u4F8B",paraId:3,tocIndex:3},{value:"ReactNode",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"filterOptions",paraId:3,tocIndex:3},{value:"\u641C\u7D22\u7EC4\u4EF6\u914D\u7F6E",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"filterParams",paraId:3,tocIndex:3},{value:"\u7B5B\u9009\u6846\u7684\u5B57\u6BB5\u548C\u503C",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"setMoreFilters",paraId:3,tocIndex:3},{value:"\u63A7\u5236\u66F4\u591A\u7B5B\u9009\u6846\u7684\u72B6\u6001",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"onValuesChange",paraId:3,tocIndex:3},{value:"\u8868\u5355\u503C\u53D8\u5316",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"clickReset",paraId:3,tocIndex:3},{value:"\u8868\u5355\u91CD\u7F6E\u4E8B\u4EF6",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3},{value:"container",paraId:3,tocIndex:3},{value:"\u6EDA\u52A8\u56FA\u5B9A\u6307\u5B9A\u7684\u7236\u7EA7\u5143\u7D20",paraId:3,tocIndex:3},{value:"-",paraId:3,tocIndex:3},{value:"\u662F",paraId:3,tocIndex:3}]}}]);
