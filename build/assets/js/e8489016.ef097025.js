"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[6650],{5840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var s=t(7624),o=t(2172);const c={},r=void 0,a={id:"Reference/Misc/Language",title:"Language",description:"LeakyModule",source:"@site/docs/Reference/Misc/Language.md",sourceDirName:"Reference/Misc",slug:"/Reference/Misc/Language",permalink:"/wlx-docs/docs/Reference/Misc/Language",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708366829,formattedLastUpdatedAt:"Feb 19, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/wlx-docs/docs/Reference/Misc/Events"},next:{title:"Promise",permalink:"/wlx-docs/docs/Reference/Misc/Promise"}},i={},l=[{value:"<code>LeakyModule</code>",id:"leakymodule",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"<<JerryI`Misc`Language`\n"})}),"\n",(0,s.jsx)(n.h2,{id:"leakymodule",children:(0,s.jsx)(n.code,{children:"LeakyModule"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["a ",(0,s.jsx)(n.code,{children:"Module"})," that cause memory leaks on purpose"]})}),"\n",(0,s.jsxs)(n.p,{children:["A variation of ",(0,s.jsx)(n.code,{children:"Module"}),", which comes with its own garbage collector, that prevents symbols from being purged by WL"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"LeakyModule[symbols_List, expr_, opts___] _\n"})}),"\n",(0,s.jsx)(n.p,{children:"The only difference compared to traditional module-function is an optional argument"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"Garbage" :> _List'})," a held symbol, that points to a list."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Then a user can manually purge them."})]})}function u(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var s=t(1504);const o={},c=s.createContext(o);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);