"use strict";(self.webpackChunksic_ui=self.webpackChunksic_ui||[]).push([[8903],{95047:function(a,r,n){var d;n.r(r),n.d(r,{demos:function(){return x}});var u=n(43953),s=n.n(u),_=n(91184),C=n.n(_),i=n(38497),v=n(8012),k=n(29966),y=n(25036),g=n(54355),f=n(13607),P=n(65865),w=n(88985),x={"iconui-demo-0":{component:i.memo(i.lazy(C()(s()().mark(function c(){var l,o,p,m,h,e,L;return s()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,38497,19));case 2:return l=t.sent,o=l.default,t.next=6,Promise.resolve().then(n.bind(n,29966));case 6:return p=t.sent,m=p.Space,t.next=10,Promise.resolve().then(n.bind(n,25036));case 10:return h=t.sent,e=h.IconUI,L=function(){return o.createElement(m,{wrap:!0},o.createElement(e,{name:"Minsheng",width:24,height:24}),o.createElement(e,{name:"ListTwo",theme:"filled",size:"28",fill:"#1EAF69",strokeWidth:2}),o.createElement(e,{name:"Pingan",width:24,height:24}))},t.abrupt("return",{default:L});case 14:case"end":return t.stop()}},c)})))),asset:{type:"BLOCK",id:"iconui-demo-0",refAtomIds:["IconUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';\r
import { Space } from 'antd';\r
import { IconUI } from 'sic-ui';\r
\r
const App: React.FC = () => (\r
  <Space wrap>\r
    <IconUI name="Minsheng" width={24} height={24} />\r
    <IconUI name="ListTwo" theme="filled" size="28" fill="#1EAF69" strokeWidth={2} />\r
    <IconUI name="Pingan" width={24} height={24} />\r
  </Space>\r
);\r
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.21.5"},"sic-ui":{type:"NPM",value:"0.4.25"}},entry:"index.tsx"},context:{react:d||(d=n.t(i,2)),antd:k,"sic-ui":y},renderOpts:{compile:function(){var c=C()(s()().mark(function o(){var p,m=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8350).then(n.bind(n,48350));case 2:return e.abrupt("return",(p=e.sent).default.apply(p,m));case 3:case"end":return e.stop()}},o)}));function l(){return c.apply(this,arguments)}return l}()}},"iconui-demo-dictionary":{component:i.memo(i.lazy(function(){return n.e(8992).then(n.bind(n,87507))})),asset:{type:"BLOCK",id:"iconui-demo-dictionary",refAtomIds:["IconUI"],dependencies:{"index.tsx":{type:"FILE",value:n(91301).Z},react:{type:"NPM",value:"18.3.1"},"sic-ui":{type:"NPM",value:"0.4.25"},"./dictionary.scss":{type:"FILE",value:n(43221).Z},"./rally.tsx":{type:"FILE",value:n(43559).Z},"@icon-park/react":{type:"NPM",value:"1.4.2"},"./material.tsx":{type:"FILE",value:n(50307).Z}},entry:"index.tsx"},context:{"./dictionary.scss":g,"./rally.tsx":f,"./material.tsx":w,react:d||(d=n.t(i,2)),"sic-ui":y,"C:/Work/sic-ui/src/IconUI/material/dictionary.scss":g,"C:/Work/sic-ui/src/IconUI/material/rally.tsx":f,"@icon-park/react":P,"C:/Work/sic-ui/src/IconUI/material/material.tsx":w},renderOpts:{compile:function(){var c=C()(s()().mark(function o(){var p,m=arguments;return s()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(8350).then(n.bind(n,48350));case 2:return e.abrupt("return",(p=e.sent).default.apply(p,m));case 3:case"end":return e.stop()}},o)}));function l(){return c.apply(this,arguments)}return l}()}}}},54355:function(a,r,n){n.r(r)},32088:function(a,r,n){n.r(r),n.d(r,{texts:function(){return u}});var d=n(8012);const u=[{value:"\u56FD\u4FE1\u7075\u5DE5\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF-\u56FE\u6807\u7EC4\u4EF6",paraId:0},{value:"\u5730\u5740\uFF1A",paraId:1},{value:"IconPark",paraId:1},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:2,tocIndex:1},{value:`\u{1F48E} \u3010\u5B57\u5178\u67E5\u8BE2\u3011\u70B9\u51FB\u56FE\u6807\u590D\u5236\u4F7F\u7528\r
`,paraId:3}]},43221:function(a,r){r.Z=`.dictionary {\r
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
`},91301:function(a,r){r.Z=`import React from 'react';\r
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
`},50307:function(a,r){r.Z=`import React from 'react';\r
\r
interface IProps {\r
  color: string;\r
  width?: string | number;\r
  height?: string | number;\r
}\r
\r
export const Minsheng = (props: IProps) => {\r
  const { color, width = '17', height = '16' } = props;\r
  return (\r
    <svg width={width ?? '17'} height={height ?? '16'} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
      <g id="Frame" clipPath="url(#clip0_298_2911)">\r
        <path\r
          id="Vector"\r
          d="M14.4999 8.82126C13.2302 7.11125 9.6286 6.7075 9.6286 6.7075L11.06 5.805L7.874 4L4.68801 5.63875L7.25065 7.11126C11.4063 7.04001 12.6068 9.32001 12.6068 9.32001C13.6457 12.6688 7.66621 12.9063 7.66621 12.9063C4.20318 13.2863 2.61019 10.1988 2.61019 10.1988L0.532367 10.27C3.00266 15.3288 11.868 13.12 11.868 13.12C16.5085 11.6713 14.4999 8.82126 14.4999 8.82126ZM7.874 6.7075L6.44261 5.97125L7.80474 4.9975L9.23612 5.805L7.874 6.7075Z"\r
          fill={color ?? '#1D2088'}\r
        />\r
        <path\r
          id="Vector_2"\r
          d="M8.37483 2.4403C5.93038 2.27342 1.1625 2.51182 0.581645 5.37259C0.0733943 7.6612 3.60695 8.97238 6.0998 9.21078C5.59155 9.54454 5.0833 9.78293 4.59925 10.1167C5.76097 10.7604 6.85007 11.4279 7.93918 12L10.9645 10.2836L7.93918 8.73399C7.35832 8.66247 6.77747 8.8055 6.43863 8.8055C4.76867 8.8055 2.32422 7.01753 3.00189 5.37259C4.26041 1.86815 12.5376 2.34494 13.3847 5.87322H15.7324C14.6433 3.17933 10.7225 2.60718 8.37483 2.4403ZM8.03599 9.37766L9.53654 10.1882L7.93918 10.9988L6.51124 10.1882L8.03599 9.37766Z"\r
          fill={color ?? '#5AA572'}\r
        />\r
      </g>\r
      <defs>\r
        <clipPath id="clip0_298_2911">\r
          <rect width="16" height="16" fill="white" transform="translate(0.0571442)" />\r
        </clipPath>\r
      </defs>\r
    </svg>\r
  );\r
};\r
\r
export const Pingan = (props: IProps) => {\r
  const { color, width = '17', height = '16' } = props;\r
  return (\r
    <svg width={width} height={height} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
      <g id="Frame" clipPath="url(#clip0_298_2899)">\r
        <path\r
          id="Vector"\r
          d="M8.05714 0C12.4753 0 16.0571 3.58187 16.0571 8C16.0571 12.4181 12.4753 16 8.05714 16C3.63901 16 0.0571442 12.4181 0.0571442 8C0.0571442 3.58187 3.63901 0 8.05714 0ZM7.01981 8.8128L6.98141 8.81653C6.93807 8.82499 6.89905 8.84833 6.8711 8.88251C6.84315 8.9167 6.82802 8.95958 6.82834 9.00373V11.0096L6.83208 11.0469C6.84968 11.1328 6.92701 11.2 7.01981 11.2H9.09181L9.13074 11.1963C9.17412 11.1876 9.21323 11.1644 9.24156 11.1304C9.2699 11.0965 9.28575 11.0538 9.28648 11.0096V9.00427L9.28221 8.9648C9.27287 8.9214 9.24881 8.88255 9.21411 8.85485C9.17941 8.82715 9.13621 8.8123 9.09181 8.8128H7.01981ZM7.45501 3.2L7.39954 3.20427C7.27368 3.22293 7.17074 3.30507 7.10354 3.42133L3.31154 10.8187L3.28754 10.8683C3.20061 11.0768 3.30728 11.2 3.51688 11.2H4.71794L4.77234 11.1984C4.90781 11.1883 4.96861 11.1365 5.04648 10.9904L8.05554 5.04213L11.0662 10.9904L11.095 11.0411C11.1713 11.1643 11.2401 11.2 11.3947 11.2H12.5969L12.6433 11.1979C12.8353 11.1792 12.9206 11.0405 12.8033 10.8192L9.00914 3.42187L8.97821 3.37387C8.94312 3.32145 8.89591 3.27828 8.84057 3.24801C8.78523 3.21774 8.72341 3.20127 8.66034 3.2H7.45501Z"\r
          fill={color ?? '#FA6400'}\r
        />\r
      </g>\r
      <defs>\r
        <clipPath id="clip0_298_2899">\r
          <rect width="16" height="16" fill="white" transform="translate(0.0571442)" />\r
        </clipPath>\r
      </defs>\r
    </svg>\r
  );\r
};\r
\r
export const Iconwx = (props: IProps) => {\r
  const { width = '21', height = '20' } = props;\r
  return (\r
    <svg width={width} height={height} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">\r
      <g id="Group 117">\r
        <mask id="mask0_294_2896" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="20">\r
          <rect id="Rectangle 390" x="0.0571442" width="20" height="20" fill="#D9D9D9" />\r
        </mask>\r
        <g mask="url(#mask0_294_2896)">\r
          <path\r
            id="WeChat"\r
            d="M7.82548 12.2842C7.74423 12.3262 7.65278 12.3505 7.55555 12.3505C7.3305 12.3505 7.1349 12.2238 7.03219 12.0362L6.99286 11.9481L5.35436 8.26725C5.33668 8.22724 5.32573 8.18195 5.32573 8.13788C5.32573 7.96824 5.46009 7.83081 5.6258 7.83081C5.69301 7.83081 5.75526 7.85362 5.80529 7.8917L7.73882 9.30107C7.88004 9.39558 8.04883 9.45105 8.23027 9.45105C8.33858 9.45105 8.44179 9.43044 8.53808 9.39455L17.6308 5.25163C16.0009 3.28521 13.3167 2 10.2792 2C5.30849 2 1.27931 5.4375 1.27931 9.67816C1.27931 11.9915 2.49155 14.0741 4.38902 15.4817C4.54119 15.593 4.64088 15.7758 4.64088 15.9821C4.64088 16.0503 4.62659 16.1125 4.60916 16.1776C4.45762 16.7563 4.21507 17.6831 4.2038 17.7265C4.18486 17.7991 4.15534 17.875 4.15534 17.951C4.15534 18.1206 4.28958 18.2581 4.45554 18.2581C4.52055 18.2581 4.57379 18.2333 4.62873 18.2009L6.59901 17.0363C6.74722 16.9489 6.90412 16.8945 7.07706 16.8945C7.16901 16.8945 7.25787 16.9091 7.34145 16.9353C8.2606 17.206 9.25232 17.3563 10.2792 17.3563C15.2496 17.3563 19.2793 13.9186 19.2793 9.67816C19.2793 8.39372 18.9075 7.18408 18.2541 6.11999L7.89143 12.2453L7.82548 12.2842Z"\r
            fill="#1AAD19"\r
          />\r
        </g>\r
      </g>\r
    </svg>\r
  );\r
};\r
export const Iconzfb = (props: IProps) => {\r
  const { width = '17', height = '16' } = props;\r
  return (\r
    <svg width={width} height={height} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
      <path\r
        id="Combined-Shape"\r
        d="M16.0571 10.8571C16.0571 10.8571 15.5429 10.8 13.2 10.0571C12.5714 9.82857 11.7143 9.54286 10.7429 9.14286C11.3143 8.17143 11.7714 7.02857 12.0571 5.77143H8.91429V4.62857H12.8V4H8.91429V2.11429H7.31429C7.02857 2.11429 7.02857 2.4 7.02857 2.4V4H3.14286V4.62857H7.08571V5.77143H3.82857V6.4H10.1143C9.88571 7.2 9.6 7.94286 9.2 8.62857C7.14286 7.94286 4.97143 7.42857 3.65714 7.77143C2.8 8 2.22857 8.34286 1.88571 8.74286C0.342857 10.5714 1.48571 13.3714 4.62857 13.3714C6.51429 13.3714 8.34286 12.3429 9.77143 10.5714C11.8857 11.6 16.0571 13.3143 16.0571 13.3143V13.4286C16.0571 14.8571 14.9143 16 13.4857 16H2.57143C1.14286 16 0 14.8571 0 13.4286V2.57143C0 1.14286 1.14286 0 2.57143 0H13.4857C14.9143 0 16.0571 1.14286 16.0571 2.57143V10.8571ZM4.34286 12.2857C1.82857 12.2857 1.08571 10.3429 2.34286 9.25714C2.74286 8.91429 3.48571 8.74286 3.88571 8.68571C5.37143 8.51429 6.74286 9.08571 8.34286 9.88571C7.25714 11.3714 5.77143 12.2857 4.34286 12.2857Z"\r
        fill="#226BF3"\r
      />\r
    </svg>\r
  );\r
};\r
export const Zhaoshang = (props: IProps) => {\r
  const { width = '17', height = '16' } = props;\r
  return (\r
    <svg width={width} height={height} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r
      <g id="Frame" clipPath="url(#clip0_298_2903)">\r
        <path\r
          id="Vector"\r
          d="M5.107 5.70708L2.82207 11.2911H11.9064L9.62515 5.68308L7.36423 11.2172L5.10823 5.70708H5.107ZM14.0024 9.95447H15.8159C15.7821 10.0905 15.7445 10.2252 15.7033 10.3594H14.1642L14.0024 9.95447ZM13.6972 9.19447H15.9679C15.9482 9.32985 15.9242 9.46401 15.8972 9.59816H13.859L13.6972 9.19447ZM13.3913 8.43447H16.0455C16.0381 8.56924 16.027 8.70401 16.0147 8.83816H13.5544L13.3913 8.43447ZM13.0861 7.67324H16.0504C16.0553 7.78216 16.0571 7.89108 16.0571 8.00062V8.07755H13.2473L13.0855 7.67324H13.0861ZM12.7815 6.91385H15.9839C16.0024 7.04678 16.0172 7.18155 16.0282 7.31755H12.9433L12.7815 6.91262V6.91385ZM12.4762 6.15262H15.8424C15.8744 6.28678 15.9021 6.42155 15.9273 6.55755H12.6375L12.475 6.15262H12.4762ZM0.0571508 8.00062C0.0528431 4.01416 2.99069 0.633853 6.9433 0.0787758C10.8953 -0.476917 14.6522 1.96247 15.7495 5.7957H12.3335L10.3396 0.831391L8.10392 6.38524L5.8233 0.881238L1.59561 11.2905L3.32115 13.7169H12.867L14.5181 11.2412L14.307 10.7151H15.5839C14.9445 12.4862 13.7008 13.9751 12.0719 14.9198C10.4429 15.8644 8.53291 16.2042 6.67807 15.8794C4.82339 15.5561 3.14233 14.5885 1.93112 13.1472C0.719915 11.7058 0.0562786 9.88328 0.0571508 8.00062Z"\r
          fill="#C7162E"\r
        />\r
      </g>\r
      <defs>\r
        <clipPath id="clip0_298_2903">\r
          <rect width="16" height="16" fill="white" transform="translate(0.0571442)" />\r
        </clipPath>\r
      </defs>\r
    </svg>\r
  );\r
};\r
\r
export const Point = (props: IProps) => {\r
  const { width = '14', height = '14' } = props;\r
  return (\r
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 14 14" fill="none">\r
      <path\r
        d="M8.03627 12.6776C6.74046 12.193 5.65965 10.5347 5.11871 9.56344C4.88515 9.14408 5.00818 8.62894 5.38301 8.32908C5.80081 7.99486 6.40308 8.0282 6.78142 8.40654L7.21367 8.83878V5.6855C7.21367 5.30691 7.52058 5 7.89917 5C8.27775 5 8.58467 5.30691 8.58467 5.6855V7.33069C8.58467 6.9521 8.89158 6.64519 9.27016 6.64519C9.64875 6.64519 9.95566 6.9521 9.95566 7.33069V7.87909C9.95566 7.5005 10.2626 7.19359 10.6412 7.19359C11.0197 7.19359 11.3267 7.5005 11.3267 7.87909V8.42749C11.3267 8.0489 11.6336 7.74199 12.0122 7.74199C12.3907 7.74199 12.6976 8.0489 12.6976 8.42749V10.5849C12.6976 10.8784 12.6251 11.1684 12.4559 11.4082C12.1753 11.8061 11.6708 12.4126 11.0525 12.6776C10.0928 13.0889 9.23454 13.1257 8.03627 12.6776Z"\r
        stroke="#2E64FA"\r
        strokeLinecap="round"\r
        strokeLinejoin="round"\r
      />\r
      <path d="M3.16699 1L3.16699 6" stroke="#2E64FA" strokeLinecap="round" strokeLinejoin="round" />\r
      <path d="M2.00016 2.16675L3.16683 1L4.3335 2.16667" stroke="#2E64FA" strokeLinecap="round" strokeLinejoin="round" />\r
      <path d="M4.3335 6L3.16683 7.16667L2.00016 6" stroke="#2E64FA" strokeLinecap="round" strokeLinejoin="round" />\r
    </svg>\r
  );\r
};\r
\r
export const UploadPdf = (props: IProps) => {\r
  const { width = '20', height = '20' } = props;\r
  return (\r
    <svg width={width} height={height} viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">\r
      <path\r
        d="M3 11C3 8.79086 4.79086 7 7 7H15.75H29.0041C29.9687 7 30.9009 7.3486 31.6288 7.98158L35.1212 11.0184C35.8491 11.6514 36.7813 12 37.7459 12H50C52.2091 12 54 13.7909 54 16V52C54 54.2091 52.2091 56 50 56H7C4.79086 56 3 54.2091 3 52V11Z"\r
        fill="#2E64FA"\r
      />\r
      <path\r
        d="M12.201 21.9564C12.6725 20.2118 14.2552 19 16.0624 19H60.7754C63.4091 19 65.324 21.5012 64.6369 24.0436L56.799 53.0436C56.3275 54.7882 54.7448 56 52.9376 56H8.2246C5.5909 56 3.67599 53.4988 4.36314 50.9564L12.201 21.9564Z"\r
        fill="url(#paint0_linear_2865_1777)"\r
      />\r
      <path\r
        d="M12.201 21.9564C12.6725 20.2118 14.2552 19 16.0624 19H60.7754C63.4091 19 65.324 21.5012 64.6369 24.0436L56.799 53.0436C56.3275 54.7882 54.7448 56 52.9376 56H8.2246C5.5909 56 3.67599 53.4988 4.36314 50.9564L12.201 21.9564Z"\r
        fill="url(#paint1_linear_2865_1777)"\r
      />\r
      <mask id="mask0_2865_1777" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="3" y="19" width="53" height="37">\r
        <rect x="3" y="19" width="53" height="37" rx="4" fill="url(#paint2_linear_2865_1777)" />\r
      </mask>\r
      <g mask="url(#mask0_2865_1777)">\r
        <path d="M29 37H18" stroke="white" strokeWidth="3" strokeLinecap="round" />\r
        <path d="M24 43H16" stroke="white" strokeWidth="3" strokeLinecap="round" />\r
        <circle cx="47.5" cy="45.5" r="13.5" fill="#A6BDE5" />\r
      </g>\r
      <circle cx="50.5" cy="45.5" r="13.5" fill="#FFBB3F" />\r
      <path d="M47 44L51 40L55 44" stroke="white" strokeWidth="3" strokeLinecap="round" />\r
      <path d="M51 42V52.5" stroke="white" strokeWidth="3" strokeLinecap="round" />\r
      <defs>\r
        <linearGradient id="paint0_linear_2865_1777" x1="53.9417" y1="19" x2="11.9832" y2="46.7173" gradientUnits="userSpaceOnUse">\r
          <stop stopColor="#E2FEDD" />\r
          <stop offset="1" stopColor="#C8F69A" />\r
        </linearGradient>\r
        <linearGradient id="paint1_linear_2865_1777" x1="63.5534" y1="19" x2="19.2379" y2="53.7977" gradientUnits="userSpaceOnUse">\r
          <stop stopColor="#CFE4FF" />\r
          <stop offset="1" stopColor="#A0C1FF" />\r
        </linearGradient>\r
        <linearGradient id="paint2_linear_2865_1777" x1="53.9418" y1="19" x2="11.9832" y2="46.7173" gradientUnits="userSpaceOnUse">\r
          <stop stopColor="#CFE4FF" />\r
          <stop offset="1" stopColor="#A0C1FF" />\r
        </linearGradient>\r
      </defs>\r
    </svg>\r
  );\r
};\r
export const UploadImage = (props: IProps) => {\r
  const { width = '20', height = '20' } = props;\r
  return (\r
    <svg width={width} height={height} viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">\r
      <rect x="3" y="9" width="41" height="47" rx="4" fill="#2E64FA" />\r
      <rect x="3" y="19" width="53" height="37" rx="4" fill="url(#paint0_linear_2831_2138)" />\r
      <mask id="mask0_2831_2138" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="3" y="19" width="53" height="37">\r
        <rect x="3" y="19" width="53" height="37" rx="4" fill="url(#paint1_linear_2831_2138)" />\r
      </mask>\r
      <g mask="url(#mask0_2831_2138)">\r
        <path d="M2 39L9.35294 42L14.2549 39L27 45" stroke="white" strokeWidth="3" strokeLinecap="round" />\r
        <circle cx="49.5" cy="46.5" r="14.5" fill="#A6BDE5" />\r
      </g>\r
      <circle cx="51.5" cy="46.5" r="13.5" fill="#FFBB3F" />\r
      <path d="M48 44L52 40L56 44" stroke="white" strokeWidth="3" strokeLinecap="round" />\r
      <path d="M52 42V52.5" stroke="white" strokeWidth="3" strokeLinecap="round" />\r
      <defs>\r
        <linearGradient id="paint0_linear_2831_2138" x1="53.9418" y1="19" x2="11.9832" y2="46.7173" gradientUnits="userSpaceOnUse">\r
          <stop stopColor="#CFE4FF" />\r
          <stop offset="1" stopColor="#A0C1FF" />\r
        </linearGradient>\r
        <linearGradient id="paint1_linear_2831_2138" x1="53.9418" y1="19" x2="11.9832" y2="46.7173" gradientUnits="userSpaceOnUse">\r
          <stop stopColor="#CFE4FF" />\r
          <stop offset="1" stopColor="#A0C1FF" />\r
        </linearGradient>\r
      </defs>\r
    </svg>\r
  );\r
};\r
export const UploadExcel = (props: IProps) => {\r
  const { width = '20', height = '20' } = props;\r
  return (\r
    <svg width={width} height={height} viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">\r
      <path\r
        d="M3 11C3 8.79086 4.79086 7 7 7H15.75H29.0041C29.9687 7 30.9009 7.3486 31.6288 7.98158L35.1212 11.0184C35.8491 11.6514 36.7813 12 37.7459 12H50C52.2091 12 54 13.7909 54 16V52C54 54.2091 52.2091 56 50 56H7C4.79086 56 3 54.2091 3 52V11Z"\r
        fill="#1EAF69"\r
      />\r
      <path\r
        d="M12.201 21.9564C12.6725 20.2118 14.2552 19 16.0624 19H60.7754C63.4091 19 65.324 21.5012 64.6369 24.0436L56.799 53.0436C56.3275 54.7882 54.7448 56 52.9376 56H8.2246C5.5909 56 3.67599 53.4988 4.36314 50.9564L12.201 21.9564Z"\r
        fill="url(#paint0_linear_2850_2797)"\r
      />\r
      <mask id="mask0_2850_2797" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="3" y="19" width="53" height="37">\r
        <rect x="3" y="19" width="53" height="37" rx="4" fill="url(#paint1_linear_2850_2797)" />\r
      </mask>\r
      <g mask="url(#mask0_2850_2797)">\r
        <path d="M18 36L18 48" stroke="white" strokeWidth="3" strokeLinecap="round" />\r
        <path d="M26 36H18" stroke="white" strokeWidth="3" strokeLinecap="round" />\r
        <path d="M26 42H18" stroke="white" strokeWidth="3" strokeLinecap="round" />\r
        <path d="M26 48H18" stroke="white" strokeWidth="3" strokeLinecap="round" />\r
        <circle cx="47.5" cy="45.5" r="13.5" fill="#A6E777" />\r
      </g>\r
      <circle cx="50.5" cy="45.5" r="13.5" fill="#1EAF69" />\r
      <path d="M48 44L52 40L56 44" stroke="white" strokeWidth="3" strokeLinecap="round" />\r
      <path d="M52 42V52.5" stroke="white" strokeWidth="3" strokeLinecap="round" />\r
      <defs>\r
        <linearGradient id="paint0_linear_2850_2797" x1="53.9417" y1="19" x2="11.9832" y2="46.7173" gradientUnits="userSpaceOnUse">\r
          <stop stopColor="#E2FEDD" />\r
          <stop offset="1" stopColor="#C8F69A" />\r
        </linearGradient>\r
        <linearGradient id="paint1_linear_2850_2797" x1="53.9418" y1="19" x2="11.9832" y2="46.7173" gradientUnits="userSpaceOnUse">\r
          <stop stopColor="#CFE4FF" />\r
          <stop offset="1" stopColor="#A0C1FF" />\r
        </linearGradient>\r
      </defs>\r
    </svg>\r
  );\r
};\r
`},43559:function(a,r){r.Z=`import React from 'react';
import { Minsheng, Pingan, Iconwx, Iconzfb, Zhaoshang, Point } from './material';
import { UploadPdf, UploadImage, UploadExcel } from './material';
import { Export, Return, AddOne, Audit, Clear, Download, Female, Male, PreviewOpen, PreviewCloseOne, Upload } from '@icon-park/react';
import { Delete, Setting, Excel, FilePdf, BackgroundColor, Home, ChartPieOne, BookmarkOne, DataArrival } from '@icon-park/react';
import { TicketsTwo, Bank, ShieldAdd, Swipe, SettingTwo, DataFour, Currency, CheckOne, CloseOne, UTurnLeft } from '@icon-park/react';
import { Caution, RotateOne, Edit, Check, Close, UserBusiness, ArrowRight, More, DeleteOne, Search, Help } from '@icon-park/react';
import { Attention, FileAddition, CooperativeHandshake, FileSuccess, Right, Peoples, UserToUserTransmission } from '@icon-park/react';
import { PeoplePlus, Consume, MapRoadTwo, EditTwo, AddPrint, Family, CopyOne, ExpensesOne, FullScreenOne, Copy } from '@icon-park/react';
import { City, Alarm, Deposit, TicketOne, Protect, Alipay, User, Lock, FolderOpen, DoubleDown, DoubleUp, Press } from '@icon-park/react';
import { RobotOne, Power, History, Communication, Newlybuild, Left, Editor, ApiApp, Workbench, Booth, Order } from '@icon-park/react';
import { FileStaff, Send, Local, Handbag, EveryUser, Passport, NewspaperFolding, Copyright, WritingFluently } from '@icon-park/react';
import { Platte, ArrowUp, Logout, Down, CheckCorrect, Square, Switch, MenuFoldOne, MenuUnfoldOne } from '@icon-park/react';
import { HamburgerButton, ListTwo, SwitchButton, Clue, Comment } from '@icon-park/react';
/** Icon \u96C6\u5408 */
export const iconRally = [
  // \u81EA\u7814icon
  { name: 'Minsheng', element: (props: any) => Minsheng(props) },
  { name: 'Pingan', element: (props: any) => Pingan(props) },
  { name: 'Iconwx', element: (props: any) => Iconwx(props) },
  { name: 'Iconzfb', element: (props: any) => Iconzfb(props) },
  { name: 'Zhaoshang', element: (props: any) => Zhaoshang(props) },
  { name: 'Point', element: (props: any) => Point(props) },
  { name: 'UploadPdf', element: (props: any) => <UploadPdf {...props} /> },
  { name: 'UploadImage', element: (props: any) => <UploadImage {...props} /> },
  { name: 'UploadExcel', element: (props: any) => <UploadExcel {...props} /> },
  // icon-park
  { name: 'Export', element: (props: any) => <Export {...props} /> },
  { name: 'Return', element: (props: any) => <Return {...props} /> },
  { name: 'AddOne', element: (props: any) => <AddOne {...props} /> },
  { name: 'Audit', element: (props: any) => <Audit {...props} /> },
  { name: 'Clear', element: (props: any) => <Clear {...props} /> },
  { name: 'Download', element: (props: any) => <Download {...props} /> },
  { name: 'Female', element: (props: any) => <Female {...props} /> },
  { name: 'Male', element: (props: any) => <Male {...props} /> },
  { name: 'PreviewOpen', element: (props: any) => <PreviewOpen {...props} /> },
  { name: 'PreviewCloseOne', element: (props: any) => <PreviewCloseOne {...props} /> },
  { name: 'Upload', element: (props: any) => <Upload {...props} /> },
  { name: 'Delete', element: (props: any) => <Delete {...props} /> },
  { name: 'Setting', element: (props: any) => <Setting {...props} /> },
  { name: 'Excel', element: (props: any) => <Excel {...props} /> },
  { name: 'FilePdf', element: (props: any) => <FilePdf {...props} /> },
  { name: 'TicketsTwo', element: (props: any) => <TicketsTwo {...props} /> },
  { name: 'BackgroundColor', element: (props: any) => <BackgroundColor {...props} /> },
  { name: 'Home', element: (props: any) => <Home {...props} /> },
  { name: 'ChartPieOne', element: (props: any) => <ChartPieOne {...props} /> },
  { name: 'BookmarkOne', element: (props: any) => <BookmarkOne {...props} /> },
  { name: 'DataArrival', element: (props: any) => <DataArrival {...props} /> },
  { name: 'Bank', element: (props: any) => <Bank {...props} /> },
  { name: 'ShieldAdd', element: (props: any) => <ShieldAdd {...props} /> },
  { name: 'Swipe', element: (props: any) => <Swipe {...props} /> },
  { name: 'SettingTwo', element: (props: any) => <SettingTwo {...props} /> },
  { name: 'DataFour', element: (props: any) => <DataFour {...props} /> },
  { name: 'Currency', element: (props: any) => <Currency {...props} /> },
  { name: 'CheckOne', element: (props: any) => <CheckOne {...props} /> },
  { name: 'CloseOne', element: (props: any) => <CloseOne {...props} /> },
  { name: 'UTurnLeft', element: (props: any) => <UTurnLeft {...props} /> },
  { name: 'Caution', element: (props: any) => <Caution {...props} /> },
  { name: 'RotateOne', element: (props: any) => <RotateOne {...props} /> },
  { name: 'Edit', element: (props: any) => <Edit {...props} /> },
  { name: 'Check', element: (props: any) => <Check {...props} /> },
  { name: 'Close', element: (props: any) => <Close {...props} /> },
  { name: 'UserBusiness', element: (props: any) => <UserBusiness {...props} /> },
  { name: 'ArrowRight', element: (props: any) => <ArrowRight {...props} /> },
  { name: 'More', element: (props: any) => <More {...props} /> },
  { name: 'DeleteOne', element: (props: any) => <DeleteOne {...props} /> },
  { name: 'Search', element: (props: any) => <Search {...props} /> },
  { name: 'Help', element: (props: any) => <Help {...props} /> },
  { name: 'Attention', element: (props: any) => <Attention {...props} /> },
  { name: 'FileAddition', element: (props: any) => <FileAddition {...props} /> },
  { name: 'CooperativeHandshake', element: (props: any) => <CooperativeHandshake {...props} /> },
  { name: 'FileSuccess', element: (props: any) => <FileSuccess {...props} /> },
  { name: 'Right', element: (props: any) => <Right {...props} /> },
  { name: 'Peoples', element: (props: any) => <Peoples {...props} /> },
  { name: 'UserToUserTransmission', element: (props: any) => <UserToUserTransmission {...props} /> },
  { name: 'PeoplePlus', element: (props: any) => <PeoplePlus {...props} /> },
  { name: 'Consume', element: (props: any) => <Consume {...props} /> },
  { name: 'MapRoadTwo', element: (props: any) => <MapRoadTwo {...props} /> },
  { name: 'EditTwo', element: (props: any) => <EditTwo {...props} /> },
  { name: 'AddPrint', element: (props: any) => <AddPrint {...props} /> },
  { name: 'Family', element: (props: any) => <Family {...props} /> },
  { name: 'CopyOne', element: (props: any) => <CopyOne {...props} /> },
  { name: 'ExpensesOne', element: (props: any) => <ExpensesOne {...props} /> },
  { name: 'FullScreenOne', element: (props: any) => <FullScreenOne {...props} /> },
  { name: 'Copy', element: (props: any) => <Copy {...props} /> },
  { name: 'City', element: (props: any) => <City {...props} /> },
  { name: 'Alarm', element: (props: any) => <Alarm {...props} /> },
  { name: 'Deposit', element: (props: any) => <Deposit {...props} /> },
  { name: 'TicketOne', element: (props: any) => <TicketOne {...props} /> },
  { name: 'Protect', element: (props: any) => <Protect {...props} /> },
  { name: 'Alipay', element: (props: any) => <Alipay {...props} /> },
  { name: 'User', element: (props: any) => <User {...props} /> },
  { name: 'Lock', element: (props: any) => <Lock {...props} /> },
  { name: 'FolderOpen', element: (props: any) => <FolderOpen {...props} /> },
  { name: 'DoubleDown', element: (props: any) => <DoubleDown {...props} /> },
  { name: 'DoubleUp', element: (props: any) => <DoubleUp {...props} /> },
  { name: 'Press', element: (props: any) => <Press {...props} /> },
  { name: 'RobotOne', element: (props: any) => <RobotOne {...props} /> },
  { name: 'Power', element: (props: any) => <Power {...props} /> },
  { name: 'History', element: (props: any) => <History {...props} /> },
  { name: 'Communication', element: (props: any) => <Communication {...props} /> },
  { name: 'Newlybuild', element: (props: any) => <Newlybuild {...props} /> },
  { name: 'Left', element: (props: any) => <Left {...props} /> },
  { name: 'Editor', element: (props: any) => <Editor {...props} /> },
  { name: 'ApiApp', element: (props: any) => <ApiApp {...props} /> },
  { name: 'Workbench', element: (props: any) => <Workbench {...props} /> },
  { name: 'Booth', element: (props: any) => <Booth {...props} /> },
  { name: 'Order', element: (props: any) => <Order {...props} /> },
  { name: 'FileStaff', element: (props: any) => <FileStaff {...props} /> },
  { name: 'Send', element: (props: any) => <Send {...props} /> },
  { name: 'Local', element: (props: any) => <Local {...props} /> },
  { name: 'Handbag', element: (props: any) => <Handbag {...props} /> },
  { name: 'EveryUser', element: (props: any) => <EveryUser {...props} /> },
  { name: 'Passport', element: (props: any) => <Passport {...props} /> },
  { name: 'NewspaperFolding', element: (props: any) => <NewspaperFolding {...props} /> },
  { name: 'Copyright', element: (props: any) => <Copyright {...props} /> },
  { name: 'WritingFluently', element: (props: any) => <WritingFluently {...props} /> },
  { name: 'Platte', element: (props: any) => <Platte {...props} /> },
  { name: 'ArrowUp', element: (props: any) => <ArrowUp {...props} /> },
  { name: 'Logout', element: (props: any) => <Logout {...props} /> },
  { name: 'Down', element: (props: any) => <Down {...props} /> },
  { name: 'CheckCorrect', element: (props: any) => <CheckCorrect {...props} /> },
  { name: 'Square', element: (props: any) => <Square {...props} /> },
  { name: 'Switch', element: (props: any) => <Switch {...props} /> },
  { name: 'MenuFoldOne', element: (props: any) => <MenuFoldOne {...props} /> },
  { name: 'MenuUnfoldOne', element: (props: any) => <MenuUnfoldOne {...props} /> },
  { name: 'HamburgerButton', element: (props: any) => <HamburgerButton {...props} /> },
  { name: 'ListTwo', element: (props: any) => <ListTwo {...props} /> },
  { name: 'SwitchButton', element: (props: any) => <SwitchButton {...props} /> },
  { name: 'Clue', element: (props: any) => <Clue {...props} /> },
  { name: 'Comment', element: (props: any) => <Comment {...props} /> },
];
`}}]);
