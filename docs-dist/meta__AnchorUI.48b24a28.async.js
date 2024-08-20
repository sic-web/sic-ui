"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[4611],{38425:function(u,t,n){n.r(t),n.d(t,{demos:function(){return p}});var c=n(43953),e=n.n(c),m=n(91184),I=n.n(m),s=n(38497),f=n(43406),p={"anchorui-demo-use-anchor":{component:s.memo(s.lazy(function(){return n.e(4577).then(n.bind(n,71945))})),asset:{type:"BLOCK",id:"anchorui-demo-use-anchor",refAtomIds:["AnchorUI"],dependencies:{"index.tsx":{type:"FILE",value:n(9283).Z},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.9"}},entry:"index.tsx"},context:{react:n(38497),"sic-ui":n(96236)},renderOpts:{compile:function(){var l=I()(e()().mark(function d(){var o,i=arguments;return e()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(3482).then(n.bind(n,73482));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,i));case 3:case"end":return r.stop()}},d)}));function a(){return l.apply(this,arguments)}return a}()}},"anchorui-demo-anchor-button":{component:s.memo(s.lazy(function(){return n.e(4577).then(n.bind(n,78234))})),asset:{type:"BLOCK",id:"anchorui-demo-anchor-button",refAtomIds:["AnchorUI"],dependencies:{"index.tsx":{type:"FILE",value:n(19887).Z},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.9"}},entry:"index.tsx"},context:{react:n(38497),"sic-ui":n(96236)},renderOpts:{compile:function(){var l=I()(e()().mark(function d(){var o,i=arguments;return e()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.e(3482).then(n.bind(n,73482));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,i));case 3:case"end":return r.stop()}},d)}));function a(){return l.apply(this,arguments)}return a}()}}}},99871:function(u,t,n){n.r(t),n.d(t,{texts:function(){return e}});var c=n(43406);const e=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u951A\u70B9\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F48E} \u70B9\u51FB\u8DF3\u8F6C",paraId:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:3,tocIndex:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:3}]},19887:function(u,t){t.Z=`import React, { useRef, useState } from 'react';\r
import { AnchorUI, ButtonUI } from 'sic-ui';\r
export default () => {\r
  const ref: any = useRef(null);\r
  const [currentIndex, setCurrentIndex] = useState(0);\r
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false);\r
  return (\r
    <div>\r
      <ButtonUI\r
        onClick={() => {\r
          setIsAutoScroll(true);\r
          setCurrentIndex(0);\r
        }}\r
      >\r
        \u70B9\u51FB\u5230\u4E3B\u4F53\u8D44\u8D28\r
      </ButtonUI>\r
      <ButtonUI\r
        onClick={() => {\r
          setIsAutoScroll(true);\r
          setCurrentIndex(1);\r
        }}\r
      >\r
        \u70B9\u51FB\u5230\u5BA2\u6237\u6765\u6E90\r
      </ButtonUI>\r
      <ButtonUI\r
        onClick={() => {\r
          setIsAutoScroll(true);\r
          setCurrentIndex(2);\r
        }}\r
      >\r
        \u70B9\u51FB\u5230\u9879\u76EE\u4FE1\u606F\r
      </ButtonUI>\r
      <ButtonUI\r
        onClick={() => {\r
          setIsAutoScroll(true);\r
          setCurrentIndex(3);\r
        }}\r
      >\r
        \u70B9\u51FB\u5230\u98CE\u63A7\u4FE1\u606F\r
      </ButtonUI>\r
      <br />\r
      <br />\r
      <div style={{ display: 'flex' }}>\r
        <AnchorUI\r
          anchoruiRef={ref}\r
          currentIndex={currentIndex}\r
          setCurrentIndex={setCurrentIndex}\r
          isAutoScroll={isAutoScroll}\r
          setIsAutoScroll={setIsAutoScroll}\r
          items={[\r
            {\r
              key: 'part-1',\r
              title: '\u4E3B\u4F53\u8D44\u8D28',\r
            },\r
            {\r
              key: 'part-2',\r
              title: '\u5BA2\u6237\u6765\u6E90',\r
            },\r
            {\r
              key: 'part-3',\r
              title: '\u9879\u76EE\u4FE1\u606F',\r
            },\r
            {\r
              key: 'part-4',\r
              title: '\u98CE\u63A7\u4FE1\u606F',\r
            },\r
          ]}\r
        ></AnchorUI>\r
        <div style={{ flex: 1, overflow: 'scroll', height: 400 }} ref={ref}>\r
          <div id="part-1" style={{ height: '200px', backgroundColor: 'rgba(255,0,0,0.2)' }} />\r
          <div id="part-2" style={{ height: '200px', backgroundColor: 'rgba(0,255,0,0.2)' }} />\r
          <div id="part-3" style={{ height: '200px', backgroundColor: 'rgba(0,0,255,0.2)' }} />\r
          <div id="part-4" style={{ height: '200px', backgroundColor: 'rgba(0,0,125,0.2)' }} />\r
        </div>\r
      </div>\r
    </div>\r
  );\r
};\r
`},9283:function(u,t){t.Z=`import React, { useRef, useState } from 'react';\r
import { AnchorUI } from 'sic-ui';\r
export default () => {\r
  const ref: any = useRef(null);\r
  const [currentIndex, setCurrentIndex] = useState(0);\r
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false);\r
  return (\r
    <div style={{ display: 'flex' }}>\r
      <AnchorUI\r
        anchoruiRef={ref}\r
        currentIndex={currentIndex}\r
        setCurrentIndex={setCurrentIndex}\r
        isAutoScroll={isAutoScroll}\r
        setIsAutoScroll={setIsAutoScroll}\r
        items={[\r
          {\r
            key: 'part-1',\r
            title: '\u4E3B\u4F53\u8D44\u8D28',\r
          },\r
          {\r
            key: 'part-2',\r
            title: '\u5BA2\u6237\u6765\u6E90',\r
          },\r
          {\r
            key: 'part-3',\r
            title: '\u9879\u76EE\u4FE1\u606F',\r
          },\r
          {\r
            key: 'part-4',\r
            title: '\u98CE\u63A7\u4FE1\u606F',\r
          },\r
        ]}\r
      ></AnchorUI>\r
      <div style={{ flex: 1, overflow: 'scroll', height: 400 }} ref={ref}>\r
        <div id="part-1" style={{ height: '200px', backgroundColor: 'rgba(255,0,0,0.2)' }} />\r
        <div id="part-2" style={{ height: '200px', backgroundColor: 'rgba(0,255,0,0.2)' }} />\r
        <div id="part-3" style={{ height: '200px', backgroundColor: 'rgba(0,0,255,0.2)' }} />\r
        <div id="part-4" style={{ height: '200px', backgroundColor: 'rgba(0,0,125,0.2)' }} />\r
      </div>\r
    </div>\r
  );\r
};\r
`}}]);
