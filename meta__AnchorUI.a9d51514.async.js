"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[4611],{39840:function(s,t,n){var r;n.r(t),n.d(t,{demos:function(){return f}});var m=n(15009),i=n.n(m),v=n(99289),h=n.n(v),o=n(67294),p=n(5271),f={"anchorui-demo-use-anchor":{component:o.memo(o.lazy(function(){return n.e(4577).then(n.bind(n,81753))})),asset:{type:"BLOCK",id:"anchorui-demo-use-anchor",refAtomIds:["AnchorUI"],dependencies:{"index.tsx":{type:"FILE",value:n(14487).Z},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.8.0"}},entry:"index.tsx"},context:{react:r||(r=n.t(o,2)),"sic-ui":p},renderOpts:{compile:function(){var u=h()(i()().mark(function l(){var a,d=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,d));case 3:case"end":return e.stop()}},l)}));function c(){return u.apply(this,arguments)}return c}()}},"anchorui-demo-anchor-button":{component:o.memo(o.lazy(function(){return n.e(4577).then(n.bind(n,18389))})),asset:{type:"BLOCK",id:"anchorui-demo-anchor-button",refAtomIds:["AnchorUI"],dependencies:{"index.tsx":{type:"FILE",value:n(30020).Z},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.8.0"}},entry:"index.tsx"},context:{react:r||(r=n.t(o,2)),"sic-ui":p},renderOpts:{compile:function(){var u=h()(i()().mark(function l(){var a,d=arguments;return i()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(7335).then(n.bind(n,37335));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,d));case 3:case"end":return e.stop()}},l)}));function c(){return u.apply(this,arguments)}return c}()}}}},67084:function(s,t,n){n.r(t),n.d(t,{texts:function(){return r}});const r=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u951A\u70B9\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:2},{value:"\u{1F48E} \u70B9\u51FB\u8DF3\u8F6C",paraId:2},{value:"\u5C5E\u6027",paraId:3,tocIndex:3},{value:"\u8BF4\u660E",paraId:3,tocIndex:3},{value:"\u7C7B\u578B",paraId:3,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:3},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:3}]},30020:function(s,t){t.Z=`import React, { useRef, useState } from 'react';
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
