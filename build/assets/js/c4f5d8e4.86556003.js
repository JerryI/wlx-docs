"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[2632],{4900:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var i=t(1504),s=t(5456),a=t(867),r=t(8264),l=t(3180);const o={features:"features_frK2",featureSvg:"featureSvg_mTcY"};var c=t(1608);const d=t.p+"assets/images/ezgif.com-crop-3-f99e593487244dee3849903a5bcb7763.gif",h=t.p+"assets/images/Carrots-ezgif.com-video-to-gif-converter-95aa419d0f9fcb11e73ad88338775e5a.gif",m=t.p+"assets/images/ezgif.com-video-to-gif-30-f61d8f28872292b5d7892068dd8be5db.gif",g=t.p+"assets/images/ScreenRecording2024-02-15at22.42.49-ezgif.com-optimize-69d697e036a7da0fb090e9815bd3e731.gif";var x=t(7624);const u=[{title:"Write components with code and markup",width:"col col--6",feature:(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(c.c,{language:"jsx",showLineNumbers:!0,children:'Heading[Text_] := <h2 class="tracking-tight"><Text/></h2>;\n\n<body>\n  <Heading>\n    Hello World!\n  </Heading>\n</body>'})}),description:(0,x.jsx)(x.Fragment,{children:"HTML is simple, human-readable and straighforward. Having an XML nature it allows to write Wolfram Expressions as tags."})},{title:"Full-featured web framework for Wolfram Language",width:"col col--6",feature:(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("img",{width:"100%",src:h})}),description:(0,x.jsx)(x.Fragment,{children:"Build a component with a shared, local or global state and predictable data synchronization."})},{title:"A superset over WL and XML",width:"col col--5",feature:(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"row align--center padding-horiz--md",style:{display:"flex"},children:[(0,x.jsx)("div",{className:(0,s.c)("col col--6"),children:(0,x.jsx)(c.c,{title:"Regular WL expression",language:"wolfram",showLineNumbers:!0,children:"TextString[Now]"})}),(0,x.jsx)("div",{className:(0,s.c)("col col--6"),children:(0,x.jsx)(c.c,{title:"WLX expression",language:"jsx",showLineNumbers:!0,children:"<TextString>\n  <Now/>\n</TextString>"})})]})}),description:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("b",{children:"First child element is a first argument"})," of a given function and etc. Any self-closing tags represent an own-value or down-value with options of a symbol. Outside XML tags any WL expression is valid."]})},{title:"Passing HTML/XML attributes",width:"col col--6",feature:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.c,{language:"jsx",showLineNumbers:!0,children:'ClassName = "show";\n\n<div class="{ClassName} flex" style="color: cyan">\n      Some text...\n</div>'}),(0,x.jsx)(c.c,{language:"jsx",showLineNumbers:!0,children:'Component[OptionsPattern[]] := With[{\n  Label = OptionValue["Label"]\n}, \n  <h1><Label/></h1>\n]\n\n<Component Label={"Hello World!"}/>'})]}),description:(0,x.jsxs)(x.Fragment,{children:["A symbol ",(0,x.jsx)("i",{children:"ClassName"})," wrapped inside ",(0,x.jsx)("b",{children:"{ }"})," passed as an attrbitue to a normal HTML tag. For a normal WL function a passed XML attribute counts as an option. Unlike JSX it does not restric you on writting normal HTML, CSS, JS in the same text."]})},{title:"Use with or without Javascript",width:"col col--6",feature:(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("img",{style:{margin:"auto","padding-bottom":"1rem",display:"flex"},width:"70%",src:m})}),description:(0,x.jsx)(x.Fragment,{children:"It's your choice if you need more control over components, DOM manipulation. If not you - can still produce fancy results using bare minimum of CSS, HTML and WL."})},{title:"Take the most from both ecosystems",width:"col col--6",feature:(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(c.c,{language:"jsx",showLineNumbers:!0,children:'Columns = Table[\n    <div class="lg:pr-4">\n      <div class="text-base leading-7 text-gray-700 ">\n        <Child/>\n      </div>\n    </div>\n, {Child, $Children}]\n  \n<div class="row">\n  <Columns/>\n</div>'})}),description:(0,x.jsx)(x.Fragment,{children:"HTML/XML is a markup language by its nature. Therfore it is recommended not to use explicitly Table or If expressions inside XML tags, but rather utilize Wolfram Language for that."})},{title:"Components approach",width:"col col--5",feature:(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"col align--center padding-horiz--md",children:[(0,x.jsx)("div",{children:(0,x.jsx)(c.c,{title:"App.wlx",language:"jsx",showLineNumbers:!0,children:'Header := ImportComponent["Header.wlx"];\n(* /* use it as WL expression */ *)\n<body>\n  <Header Title={"WLX is awesome"} />\n</body>\n'})}),(0,x.jsx)("div",{children:(0,x.jsx)(c.c,{title:"Header.wlx",language:"jsx",showLineNumbers:!0,children:'Title = $Options["Title"];\n<h1>\n  <Title/>\n</h1>'})})]})}),description:(0,x.jsxs)(x.Fragment,{children:["All imported wlx scripts ",(0,x.jsx)("b",{children:"are scoped"}),", i.e. defined variables inside a component ",(0,x.jsx)("b",{children:"will not leak to the global scope"}),". You can keep all logic, template and even controllers are within the same file or folder."]})},{title:"Events system and dynamic symbols",width:"col col--6",feature:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.c,{language:"jsx",showLineNumbers:!0,children:'text     = "nothing";\nView     = TextView[Offload[text]];\nButton   = InputButton["Press me"]; \n\nEventHandler[Button, Function[Null, \n  text = RandomWord[]\n]];\n\n<div>\n    <WLJS><View/></WLJS>\n    <WLJS><Button/></WLJS>\n</div>'}),(0,x.jsx)("img",{style:{margin:"auto","padding-bottom":"1rem",display:"flex"},width:"80%",src:d})]}),description:(0,x.jsx)(x.Fragment,{})},{title:"Plots like Mathematica, but on a Web",width:"col col--6",feature:(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"col align--center padding-horiz--md",children:[(0,x.jsx)("div",{style:{"text-align":"center"},children:(0,x.jsx)("img",{style:{margin:"auto","padding-bottom":"1rem",display:"flex"},width:"80%",src:g})}),(0,x.jsx)("div",{children:(0,x.jsx)(c.c,{language:"jsx",showLineNumbers:!0,children:'Graph = Plot[Sin[x], {x, -2Pi, 2Pi}];\n\n<figure style="display: inline-block">\n    <WLJS Class={"h-auto max-w-full flex rounded-lg p-3 bg-gray-100"}>\n        <Graph/>\n    </WLJS>\n    <figcaption class="text-center gap-x-4 min-w-0 mt-1 text-xs leading-5 text-gray-500">Drag - pan, wheel - zoom</figcaption>\n</figure>\n'})})]})}),description:(0,x.jsxs)(x.Fragment,{children:["There are built-in Javascript libraries, which recreate Mathematica's ",(0,x.jsx)("b",{children:"Graphics"})," and ",(0,x.jsx)("b",{children:"Graphics3D"})," features."]})},{title:"WebUI Library",width:"col col--5",feature:(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(c.c,{language:"jsx",showLineNumbers:!0,children:'EventHandler["button", Print];\n\n<div>\n  <button\xa0id="btn" type="button">Click Me!</button>\n  <WebUIEventListener Id={"btn"} Event={"button"} />\n</div>\n'})}),description:(0,x.jsx)(x.Fragment,{children:"A set of small components are willing to help your buttons, sliders come alive."})}];function p(e){let{feature:n,title:t,description:i,width:a}=e;return(0,x.jsxs)("div",{className:(0,s.c)(a),style:{"padding-top":"1em"},children:[(0,x.jsx)("div",{children:n}),(0,x.jsxs)("div",{className:"text--center padding-horiz--md",children:[(0,x.jsx)("h3",{style:{color:"var(--ifm-color-primary)"},children:t}),(0,x.jsx)("p",{children:i})]})]})}function f(){return(0,x.jsx)("section",{className:o.features,children:(0,x.jsx)("div",{className:"container",children:(0,x.jsx)("div",{className:"row",children:u.map(((e,n)=>(0,x.jsx)(p,{...e},n)))})})})}t(8684);const j={heroBanner:"heroBanner_qdFl",wljscols:"wljscols_Wk5T",buttons:"buttons_AeoN",container:"container_bfhl"};function b(){const{siteConfig:e}=(0,r.c)(),[n,t]=(0,i.useState)(!1);return(0,x.jsx)("header",{className:(0,s.c)("hero hero--primary",j.heroBanner),style:{"background-color":"var(--ifm-background-color)"},children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsxs)("svg",{width:"500",height:"500",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 156.2 122.8",fill:"var(--ifm-color-primary)",children:[(0,x.jsx)("path",{"fill-rule":"evenodd",id:"wolf",class:"st1",d:"M78.9,41.2c0,0-0.8-5-1.4-6.8c3.8-3.7,4.4-4.3,8.1-7.8c0.3,7.1,0.1,10.8-0.3,19.5 C83.2,43.9,78.9,41.2,78.9,41.2z M62.3,65.7c0,0-4-2.4-7-2.8c0.9-2,3.1-4.6,3.7-5.3c-1.1,0.4-9.4,4.1-10.2,7.2 c2.3,0.6,4.6,1.3,6.8,2.3c-3,3.4-4.8,7.6-5.3,12.1c0,0,13.1-2,22.9-0.7c0.2,0.1,0.4,0.2,0.6,0.1l5.1,0.1l16.3,27.1l0.1,0.2 c0,0,0,0,0,0c-30.7,11.1-52.8-9.3-57.6-16.5c0-0.1,0-0.1,0-0.2c4.3-18,9.5-39.5,18-45.9c4.4-7.7,5.7-19.1,13.6-25 c2,6,5.1,18.3,7.3,24.3c9.4,9.4,23.6,21,33.1,25.9c1,0.6,2.3,4.6,2.3,4.6l-3.8,4.8l-40.9-4.1c-0.9-0.1-1.8-0.1-2.7-0.1 c-2.8,0-5.7,0.3-8.5,0.8C58,69.7,62.3,65.7,62.3,65.7z M75.5,60.4c2.3-0.3,4.7,0.6,7.4,2.1c2.6-0.7,2.8-0.9,5.4-1.6 c-3.3-2.4-6.8-5-11.7-4.3C76.2,57.9,75.8,59.2,75.5,60.4L75.5,60.4z"}),(0,x.jsx)("g",{children:(0,x.jsx)("polygon",{class:"st2",points:"27,95.4 5.9,61.8 26.8,28.7 31.5,28.7 10.7,61.8 31.6,95.3 \t"})}),(0,x.jsx)("g",{children:(0,x.jsx)("polygon",{class:"st2",points:"102.4,51.7 112.2,11.1 117.7,5.6 107,49.5 105.9,54.2 \t"})}),(0,x.jsx)("g",{children:(0,x.jsx)("polygon",{class:"st2",points:"125.9,95.2 146.9,61.6 126,28.5 121.3,28.5 142.2,61.6 121.2,95.1 \t"})})]}),(0,x.jsx)("h1",{className:"hero__title",style:{color:"var(--ifm-color-primary)"},children:"Wolfram Language XML"}),(0,x.jsx)("p",{className:"hero__subtitle",style:{color:"var(--ifm-color-primary-text)",marginTop:"-0.6em",paddingBottom:"0.6em"},children:"A syntax extension for Wolfram Language that lets you write HTML-like markup inside a Wolfram Language Script like JSX."}),(0,x.jsx)("div",{className:j.buttons,children:(0,x.jsx)(a.c,{className:"button button--secondary button--lg",style:{background:"var(--ifm-color-primary-button)","box-shadow":"0 0 31px -14px rgba(0, 0, 0, 0.8)",color:"var(--ifm-color-primary-text-alt)"},to:"/docs/WLX/install",children:"Getting started"})})]})})}function w(){const{siteConfig:e}=(0,r.c)();return(0,x.jsxs)(l.c,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />",children:[(0,x.jsx)(b,{}),(0,x.jsx)("main",{children:(0,x.jsx)(f,{})})]})}}}]);