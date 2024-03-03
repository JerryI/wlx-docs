"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[2040],{8016:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(7624),i=t(2172);const r={sidebar_position:5},l="Running WL in a browser",a={id:"WLX/interpeter",title:"Running WL in a browser",description:"There is a set of JS and WL libraries, which originally designed for WLJS Notebook project. It comes with a tiny Wolfram Language interpreter written in Javascript. It covers most needs in small numeric calculations, plotting and dynamics. To unlock full potential see dynamics section.",source:"@site/docs/WLX/interpeter.md",sourceDirName:"WLX",slug:"/WLX/interpeter",permalink:"/wlx-docs/docs/WLX/interpeter",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708366829,formattedLastUpdatedAt:"Feb 19, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Components",permalink:"/wlx-docs/docs/WLX/components"},next:{title:"Dynamics and interactivity",permalink:"/wlx-docs/docs/WLX/dynamics"}},o={},c=[{value:"Preparations",id:"preparations",level:2},{value:"Page design",id:"page-design",level:2},{value:"Usage",id:"usage",level:2},{value:"Styling",id:"styling",level:2},{value:"Inputs, buttons, UI...?",id:"inputs-buttons-ui",level:2},{value:"A note on Javascript functions",id:"a-note-on-javascript-functions",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"running-wl-in-a-browser",children:"Running WL in a browser"}),"\n",(0,s.jsxs)(n.p,{children:["There is a set of JS and WL libraries, which originally designed for WLJS Notebook project. It comes with a tiny ",(0,s.jsx)(n.a,{href:"https://github.com/JerryI/wljs-interpreter",children:"Wolfram Language interpreter written in Javascript"}),". It covers most needs in small numeric calculations, plotting and dynamics. To unlock full potential see ",(0,s.jsx)(n.a,{href:"/wlx-docs/docs/WLX/dynamics",children:"dynamics"})," section."]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("summary",{children:"A shortcut"}),(0,s.jsx)(n.br,{}),"\n","If you have git installed. Simply clone"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/JerryI/wl-wlx\ncd wl-wlx\nwolframscript -f Examples/WLJSBasic/WLJSBasic.wls\n"})}),(0,s.jsx)(n.p,{children:"that will run the simplest example possible"})]}),"\n",(0,s.jsx)(n.h2,{id:"preparations",children:"Preparations"}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsxs)(n.p,{children:["The packages used in this tutorial cannot be downloaded using native Wolfram Paclet manager. Please consider to use ",(0,s.jsx)(n.a,{href:"https://github.com/JerryI/wl-localpackages",children:"LPM"})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'Get["https://raw.githubusercontent.com/JerryI/wl-localpackages/main/Kernel/LPM.wl"]\n(* or just download this will and add it to your project *)\n'})})]}),"\n",(0,s.jsx)(n.p,{children:"In order to scope all libraries to your project and provide paths to necessary CSS tables and Javascript files we need to add a couple of libraries"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'(* LPM Autoinstall and cache *)\nUncompress["1:eJx1T8tuwjAQDBT1wo0/6Ac0vveKKAoNCJoDZ5NugsXGtrwbBf6edawKLlzG+5rxzMfJ/TZvWZbRVKBomkms5wLfBmF1NcR0qN6lL/fbfMC0j4Q18\nPM80mkmcDR8TlexK0Ug7SKnAh5f9F0aRoGi8y5wVUp5Zvb0pVTQQ96KTn/qCULtLIPlvHad2kAIt0IN+Imu1uh1fdEtkOq0seoHggVUydForuJgbJsCLgSWTj7r7d/q6gMQGWfT\nLt7KLPp4ZPq3+qz0Iv6Yddcj3gGoDVPG"];\n\nPacletRepositories[{\n  Github -> "https://github.com/KirillBelovTest/Objects",\n  Github -> "https://github.com/KirillBelovTest/Internal",\n  Github -> "https://github.com/JerryI/CSocketListener" -> "dev2024",\n  Github -> "https://github.com/KirillBelovTest/TCPServer",\n  Github -> "https://github.com/KirillBelovTest/HTTPHandler",\n  Github -> "https://github.com/JerryI/wl-wlx",\n  { /* highlight-next-line */ }\n  Github -> "https://github.com/JerryI/wl-wljs-packages"\n}]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The last line added is a package manager used by WLJS Notebook (",(0,s.jsx)(n.em,{children:"yet another package manager"}),"), but comes handy here as well."]}),"\n",(0,s.jsxs)(n.p,{children:["Then a few more modifications (",(0,s.jsx)(n.em,{children:"code continues"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'\n<<KirillBelov`Objects`\n<<KirillBelov`Internal`\n<<KirillBelov`CSockets`\n<<KirillBelov`TCPServer`\n\n<<KirillBelov`HTTPHandler`\n<<KirillBelov`HTTPHandler`Extensions`\n\n{ /* highlight-next-line */ }\n<<JerryI`WLJSPM`\n\n{ /* highlight-start */ }\nWLJS`PM`Repositories[{\n  Github -> "https://github.com/JerryI/wljs-interpreter" -> "dev",\n  Github -> "https://github.com/JerryI/wljs-sharedlib-d3" -> "master",\n  Github -> "https://github.com/JerryI/wljs-graphics-d3" -> "dev"\n}]\n{ /* highlight-end */ }\n\n<<JerryI`WLX`\n<<JerryI`WLX`Imported`\n{ /* highlight-next-line */ }\n<<JerryI`WLX`WLJS`\n'})}),"\n",(0,s.jsx)(n.p,{children:"The first two links highlighted are"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/JerryI/wljs-interpreter",children:"wljs-interpreter"})," an interpreter of WL running on Javascript engine"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/JerryI/wljs-graphics-d3",children:"wljs-graphics-d3"})," 2D graphics library"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"There are more libraries available..."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/JerryI/wljs-plotly",children:"wljs-plotly"})," Alternative 2D plots using Plotly.js"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/JerryI/wljs-inputs",children:"wljs-inputs"})," a GUI elements like buttons, slides and etc (see in section ",(0,s.jsx)(n.a,{href:"/wlx-docs/docs/WLX/dynamics",children:"dynamics"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine",children:"wljs-graphics3d-threejs"})," 3D graphics"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Those libraries are borrowed from WLJS Notebooks"})}),"\n",(0,s.jsxs)(n.p,{children:["The last few things concerns about HTTP server settings (",(0,s.jsx)(n.em,{children:"code continues"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'Print["Staring HTTP server..."];\n\ntcp = TCPServer[];\ntcp["CompleteHandler", "HTTP"] = HTTPPacketQ -> HTTPPacketLength;\ntcp["MessageHandler", "HTTP"] = HTTPPacketQ -> http;\n\n\nindex := ImportComponent["Components/Index.wlx"];\n\nhttp = HTTPHandler[];\n\n{ /* highlight-start */ }\nhttp["MessageHandler", "File"]  = GetFileRequestQ[{"css", "js"}] -> (\n  ImportFile[#, "Base" -> {"wljs_packages"}] &\n)\n{ /* highlight-end */ }\n\nhttp["MessageHandler", "Index"] = AssocMatchQ[<|"Method" -> "GET"|>] -> Function[x, index[x]]\n\n(* ::End::*)\nSocketListen[CSocketOpen["127.0.0.1:8010"], tcp@# &];\n\n(* import wljs-libs data *)\n{ /* highlight-start */ }\nMap[Function[path,\n    Block[{System`$RemotePackageDirectory = FileNameJoin[{"wljs_packages", FileNameSplit[path] // First}]},\n        FileNameJoin[{"wljs_packages", path}] // Get // Quiet;\n    ];\n], WLJS`PM`Includes["kernel"] ];\n{ /* highlight-end */ }\n\n"open http://127.0.0.1:8010" // Print;\nWhile[True, Pause[1];];\n'})}),"\n",(0,s.jsx)(n.p,{children:"The highlighted lines are for resolving URLs pointing to above-mentioned libraries and imports inner Wolfram Language packages."}),"\n",(0,s.jsx)(n.h2,{id:"page-design",children:"Page design"}),"\n",(0,s.jsx)(n.p,{children:"Now a boilerplate code as we have seen in the previous sections"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Components/Index.wlx"',children:'Main := ImportComponent["Main.wlx"];\n\n<Main Request={$FirstChild}/>\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["In principle you don't have to use this intermediate ",(0,s.jsx)(n.code,{children:"Index.wlx"})," file and import directly ",(0,s.jsx)(n.code,{children:"Main.wlx"}),". However here it forces WLX importer to perform parsing for every request, so that one can observe changes without restarting Wolfram Kernel."]})}),"\n",(0,s.jsx)(n.p,{children:"Now our entry-point component"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Components/Main.wlx"',children:'(* /* HTML Page */ *)\n\n{ /* highlight-start */ }\nExtensionsJS = (FileNameToURLPath[#]) &/@ WLJS`PM`Includes["js"];\nExtensionsStyles = With[{Path = FileNameToURLPath[#]},\n  <link rel="stylesheet" href="{Path}"/> \n] &/@ WLJS`PM`Includes["styles"] // ToStringRiffle;\n{ /* highlight-end */ }\n\nApp = ImportComponent["App.wlx"];\n\n<html> \n    <head>\n        <title>WLX Template</title>\n        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>   \n        { /* highlight-start */ }    \n        <WLJSHeader List={ExtensionsJS}/> \n        <ExtensionsStyles/>     \n        { /* highlight-end */ }     \n    </head>  \n    <body> \n        <div class="min-h-full">\n            <header class="bg-white shadow">\n                <div class="flex items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">\n                    <h1 class="text-3xl font-bold tracking-tight text-gray-900">WLJS Basics</h1>\n                </div>\n            </header>\n            <main>\n                <App/>\n            </main>\n        </div>\n    </body>\n</html\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Those lines are for embedding necessary Javascript and CSS tables to the head element of our page, which will be imported by server from our ",(0,s.jsx)(n.em,{children:"wljs libraries"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Now everything is set, we can move on to the main part."}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"An access to the interpreter can be done by wrapping Wolfram Expressions via special tag or function"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Components/App.wlx"',children:'P = Plot[Sin[x], {x, -2Pi, 2Pi}];\n\n<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">\n    <WLJS><P/></WLJS>\n</div>\n'})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Components/App.wlx"',children:'P = Plot[Sin[x], {x, -2Pi, 2Pi}] // WLJS;\n\n<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">\n    <P/>\n</div>\n'})}),"\n",(0,s.jsx)("div",{style:{"text-align":"center"},children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(8048).c+"",width:"600",height:"539"})})}),"\n",(0,s.jsxs)(n.p,{children:["What it does it exports the result of the evaluation to ",(0,s.jsx)(n.code,{children:"ExpressionJSON"})," and embeds it to the page, where the tag is located. Lately when the page is loaded, a javascript code will be executed. If there is any graphics output presented it will embed it directly to the ",(0,s.jsx)(n.code,{children:"<div>"})," element."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Most 2D plotting functions of Mathematica are covered, as well as 3D, but with some limitations. Please consider the ",(0,s.jsx)(n.a,{href:"https://jerryi.github.io/wljs-docs/docs/frontend/instruction/#",children:"reference section"})," on those libraries."]})}),"\n",(0,s.jsx)(n.h2,{id:"styling",children:"Styling"}),"\n",(0,s.jsxs)(n.p,{children:["One can pass any class names (from CSS table) to ",(0,s.jsx)(n.code,{children:"<WLJS>"})," tag to customize the output"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<style>\n\t.myClass {\n\t\tposition:absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tmargin: auto;\n\t}\n</style>\n\n<WLJS Class={"myClass"}><P/></WLJS>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"inputs-buttons-ui",children:"Inputs, buttons, UI...?"}),"\n",(0,s.jsxs)(n.p,{children:["To ",(0,s.jsx)(n.strong,{children:"use GUI element"})," as etc., please have a look @ ",(0,s.jsx)(n.a,{href:"/wlx-docs/docs/WLX/dynamics",children:"dynamics"})," section."]}),"\n",(0,s.jsx)(n.h2,{id:"a-note-on-javascript-functions",children:"A note on Javascript functions"}),"\n",(0,s.jsxs)(n.p,{children:["This is covered by ",(0,s.jsx)(n.a,{href:"https://jerryi.github.io/wljs-docs/docs/interpreter/intro",children:"WLJS Interpreter"}),", however the general idea is, that any symbol with own- or down- values is represented as"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<script type="module">\ncore.MyFunction = async (args, env) => {\n\tconst data = await interpretate(args[0], env);\n\telement.innerHTML = data;\n}\n<\/script>\n'})}),"\n",(0,s.jsx)(n.p,{children:"try to embed the following symbol onto a page"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'Test = MyFunction["Hello World!"];\n\n<WLJS><Test/></WLJS\n'})}),"\n",(0,s.jsx)(n.p,{children:"or if you use XML attributes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'<script type="module">\ncore.MyFunction = async (args, env) => {\n\tconst data = await core._getRules(args, env);\n\tconsole.log(data);\n}\n<\/script>\n'})}),"\n",(0,s.jsx)(n.p,{children:"and"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'<WLJS><MyFunction Data={"Hello World"}/></WLJS\n'})}),"\n",(0,s.jsx)(n.p,{children:"check the browser's console."}),"\n",(0,s.jsxs)(n.p,{children:["There are much more to cover on this topic. ",(0,s.jsx)(n.strong,{children:"Please consider to read the original docs on WLJS Interpreter"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8048:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/ScreenRecording2024-02-15at22.42.49-ezgif.com-optimize-69d697e036a7da0fb090e9815bd3e731.gif"},2172:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>l});var s=t(1504);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);