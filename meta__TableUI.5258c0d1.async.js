"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[6488],{82399:function(b,c,e){var E;e.r(c),e.d(c,{demos:function(){return A}});var U=e(15009),u=e.n(U),M=e(99289),p=e.n(M),a=e(67294),N=e(12062),x=e(19180),z=e(76558),L=e(51254),A={"tableui-demo-0":{component:a.memo(a.lazy(p()(u()().mark(function o(){var d,r,l;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,19180));case 2:return d=t.sent,r=d.TableUI,l=function(){var m=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u7535\u8BDD",dataIndex:"phone",key:"phone"}],s=[{name:"\u5218\u5907",age:22,phone:15692837652},{name:"\u5173\u7FBD",age:21,phone:17697787678},{name:"\u5F20\u98DE",age:18,phone:12392880611}],h=1,I=2,v=3;return a.createElement("div",null,"\u6B63\u5E38\u5C55\u793A",a.createElement(r,{dataSource:s,columns:m,current:h,pageSize:I,total:v}),a.createElement("br",null),"\u8499\u5C42\u5C55\u793A",a.createElement(r,{dataSource:s,columns:m,current:h,pageSize:I,total:v,mask:!0}),a.createElement("br",null),"\u7A7A\u72B6\u6001\u5C55\u793A",a.createElement(r,{dataSource:[],columns:m,current:0,pageSize:0,total:0}))},t.abrupt("return",{default:l});case 6:case"end":return t.stop()}},o)})))),asset:{type:"BLOCK",id:"tableui-demo-0",refAtomIds:["TableUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { TableUI } from 'sic-ui';

const App: React.FC = () => {
  const columns = [
    { title: '\u59D3\u540D', dataIndex: 'name', key: 'name' },
    { title: '\u5E74\u9F84', dataIndex: 'age', key: 'age' },
    { title: '\u7535\u8BDD', dataIndex: 'phone', key: 'phone' },
  ];
  const dataSource = [
    { name: '\u5218\u5907', age: 22, phone: 15692837652 },
    { name: '\u5173\u7FBD', age: 21, phone: 17697787678 },
    { name: '\u5F20\u98DE', age: 18, phone: 12392880611 },
  ];
  const current = 1;
  const pageSize = 2;
  const total = 3;
  return (
    <div>
      \u6B63\u5E38\u5C55\u793A
      <TableUI dataSource={dataSource} columns={columns} current={current} pageSize={pageSize} total={total} />
      <br />
      \u8499\u5C42\u5C55\u793A
      <TableUI dataSource={dataSource} columns={columns} current={current} pageSize={pageSize} total={total} mask={true} />
      <br />
      \u7A7A\u72B6\u6001\u5C55\u793A
      <TableUI dataSource={[]} columns={columns} current={0} pageSize={0} total={0} />
    </div>
  );
};
export default App;`},"sic-ui":{type:"NPM",value:"0.6.1"}},entry:"index.tsx"},context:{"sic-ui":x},renderOpts:{compile:function(){var o=p()(u()().mark(function r(){var l,i=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,i));case 3:case"end":return n.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}},"tableui-demo-1":{component:a.memo(a.lazy(p()(u()().mark(function o(){var d,r,l;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,19180));case 2:return d=t.sent,r=d.TableUI,l=function(){var m=[{title:"\u59D3\u540D",dataIndex:"name",key:"name",width:200},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u7535\u8BDD",dataIndex:"phone",key:"phone"},{title:"\u64CD\u4F5C",dataIndex:"operate",key:"operate",render:function(){var g=function(){return a.createElement("div",null,a.createElement("div",null,"\u67E5\u770B"),a.createElement("div",null,"\u5BFC\u51FA"),a.createElement("div",null,"\u6253\u5370"),a.createElement("div",null,"\u8F6C\u53D1"))};return a.createElement(r.Operate,{child:g})}}],s=[{name:"\u5218\u5907",age:22,phone:15692837652},{name:"\u5173\u7FBD",age:21,phone:17697787678},{name:"\u5F20\u98DE",age:18,phone:12392880611}],h=1,I=2,v=3;return a.createElement("div",null,a.createElement(r,{rowKey:"age",dataSource:s,columns:m,current:h,pageSize:I,total:v}))},t.abrupt("return",{default:l});case 6:case"end":return t.stop()}},o)})))),asset:{type:"BLOCK",id:"tableui-demo-1",refAtomIds:["TableUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { TableUI } from 'sic-ui';

const App: React.FC = () => {
  const columns = [
    { title: '\u59D3\u540D', dataIndex: 'name', key: 'name', width: 200 },
    { title: '\u5E74\u9F84', dataIndex: 'age', key: 'age' },
    { title: '\u7535\u8BDD', dataIndex: 'phone', key: 'phone' },
    {
      title: '\u64CD\u4F5C',
      dataIndex: 'operate',
      key: 'operate',
      render: () => {
        const child = () => {
          return (
            <div>
              <div>\u67E5\u770B</div>
              <div>\u5BFC\u51FA</div>
              <div>\u6253\u5370</div>
              <div>\u8F6C\u53D1</div>
            </div>
          );
        };

        return <TableUI.Operate child={child} />;
      },
    },
  ];
  const dataSource = [
    { name: '\u5218\u5907', age: 22, phone: 15692837652 },
    { name: '\u5173\u7FBD', age: 21, phone: 17697787678 },
    { name: '\u5F20\u98DE', age: 18, phone: 12392880611 },
  ];
  const current = 1;
  const pageSize = 2;
  const total = 3;
  return (
    <div>
      <TableUI rowKey="age" dataSource={dataSource} columns={columns} current={current} pageSize={pageSize} total={total} />
    </div>
  );
};
export default App;`},"sic-ui":{type:"NPM",value:"0.6.1"}},entry:"index.tsx"},context:{"sic-ui":x},renderOpts:{compile:function(){var o=p()(u()().mark(function r(){var l,i=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,i));case 3:case"end":return n.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}},"tableui-demo-2":{component:a.memo(a.lazy(p()(u()().mark(function o(){var d,r,l;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,19180));case 2:return d=t.sent,r=d.TableUI,l=function(){var m=[{title:"id",width:80,dataIndex:"id",key:"id"},,{title:"\u5185\u5BB9",dataIndex:"value",key:"value",render:function(g){return a.createElement(r.HideMultipleLines,null,g)}}],s=[{id:1,value:["\u98CE\u6025\u5929\u9AD8\u733F\u5578\u54C0","\u9A7B\u9752\u6C99\u767D\u9E1F\u98DE\u56DE","\u65E0\u8FB9\u843D\u6728\u8427\u8427\u4E0B","\u4E0D\u5C3D\u957F\u6C5F\u6EDA\u6EDA\u6765","\u4E07\u91CC\u60B2\u79CB\u5E38\u4F5C\u5BA2","\u767E\u5E74\u591A\u75C5\u72EC\u767B\u53F0","\u8270\u96BE\u82E6\u6068\u7E41\u971C\u9B13","\u6F66\u5012\u65B0\u505C\u6D4A\u9152\u676F"]},{id:2,value:["\u98CE\u6025\u5929\u9AD8\u733F\u5578\u54C0","\u9A7B\u9752\u6C99\u767D\u9E1F\u98DE\u56DE","\u65E0\u8FB9\u843D\u6728\u8427\u8427\u4E0B","\u4E0D\u5C3D\u957F\u6C5F\u6EDA\u6EDA\u6765","\u4E07\u91CC\u60B2\u79CB\u5E38\u4F5C\u5BA2","\u767E\u5E74\u591A\u75C5\u72EC\u767B\u53F0","\u8270\u96BE\u82E6\u6068\u7E41\u971C\u9B13","\u6F66\u5012\u65B0\u505C\u6D4A\u9152\u676F"]}],h=1,I=2,v=2;return a.createElement("div",null,a.createElement(r,{dataSource:s,columns:m,current:h,pageSize:I,total:v}))},t.abrupt("return",{default:l});case 6:case"end":return t.stop()}},o)})))),asset:{type:"BLOCK",id:"tableui-demo-2",refAtomIds:["TableUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { TableUI, IconUI } from 'sic-ui';
import { Space } from 'antd';

const App: React.FC = () => {
  const columns = [
    {
      title: 'id',
      width: 80,
      dataIndex: 'id',
      key: 'id',
    },
    ,
    {
      title: '\u5185\u5BB9',
      dataIndex: 'value',
      key: 'value',
      render: (value) => {
        return <TableUI.HideMultipleLines>{value}</TableUI.HideMultipleLines>;
      },
    },
  ];
  const dataSource = [
    {
      id: 1,
      value: [
        '\u98CE\u6025\u5929\u9AD8\u733F\u5578\u54C0',
        '\u9A7B\u9752\u6C99\u767D\u9E1F\u98DE\u56DE',
        '\u65E0\u8FB9\u843D\u6728\u8427\u8427\u4E0B',
        '\u4E0D\u5C3D\u957F\u6C5F\u6EDA\u6EDA\u6765',
        '\u4E07\u91CC\u60B2\u79CB\u5E38\u4F5C\u5BA2',
        '\u767E\u5E74\u591A\u75C5\u72EC\u767B\u53F0',
        '\u8270\u96BE\u82E6\u6068\u7E41\u971C\u9B13',
        '\u6F66\u5012\u65B0\u505C\u6D4A\u9152\u676F',
      ],
    },
    {
      id: 2,
      value: [
        '\u98CE\u6025\u5929\u9AD8\u733F\u5578\u54C0',
        '\u9A7B\u9752\u6C99\u767D\u9E1F\u98DE\u56DE',
        '\u65E0\u8FB9\u843D\u6728\u8427\u8427\u4E0B',
        '\u4E0D\u5C3D\u957F\u6C5F\u6EDA\u6EDA\u6765',
        '\u4E07\u91CC\u60B2\u79CB\u5E38\u4F5C\u5BA2',
        '\u767E\u5E74\u591A\u75C5\u72EC\u767B\u53F0',
        '\u8270\u96BE\u82E6\u6068\u7E41\u971C\u9B13',
        '\u6F66\u5012\u65B0\u505C\u6D4A\u9152\u676F',
      ],
    },
  ];
  const current = 1;
  const pageSize = 2;
  const total = 2;
  return (
    <div>
      <TableUI dataSource={dataSource} columns={columns} current={current} pageSize={pageSize} total={total} />
    </div>
  );
};
export default App;`},"sic-ui":{type:"NPM",value:"0.6.1"}},entry:"index.tsx"},context:{"sic-ui":x},renderOpts:{compile:function(){var o=p()(u()().mark(function r(){var l,i=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,i));case 3:case"end":return n.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}},"tableui-demo-3":{component:a.memo(a.lazy(p()(u()().mark(function o(){var d,r,l,i,t,n;return u()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.bind(e,19180));case 2:return d=s.sent,r=d.TableUI,l=d.IconUI,s.next=7,Promise.resolve().then(e.bind(e,76558));case 7:return i=s.sent,t=i.Space,n=function(){var I=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u5408\u540C",dataIndex:"contract",key:"contract",render:function(){return a.createElement(t,{wrap:!0},a.createElement(r.Button,{className:"12",type:"default",icon:a.createElement(l,{name:"Download"})},"\u67E5\u770B"),a.createElement(r.Button,{type:"danger",icon:a.createElement(l,{name:"Upload"})},"\u91CD\u65B0\u4E0A\u4F20"),a.createElement(r.Button,{type:"disable"},"\u7981\u7528"))}},{title:"\u7535\u8BDD",dataIndex:"phone",key:"phone"}],v=[{name:"\u5218\u5907",age:22,phone:15692837652},{name:"\u5173\u7FBD",age:21,phone:17697787678},{name:"\u5F20\u98DE",age:18,phone:12392880611}],S=1,g=2,f=3;return a.createElement("div",null,a.createElement(r,{dataSource:v,columns:I,current:S,pageSize:g,total:f}))},s.abrupt("return",{default:n});case 11:case"end":return s.stop()}},o)})))),asset:{type:"BLOCK",id:"tableui-demo-3",refAtomIds:["TableUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { TableUI, IconUI } from 'sic-ui';
import { Space } from 'antd';

const App: React.FC = () => {
  const columns = [
    { title: '\u59D3\u540D', dataIndex: 'name', key: 'name' },
    { title: '\u5E74\u9F84', dataIndex: 'age', key: 'age' },
    {
      title: '\u5408\u540C',
      dataIndex: 'contract',
      key: 'contract',
      render: () => {
        return (
          <Space wrap>
            <TableUI.Button className="12" type="default" icon={<IconUI name="Download" />}>
              \u67E5\u770B
            </TableUI.Button>
            <TableUI.Button type="danger" icon={<IconUI name="Upload" />}>
              \u91CD\u65B0\u4E0A\u4F20
            </TableUI.Button>
            <TableUI.Button type="disable">\u7981\u7528</TableUI.Button>
          </Space>
        );
      },
    },
    { title: '\u7535\u8BDD', dataIndex: 'phone', key: 'phone' },
  ];
  const dataSource = [
    { name: '\u5218\u5907', age: 22, phone: 15692837652 },
    { name: '\u5173\u7FBD', age: 21, phone: 17697787678 },
    { name: '\u5F20\u98DE', age: 18, phone: 12392880611 },
  ];
  const current = 1;
  const pageSize = 2;
  const total = 3;
  return (
    <div>
      <TableUI dataSource={dataSource} columns={columns} current={current} pageSize={pageSize} total={total} />
    </div>
  );
};
export default App;`},"sic-ui":{type:"NPM",value:"0.6.1"},antd:{type:"NPM",value:"5.24.4"}},entry:"index.tsx"},context:{"sic-ui":x,antd:z},renderOpts:{compile:function(){var o=p()(u()().mark(function r(){var l,i=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,i));case 3:case"end":return n.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}},"tableui-demo-4":{component:a.memo(a.lazy(p()(u()().mark(function o(){var d,r,l;return u()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.bind(e,19180));case 2:return d=t.sent,r=d.TableUI,l=function(){var m=[{title:"\u59D3\u540D",dataIndex:"name",key:"name"},{title:"\u5E74\u9F84",dataIndex:"age",key:"age"},{title:"\u4EFB\u52A1\u540D\u79F0",dataIndex:"taskName",key:"taskName",render:function(g,f){var y,T=f==null||(y=f.feeRate)===null||y===void 0?void 0:y.map(function(k){return k.taskName});return a.createElement(r.MultiLine,null,T)}},{title:"\u8D39\u7387",dataIndex:"feeRate",key:"feeRate",render:function(g,f){var y,T=f==null||(y=f.feeRate)===null||y===void 0?void 0:y.map(function(k){return"".concat(k.fee,"%")});return a.createElement(r.MultiLine,null,T)}},{title:"\u7535\u8BDD",dataIndex:"phone",key:"phone"}],s=[{name:"\u5218\u5907",age:22,phone:15692837652,feeRate:[{fee:5,taskName:"\u4EFB\u52A11"},{fee:6,taskName:"\u4EFB\u52A12"}]},{name:"\u5173\u7FBD",age:21,phone:17697787678,feeRate:[{fee:5,taskName:"\u4EFB\u52A11"},{fee:6,taskName:"\u4EFB\u52A12"}]},{name:"\u5F20\u98DE",age:18,phone:12392880611,feeRate:[{fee:5,taskName:"\u4EFB\u52A11"},{fee:6,taskName:"\u4EFB\u52A12"}]}],h=1,I=2,v=3;return a.createElement("div",null,a.createElement(r,{dataSource:s,columns:m,current:h,pageSize:I,total:v}))},t.abrupt("return",{default:l});case 6:case"end":return t.stop()}},o)})))),asset:{type:"BLOCK",id:"tableui-demo-4",refAtomIds:["TableUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { TableUI, IconUI } from 'sic-ui';
import { Space } from 'antd';

const App: React.FC = () => {
  const columns = [
    { title: '\u59D3\u540D', dataIndex: 'name', key: 'name' },
    { title: '\u5E74\u9F84', dataIndex: 'age', key: 'age' },
    {
      title: '\u4EFB\u52A1\u540D\u79F0',
      dataIndex: 'taskName',
      key: 'taskName',
      render: (_: never, item: any) => {
        const taskNameList = item?.feeRate?.map((i: any) => i.taskName);
        return <TableUI.MultiLine>{taskNameList}</TableUI.MultiLine>;
      },
    },
    {
      title: '\u8D39\u7387',
      dataIndex: 'feeRate',
      key: 'feeRate',
      render: (_: never, item: any) => {
        const feeList = item?.feeRate?.map((i: any) => \`\${i.fee}%\`);
        return <TableUI.MultiLine>{feeList}</TableUI.MultiLine>;
      },
    },
    { title: '\u7535\u8BDD', dataIndex: 'phone', key: 'phone' },
  ];
  const dataSource = [
    {
      name: '\u5218\u5907',
      age: 22,
      phone: 15692837652,
      feeRate: [
        { fee: 5, taskName: '\u4EFB\u52A11' },
        { fee: 6, taskName: '\u4EFB\u52A12' },
      ],
    },
    {
      name: '\u5173\u7FBD',
      age: 21,
      phone: 17697787678,
      feeRate: [
        { fee: 5, taskName: '\u4EFB\u52A11' },
        { fee: 6, taskName: '\u4EFB\u52A12' },
      ],
    },
    {
      name: '\u5F20\u98DE',
      age: 18,
      phone: 12392880611,
      feeRate: [
        { fee: 5, taskName: '\u4EFB\u52A11' },
        { fee: 6, taskName: '\u4EFB\u52A12' },
      ],
    },
  ];
  const current = 1;
  const pageSize = 2;
  const total = 3;
  return (
    <div>
      <TableUI dataSource={dataSource} columns={columns} current={current} pageSize={pageSize} total={total} />
    </div>
  );
};
export default App;`},"sic-ui":{type:"NPM",value:"0.6.1"}},entry:"index.tsx"},context:{"sic-ui":x},renderOpts:{compile:function(){var o=p()(u()().mark(function r(){var l,i=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,i));case 3:case"end":return n.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}},"tableui-demo-setting":{component:a.memo(a.lazy(function(){return e.e(383).then(e.bind(e,16178))})),asset:{type:"BLOCK",id:"tableui-demo-setting",refAtomIds:["TableUI"],dependencies:{"index.tsx":{type:"FILE",value:e(63468).Z},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.6.1"},"./index.scss":{type:"FILE",value:e(28455).Z}},entry:"index.tsx"},context:{"./index.scss":L,react:E||(E=e.t(a,2)),"sic-ui":x,"/home/runner/work/sic-ui/sic-ui/src/TableUI/demo/index.scss":L},renderOpts:{compile:function(){var o=p()(u()().mark(function r(){var l,i=arguments;return u()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(7335).then(e.bind(e,37335));case 2:return n.abrupt("return",(l=n.sent).default.apply(l,i));case 3:case"end":return n.stop()}},r)}));function d(){return o.apply(this,arguments)}return d}()}}}},51254:function(b,c,e){e.r(c)},82983:function(b,c,e){e.r(c),e.d(c,{texts:function(){return U}});var E=e(12062);const U=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u8868\u683C\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u8868\u683C\u7EC4\u4EF6-\u57FA\u672C\u4F7F\u7528",paraId:1,tocIndex:3},{value:"\u{1F48E} \u8868\u683C\u7EC4\u4EF6-\u66F4\u591A\u64CD\u4F5C",paraId:2,tocIndex:4},{value:"\u{1F48E} \u8868\u683C\u7EC4\u4EF6-\u591A\u884C\u6EA2\u51FA",paraId:3},{value:"\u{1F48E} \u8868\u683C\u7EC4\u4EF6-\u529F\u80FD\u6309\u94AE",paraId:4},{value:"\u{1F48E} \u8868\u683C\u7EC4\u4EF6-\u591A\u884C\u62C6\u5206",paraId:5},{value:`\u{1F48E} \u8868\u683C\u7EC4\u4EF6-\u8868\u5934\u63A7\u5236
`,paraId:6},{value:"\u{1F525}TableUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:7,tocIndex:5},{value:"\u5C5E\u6027",paraId:8,tocIndex:6},{value:"\u8BF4\u660E",paraId:8,tocIndex:6},{value:"\u7C7B\u578B",paraId:8,tocIndex:6},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:6},{value:"\u662F\u5426\u5FC5\u4F20",paraId:8,tocIndex:6},{value:"dataSource",paraId:8,tocIndex:6},{value:"\u6570\u636E\u5185\u5BB9",paraId:8,tocIndex:6},{value:"Array",paraId:8,tocIndex:6},{value:"[]",paraId:8,tocIndex:6},{value:"\u662F",paraId:8,tocIndex:6},{value:"columns",paraId:8,tocIndex:6},{value:"\u6BCF\u4E00\u5217\u7684\u503C",paraId:8,tocIndex:6},{value:"Array",paraId:8,tocIndex:6},{value:"[]",paraId:8,tocIndex:6},{value:"\u662F",paraId:8,tocIndex:6},{value:"current",paraId:8,tocIndex:6},{value:"\u5F53\u524D\u7684\u9875\u6570",paraId:8,tocIndex:6},{value:"Number",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"\u662F",paraId:8,tocIndex:6},{value:"pageSize",paraId:8,tocIndex:6},{value:"\u5F53\u524D\u7684\u9875\u7801",paraId:8,tocIndex:6},{value:"Number",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"\u662F",paraId:8,tocIndex:6},{value:"total",paraId:8,tocIndex:6},{value:"\u5F53\u524D\u7684\u603B\u6570",paraId:8,tocIndex:6},{value:"Number",paraId:8,tocIndex:6},{value:"-",paraId:8,tocIndex:6},{value:"\u662F",paraId:8,tocIndex:6},{value:"mask",paraId:8,tocIndex:6},{value:"\u8499\u7248",paraId:8,tocIndex:6},{value:"Boolean",paraId:8,tocIndex:6},{value:"false",paraId:8,tocIndex:6},{value:"\u5426",paraId:8,tocIndex:6},{value:"\u6CE8\uFF1A\u9700\u8981\u6839\u8282\u70B9",paraId:9,tocIndex:7},{value:"\u5C5E\u6027",paraId:10,tocIndex:7},{value:"\u8BF4\u660E",paraId:10,tocIndex:7},{value:"\u7C7B\u578B",paraId:10,tocIndex:7},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:7},{value:"\u662F\u5426\u5FC5\u4F20",paraId:10,tocIndex:7},{value:"child",paraId:10,tocIndex:7},{value:"\u5185\u5BB9",paraId:10,tocIndex:7},{value:"ReactNode",paraId:10,tocIndex:7},{value:"-",paraId:10,tocIndex:7},{value:"\u662F",paraId:10,tocIndex:7},{value:"\u5C5E\u6027",paraId:11,tocIndex:8},{value:"\u8BF4\u660E",paraId:11,tocIndex:8},{value:"\u7C7B\u578B",paraId:11,tocIndex:8},{value:"\u9ED8\u8BA4\u503C",paraId:11,tocIndex:8},{value:"\u662F\u5426\u5FC5\u4F20",paraId:11,tocIndex:8},{value:"type",paraId:11,tocIndex:8},{value:"\u7C7B\u578B",paraId:11,tocIndex:8},{value:"String<default/danger/disable>",paraId:11,tocIndex:8},{value:"default",paraId:11,tocIndex:8},{value:"\u662F",paraId:11,tocIndex:8}]},28455:function(b,c){c.Z=`.demo-setting {
  &-operate {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
}
`},63468:function(b,c){c.Z=`import React, { useState, useEffect } from 'react';
import { TableUI } from 'sic-ui';
import './index.scss';
const columns = [
  { title: '\u59D3\u540D', dataIndex: 'name', key: 'name' },
  { title: '\u5E74\u9F84', dataIndex: 'age', key: 'age' },
  { title: '\u7535\u8BDD', dataIndex: 'phone', key: 'phone' },
];
const initialTableHeader = [
  { name: '\u59D3\u540D', key: 'name', sort: 1, selected: true, disable: false, width: 220 },
  { name: '\u5E74\u9F84', key: 'age', sort: 2, selected: true, disable: false, width: 220 },
  { name: '\u7535\u8BDD', key: 'phone', sort: 3, selected: false, disable: true, width: 220 },
];

const dataSource = [
  { name: '\u5218\u5907', age: 22, phone: 15692837652 },
  { name: '\u5173\u7FBD', age: 21, phone: 17697787678 },
  { name: '\u5F20\u98DE', age: 18, phone: 12392880611 },
];

const DemoSetting = () => {
  const current = 1;
  const pageSize = 2;
  const total = 3;

  const [status, setStatus] = useState(false);
  const [headerList, setHeaderList] = useState(initialTableHeader);
  const [newColumns, setNewColumns] = useState(columns);
  useEffect(() => {
    const list: any = [];
    headerList?.forEach((i) => {
      newColumns.forEach((j) => {
        if (i.key === j.key) {
          list.push(j);
        }
      });
    });
    setNewColumns(list);
  }, [headerList]);

  return (
    <div className="demo-setting">
      <div className="demo-setting-operate">
        <div />
        <TableUI.Setting
          openModifyHeader={status}
          setOpenModifyHeader={(e: boolean) => setStatus(e)}
          tableHeader={headerList}
          getTableheader={(value: any) => setHeaderList(value)}
          scrollHeight={window.innerHeight - 400}
        />
      </div>
      <TableUI dataSource={dataSource} columns={newColumns} current={current} pageSize={pageSize} total={total} />
    </div>
  );
};
export default DemoSetting;
`}}]);
