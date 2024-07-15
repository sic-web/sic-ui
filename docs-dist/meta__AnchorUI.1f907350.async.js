"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[4611],{83152:function(u,e,n){n.r(e),n.d(e,{demos:function(){return p}});var c=n(43953),r=n.n(c),m=n(91184),I=n.n(m),s=n(38497),f=n(92214),p={"anchorui-demo-use-anchor":{component:s.memo(s.lazy(function(){return n.e(4577).then(n.bind(n,72271))})),asset:{type:"BLOCK",id:"anchorui-demo-use-anchor",refAtomIds:["AnchorUI"],dependencies:{"index.tsx":{type:"FILE",value:n(71641).Z},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.3.47"}},entry:"index.tsx"},context:{react:n(38497),"sic-ui":n(21137)},renderOpts:{compile:function(){var l=I()(r()().mark(function d(){var o,i=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(3959).then(n.bind(n,73959));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,i));case 3:case"end":return t.stop()}},d)}));function a(){return l.apply(this,arguments)}return a}()}},"anchorui-demo-anchor-button":{component:s.memo(s.lazy(function(){return n.e(4577).then(n.bind(n,79600))})),asset:{type:"BLOCK",id:"anchorui-demo-anchor-button",refAtomIds:["AnchorUI"],dependencies:{"index.tsx":{type:"FILE",value:n(62284).Z},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.3.47"}},entry:"index.tsx"},context:{react:n(38497),"sic-ui":n(21137)},renderOpts:{compile:function(){var l=I()(r()().mark(function d(){var o,i=arguments;return r()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(3959).then(n.bind(n,73959));case 2:return t.abrupt("return",(o=t.sent).default.apply(o,i));case 3:case"end":return t.stop()}},d)}));function a(){return l.apply(this,arguments)}return a}()}}}},13710:function(u,e,n){n.r(e),n.d(e,{texts:function(){return r}});var c=n(92214);const r=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u951A\u70B9\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F48E} \u70B9\u51FB\u8DF3\u8F6C",paraId:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:3,tocIndex:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:3}]},62284:function(u,e){e.Z=`import React, { useRef, useState } from 'react';
import { AnchorUI, ButtonUI } from 'sic-ui';
export default () => {
  const ref: any = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false);
  return (
    <div>
      <ButtonUI
        onClick={() => {
          setIsAutoScroll(true);
          setCurrentIndex(0);
        }}
      >
        \u70B9\u51FB\u5230\u4E3B\u4F53\u8D44\u8D28
      </ButtonUI>
      <ButtonUI
        onClick={() => {
          setIsAutoScroll(true);
          setCurrentIndex(1);
        }}
      >
        \u70B9\u51FB\u5230\u5BA2\u6237\u6765\u6E90
      </ButtonUI>
      <ButtonUI
        onClick={() => {
          setIsAutoScroll(true);
          setCurrentIndex(2);
        }}
      >
        \u70B9\u51FB\u5230\u9879\u76EE\u4FE1\u606F
      </ButtonUI>
      <ButtonUI
        onClick={() => {
          setIsAutoScroll(true);
          setCurrentIndex(3);
        }}
      >
        \u70B9\u51FB\u5230\u98CE\u63A7\u4FE1\u606F
      </ButtonUI>
      <br />
      <br />
      <div style={{ display: 'flex' }}>
        <AnchorUI
          anchoruiRef={ref}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          isAutoScroll={isAutoScroll}
          setIsAutoScroll={setIsAutoScroll}
          items={[
            {
              key: 'part-1',
              title: '\u4E3B\u4F53\u8D44\u8D28',
            },
            {
              key: 'part-2',
              title: '\u5BA2\u6237\u6765\u6E90',
            },
            {
              key: 'part-3',
              title: '\u9879\u76EE\u4FE1\u606F',
            },
            {
              key: 'part-4',
              title: '\u98CE\u63A7\u4FE1\u606F',
            },
          ]}
        ></AnchorUI>
        <div style={{ flex: 1, overflow: 'scroll', height: 400 }} ref={ref}>
          <div id="part-1" style={{ height: '200px', backgroundColor: 'rgba(255,0,0,0.2)' }} />
          <div id="part-2" style={{ height: '200px', backgroundColor: 'rgba(0,255,0,0.2)' }} />
          <div id="part-3" style={{ height: '200px', backgroundColor: 'rgba(0,0,255,0.2)' }} />
          <div id="part-4" style={{ height: '200px', backgroundColor: 'rgba(0,0,125,0.2)' }} />
        </div>
      </div>
    </div>
  );
};
`},71641:function(u,e){e.Z=`import React, { useRef, useState } from 'react';
import { AnchorUI } from 'sic-ui';
export default () => {
  const ref: any = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false);
  return (
    <div style={{ display: 'flex' }}>
      <AnchorUI
        anchoruiRef={ref}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        isAutoScroll={isAutoScroll}
        setIsAutoScroll={setIsAutoScroll}
        items={[
          {
            key: 'part-1',
            title: '\u4E3B\u4F53\u8D44\u8D28',
          },
          {
            key: 'part-2',
            title: '\u5BA2\u6237\u6765\u6E90',
          },
          {
            key: 'part-3',
            title: '\u9879\u76EE\u4FE1\u606F',
          },
          {
            key: 'part-4',
            title: '\u98CE\u63A7\u4FE1\u606F',
          },
        ]}
      ></AnchorUI>
      <div style={{ flex: 1, overflow: 'scroll', height: 400 }} ref={ref}>
        <div id="part-1" style={{ height: '200px', backgroundColor: 'rgba(255,0,0,0.2)' }} />
        <div id="part-2" style={{ height: '200px', backgroundColor: 'rgba(0,255,0,0.2)' }} />
        <div id="part-3" style={{ height: '200px', backgroundColor: 'rgba(0,0,255,0.2)' }} />
        <div id="part-4" style={{ height: '200px', backgroundColor: 'rgba(0,0,125,0.2)' }} />
      </div>
    </div>
  );
};
`}}]);
