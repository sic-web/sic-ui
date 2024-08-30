"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[4611],{89626:function(l,e,r){var o;r.r(e),r.d(e,{demos:function(){return v}});var a=r(43953),u=r.n(a),h=r(91184),m=r.n(h),t=r(38497),y=r(14261),p=r(84351),v={"anchorui-demo-use-anchor":{component:t.memo(t.lazy(function(){return r.e(4577).then(r.bind(r,11444))})),asset:{type:"BLOCK",id:"anchorui-demo-use-anchor",refAtomIds:["AnchorUI"],dependencies:{"index.tsx":{type:"FILE",value:r(68600).Z},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.10"}},entry:"index.tsx"},context:{react:o||(o=r.t(t,2)),"sic-ui":p},renderOpts:{compile:function(){var d=m()(u()().mark(function c(){var s,I=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.e(1829).then(r.bind(r,71829));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,I));case 3:case"end":return n.stop()}},c)}));function i(){return d.apply(this,arguments)}return i}()}},"anchorui-demo-anchor-button":{component:t.memo(t.lazy(function(){return r.e(4577).then(r.bind(r,67353))})),asset:{type:"BLOCK",id:"anchorui-demo-anchor-button",refAtomIds:["AnchorUI"],dependencies:{"index.tsx":{type:"FILE",value:r(93250).Z},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.10"}},entry:"index.tsx"},context:{react:o||(o=r.t(t,2)),"sic-ui":p},renderOpts:{compile:function(){var d=m()(u()().mark(function c(){var s,I=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.e(1829).then(r.bind(r,71829));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,I));case 3:case"end":return n.stop()}},c)}));function i(){return d.apply(this,arguments)}return i}()}}}},42142:function(l,e,r){r.r(e),r.d(e,{texts:function(){return a}});var o=r(14261);const a=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u951A\u70B9\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F48E} \u70B9\u51FB\u8DF3\u8F6C",paraId:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:3,tocIndex:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:3}]},93250:function(l,e){e.Z=`import React, { useRef, useState } from 'react';\r
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
`},68600:function(l,e){e.Z=`import React, { useRef, useState } from 'react';\r
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
