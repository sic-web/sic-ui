"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[9963],{89710:function(E,c,e){e.r(c),e.d(c,{demos:function(){return T}});var y=e(15009),o=e.n(y),b=e(97857),i=e.n(b),D=e(5574),P=e.n(D),S=e(99289),p=e.n(S),r=e(67294),B=e(48547),T={"tiga-demo-0":{component:r.memo(r.lazy(p()(o()().mark(function m(){var d,l,t,s,n,a,I;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=u.sent,l=d.useState,t=d.useEffect,u.next=7,Promise.resolve().then(e.bind(e,25e3));case 7:return s=u.sent,n=s.Tiga,a=s.LoadingUI,I=function(){var g=l(),v=P()(g,2),f=v[0],C=v[1],O=[{key:"name",name:"\u59D3\u540D"},{key:"age",name:"\u5E74\u9F84"},{key:"phone",name:"\u7535\u8BDD"}],A=[{key:"name",name:"\u59D3\u540D",sort:1},{key:"age",name:"\u5E74\u9F84",sort:4},{key:"phone",name:"\u7535\u8BDD",sort:3}],M=[{key:"name",name:"\u59D3\u540D",sort:1},{key:"age",name:"\u5E74\u9F84",sort:4},{key:"phone",name:"\u7535\u8BDD",sort:3,selected:!1},{key:"fighting",name:"\u6218\u529B",sort:2}],L=[{name:"\u5218\u5907",age:22,phone:15692837652,fighting:6},{name:"\u5173\u7FBD",age:21,phone:17697787678,fighting:9},{name:"\u5F20\u98DE",age:18,phone:12392880611,fighting:7},{name:"\u8D75\u4E91",age:19,phone:12392880611,fighting:8}],K=1,j=10,U=4,_={dataSource:f,pageSize:j,current:K,total:U};return t(function(){setTimeout(function(){C(L)},2e3)},[]),r.createElement("div",null,"\u57FA\u7840\u6A21\u5F0F",r.createElement(a,{isShowLoading:!f},r.createElement(n,i()({rowKey:"name",tableHeader:O},_))),"\u5E26\u6709\u6392\u5E8F",r.createElement(n,i()({rowKey:"name",tableHeader:A},_)),"\u5E26\u6709\u7981\u7528",r.createElement(n,i()({rowKey:"name",tableHeader:M},_)))},u.abrupt("return",{default:I});case 12:case"end":return u.stop()}},m)})))),asset:{type:"BLOCK",id:"tiga-demo-0",refAtomIds:["Tiga"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useEffect } from 'react';\r
import { Tiga, LoadingUI } from 'sic-ui';\r
\r
const App: React.FC = () => {\r
  const [data, setData] = useState();\r
  const columns1 = [\r
    { key: 'name', name: '\u59D3\u540D' },\r
    { key: 'age', name: '\u5E74\u9F84' },\r
    { key: 'phone', name: '\u7535\u8BDD' },\r
  ];\r
  const columns2 = [\r
    { key: 'name', name: '\u59D3\u540D', sort: 1 },\r
    { key: 'age', name: '\u5E74\u9F84', sort: 4 },\r
    { key: 'phone', name: '\u7535\u8BDD', sort: 3 },\r
  ];\r
  const columns3 = [\r
    { key: 'name', name: '\u59D3\u540D', sort: 1 },\r
    { key: 'age', name: '\u5E74\u9F84', sort: 4 },\r
    { key: 'phone', name: '\u7535\u8BDD', sort: 3, selected: false },\r
    { key: 'fighting', name: '\u6218\u529B', sort: 2 },\r
  ];\r
  const dataSource = [\r
    { name: '\u5218\u5907', age: 22, phone: 15692837652, fighting: 6 },\r
    { name: '\u5173\u7FBD', age: 21, phone: 17697787678, fighting: 9 },\r
    { name: '\u5F20\u98DE', age: 18, phone: 12392880611, fighting: 7 },\r
    { name: '\u8D75\u4E91', age: 19, phone: 12392880611, fighting: 8 },\r
  ];\r
  const current = 1;\r
  const pageSize = 10;\r
  const total = 4;\r
  const tableParams = { dataSource: data, pageSize: pageSize, current, total };\r
  useEffect(() => {\r
    setTimeout(() => {\r
      setData(dataSource);\r
    }, 2000);\r
  }, []);\r
  return (\r
    <div>\r
      \u57FA\u7840\u6A21\u5F0F\r
      <LoadingUI isShowLoading={!data}>\r
        <Tiga rowKey="name" tableHeader={columns1} {...tableParams} />\r
      </LoadingUI>\r
      \u5E26\u6709\u6392\u5E8F\r
      <Tiga rowKey="name" tableHeader={columns2} {...tableParams} />\r
      \u5E26\u6709\u7981\u7528\r
      <Tiga rowKey="name" tableHeader={columns3} {...tableParams} />\r
    </div>\r
  );\r
};\r
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.11"}},entry:"index.tsx"},context:{react:e(67294),"sic-ui":e(25e3)},renderOpts:{compile:function(){var m=p()(o()().mark(function l(){var t,s=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},l)}));function d(){return m.apply(this,arguments)}return d}()}},"tiga-demo-1":{component:r.memo(r.lazy(p()(o()().mark(function m(){var d,l,t;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.bind(e,25e3));case 2:return d=n.sent,l=d.Tiga,t=function(){var I=[{key:"name",name:"\u59D3\u540D"},{key:"age",name:"\u5E74\u9F84"},{key:"phone",name:"\u7535\u8BDD"},{key:"money",name:"\u91D1\u989D",type:"amount",transform:{rule:"num_expand_100"}}],x=[{name:"\u5218\u5907",age:22,phone:15692837652,money:200},{name:"\u5173\u7FBD",age:21,phone:17697787678,money:200},{name:"\u5F20\u98DE",age:18,phone:12392880611,money:200},{name:"\u8D75\u4E91",age:19,phone:12392880611,money:200}],u=1,h=10,g=4,v={dataSource:x,pageSize:h,current:u,total:g};return r.createElement("div",null,"\u91D1\u989D\u6A21\u5F0F",r.createElement(l,i()({rowKey:"name",tableHeader:I},v)))},n.abrupt("return",{default:t});case 6:case"end":return n.stop()}},m)})))),asset:{type:"BLOCK",id:"tiga-demo-1",refAtomIds:["Tiga"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useEffect } from 'react';\r
import { Tiga, LoadingUI } from 'sic-ui';\r
\r
const App: React.FC = () => {\r
  const columns1 = [\r
    { key: 'name', name: '\u59D3\u540D' },\r
    { key: 'age', name: '\u5E74\u9F84' },\r
    { key: 'phone', name: '\u7535\u8BDD' },\r
    { key: 'money', name: '\u91D1\u989D', type: 'amount', transform: { rule: 'num_expand_100' } },\r
  ];\r
\r
  const dataSource = [\r
    { name: '\u5218\u5907', age: 22, phone: 15692837652, money: 200 },\r
    { name: '\u5173\u7FBD', age: 21, phone: 17697787678, money: 200 },\r
    { name: '\u5F20\u98DE', age: 18, phone: 12392880611, money: 200 },\r
    { name: '\u8D75\u4E91', age: 19, phone: 12392880611, money: 200 },\r
  ];\r
  const current = 1;\r
  const pageSize = 10;\r
  const total = 4;\r
  const tableParams = { dataSource: dataSource, pageSize: pageSize, current, total };\r
\r
  return (\r
    <div>\r
      \u91D1\u989D\u6A21\u5F0F\r
      <Tiga rowKey="name" tableHeader={columns1} {...tableParams} />\r
    </div>\r
  );\r
};\r
export default App;`},"sic-ui":{type:"NPM",value:"0.4.11"}},entry:"index.tsx"},context:{"sic-ui":e(25e3)},renderOpts:{compile:function(){var m=p()(o()().mark(function l(){var t,s=arguments;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(4019).then(e.bind(e,4019));case 2:return a.abrupt("return",(t=a.sent).default.apply(t,s));case 3:case"end":return a.stop()}},l)}));function d(){return m.apply(this,arguments)}return d}()}}}},31074:function(E,c,e){e.r(c),e.d(c,{texts:function(){return o}});var y=e(48547);const o=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u8868\u683C\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u8868\u683C\u7EC4\u4EF6-\u5FEB\u6377\u7528\u6CD5",paraId:1,tocIndex:3},{value:"\u{1F48E} \u8868\u683C\u7EC4\u4EF6-\u5FEB\u6377\u7C7B\u578B",paraId:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:3,tocIndex:4},{value:"\u5C5E\u6027",paraId:4,tocIndex:5},{value:"\u8BF4\u660E",paraId:4,tocIndex:5},{value:"\u7C7B\u578B",paraId:4,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:5},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:5},{value:"dataSource",paraId:4,tocIndex:5},{value:"\u6570\u636E\u5185\u5BB9",paraId:4,tocIndex:5},{value:"Array",paraId:4,tocIndex:5},{value:"[]",paraId:4,tocIndex:5},{value:"\u662F",paraId:4,tocIndex:5},{value:"morphColumns",paraId:4,tocIndex:5},{value:"\u53EF\u4EE5\u53D8\u5F62\u7684\u8868\u683C\u5217\u6570\u636E(\u63A8\u8350)",paraId:4,tocIndex:5},{value:"Array",paraId:4,tocIndex:5},{value:"[]",paraId:4,tocIndex:5},{value:"\u662F",paraId:4,tocIndex:5},{value:"initialColumns",paraId:4,tocIndex:5},{value:"\u53EF\u4EE5\u53D8\u5F62\u7684\u8868\u683C\u5217\u6570\u636E(\u5F03\u7528)\uFF1A\u4E0D\u591F\u8BED\u4E49\u5316",paraId:4,tocIndex:5},{value:"Array",paraId:4,tocIndex:5},{value:"[]",paraId:4,tocIndex:5},{value:"\u662F",paraId:4,tocIndex:5},{value:"rowKey",paraId:4,tocIndex:5},{value:"\u6BCF\u4E00\u884C\u7684\u6807\u8BC6",paraId:4,tocIndex:5},{value:"String",paraId:4,tocIndex:5},{value:"-",paraId:4,tocIndex:5},{value:"\u662F",paraId:4,tocIndex:5},{value:"mask",paraId:4,tocIndex:5},{value:"\u8499\u5C42",paraId:4,tocIndex:5},{value:"Boolean",paraId:4,tocIndex:5},{value:"false",paraId:4,tocIndex:5},{value:"\u5426",paraId:4,tocIndex:5},{value:"tableData",paraId:4,tocIndex:5},{value:"\u8868\u683C\u6570\u636E\uFF0C\u9AD8\u5EA6\u96C6\u6210\u5F53\u524D\u9879\u76EE\uFF08\u63A8\u8350\uFF09",paraId:4,tocIndex:5},{value:"Object",paraId:4,tocIndex:5},{value:"{}",paraId:4,tocIndex:5},{value:"\u5426",paraId:4,tocIndex:5},{value:"oem",paraId:4,tocIndex:5},{value:"oem \u76F8\u5173\u7684\u914D\u7F6E\u9879",paraId:4,tocIndex:5},{value:"Object",paraId:4,tocIndex:5},{value:"{}",paraId:4,tocIndex:5},{value:"\u5426",paraId:4,tocIndex:5},{value:"\u6CE8\uFF1A\u4F20\u5165\u8868\u5934\u7684\u5C5E\u6027\uFF0C\u4EA4\u7ED9 Tiga \u505A\u5904\u7406",paraId:5,tocIndex:6},{value:"\u5C5E\u6027",paraId:6,tocIndex:6},{value:"\u8BF4\u660E",paraId:6,tocIndex:6},{value:"\u7C7B\u578B",paraId:6,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:6},{value:"\u662F\u5426\u5FC5\u4F20",paraId:6,tocIndex:6},{value:"key",paraId:6,tocIndex:6},{value:"\u6BCF\u4E00\u5217\u7684\u6807\u8BC6",paraId:6,tocIndex:6},{value:"String",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"\u662F",paraId:6,tocIndex:6},{value:"name",paraId:6,tocIndex:6},{value:"\u8868\u5934\uFF0C\u4E0D\u4F20\u5219\u4E0D\u5C55\u793A",paraId:6,tocIndex:6},{value:"String",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"\u662F",paraId:6,tocIndex:6},{value:"selected",paraId:6,tocIndex:6},{value:"\u914D\u5408\u5F53\u524D\u7684\u9875\u9762\u662F\u5426\u5C55\u793A",paraId:6,tocIndex:6},{value:"Boolean",paraId:6,tocIndex:6},{value:"true",paraId:6,tocIndex:6},{value:"\u5426",paraId:6,tocIndex:6},{value:"sort",paraId:6,tocIndex:6},{value:"\u6392\u5E8F\u5B57\u6BB5",paraId:6,tocIndex:6},{value:"Number",paraId:6,tocIndex:6},{value:"-",paraId:6,tocIndex:6},{value:"\u5426",paraId:6,tocIndex:6},{value:"render",paraId:6,tocIndex:6},{value:"\u6E32\u67D3\u7279\u6B8A\u7684\u5217",paraId:6,tocIndex:6},{value:"Fun",paraId:6,tocIndex:6},{value:"CellUI",paraId:6,tocIndex:6},{value:"\u5426",paraId:6,tocIndex:6}]}}]);
