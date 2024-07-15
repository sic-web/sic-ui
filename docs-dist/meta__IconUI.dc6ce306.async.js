"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[8903],{85422:function(i,r,n){n.r(r),n.d(r,{demos:function(){return g}});var C=n(43953),p=n.n(C),y=n(91184),c=n.n(y),m=n(38497),w=n(88208),g={"iconui-demo-0":{component:m.memo(m.lazy(c()(p()().mark(function d(){var a,o,s,l,h,e,u;return p()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,38497,19));case 2:return a=t.sent,o=a.default,t.next=6,Promise.resolve().then(n.bind(n,39902));case 6:return s=t.sent,l=s.Space,t.next=10,Promise.resolve().then(n.bind(n,21137));case 10:return h=t.sent,e=h.IconUI,u=function(){return o.createElement(l,{wrap:!0},o.createElement(e,{name:"Minsheng",width:24,height:24}),o.createElement(e,{name:"ListTwo",theme:"filled",size:"28",fill:"#1EAF69",strokeWidth:2}),o.createElement(e,{name:"Pingan",width:24,height:24}))},t.abrupt("return",{default:u});case 14:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"iconui-demo-0",refAtomIds:["IconUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Space } from 'antd';
import { IconUI } from 'sic-ui';

const App: React.FC = () => (
  <Space wrap>
    <IconUI name="Minsheng" width={24} height={24} />
    <IconUI name="ListTwo" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />
    <IconUI name="Pingan" width={24} height={24} />
  </Space>
);
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.19.1"},"sic-ui":{type:"NPM",value:"0.3.47"}},entry:"index.tsx"},context:{react:n(38497),antd:n(39902),"sic-ui":n(21137)},renderOpts:{compile:function(){var d=c()(p()().mark(function o(){var s,l=arguments;return p()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3959).then(n.bind(n,73959));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,l));case 3:case"end":return e.stop()}},o)}));function a(){return d.apply(this,arguments)}return a}()}},"iconui-demo-dictionary":{component:m.memo(m.lazy(function(){return n.e(8992).then(n.bind(n,92878))})),asset:{type:"BLOCK",id:"iconui-demo-dictionary",refAtomIds:["IconUI"],dependencies:{"index.tsx":{type:"FILE",value:n(85790).Z},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.3.47"},"./dictionary.scss":{type:"FILE",value:n(47377).Z},"./rally.tsx":{type:"FILE",value:n(91960).Z},"@ant-design/icons":{type:"NPM",value:"5.3.7"},"@icon-park/react":{type:"NPM",value:"1.4.2"},"./material.tsx":{type:"FILE",value:n(28047).Z}},entry:"index.tsx"},context:{react:n(38497),"sic-ui":n(21137),"./dictionary.scss":n(32553),"./rally.tsx":n(64247),"@ant-design/icons":n(33180),"@icon-park/react":n(61783),"./material.tsx":n(51961)},renderOpts:{compile:function(){var d=c()(p()().mark(function o(){var s,l=arguments;return p()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(3959).then(n.bind(n,73959));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,l));case 3:case"end":return e.stop()}},o)}));function a(){return d.apply(this,arguments)}return a}()}}}},32553:function(i,r,n){n.r(r)},94317:function(i,r,n){n.r(r),n.d(r,{texts:function(){return p}});var C=n(88208);const p=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u56FE\u6807\u7EC4\u4EF6",paraId:0},{value:"\u5730\u5740\uFF1A",paraId:1},{value:"IconPark",paraId:1},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:2,tocIndex:1},{value:`\u{1F48E} \u3010\u5B57\u5178\u67E5\u8BE2\u3011\u70B9\u51FB\u56FE\u6807\u590D\u5236\u4F7F\u7528
`,paraId:3}]},47377:function(i,r){r.Z=`.dictionary {\r
  display: flex;\r
  flex-wrap: wrap;\r
  &-item {\r
    height: 100px;\r
    width: 80px;\r
    display: flex;\r
    flex-direction: column;\r
    border: 1px solid #e3e3e3;\r
    font-size: 12px;\r
    margin-bottom: 10px;\r
    cursor: pointer;\r
    &-icon {\r
      height: 80px;\r
      display: flex;\r
      align-items: center;\r
      justify-content: center;\r
    }\r
    &-name {\r
      height: 30px;\r
      line-height: 30px;\r
      text-align: center;\r
      border-top: 1px solid #e3e3e3;\r
      overflow: hidden;\r
    }\r
  }\r
}\r
`},85790:function(i,r){r.Z=`import React from 'react';\r
import { iconRally } from './rally';\r
import { MessageUI } from 'sic-ui';\r
import './dictionary.scss';\r
const Dictionary = () => {\r
  const distributeProps = { width: 24, height: 24, size: '28', fill: '#1EAF69' };\r
  // \u70B9\u51FB\u590D\u5236\r
  const clickCopy = (e: any, item: any) => {\r
    e.stopPropagation();\r
    const text = \`\${item?.name}\`;\r
    try {\r
      navigator.clipboard.writeText(text);\r
      MessageUI.info('\u6587\u672C\u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F');\r
    } catch (err) {\r
      MessageUI.success('\u590D\u5236\u5931\u8D25');\r
    }\r
  };\r
  return (\r
    <div className="dictionary">\r
      {iconRally?.map((item: any, index) => {\r
        return (\r
          <div className="dictionary-item" key={index} onClick={(e) => clickCopy(e, item)}>\r
            <div className="dictionary-item-icon">{item?.element(distributeProps)}</div>\r
            <div className="dictionary-item-name">{item?.name}</div>\r
          </div>\r
        );\r
      })}\r
    </div>\r
  );\r
};\r
\r
export default Dictionary;\r
`},28047:function(i,r){r.Z=`import React from 'react';

interface IProps {
  color: string;
  width?: string | number;
  height?: string | number;
}

export const Minsheng = (props: IProps) => {
  const { color, width = '17', height = '16' } = props;
  return (
    <svg width={width ?? '17'} height={height ?? '16'} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Frame" clipPath="url(#clip0_298_2911)">
        <path
          id="Vector"
          d="M14.4999 8.82126C13.2302 7.11125 9.6286 6.7075 9.6286 6.7075L11.06 5.805L7.874 4L4.68801 5.63875L7.25065 7.11126C11.4063 7.04001 12.6068 9.32001 12.6068 9.32001C13.6457 12.6688 7.66621 12.9063 7.66621 12.9063C4.20318 13.2863 2.61019 10.1988 2.61019 10.1988L0.532367 10.27C3.00266 15.3288 11.868 13.12 11.868 13.12C16.5085 11.6713 14.4999 8.82126 14.4999 8.82126ZM7.874 6.7075L6.44261 5.97125L7.80474 4.9975L9.23612 5.805L7.874 6.7075Z"
          fill={color ?? '#1D2088'}
        />
        <path
          id="Vector_2"
          d="M8.37483 2.4403C5.93038 2.27342 1.1625 2.51182 0.581645 5.37259C0.0733943 7.6612 3.60695 8.97238 6.0998 9.21078C5.59155 9.54454 5.0833 9.78293 4.59925 10.1167C5.76097 10.7604 6.85007 11.4279 7.93918 12L10.9645 10.2836L7.93918 8.73399C7.35832 8.66247 6.77747 8.8055 6.43863 8.8055C4.76867 8.8055 2.32422 7.01753 3.00189 5.37259C4.26041 1.86815 12.5376 2.34494 13.3847 5.87322H15.7324C14.6433 3.17933 10.7225 2.60718 8.37483 2.4403ZM8.03599 9.37766L9.53654 10.1882L7.93918 10.9988L6.51124 10.1882L8.03599 9.37766Z"
          fill={color ?? '#5AA572'}
        />
      </g>
      <defs>
        <clipPath id="clip0_298_2911">
          <rect width="16" height="16" fill="white" transform="translate(0.0571442)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SwitchOff = (props: IProps) => {
  const { color, width = '14', height = '14' } = props;
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -3 14 14">
        <path
          fill={color ?? 'currentColor'}
          d="M4.66667 4.08333C3.05584 4.08333 1.75 5.38917 1.75 7C1.75 8.61081 3.05584 9.91666 4.66667 9.91666H9.33333C10.9441 9.91666 12.25 8.61081 12.25 7C12.25 5.38917 10.9441 4.08333 9.33333 4.08333H4.66667ZM4.66667 2.91666H9.33333C11.5885 2.91666 13.4167 4.74484 13.4167 7C13.4167 9.25516 11.5885 11.0833 9.33333 11.0833H4.66667C2.4115 11.0833 0.583332 9.25516 0.583332 7C0.583332 4.74484 2.4115 2.91666 4.66667 2.91666ZM4.66667 8.75C3.70017 8.75 2.91667 7.96652 2.91667 7C2.91667 6.03347 3.70017 5.25 4.66667 5.25C5.63316 5.25 6.41667 6.03347 6.41667 7C6.41667 7.96652 5.63316 8.75 4.66667 8.75Z"
        />
      </svg>
    </div>
  );
};

export const SwitchOn = (props: IProps) => {
  const { color, width = '14', height = '14' } = props;
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -3 14 14">
        <path
          d="M9.33333 4.08334C10.9442 4.08334 12.25 5.38918 12.25 7C12.25 8.61082 10.9442 9.91667 9.33333 9.91667H4.66667C3.05585 9.91667 1.75 8.61082 1.75 7C1.75 5.38918 3.05585 4.08334 4.66667 4.08334H9.33333ZM9.33333 2.91667H4.66667C2.4115 2.91667 0.583333 4.74484 0.583333 7C0.583333 9.25517 2.4115 11.0833 4.66667 11.0833H9.33333C11.5885 11.0833 13.4167 9.25517 13.4167 7C13.4167 4.74484 11.5885 2.91667 9.33333 2.91667ZM9.33333 8.75C10.2998 8.75 11.0833 7.96653 11.0833 7C11.0833 6.03348 10.2998 5.25001 9.33333 5.25001C8.36684 5.25001 7.58333 6.03348 7.58333 7C7.58333 7.96653 8.36684 8.75 9.33333 8.75Z"
          fill={color ?? 'currentColor'}
        />
      </svg>
    </div>
  );
};

export const Pingan = (props: IProps) => {
  const { color, width = '17', height = '16' } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Frame" clipPath="url(#clip0_298_2899)">
        <path
          id="Vector"
          d="M8.05714 0C12.4753 0 16.0571 3.58187 16.0571 8C16.0571 12.4181 12.4753 16 8.05714 16C3.63901 16 0.0571442 12.4181 0.0571442 8C0.0571442 3.58187 3.63901 0 8.05714 0ZM7.01981 8.8128L6.98141 8.81653C6.93807 8.82499 6.89905 8.84833 6.8711 8.88251C6.84315 8.9167 6.82802 8.95958 6.82834 9.00373V11.0096L6.83208 11.0469C6.84968 11.1328 6.92701 11.2 7.01981 11.2H9.09181L9.13074 11.1963C9.17412 11.1876 9.21323 11.1644 9.24156 11.1304C9.2699 11.0965 9.28575 11.0538 9.28648 11.0096V9.00427L9.28221 8.9648C9.27287 8.9214 9.24881 8.88255 9.21411 8.85485C9.17941 8.82715 9.13621 8.8123 9.09181 8.8128H7.01981ZM7.45501 3.2L7.39954 3.20427C7.27368 3.22293 7.17074 3.30507 7.10354 3.42133L3.31154 10.8187L3.28754 10.8683C3.20061 11.0768 3.30728 11.2 3.51688 11.2H4.71794L4.77234 11.1984C4.90781 11.1883 4.96861 11.1365 5.04648 10.9904L8.05554 5.04213L11.0662 10.9904L11.095 11.0411C11.1713 11.1643 11.2401 11.2 11.3947 11.2H12.5969L12.6433 11.1979C12.8353 11.1792 12.9206 11.0405 12.8033 10.8192L9.00914 3.42187L8.97821 3.37387C8.94312 3.32145 8.89591 3.27828 8.84057 3.24801C8.78523 3.21774 8.72341 3.20127 8.66034 3.2H7.45501Z"
          fill={color ?? '#FA6400'}
        />
      </g>
      <defs>
        <clipPath id="clip0_298_2899">
          <rect width="16" height="16" fill="white" transform="translate(0.0571442)" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const Warning = (props: IProps) => {
  const { width = '24', height = '24' } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22C14.7614 22 17.2614 20.8807 19.0711 19.0711C20.8807 17.2614 22 14.7614 22 12C22 9.2386 20.8807 6.7386 19.0711 4.92893C17.2614 3.11929 14.7614 2 12 2C9.2386 2 6.7386 3.11929 4.92893 4.92893C3.11929 6.7386 2 9.2386 2 12C2 14.7614 3.11929 17.2614 4.92893 19.0711C6.7386 20.8807 9.2386 22 12 22Z"
        fill="#FFC22C"
        stroke="#FFC22C"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 18.5C12.6904 18.5 13.25 17.9404 13.25 17.25C13.25 16.5597 12.6904 16 12 16C11.3097 16 10.75 16.5597 10.75 17.25C10.75 17.9404 11.3097 18.5 12 18.5Z"
        fill="white"
      />
      <path d="M12 6V14" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
export const Iconwx = (props: IProps) => {
  const { width = '21', height = '20' } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Group 117">
        <mask id="mask0_294_2896" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="20">
          <rect id="Rectangle 390" x="0.0571442" width="20" height="20" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_294_2896)">
          <path
            id="WeChat"
            d="M7.82548 12.2842C7.74423 12.3262 7.65278 12.3505 7.55555 12.3505C7.3305 12.3505 7.1349 12.2238 7.03219 12.0362L6.99286 11.9481L5.35436 8.26725C5.33668 8.22724 5.32573 8.18195 5.32573 8.13788C5.32573 7.96824 5.46009 7.83081 5.6258 7.83081C5.69301 7.83081 5.75526 7.85362 5.80529 7.8917L7.73882 9.30107C7.88004 9.39558 8.04883 9.45105 8.23027 9.45105C8.33858 9.45105 8.44179 9.43044 8.53808 9.39455L17.6308 5.25163C16.0009 3.28521 13.3167 2 10.2792 2C5.30849 2 1.27931 5.4375 1.27931 9.67816C1.27931 11.9915 2.49155 14.0741 4.38902 15.4817C4.54119 15.593 4.64088 15.7758 4.64088 15.9821C4.64088 16.0503 4.62659 16.1125 4.60916 16.1776C4.45762 16.7563 4.21507 17.6831 4.2038 17.7265C4.18486 17.7991 4.15534 17.875 4.15534 17.951C4.15534 18.1206 4.28958 18.2581 4.45554 18.2581C4.52055 18.2581 4.57379 18.2333 4.62873 18.2009L6.59901 17.0363C6.74722 16.9489 6.90412 16.8945 7.07706 16.8945C7.16901 16.8945 7.25787 16.9091 7.34145 16.9353C8.2606 17.206 9.25232 17.3563 10.2792 17.3563C15.2496 17.3563 19.2793 13.9186 19.2793 9.67816C19.2793 8.39372 18.9075 7.18408 18.2541 6.11999L7.89143 12.2453L7.82548 12.2842Z"
            fill="#1AAD19"
          />
        </g>
      </g>
    </svg>
  );
};
export const Iconzfb = (props: IProps) => {
  const { width = '17', height = '16' } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        id="Combined-Shape"
        d="M16.0571 10.8571C16.0571 10.8571 15.5429 10.8 13.2 10.0571C12.5714 9.82857 11.7143 9.54286 10.7429 9.14286C11.3143 8.17143 11.7714 7.02857 12.0571 5.77143H8.91429V4.62857H12.8V4H8.91429V2.11429H7.31429C7.02857 2.11429 7.02857 2.4 7.02857 2.4V4H3.14286V4.62857H7.08571V5.77143H3.82857V6.4H10.1143C9.88571 7.2 9.6 7.94286 9.2 8.62857C7.14286 7.94286 4.97143 7.42857 3.65714 7.77143C2.8 8 2.22857 8.34286 1.88571 8.74286C0.342857 10.5714 1.48571 13.3714 4.62857 13.3714C6.51429 13.3714 8.34286 12.3429 9.77143 10.5714C11.8857 11.6 16.0571 13.3143 16.0571 13.3143V13.4286C16.0571 14.8571 14.9143 16 13.4857 16H2.57143C1.14286 16 0 14.8571 0 13.4286V2.57143C0 1.14286 1.14286 0 2.57143 0H13.4857C14.9143 0 16.0571 1.14286 16.0571 2.57143V10.8571ZM4.34286 12.2857C1.82857 12.2857 1.08571 10.3429 2.34286 9.25714C2.74286 8.91429 3.48571 8.74286 3.88571 8.68571C5.37143 8.51429 6.74286 9.08571 8.34286 9.88571C7.25714 11.3714 5.77143 12.2857 4.34286 12.2857Z"
        fill="#226BF3"
      />
    </svg>
  );
};
export const Zhaoshang = (props: IProps) => {
  const { width = '17', height = '16' } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Frame" clipPath="url(#clip0_298_2903)">
        <path
          id="Vector"
          d="M5.107 5.70708L2.82207 11.2911H11.9064L9.62515 5.68308L7.36423 11.2172L5.10823 5.70708H5.107ZM14.0024 9.95447H15.8159C15.7821 10.0905 15.7445 10.2252 15.7033 10.3594H14.1642L14.0024 9.95447ZM13.6972 9.19447H15.9679C15.9482 9.32985 15.9242 9.46401 15.8972 9.59816H13.859L13.6972 9.19447ZM13.3913 8.43447H16.0455C16.0381 8.56924 16.027 8.70401 16.0147 8.83816H13.5544L13.3913 8.43447ZM13.0861 7.67324H16.0504C16.0553 7.78216 16.0571 7.89108 16.0571 8.00062V8.07755H13.2473L13.0855 7.67324H13.0861ZM12.7815 6.91385H15.9839C16.0024 7.04678 16.0172 7.18155 16.0282 7.31755H12.9433L12.7815 6.91262V6.91385ZM12.4762 6.15262H15.8424C15.8744 6.28678 15.9021 6.42155 15.9273 6.55755H12.6375L12.475 6.15262H12.4762ZM0.0571508 8.00062C0.0528431 4.01416 2.99069 0.633853 6.9433 0.0787758C10.8953 -0.476917 14.6522 1.96247 15.7495 5.7957H12.3335L10.3396 0.831391L8.10392 6.38524L5.8233 0.881238L1.59561 11.2905L3.32115 13.7169H12.867L14.5181 11.2412L14.307 10.7151H15.5839C14.9445 12.4862 13.7008 13.9751 12.0719 14.9198C10.4429 15.8644 8.53291 16.2042 6.67807 15.8794C4.82339 15.5561 3.14233 14.5885 1.93112 13.1472C0.719915 11.7058 0.0562786 9.88328 0.0571508 8.00062Z"
          fill="#C7162E"
        />
      </g>
      <defs>
        <clipPath id="clip0_298_2903">
          <rect width="16" height="16" fill="white" transform="translate(0.0571442)" />
        </clipPath>
      </defs>
    </svg>
  );
};
export const Pdf = (props: IProps) => {
  const { width = '17', height = '16' } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#clip0_2782_6669)">
        <path
          d="M21.1371 21.7143C21.1371 21.8644 21.1076 22.013 21.0501 22.1516C20.9927 22.2903 20.9085 22.4163 20.8024 22.5224C20.6963 22.6285 20.5703 22.7127 20.4316 22.7701C20.293 22.8276 20.1444 22.8571 19.9943 22.8571H3.9943C3.84421 22.8571 3.6956 22.8276 3.55694 22.7701C3.41829 22.7127 3.2923 22.6285 3.18618 22.5224C3.08005 22.4163 2.99587 22.2903 2.93844 22.1516C2.881 22.013 2.85144 21.8644 2.85144 21.7143V1.14288C2.85144 0.992793 2.881 0.844181 2.93844 0.705523C2.99587 0.566865 3.08005 0.440878 3.18618 0.334754C3.2923 0.22863 3.41829 0.144448 3.55694 0.0870138C3.6956 0.0295799 3.84421 1.9102e-05 3.9943 1.9102e-05H13.8114C13.9618 -0.000850488 14.1109 0.0279781 14.2502 0.0848519C14.3894 0.141726 14.5161 0.225526 14.6229 0.331447L20.8057 6.5143C20.9116 6.62109 20.9954 6.74773 21.0523 6.88698C21.1092 7.02622 21.138 7.17532 21.1371 7.32573V21.7143Z"
          fill="#EBECF0"
        />
        <path
          d="M21.1371 21.7139V22.8567C21.1371 23.0068 21.1076 23.1554 21.0501 23.2941C20.9927 23.4327 20.9085 23.5587 20.8024 23.6648C20.6963 23.771 20.5703 23.8552 20.4316 23.9126C20.293 23.97 20.1444 23.9996 19.9943 23.9996H3.9943C3.69119 23.9996 3.4005 23.8792 3.18618 23.6648C2.97185 23.4505 2.85144 23.1598 2.85144 22.8567V21.7139C2.85144 21.8639 2.881 22.0126 2.93844 22.1512C2.99587 22.2899 3.08005 22.4159 3.18618 22.522C3.2923 22.6281 3.41829 22.7123 3.55694 22.7697C3.6956 22.8272 3.84421 22.8567 3.9943 22.8567H19.9943C20.1444 22.8567 20.293 22.8272 20.4316 22.7697C20.5703 22.7123 20.6963 22.6281 20.8024 22.522C20.9085 22.4159 20.9927 22.2899 21.0501 22.1512C21.1076 22.0126 21.1371 21.8639 21.1371 21.7139Z"
          fill="#C1C7D0"
        />
        <path
          d="M0.565674 12.5713H23.4228V18.2856C23.4228 18.4357 23.3932 18.5843 23.3358 18.7229C23.2784 18.8616 23.1942 18.9876 23.0881 19.0937C22.9819 19.1998 22.856 19.284 22.7173 19.3414C22.5786 19.3989 22.43 19.4284 22.2799 19.4284H1.70853C1.55845 19.4284 1.40984 19.3989 1.27118 19.3414C1.13252 19.284 1.00653 19.1998 0.900409 19.0937C0.794285 18.9876 0.710102 18.8616 0.652669 18.7229C0.595235 18.5843 0.565674 18.4357 0.565674 18.2856V12.5713Z"
          fill="#FF5630"
        />
        <path
          d="M2.85139 12.5718V10.2861L0.565674 12.5718H2.85139ZM21.1371 12.5718L21.1599 10.2861L23.4342 12.5718H21.1371Z"
          fill="#DE350B"
        />
        <path
          d="M6.28003 13.7144H8.2686C8.44861 13.7059 8.62848 13.734 8.79738 13.7968C8.96627 13.8597 9.12073 13.956 9.25145 14.0801C9.3769 14.2056 9.47514 14.3556 9.54003 14.5208C9.60491 14.6859 9.63507 14.8627 9.6286 15.0401C9.63438 15.2173 9.60392 15.3939 9.53907 15.559C9.47422 15.724 9.37635 15.8741 9.25145 16.0001C9.11609 16.1282 8.9562 16.2277 8.78141 16.2925C8.60662 16.3573 8.42052 16.3861 8.23431 16.3772H7.09146V18.1715H6.28003V13.7144ZM7.04574 15.6343H8.07431C8.28693 15.6511 8.49928 15.599 8.68003 15.4858C8.74493 15.4273 8.79527 15.3545 8.82702 15.2732C8.85877 15.1918 8.87105 15.1042 8.86288 15.0172C8.86288 14.6286 8.60765 14.4344 8.09717 14.4344H7.04574V15.6343ZM10.1886 13.7829H11.9943C12.2529 13.772 12.5107 13.8198 12.7482 13.9227C12.9857 14.0257 13.1968 14.181 13.3657 14.3772C13.7272 14.8296 13.9102 15.3989 13.88 15.9772C13.9052 16.5618 13.732 17.1377 13.3886 17.6115C13.2273 17.8275 13.0165 18.0015 12.7738 18.1189C12.5311 18.2362 12.2638 18.2935 11.9943 18.2858H10.1886V13.7829ZM10.9543 17.5086H11.9943C12.157 17.5145 12.3187 17.4812 12.4659 17.4116C12.613 17.342 12.7414 17.2381 12.84 17.1086C13.0602 16.7827 13.1648 16.3924 13.1372 16.0001C13.1753 15.5927 13.0613 15.1856 12.8172 14.8572C12.7075 14.7324 12.572 14.6329 12.42 14.5658C12.2681 14.4987 12.1033 14.4655 11.9372 14.4686H10.9543V17.5086ZM17.7086 14.5029H15.3429V15.5658H17.7086V16.2972H15.3429V18.2172H14.5772V13.7601H17.7086V14.5029Z"
          fill="white"
        />
        <path
          d="M21.1371 7.32573V7.48573H14.9543C14.6512 7.48573 14.3605 7.36532 14.1461 7.15099C13.9318 6.93666 13.8114 6.64597 13.8114 6.34287V1.9102e-05C13.9618 -0.000850488 14.1109 0.0279781 14.2502 0.0848519C14.3894 0.141726 14.516 0.225526 14.6228 0.331447L20.8171 6.5143C21.0269 6.73183 21.1419 7.02358 21.1371 7.32573Z"
          fill="#C1C7D0"
        />
      </g>
      <defs>
        <clipPath id="clip0_2782_6669">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Point = (props: IProps) => {
  const { width = '14', height = '14' } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 14" fill="none">
      <path
        d="M8.03627 12.6776C6.74046 12.193 5.65965 10.5347 5.11871 9.56344C4.88515 9.14408 5.00818 8.62894 5.38301 8.32908C5.80081 7.99486 6.40308 8.0282 6.78142 8.40654L7.21367 8.83878V5.6855C7.21367 5.30691 7.52058 5 7.89917 5C8.27775 5 8.58467 5.30691 8.58467 5.6855V7.33069C8.58467 6.9521 8.89158 6.64519 9.27016 6.64519C9.64875 6.64519 9.95566 6.9521 9.95566 7.33069V7.87909C9.95566 7.5005 10.2626 7.19359 10.6412 7.19359C11.0197 7.19359 11.3267 7.5005 11.3267 7.87909V8.42749C11.3267 8.0489 11.6336 7.74199 12.0122 7.74199C12.3907 7.74199 12.6976 8.0489 12.6976 8.42749V10.5849C12.6976 10.8784 12.6251 11.1684 12.4559 11.4082C12.1753 11.8061 11.6708 12.4126 11.0525 12.6776C10.0928 13.0889 9.23454 13.1257 8.03627 12.6776Z"
        stroke="#2E64FA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M3.16699 1L3.16699 6" stroke="#2E64FA" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.00016 2.16675L3.16683 1L4.3335 2.16667" stroke="#2E64FA" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.3335 6L3.16683 7.16667L2.00016 6" stroke="#2E64FA" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const Remind = (props: IProps) => {
  const { width = '14', height = '14' } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 14.6666C9.84093 14.6666 11.5076 13.9204 12.714 12.714C13.9205 11.5075 14.6667 9.84085 14.6667 7.99992C14.6667 6.15899 13.9205 4.49232 12.714 3.28587C11.5076 2.07945 9.84093 1.33325 8 1.33325C6.15907 1.33325 4.4924 2.07945 3.28595 3.28587C2.07953 4.49232 1.33333 6.15899 1.33333 7.99992C1.33333 9.84085 2.07953 11.5075 3.28595 12.714C4.4924 13.9204 6.15907 14.6666 8 14.6666Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 12.3334C8.46023 12.3334 8.83333 11.9603 8.83333 11.5001C8.83333 11.0398 8.46023 10.6667 8 10.6667C7.53977 10.6667 7.16667 11.0398 7.16667 11.5001C7.16667 11.9603 7.53977 12.3334 8 12.3334Z"
        fill="#2E64FA"
      />
      <path d="M8 4V9.33333Z" fill="#2E64FA" />
      <path d="M8 4V9.33333" stroke="#2E64FA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const SelectFalse = (props: IProps) => {
  const { width = '16', height = '17' } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 17" fill="none">
      <path
        d="M2.66667 2.5H13.3333C13.7015 2.5 14 2.79848 14 3.16667V13.8333C14 14.2015 13.7015 14.5 13.3333 14.5H2.66667C2.29848 14.5 2 14.2015 2 13.8333V3.16667C2 2.79848 2.29848 2.5 2.66667 2.5ZM3.33333 3.83333V13.1667H12.6667V3.83333H3.33333Z"
        fill="#979797"
      />
    </svg>
  );
};
export const SelectTrue = (props: IProps) => {
  const { width = '16', height = '17', color = '#FF7875' } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 17" fill="none">
      <path
        d="M2.66667 2.5H13.3333C13.7015 2.5 14 2.79848 14 3.16667V13.8333C14 14.2015 13.7015 14.5 13.3333 14.5H2.66667C2.29848 14.5 2 14.2015 2 13.8333V3.16667C2 2.79848 2.29848 2.5 2.66667 2.5ZM7.33507 11.1667L12.0491 6.45262L11.1063 5.50981L7.33507 9.28107L5.44947 7.3954L4.50666 8.33827L7.33507 11.1667Z"
        fill={color}
      />
    </svg>
  );
};
export const UploadPdf = (props: IProps) => {
  const { width = '20', height = '20' } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 11C3 8.79086 4.79086 7 7 7H15.75H29.0041C29.9687 7 30.9009 7.3486 31.6288 7.98158L35.1212 11.0184C35.8491 11.6514 36.7813 12 37.7459 12H50C52.2091 12 54 13.7909 54 16V52C54 54.2091 52.2091 56 50 56H7C4.79086 56 3 54.2091 3 52V11Z"
        fill="#2E64FA"
      />
      <path
        d="M12.201 21.9564C12.6725 20.2118 14.2552 19 16.0624 19H60.7754C63.4091 19 65.324 21.5012 64.6369 24.0436L56.799 53.0436C56.3275 54.7882 54.7448 56 52.9376 56H8.2246C5.5909 56 3.67599 53.4988 4.36314 50.9564L12.201 21.9564Z"
        fill="url(#paint0_linear_2865_1777)"
      />
      <path
        d="M12.201 21.9564C12.6725 20.2118 14.2552 19 16.0624 19H60.7754C63.4091 19 65.324 21.5012 64.6369 24.0436L56.799 53.0436C56.3275 54.7882 54.7448 56 52.9376 56H8.2246C5.5909 56 3.67599 53.4988 4.36314 50.9564L12.201 21.9564Z"
        fill="url(#paint1_linear_2865_1777)"
      />
      <mask id="mask0_2865_1777" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="3" y="19" width="53" height="37">
        <rect x="3" y="19" width="53" height="37" rx="4" fill="url(#paint2_linear_2865_1777)" />
      </mask>
      <g mask="url(#mask0_2865_1777)">
        <path d="M29 37H18" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 43H16" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <circle cx="47.5" cy="45.5" r="13.5" fill="#A6BDE5" />
      </g>
      <circle cx="50.5" cy="45.5" r="13.5" fill="#FFBB3F" />
      <path d="M47 44L51 40L55 44" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M51 42V52.5" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <defs>
        <linearGradient id="paint0_linear_2865_1777" x1="53.9417" y1="19" x2="11.9832" y2="46.7173" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E2FEDD" />
          <stop offset="1" stopColor="#C8F69A" />
        </linearGradient>
        <linearGradient id="paint1_linear_2865_1777" x1="63.5534" y1="19" x2="19.2379" y2="53.7977" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFE4FF" />
          <stop offset="1" stopColor="#A0C1FF" />
        </linearGradient>
        <linearGradient id="paint2_linear_2865_1777" x1="53.9418" y1="19" x2="11.9832" y2="46.7173" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFE4FF" />
          <stop offset="1" stopColor="#A0C1FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const UploadImage = (props: IProps) => {
  const { width = '20', height = '20' } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="9" width="41" height="47" rx="4" fill="#2E64FA" />
      <rect x="3" y="19" width="53" height="37" rx="4" fill="url(#paint0_linear_2831_2138)" />
      <mask id="mask0_2831_2138" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="3" y="19" width="53" height="37">
        <rect x="3" y="19" width="53" height="37" rx="4" fill="url(#paint1_linear_2831_2138)" />
      </mask>
      <g mask="url(#mask0_2831_2138)">
        <path d="M2 39L9.35294 42L14.2549 39L27 45" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <circle cx="49.5" cy="46.5" r="14.5" fill="#A6BDE5" />
      </g>
      <circle cx="51.5" cy="46.5" r="13.5" fill="#FFBB3F" />
      <path d="M48 44L52 40L56 44" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M52 42V52.5" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <defs>
        <linearGradient id="paint0_linear_2831_2138" x1="53.9418" y1="19" x2="11.9832" y2="46.7173" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFE4FF" />
          <stop offset="1" stopColor="#A0C1FF" />
        </linearGradient>
        <linearGradient id="paint1_linear_2831_2138" x1="53.9418" y1="19" x2="11.9832" y2="46.7173" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFE4FF" />
          <stop offset="1" stopColor="#A0C1FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const UploadExcel = (props: IProps) => {
  const { width = '20', height = '20' } = props;
  return (
    <svg width={width} height={height} viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 11C3 8.79086 4.79086 7 7 7H15.75H29.0041C29.9687 7 30.9009 7.3486 31.6288 7.98158L35.1212 11.0184C35.8491 11.6514 36.7813 12 37.7459 12H50C52.2091 12 54 13.7909 54 16V52C54 54.2091 52.2091 56 50 56H7C4.79086 56 3 54.2091 3 52V11Z"
        fill="#1EAF69"
      />
      <path
        d="M12.201 21.9564C12.6725 20.2118 14.2552 19 16.0624 19H60.7754C63.4091 19 65.324 21.5012 64.6369 24.0436L56.799 53.0436C56.3275 54.7882 54.7448 56 52.9376 56H8.2246C5.5909 56 3.67599 53.4988 4.36314 50.9564L12.201 21.9564Z"
        fill="url(#paint0_linear_2850_2797)"
      />
      <mask id="mask0_2850_2797" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="3" y="19" width="53" height="37">
        <rect x="3" y="19" width="53" height="37" rx="4" fill="url(#paint1_linear_2850_2797)" />
      </mask>
      <g mask="url(#mask0_2850_2797)">
        <path d="M18 36L18 48" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M26 36H18" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M26 42H18" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <path d="M26 48H18" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <circle cx="47.5" cy="45.5" r="13.5" fill="#A6E777" />
      </g>
      <circle cx="50.5" cy="45.5" r="13.5" fill="#1EAF69" />
      <path d="M48 44L52 40L56 44" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <path d="M52 42V52.5" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <defs>
        <linearGradient id="paint0_linear_2850_2797" x1="53.9417" y1="19" x2="11.9832" y2="46.7173" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E2FEDD" />
          <stop offset="1" stopColor="#C8F69A" />
        </linearGradient>
        <linearGradient id="paint1_linear_2850_2797" x1="53.9418" y1="19" x2="11.9832" y2="46.7173" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CFE4FF" />
          <stop offset="1" stopColor="#A0C1FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};
`},91960:function(i,r){r.Z=`import React from 'react';\r
import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined, MenuOutlined, SwapOutlined, LogoutOutlined } from '@ant-design/icons';\r
import { HomeOutlined, SolutionOutlined, CopyOutlined, FormOutlined, AccountBookOutlined, SettingOutlined } from '@ant-design/icons';\r
import { EyeInvisibleOutlined, EyeTwoTone, AlipayCircleOutlined } from '@ant-design/icons';\r
import { SwitchOff, Minsheng, Pingan, Iconwx, Iconzfb, Zhaoshang, SwitchOn, Warning, Pdf, Point, Remind, SelectFalse } from './material';\r
import { SelectTrue, UploadPdf, UploadImage, UploadExcel } from './material';\r
import { Export, ListTwo, Return, AddOne, SwitchButton, Audit, Clear, Download, Female, Male, PreviewOpen, Upload } from '@icon-park/react';\r
import { Delete, Setting, Excel, FilePdf, BackgroundColor, Home, ChartPieOne, BookmarkOne, DataArrival } from '@icon-park/react';\r
import { TicketsTwo, Bank, ShieldAdd, Swipe, SettingTwo, DataFour, Currency, CheckOne, CloseOne, UTurnLeft } from '@icon-park/react';\r
import { Caution, RotateOne, Edit, Check, Close, UserBusiness, ArrowRight, More, DeleteOne, Search, Help } from '@icon-park/react';\r
import { Attention, FileAddition, CooperativeHandshake, FileSuccess, Right, Peoples, UserToUserTransmission } from '@icon-park/react';\r
import { PeoplePlus, Consume, MapRoadTwo, EditTwo, AddPrint, Family, CopyOne, ExpensesOne, FullScreenOne, Copy } from '@icon-park/react';\r
import { City, Alarm, Deposit, TicketOne, Protect, Alipay, User, Lock, FolderOpen, DoubleDown, DoubleUp, Press } from '@icon-park/react';\r
import { RobotOne, Power, History, Communication, Newlybuild, Left, Editor, ApiApp, Workbench, Booth, Order } from '@icon-park/react';\r
import { FileStaff, Send, Local, Handbag, EveryUser, Passport, NewspaperFolding, Copyright } from '@icon-park/react';\r
/** Icon \u96C6\u5408 */\r
export const iconRally = [\r
  // \u81EA\u7814icon\r
  { name: 'Minsheng', element: (props: any) => Minsheng(props) },\r
  { name: 'Pingan', element: (props: any) => Pingan(props) },\r
  { name: 'Iconwx', element: (props: any) => Iconwx(props) },\r
  { name: 'Iconzfb', element: (props: any) => Iconzfb(props) },\r
  { name: 'Zhaoshang', element: (props: any) => Zhaoshang(props) },\r
  { name: 'SwitchOff', element: (props: any) => SwitchOff(props) },\r
  { name: 'SwitchOn', element: (props: any) => SwitchOn(props) },\r
  { name: 'Warning', element: (props: any) => Warning(props) },\r
  { name: 'Pdf', element: (props: any) => Pdf(props) },\r
  { name: 'Point', element: (props: any) => Point(props) },\r
  { name: 'Remind', element: (props: any) => Remind(props) },\r
  { name: 'SelectFalse', element: (props: any) => SelectFalse(props) },\r
  { name: 'SelectTrue', element: (props: any) => SelectTrue(props) },\r
  { name: 'UploadPdf', element: (props: any) => <UploadPdf {...props} /> },\r
  { name: 'UploadImage', element: (props: any) => <UploadImage {...props} /> },\r
  { name: 'UploadExcel', element: (props: any) => <UploadExcel {...props} /> },\r
  // antd\r
  { name: 'HomeOutlined', element: (props: any) => <HomeOutlined {...props} /> },\r
  { name: 'LogoutOutlined', element: (props: any) => <LogoutOutlined {...props} /> },\r
  { name: 'SwapOutlined', element: (props: any) => <SwapOutlined {...props} /> },\r
  { name: 'MenuUnfoldOutlined', element: (props: any) => <MenuUnfoldOutlined {...props} /> },\r
  { name: 'DownOutlined', element: (props: any) => <DownOutlined {...props} /> },\r
  { name: 'MenuOutlined', element: (props: any) => <MenuOutlined {...props} /> },\r
  { name: 'SolutionOutlined', element: (props: any) => <SolutionOutlined {...props} /> },\r
  { name: 'CopyOutlined', element: (props: any) => <CopyOutlined {...props} /> },\r
  { name: 'FormOutlined', element: (props: any) => <FormOutlined {...props} /> },\r
  { name: 'AccountBookOutlined', element: (props: any) => <AccountBookOutlined {...props} /> },\r
  { name: 'SettingOutlined', element: (props: any) => <SettingOutlined {...props} /> },\r
  { name: 'EyeInvisibleOutlined', element: (props: any) => <EyeInvisibleOutlined {...props} /> },\r
  { name: 'EyeTwoTone', element: (props: any) => <EyeTwoTone {...props} /> },\r
  { name: 'AlipayCircleOutlined', element: (props: any) => <AlipayCircleOutlined {...props} /> },\r
  { name: 'MenuFoldOutlined', element: (props: any) => <MenuFoldOutlined {...props} /> },\r
  // icon-park\r
  { name: 'ListTwo', element: (props: any) => <ListTwo {...props} /> },\r
  { name: 'Export', element: (props: any) => <Export {...props} /> },\r
  { name: 'Return', element: (props: any) => <Return {...props} /> },\r
  { name: 'AddOne', element: (props: any) => <AddOne {...props} /> },\r
  { name: 'SwitchButton', element: (props: any) => <SwitchButton {...props} /> },\r
  { name: 'Audit', element: (props: any) => <Audit {...props} /> },\r
  { name: 'Clear', element: (props: any) => <Clear {...props} /> },\r
  { name: 'Download', element: (props: any) => <Download {...props} /> },\r
  { name: 'Female', element: (props: any) => <Female {...props} /> },\r
  { name: 'Male', element: (props: any) => <Male {...props} /> },\r
  { name: 'PreviewOpen', element: (props: any) => <PreviewOpen {...props} /> },\r
  { name: 'Upload', element: (props: any) => <Upload {...props} /> },\r
  { name: 'Delete', element: (props: any) => <Delete {...props} /> },\r
  { name: 'Setting', element: (props: any) => <Setting {...props} /> },\r
  { name: 'Excel', element: (props: any) => <Excel {...props} /> },\r
  { name: 'FilePdf', element: (props: any) => <FilePdf {...props} /> },\r
  { name: 'TicketsTwo', element: (props: any) => <TicketsTwo {...props} /> },\r
  { name: 'BackgroundColor', element: (props: any) => <BackgroundColor {...props} /> },\r
  { name: 'Home', element: (props: any) => <Home {...props} /> },\r
  { name: 'ChartPieOne', element: (props: any) => <ChartPieOne {...props} /> },\r
  { name: 'BookmarkOne', element: (props: any) => <BookmarkOne {...props} /> },\r
  { name: 'DataArrival', element: (props: any) => <DataArrival {...props} /> },\r
  { name: 'Bank', element: (props: any) => <Bank {...props} /> },\r
  { name: 'ShieldAdd', element: (props: any) => <ShieldAdd {...props} /> },\r
  { name: 'Swipe', element: (props: any) => <Swipe {...props} /> },\r
  { name: 'SettingTwo', element: (props: any) => <SettingTwo {...props} /> },\r
  { name: 'DataFour', element: (props: any) => <DataFour {...props} /> },\r
  { name: 'Currency', element: (props: any) => <Currency {...props} /> },\r
  { name: 'CheckOne', element: (props: any) => <CheckOne {...props} /> },\r
  { name: 'CloseOne', element: (props: any) => <CloseOne {...props} /> },\r
  { name: 'UTurnLeft', element: (props: any) => <UTurnLeft {...props} /> },\r
  { name: 'Caution', element: (props: any) => <Caution {...props} /> },\r
  { name: 'RotateOne', element: (props: any) => <RotateOne {...props} /> },\r
  { name: 'Edit', element: (props: any) => <Edit {...props} /> },\r
  { name: 'Check', element: (props: any) => <Check {...props} /> },\r
  { name: 'Close', element: (props: any) => <Close {...props} /> },\r
  { name: 'UserBusiness', element: (props: any) => <UserBusiness {...props} /> },\r
  { name: 'ArrowRight', element: (props: any) => <ArrowRight {...props} /> },\r
  { name: 'More', element: (props: any) => <More {...props} /> },\r
  { name: 'DeleteOne', element: (props: any) => <DeleteOne {...props} /> },\r
  { name: 'Search', element: (props: any) => <Search {...props} /> },\r
  { name: 'Help', element: (props: any) => <Help {...props} /> },\r
  { name: 'Attention', element: (props: any) => <Attention {...props} /> },\r
  { name: 'FileAddition', element: (props: any) => <FileAddition {...props} /> },\r
  { name: 'CooperativeHandshake', element: (props: any) => <CooperativeHandshake {...props} /> },\r
  { name: 'FileSuccess', element: (props: any) => <FileSuccess {...props} /> },\r
  { name: 'Right', element: (props: any) => <Right {...props} /> },\r
  { name: 'Peoples', element: (props: any) => <Peoples {...props} /> },\r
  { name: 'UserToUserTransmission', element: (props: any) => <UserToUserTransmission {...props} /> },\r
  { name: 'PeoplePlus', element: (props: any) => <PeoplePlus {...props} /> },\r
  { name: 'Consume', element: (props: any) => <Consume {...props} /> },\r
  { name: 'MapRoadTwo', element: (props: any) => <MapRoadTwo {...props} /> },\r
  { name: 'EditTwo', element: (props: any) => <EditTwo {...props} /> },\r
  { name: 'AddPrint', element: (props: any) => <AddPrint {...props} /> },\r
  { name: 'Family', element: (props: any) => <Family {...props} /> },\r
  { name: 'CopyOne', element: (props: any) => <CopyOne {...props} /> },\r
  { name: 'ExpensesOne', element: (props: any) => <ExpensesOne {...props} /> },\r
  { name: 'FullScreenOne', element: (props: any) => <FullScreenOne {...props} /> },\r
  { name: 'Copy', element: (props: any) => <Copy {...props} /> },\r
  { name: 'City', element: (props: any) => <City {...props} /> },\r
  { name: 'Alarm', element: (props: any) => <Alarm {...props} /> },\r
  { name: 'Deposit', element: (props: any) => <Deposit {...props} /> },\r
  { name: 'TicketOne', element: (props: any) => <TicketOne {...props} /> },\r
  { name: 'Protect', element: (props: any) => <Protect {...props} /> },\r
  { name: 'Alipay', element: (props: any) => <Alipay {...props} /> },\r
  { name: 'User', element: (props: any) => <User {...props} /> },\r
  { name: 'Lock', element: (props: any) => <Lock {...props} /> },\r
  { name: 'FolderOpen', element: (props: any) => <FolderOpen {...props} /> },\r
  { name: 'DoubleDown', element: (props: any) => <DoubleDown {...props} /> },\r
  { name: 'DoubleUp', element: (props: any) => <DoubleUp {...props} /> },\r
  { name: 'Press', element: (props: any) => <Press {...props} /> },\r
  { name: 'RobotOne', element: (props: any) => <RobotOne {...props} /> },\r
  { name: 'Power', element: (props: any) => <Power {...props} /> },\r
  { name: 'History', element: (props: any) => <History {...props} /> },\r
  { name: 'Communication', element: (props: any) => <Communication {...props} /> },\r
  { name: 'Newlybuild', element: (props: any) => <Newlybuild {...props} /> },\r
  { name: 'Left', element: (props: any) => <Left {...props} /> },\r
  { name: 'Editor', element: (props: any) => <Editor {...props} /> },\r
  { name: 'ApiApp', element: (props: any) => <ApiApp {...props} /> },\r
  { name: 'Workbench', element: (props: any) => <Workbench {...props} /> },\r
  { name: 'Booth', element: (props: any) => <Booth {...props} /> },\r
  { name: 'Order', element: (props: any) => <Order {...props} /> },\r
  { name: 'FileStaff', element: (props: any) => <FileStaff {...props} /> },\r
  { name: 'Send', element: (props: any) => <Send {...props} /> },\r
  { name: 'Local', element: (props: any) => <Local {...props} /> },\r
  { name: 'Handbag', element: (props: any) => <Handbag {...props} /> },\r
  { name: 'EveryUser', element: (props: any) => <EveryUser {...props} /> },\r
  { name: 'Passport', element: (props: any) => <Passport {...props} /> },\r
  { name: 'NewspaperFolding', element: (props: any) => <NewspaperFolding {...props} /> },\r
  { name: 'Copyright', element: (props: any) => <Copyright {...props} /> },\r
];\r
`}}]);
