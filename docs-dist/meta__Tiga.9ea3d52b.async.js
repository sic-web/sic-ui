"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[9963],{75474:function(h,d,e){e.r(d),e.d(d,{demos:function(){return P}});var i=e(43953),t=e.n(i),f=e(39346),c=e.n(f),y=e(9083),E=e.n(y),b=e(91184),p=e.n(b),r=e(38497),K=e(61802),P={"tiga-demo-0":{component:r.memo(r.lazy(p()(t()().mark(function _(){var o,I,l,u,s,a,v;return t()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,38497,19));case 2:return o=n.sent,I=o.useState,l=o.useEffect,n.next=7,Promise.resolve().then(e.bind(e,96236));case 7:return u=n.sent,s=u.Tiga,a=u.LoadingUI,v=function(){var C=I(),x=E()(C,2),g=x[0],T=x[1],D=[{key:"name",name:"\u59D3\u540D"},{key:"age",name:"\u5E74\u9F84"},{key:"phone",name:"\u7535\u8BDD"}],O=[{key:"name",name:"\u59D3\u540D",sort:1},{key:"age",name:"\u5E74\u9F84",sort:4},{key:"phone",name:"\u7535\u8BDD",sort:3}],M=[{key:"name",name:"\u59D3\u540D",sort:1},{key:"age",name:"\u5E74\u9F84",sort:4},{key:"phone",name:"\u7535\u8BDD",sort:3,selected:!1},{key:"fighting",name:"\u6218\u529B",sort:2}],S=[{name:"\u5218\u5907",age:22,phone:15692837652,fighting:6},{name:"\u5173\u7FBD",age:21,phone:17697787678,fighting:9},{name:"\u5F20\u98DE",age:18,phone:12392880611,fighting:7},{name:"\u8D75\u4E91",age:19,phone:12392880611,fighting:8}],A=1,W=10,L=4,m={dataSource:g,pageSize:W,current:A,total:L};return l(function(){setTimeout(function(){T(S)},2e3)},[]),r.createElement("div",null,"\u57FA\u7840\u6A21\u5F0F",r.createElement(a,{isShowLoading:!g},r.createElement(s,c()({rowKey:"name",tableHeader:D},m))),"\u5E26\u6709\u6392\u5E8F",r.createElement(s,c()({rowKey:"name",tableHeader:O},m)),"\u5E26\u6709\u7981\u7528",r.createElement(s,c()({rowKey:"name",tableHeader:M},m)))},n.abrupt("return",{default:v});case 12:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"tiga-demo-0",refAtomIds:["Tiga"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState, useEffect } from 'react';\r
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
export default App;`},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.8"}},entry:"index.tsx"},context:{react:e(38497),"sic-ui":e(96236)},renderOpts:{compile:function(){var _=p()(t()().mark(function I(){var l,u=arguments;return t()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(3482).then(e.bind(e,73482));case 2:return a.abrupt("return",(l=a.sent).default.apply(l,u));case 3:case"end":return a.stop()}},I)}));function o(){return _.apply(this,arguments)}return o}()}}}},10792:function(h,d,e){e.r(d),e.d(d,{texts:function(){return t}});var i=e(61802);const t=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u8868\u683C\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u8868\u683C\u7EC4\u4EF6-\u5FEB\u6377\u7528\u6CD5",paraId:1,tocIndex:3},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:2,tocIndex:4},{value:"\u5C5E\u6027",paraId:3,tocIndex:5},{value:"\u8BF4\u660E",paraId:3,tocIndex:5},{value:"\u7C7B\u578B",paraId:3,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:5},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:5},{value:"dataSource",paraId:3,tocIndex:5},{value:"\u6570\u636E\u5185\u5BB9",paraId:3,tocIndex:5},{value:"Array",paraId:3,tocIndex:5},{value:"[]",paraId:3,tocIndex:5},{value:"\u662F",paraId:3,tocIndex:5},{value:"morphColumns",paraId:3,tocIndex:5},{value:"\u53EF\u4EE5\u53D8\u5F62\u7684\u8868\u683C\u5217\u6570\u636E(\u63A8\u8350)",paraId:3,tocIndex:5},{value:"Array",paraId:3,tocIndex:5},{value:"[]",paraId:3,tocIndex:5},{value:"\u662F",paraId:3,tocIndex:5},{value:"initialColumns",paraId:3,tocIndex:5},{value:"\u53EF\u4EE5\u53D8\u5F62\u7684\u8868\u683C\u5217\u6570\u636E(\u5F03\u7528)\uFF1A\u4E0D\u591F\u8BED\u4E49\u5316",paraId:3,tocIndex:5},{value:"Array",paraId:3,tocIndex:5},{value:"[]",paraId:3,tocIndex:5},{value:"\u662F",paraId:3,tocIndex:5},{value:"rowKey",paraId:3,tocIndex:5},{value:"\u6BCF\u4E00\u884C\u7684\u6807\u8BC6",paraId:3,tocIndex:5},{value:"String",paraId:3,tocIndex:5},{value:"-",paraId:3,tocIndex:5},{value:"\u662F",paraId:3,tocIndex:5},{value:"mask",paraId:3,tocIndex:5},{value:"\u8499\u5C42",paraId:3,tocIndex:5},{value:"Boolean",paraId:3,tocIndex:5},{value:"false",paraId:3,tocIndex:5},{value:"\u5426",paraId:3,tocIndex:5},{value:"tableData",paraId:3,tocIndex:5},{value:"\u8868\u683C\u6570\u636E\uFF0C\u9AD8\u5EA6\u96C6\u6210\u5F53\u524D\u9879\u76EE\uFF08\u63A8\u8350\uFF09",paraId:3,tocIndex:5},{value:"Object",paraId:3,tocIndex:5},{value:"{}",paraId:3,tocIndex:5},{value:"\u5426",paraId:3,tocIndex:5},{value:"oem",paraId:3,tocIndex:5},{value:"oem \u76F8\u5173\u7684\u914D\u7F6E\u9879",paraId:3,tocIndex:5},{value:"Object",paraId:3,tocIndex:5},{value:"{}",paraId:3,tocIndex:5},{value:"\u5426",paraId:3,tocIndex:5},{value:"\u6CE8\uFF1A\u4F20\u5165\u8868\u5934\u7684\u5C5E\u6027\uFF0C\u4EA4\u7ED9 Tiga \u505A\u5904\u7406",paraId:4,tocIndex:6},{value:"\u5C5E\u6027",paraId:5,tocIndex:6},{value:"\u8BF4\u660E",paraId:5,tocIndex:6},{value:"\u7C7B\u578B",paraId:5,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:5,tocIndex:6},{value:"\u662F\u5426\u5FC5\u4F20",paraId:5,tocIndex:6},{value:"key",paraId:5,tocIndex:6},{value:"\u6BCF\u4E00\u5217\u7684\u6807\u8BC6",paraId:5,tocIndex:6},{value:"String",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u662F",paraId:5,tocIndex:6},{value:"name",paraId:5,tocIndex:6},{value:"\u8868\u5934\uFF0C\u4E0D\u4F20\u5219\u4E0D\u5C55\u793A",paraId:5,tocIndex:6},{value:"String",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u662F",paraId:5,tocIndex:6},{value:"selected",paraId:5,tocIndex:6},{value:"\u914D\u5408\u5F53\u524D\u7684\u9875\u9762\u662F\u5426\u5C55\u793A",paraId:5,tocIndex:6},{value:"Boolean",paraId:5,tocIndex:6},{value:"true",paraId:5,tocIndex:6},{value:"\u5426",paraId:5,tocIndex:6},{value:"sort",paraId:5,tocIndex:6},{value:"\u6392\u5E8F\u5B57\u6BB5",paraId:5,tocIndex:6},{value:"Number",paraId:5,tocIndex:6},{value:"-",paraId:5,tocIndex:6},{value:"\u5426",paraId:5,tocIndex:6},{value:"render",paraId:5,tocIndex:6},{value:"\u6E32\u67D3\u7279\u6B8A\u7684\u5217",paraId:5,tocIndex:6},{value:"Fun",paraId:5,tocIndex:6},{value:"CellUI",paraId:5,tocIndex:6},{value:"\u5426",paraId:5,tocIndex:6}]}}]);
