"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[4648],{7996:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(7624),i=t(2172);const o={sidebar_position:4},l="Components",a={id:"WLX/components",title:"Components",description:"In general it is not opinionated on how you organize your components as files or as functions. This sub-package is optional and represents only one of the possible ways.",source:"@site/docs/WLX/components.md",sourceDirName:"WLX",slug:"/WLX/components",permalink:"/wlx-docs/docs/WLX/components",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708366829,formattedLastUpdatedAt:"Feb 19, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Scoping",permalink:"/wlx-docs/docs/WLX/scoping"},next:{title:"Running WL in a browser",permalink:"/wlx-docs/docs/WLX/interpeter"}},r={},c=[{value:"Passing named XML attributes",id:"passing-named-xml-attributes",level:2},{value:"Passing children as down-values",id:"passing-children-as-down-values",level:2},{value:"<code>$FirstChild</code>",id:"firstchild",level:3},{value:"<code>$Children</code>",id:"children",level:3},{value:"<code>$Options</code>",id:"options",level:3},{value:"Component with internal state",id:"component-with-internal-state",level:2},{value:"Export multiple entities",id:"export-multiple-entities",level:3},{value:"Context manipulation",id:"context-manipulation",level:3},{value:"Scoping",id:"scoping",level:2},{value:"Caching",id:"caching",level:2},{value:"Path resolution",id:"path-resolution",level:2},{value:"UNIX / WIN / WEB",id:"unix--win--web",level:3},{value:"Nested folders",id:"nested-folders",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"components",children:"Components"}),"\n",(0,s.jsx)(n.p,{children:"In general it is not opinionated on how you organize your components as files or as functions. This sub-package is optional and represents only one of the possible ways."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"One of the key features is idea of reusable components borrowed from React. There is an in-build structure to embed other WLX scripts into the each other as Wolfram Language expressions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"<<JerryI`WLX`Importer\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then you can import other ",(0,s.jsx)(n.code,{children:"wlx"})," scripts as components into your other scripts, which becomes basically a crafted WL function in the end."]}),"\n",(0,s.jsx)(n.p,{children:"Another benefit is to join the data representation template, controllers and other logic into a single component. It does not necessarily mean a single file, but a folder as well."}),"\n",(0,s.jsx)(n.h2,{id:"passing-named-xml-attributes",children:"Passing named XML attributes"}),"\n",(0,s.jsx)(n.p,{children:"Let us start from the example. We have a component, that makes italic labels"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="label.wlx"',children:'Text = $Options["Text"];\n\n<i>\n\t<TextString>\n\t\t<Text/>\n\t</TextString>\n</i>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then, one can import it in some other ",(0,s.jsx)(n.code,{children:".wlx"})," file"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'Label := ImportComponent["label.wlx"]\n\n<body>\n\t<Label Text={"Hello World"}/>\n</body>\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["The difference between ",(0,s.jsx)(n.code,{children:"Set"})," and ",(0,s.jsx)(n.code,{children:"SetDelayed"})," is the same as in Wolfram Language. If imported component has to generate something with passed arguments - use ",(0,s.jsx)(n.code,{children:"SetDelayed"}),", if it generates the result immediately ",(0,s.jsx)(n.strong,{children:"or other function"})," - use ",(0,s.jsx)(n.code,{children:"Set"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["It looks similar to what we had in ",(0,s.jsx)(n.a,{href:"/wlx-docs/docs/WLX/basics#Options",children:"Basics / Options"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This is done in a way, that feels like a regular XML attribute. Or one can pass any valid Wolfram Expression as well"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'Label := ImportComponent["label.wlx"]\n\n<body>\n\t<Label Text={Now}/>\n</body>\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Do not be afraid to import many nested components, since the result of ",(0,s.jsx)(n.code,{children:"ImportComponent"})," is parsed once into a regular Wolfram Expression and stored in cache. See ",(0,s.jsx)(n.a,{href:"#Caching",children:"Caching"})]})}),"\n",(0,s.jsx)(n.h2,{id:"passing-children-as-down-values",children:"Passing children as down-values"}),"\n",(0,s.jsxs)(n.p,{children:["To construct a component that uses a normal tags with possibly nested structure - use ",(0,s.jsx)(n.code,{children:"SetDelayed"})," on ",(0,s.jsx)(n.code,{children:"ImportComponent"}),". See an example"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="label.wlx"',children:"<i>\n\t<TextString>\n\t\t<$Children/>\n\t</TextString>\n</i>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then modify the main script as"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'Label := ImportComponent["label.wlx"]\n\n<body>\n\t<Label>\n\t\t<Now/>\n\t</Label>\n</body>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Now ",(0,s.jsx)(n.code,{children:"Label"})," works like a regular symbol with down-values, i.e. one can also do that"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"Label[Now]\n"})}),"\n",(0,s.jsx)(n.p,{children:"There are a few predefined keywords to have an access to the child elements"}),"\n",(0,s.jsx)(n.h3,{id:"firstchild",children:(0,s.jsx)(n.code,{children:"$FirstChild"})}),"\n",(0,s.jsxs)(n.p,{children:["Gets ",(0,s.jsx)(n.strong,{children:"the first"})," passed argument"]}),"\n",(0,s.jsx)(n.h3,{id:"children",children:(0,s.jsx)(n.code,{children:"$Children"})}),"\n",(0,s.jsxs)(n.p,{children:["Gets ",(0,s.jsx)(n.strong,{children:"all passed arguments (-child elements) as a list"})]}),"\n",(0,s.jsx)(n.h3,{id:"options",children:(0,s.jsx)(n.code,{children:"$Options"})}),"\n",(0,s.jsx)(n.p,{children:"Get all options passed to a component"}),"\n",(0,s.jsx)(n.h2,{id:"component-with-internal-state",children:"Component with internal state"}),"\n",(0,s.jsx)(n.p,{children:"Quite often one might find useful to keep the whole logic within a single component. Needless to say to store an internal state this construction comes handy"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Component.wlx"',children:'(*/* !!! Will be executed once and stored */*)\n\nState = False;\n\nComponent[OptionsPattern[]] := With[{Mutator = OptionsValue["Mutator"]},\n\t(*/* !!! Will be executed each time you call */*)\n\t\n\tState = Mutator[State];\n\t(*/* so something with a given parameters and etc... */*)\n\n\t<h1>\n\t\t<State/>\n\t</h1>\t\t\t\t\t\t\t\t   \n]\n\nOptions[Component] = {"Mutator" -> Identity}\n\nComponent (*/* exported */*)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Here the last line returns our generated function. In the main file we can import it once using basic ",(0,s.jsx)(n.code,{children:"Set"})," expression, i.e."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'MyComponent = ImportComponent["Component.wlx"];\n\nmutate[state_] := !state;\n\n...\nrequestHandler[__] := With[{},\n\t<body>\n\t\t<MyComponent Mutator={mutate}/>\n\t</body>\n];\n\n...\n'})}),"\n",(0,s.jsx)(n.p,{children:"It comes handy, when you need to generate multiple responses for incoming requests and share the internal state of a single component between."}),"\n",(0,s.jsx)(n.h3,{id:"export-multiple-entities",children:"Export multiple entities"}),"\n",(0,s.jsx)(n.p,{children:"It is also absolute valid to return more than a single symbol like if it was a notebook's cell"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Component.wlx"',children:"State = ...\n\nComponent[OptionsPattern[]] := ...\nScript = ...\nWhatever = ...\n\n...\n\n{Component, Script, Whatever} (*/* exported */*)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'{MyComponent, MyScript, MyWhatever} = ImportComponent["Component.wlx"];\n'})}),"\n",(0,s.jsxs)(n.p,{children:["*technically speaking we still got a single symbol in return, which is called ",(0,s.jsx)(n.code,{children:"List"})," ;) *"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Use it if you have controllers, views or Javascript code which has to be imported as a separate symbols"})}),"\n",(0,s.jsx)(n.h3,{id:"context-manipulation",children:"Context manipulation"}),"\n",(0,s.jsx)(n.p,{children:"When designing a package or paclet or just for local context isolation, all Wolfram Language built-in tools are valid to use here as well"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",metastring:'title="Main.wl"',children:'Begin["MyContext`"]\n\nComponent = ImportComponent["Compoment.wlx"]\n\nEnd[]\n\nMyContext`Component\n'})}),"\n",(0,s.jsxs)(n.p,{children:["All rules are applied and variables generated in ",(0,s.jsx)(n.code,{children:"Component"})," will be in the given context."]}),"\n",(0,s.jsx)(n.h2,{id:"scoping",children:"Scoping"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["By the default it parses a script with ",(0,s.jsx)(n.code,{children:"Localize"})," option"]})," (see ",(0,s.jsx)(n.a,{href:"/wlx-docs/docs/WLX/scoping",children:"scoping"}),"), but one the importing function accepts this option pattern as well, so you can override it"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'Label := ImportComponent["label.wlx", "Localize"->False]\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"This is not recommended, since it will leak into the global scope"})}),"\n",(0,s.jsx)(n.h2,{id:"caching",children:"Caching"}),"\n",(0,s.jsx)(n.p,{children:"For the development / prototyping the caching is disabled. To improve the performance and lower the load for IO operations on a disk for many nested component - use global settings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"JerryI`WLX`Importer`CacheControl[True]\n"})}),"\n",(0,s.jsx)(n.p,{children:"or specify the time-interval"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'JerryI`WLX`Importer`Private`CacheControl["Minute"]\nJerryI`WLX`Importer`Private`CacheControl["Hour"]\n'})}),"\n",(0,s.jsx)(n.h2,{id:"path-resolution",children:"Path resolution"}),"\n",(0,s.jsx)(n.h3,{id:"unix--win--web",children:"UNIX / WIN / WEB"}),"\n",(0,s.jsxs)(n.p,{children:["To overcome an issue with different path representation implementations, a universal platform-dependent converter is used. Therefore ",(0,s.jsx)(n.code,{children:"ImportComponent"})," ",(0,s.jsx)(n.strong,{children:"is indifferent for the way how you write the path to a file"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"nested-folders",children:"Nested folders"}),"\n",(0,s.jsx)(n.p,{children:"When you import a component inside other component, an automatic guess happens if the given file is located in the same folder or an absolute path is used, i.e."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Root","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"Main.wlx"})}),"\n",(0,s.jsxs)(n.li,{children:["Label","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"Label.wlx"})}),"\n",(0,s.jsxs)(n.li,{children:["Components","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.em,{children:"Someother.wlx"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"and"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Main.wlx"',children:'...\n... = ImportComponent["Label/Label.wlx"]\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Label/Label.wlx"',children:'...\n... = ImportComponent["Components/Someother.wlx"]\n'})}),"\n",(0,s.jsx)(n.p,{children:"are valid."})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>l});var s=t(1504);const i={},o=s.createContext(i);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);