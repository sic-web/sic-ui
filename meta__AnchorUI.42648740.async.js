"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[4611],{39840:function(s,t,n){var o;n.r(t),n.d(t,{demos:function(){return _}});var u=n(15009),i=n.n(u),v=n(99289),m=n.n(v),r=n(67294),I=n(47594),p=n(48466),_={"anchorui-demo-use-anchor":{component:r.memo(r.lazy(function(){return n.e(4577).then(n.bind(n,81753))})),asset:{type:"BLOCK",id:"anchorui-demo-use-anchor",refAtomIds:["AnchorUI"],dependencies:{"index.tsx":{type:"FILE",value:n(14487).Z},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.6.4"}},entry:"index.tsx"},context:{react:o||(o=n.t(r,2)),"sic-ui":p},renderOpts:{compile:function(){var c=m()(i()().mark(function d(){var a,h=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,h));case 3:case"end":return e.stop()}},d)}));function l(){return c.apply(this,arguments)}return l}()}},"anchorui-demo-anchor-button":{component:r.memo(r.lazy(function(){return n.e(4577).then(n.bind(n,18389))})),asset:{type:"BLOCK",id:"anchorui-demo-anchor-button",refAtomIds:["AnchorUI"],dependencies:{"index.tsx":{type:"FILE",value:n(30020).Z},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.6.4"}},entry:"index.tsx"},context:{react:o||(o=n.t(r,2)),"sic-ui":p},renderOpts:{compile:function(){var c=m()(i()().mark(function d(){var a,h=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,h));case 3:case"end":return e.stop()}},d)}));function l(){return c.apply(this,arguments)}return l}()}}}},67084:function(s,t,n){n.r(t),n.d(t,{texts:function(){return u}});var o=n(47594);const u=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u951A\u70B9\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F48E} \u70B9\u51FB\u8DF3\u8F6C",paraId:2},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:3,tocIndex:3},{value:"\u5C5E\u6027",paraId:4,tocIndex:3},{value:"\u8BF4\u660E",paraId:4,tocIndex:3},{value:"\u7C7B\u578B",paraId:4,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:3}]},30020:function(s,t){t.Z=`import React, { useRef, useState } from 'react';
import { AnchorUI, ButtonUI } from 'sic-ui';
export default () => {
  const ref: any = useRef(null);
  //\u5F53\u524D\u5BFC\u822A\u9879
  const [anchorActive, setAnchorActive] = useState('');
  return (
    <div>
      <ButtonUI onClick={() => setAnchorActive('part-1')}>\u70B9\u51FB\u5230\u4E3B\u4F53\u8D44\u8D28</ButtonUI>
      <ButtonUI onClick={() => setAnchorActive('part-2')}>\u70B9\u51FB\u5230\u5BA2\u6237\u6765\u6E90</ButtonUI>
      <ButtonUI onClick={() => setAnchorActive('part-3')}>\u70B9\u51FB\u5230\u9879\u76EE\u4FE1\u606F</ButtonUI>
      <ButtonUI onClick={() => setAnchorActive('part-4')}>\u70B9\u51FB\u5230\u98CE\u63A7\u4FE1\u606F</ButtonUI>
      <br />
      <br />
      <div style={{ display: 'flex' }}>
        <AnchorUI
          anchoruiRef={ref}
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
          anchorActive={anchorActive}
          setAnchorActive={setAnchorActive}
        />
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
`},14487:function(s,t){t.Z=`import React, { useRef, useState } from 'react';
import { AnchorUI } from 'sic-ui';
export default () => {
  const ref: any = useRef(null);
  //\u5F53\u524D\u5BFC\u822A\u9879
  const [anchorActive, setAnchorActive] = useState('');
  return (
    <div style={{ display: 'flex' }}>
      <AnchorUI
        anchoruiRef={ref}
        items={[
          {
            key: 'part-a',
            title: '\u4E3B\u4F53\u8D44\u8D28',
          },
          {
            key: 'part-b',
            title: '\u5BA2\u6237\u6765\u6E90',
          },
          {
            key: 'part-c',
            title: '\u9879\u76EE\u4FE1\u606F',
          },
          {
            key: 'part-d',
            title: '\u98CE\u63A7\u4FE1\u606F',
          },
        ]}
        anchorActive={anchorActive}
        setAnchorActive={setAnchorActive}
      ></AnchorUI>
      <div style={{ flex: 1, overflow: 'scroll', height: 400 }} ref={ref}>
        <div id="part-a" style={{ height: '200px', backgroundColor: 'rgba(255,0,0,0.2)' }} />
        <div id="part-b" style={{ height: '200px', backgroundColor: 'rgba(0,255,0,0.2)' }} />
        <div id="part-c" style={{ height: '200px', backgroundColor: 'rgba(0,0,255,0.2)' }} />
        <div id="part-d" style={{ height: '200px', backgroundColor: 'rgba(0,0,125,0.2)' }} />
      </div>
    </div>
  );
};
`}}]);
