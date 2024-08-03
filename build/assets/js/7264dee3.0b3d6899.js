"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[2680],{1132:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(7624),i=t(2172);const r={sidebar_position:6},o="Dynamics and interactivity",a={id:"WLX/dynamics",title:"Dynamics and interactivity",description:"There is no need in crafting your own API to interact with a working Wolfram Kernel to bring input elements and update the data in real-time",source:"@site/docs/WLX/dynamics.md",sourceDirName:"WLX",slug:"/WLX/dynamics",permalink:"/wlx-docs/docs/WLX/dynamics",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1715721750,formattedLastUpdatedAt:"May 14, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Running WL in a browser",permalink:"/wlx-docs/docs/WLX/interpeter"},next:{title:"Examples",permalink:"/wlx-docs/docs/category/examples"}},l={},c=[{value:"Preparations",id:"preparations",level:2},{value:"Usage",id:"usage",level:2},{value:"Crafting UI components",id:"crafting-ui-components",level:3},{value:"Call actions on a page",id:"call-actions-on-a-page",level:2},{value:"DOM Manipulation",id:"dom-manipulation",level:3},{value:"Dynamic symbols",id:"dynamic-symbols",level:2},{value:"Preparations",id:"preparations-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Binding to the connection state",id:"binding-to-the-connection-state",level:2},{value:"Preparations",id:"preparations-2",level:3}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"dynamics-and-interactivity",children:"Dynamics and interactivity"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"There is no need in crafting your own API to interact with a working Wolfram Kernel to bring input elements and update the data in real-time"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["It is assumed you have read an ",(0,s.jsx)(n.a,{href:"/wlx-docs/docs/WLX/interpeter",children:"interpeter"})," page first"]})}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)("summary",{children:"A shortcut"}),(0,s.jsx)(n.br,{}),"\n","If you have git installed. Simply clone"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/JerryI/wl-wlx\ncd wl-wlx\nwolframscript -f Examples/WLJSBasicDyn/WLJSBasicDyn.wls\n"})}),(0,s.jsx)(n.p,{children:"that will run the simplest example possible"})]}),"\n",(0,s.jsx)(n.h2,{id:"preparations",children:"Preparations"}),"\n",(0,s.jsxs)(n.p,{children:["We are going to use WebSockets protocol for the real-time communication. for that one need to set up a corresponding server ",(0,s.jsx)(n.a,{href:"https://github.com/JerryI/WebSocketHandler",children:"WebSocketHandler"})," written by Kirill Belov. Please see his repo for more details regarding this server. One need only to set an hostname and port for it and assign it ",(0,s.jsx)(n.strong,{children:"to a separate TCP server"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Let us rewrite our wolfram script file"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'Uncompress["1:eJx1T8tuwjAQDBT1wo0/6Ac0vveKKAoNCJoDZ5NugsXGtrwbBf6edawKLlzG+5rxzMfJ/TZvWZbRVKBomkms5wLfBmF1NcR0qN6lL/fbfMC0j4Q18\nPM80mkmcDR8TlexK0Ug7SKnAh5f9F0aRoGi8y5wVUp5Zvb0pVTQQ96KTn/qCULtLIPlvHad2kAIt0IN+Imu1uh1fdEtkOq0seoHggVUydForuJgbJsCLgSWTj7r7d/q6gMQGWfT\nLt7KLPp4ZPq3+qz0Iv6Yddcj3gGoDVPG"];\n\nPacletRepositories[{\n  Github -> "https://github.com/KirillBelovTest/Objects",\n  Github -> "https://github.com/JerryI/Internal",\n  Github -> "https://github.com/JerryI/CSocketListener" -> "dev2024",\n  Github -> "https://github.com/JerryI/TCPServer",\n  Github -> "https://github.com/JerryI/HTTPHandler",\n  { /* highlight-next-line */ }\n  Github -> "https://github.com/JerryI/WebSocketHandler",\n  Github -> "https://github.com/JerryI/wl-wljs-packages",  \n  { /* highlight-next-line */ }\n  Github -> "https://github.com/JerryI/wl-misc" -> "dev"\n}]\n\nRandomWord[];\n\n{ /* highlight-start */ }\n(* Here you can configure *)\nENV = <|\n    "WSPort"->8011,\n    "HTTPPort"->8010,\n    "Host"->"127.0.0.1"\n|>\n\nENV["HAddr"] := StringTemplate["``:``"][ENV["Host"], ENV["HTTPPort"]]\nENV["WAddr"] := StringTemplate["``:``"][ENV["Host"], ENV["WSPort"]]\n{ /* highlight-end */ }\n\n(* TCP Server *)\n<<KirillBelov`Objects`\n<<KirillBelov`Internal`\n<<KirillBelov`CSockets`\n<<KirillBelov`TCPServer`\n\n(* HTTP services *)\n<<KirillBelov`HTTPHandler`\n<<KirillBelov`HTTPHandler`Extensions`\n\n(* WS services *)\n<<KirillBelov`WebSocketHandler`\n\n(* Event handling and WLJS communication *)\n{ /* highlight-start */ }\n<<JerryI`Misc`Events`\n<<JerryI`Misc`Async`\n<<JerryI`Misc`WLJS`Transport`\n{ /* highlight-end */ }\n\n<<JerryI`WLX`\n<<JerryI`WLX`Imported`\n<<JerryI`WLX`WLJS`\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To handle the connection between WLJS Interpreter and Wolfram Kernel another package ",(0,s.jsx)(n.a,{href:"https://github.com/JerryI/wl-misc/blob/main/Kernel/WLJSIO.wl",children:"WLJSTransport"})," is used. All communication with browser is going to be an event-based. Therefore we need ",(0,s.jsx)(n.a,{href:"https://github.com/JerryI/wl-misc/blob/main/Kernel/Events.wl",children:"Events"})," library, ",(0,s.jsx)(n.strong,{children:"which is not available @ Wolfram Paclet Repository"})," as well as some others library, and can be installed only using ",(0,s.jsx)(n.a,{href:"https://github.com/JerryI/wl-localpackages",children:"LPM package manager"}),", since it modifies system functions."]}),"\n",(0,s.jsxs)(n.p,{children:["To have a basic GUI elements we use ",(0,s.jsx)(n.code,{children:"wljs-inputs"})," (see ",(0,s.jsx)(n.a,{href:"https://jerryi.github.io/wljs-docs/docs/frontend/instruction/#",children:"reference"}),") library"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"code continues"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'<<JerryI`WLJSPM`\n\nWLJS`PM`Repositories[{\n  Github -> "https://github.com/JerryI/wljs-interpreter" -> "dev",\n  Github -> "https://github.com/JerryI/wljs-sharedlib-d3" -> "master",\n  Github -> "https://github.com/JerryI/wljs-graphics-d3" -> "dev",\n  { /* highlight-next-line */ }\n  Github -> "https://github.com/JerryI/wljs-inputs" -> "dev"\n}]\n\n(* import libs data *)\nMap[Function[path,\n    Block[{System`$RemotePackageDirectory = FileNameJoin[{"wljs_packages", FileNameSplit[path] // First}]},\n        FileNameJoin[{"wljs_packages", path}] // Get // Quiet;\n    ];\n], WLJS`PM`Includes["kernel"] ];\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now a new TCP server has to be started in our to establish a new type of real-time communication channel"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"code continues"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'Print["Staring HTTP server..."];\n\ntcp = TCPServer[];\ntcp["CompleteHandler", "HTTP"] = HTTPPacketQ -> HTTPPacketLength;\ntcp["MessageHandler", "HTTP"] = HTTPPacketQ -> http;\n\n(* our main file for all requests *)\nApp = ImportComponent["App.wlx"];\n\nhttp = HTTPHandler[];\n\nhttp["MessageHandler", "File"]  = GetFileRequestQ[{"css", "js"}] -> (\n  ImportFile[#, "Base" -> {"wljs_packages"}] &\n)\n\nhttp["MessageHandler", "Index"] = AssocMatchQ[<|"Method" -> "GET"|>] -> App\n\nSocketListen[CSocketOpen[ENV["HAddr"]], tcp@#&]\n\nPrint["Staring WS/HTTP server..."];\n{ /* highlight-start */ }\nwcp = TCPServer[]\nwcp["CompleteHandler", "WebSocket"] = WebSocketPacketQ -> WebSocketPacketLength\nwcp["MessageHandler", "WebSocket"]  = WebSocketPacketQ -> ws\n\nws = WebSocketHandler[]\n\n(* configure the handler for WLJS communications *)\nws["MessageHandler", "Evaluate"]  = Function[True] -> WLJSTransportHandler\n\n\nSocketListen[CSocketOpen[ENV["WAddr"]], wcp@#&]\n{ /* highlight-end */ }\n\nStringTemplate["open http://``"][ENV["HAddr"]] // Print;\nWhile[True, Pause[1]];\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now we have finished with minor preparations of server. Let us move on to our App's logic"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="App.wlx"',children:'{ /* highlight-next-line */ }\nInputs = ImportComponent["Components/Inputs.wlx"];\n\nExtensionsJS = (StringJoin["", FileNameToURLPath[#]]) &/@ WLJS`PM`Includes["js"];\nExtensionsStyles = With[{Path = StringJoin["", FileNameToURLPath[#]]},\n  <link rel="stylesheet" href="{Path}"/> \n] &/@ WLJS`PM`Includes["styles"] // ToStringRiffle;\n\n(* /* HTML Page */ *)\n\nApp[request_] := With[{},\n    <html> \n        <head>\n            <title>WLX Template</title>\n            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>  \n            <WLJSHeader List={ExtensionsJS}/> \n            <ExtensionsStyles/>  \n            { /* highlight-next-line */ }\n    \t\t<WLJSTransportScript Port={ENV["WSPort"]}/>\n        </head>  \n        <body> \n            <div class="min-h-full">\n                <header class="bg-white shadow">\n                    <div class="flex items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">\n                        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dynamics</h1>\n                    </div>\n                </header>\n                <main>\n                    <div class="flex col mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">\n                        <div class="mx-4 py-3 px-3 col rounded-lg bg-white shadow">\n                            { /* highlight-next-line */ }\n                            <Inputs Request={request}/>\n                        </div>\n                    </div>\n                </main>\n            </div>\n        </body>\n    </html>\n];\n\nApp\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The line in the head's section embeds a special header script to establish WebSocket connection. An imported component ",(0,s.jsx)(n.code,{children:"Components/Inputs.wlx"})," is going to be our sandbox for experiments"]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["To utilize full power of reactive framework, one need to consider a concept of ",(0,s.jsx)(n.a,{href:"/wlx-docs/docs/Reference/Misc/Events",children:"Events"})," library. The basic idea would be"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Components/Inputs.wlx"',children:'Component[OptionsPattern[]] := Module[{Button},\n\t{ /* highlight-start */ }\n    Button = InputButton[];\n    EventHandler[Button, Function[Null,\n        Print["Pressed!"];\n    ]];\n    { /* highlight-end */ }\n\n    <div class="flex flex-row gap-x-10">\n        <WLJS>\n\t        { /* highlight-next-line */ }\n            <Button/>\n        </WLJS>\n    </div>\n]\n\nComponent\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Please consider to have a look at ",(0,s.jsx)(n.a,{href:"https://jerryi.github.io/wljs-docs/docs/frontend/instruction/#",children:"reference section"})," on ",(0,s.jsx)(n.em,{children:"wljs-inputs"})," library."]})}),"\n",(0,s.jsx)(n.p,{children:"By pressing a button, one should see messages in the console"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(984).c+"",width:"803",height:"446"})}),"\n",(0,s.jsx)(n.p,{children:"There are a couple more input elements, which can be embedded on a page"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"InputText"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"InputRange"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"InputFile"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"InputCheckbox"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["More about them one can find ",(0,s.jsx)(n.a,{href:"https://jerryi.github.io/wljs-docs/docs/frontend/instruction/#",children:"here"})," in the reference section. However, you don't have to limit yourself with prebuilt blocks. One can always craft your own UI components using WLX"]}),"\n",(0,s.jsx)(n.h3,{id:"crafting-ui-components",children:"Crafting UI components"}),"\n",(0,s.jsxs)(n.p,{children:["Let us create a new component called ",(0,s.jsx)(n.code,{children:"Toggle.wlx"})," in the project's ",(0,s.jsx)(n.code,{children:"Components"})," folder. The easiest way is to pick up one of Tailwind's component and add necessary logic to it"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Components/Toggle.wlx"',children:'Component[OptionsPattern[]] := With[{\n    Dom = CreateUUID[], \n    Label = OptionValue["Label"], \n    Event = OptionValue["Event"],\n    State = OptionValue["State"],\n    ButtonClass = If[OptionValue["State"], "bg-wlx-500", ""],\n    SpanClass   = If[OptionValue["State"], "translate-x-5", ""]\n},\n    <div class="flex items-center">\n        <style>\n            .bg-wlx-500 {\n                background-color: #2dd4bf;\n            }\n        </style>\n        <button id="{Dom}" type="button" class="bg-gray-200 relative inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 {ButtonClass}" role="switch">\n            <span state="{State}" aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out {SpanClass}"></span>\n        </button>\n        <span class="ml-3 text-sm">\n            <span class="mb-1 text-gray-900"><Label/></span>\n        </span>\n        <script type="module">\n            const button = document.getElementById("<Dom/>");\n            const span = button.firstChild;\n            let state = span.getAttribute(\'state\') == \'True\';\n            button.addEventListener("click", () => {\n                button.classList.toggle("bg-wlx-500");\n                span.classList.toggle("translate-x-5");\n                state = ~state;\n                server.kernel.emitt("<Event/>", state ? \'True\' : \'False\')\n            })\n        <\/script>\n    </div>\n]\n\nOptions[Component] = {"State" -> False, "Label" -> "Toggle", "Event" -> Null}\n\nComponent\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here a component comes with its supporting Javascript code, that sends events to a server. Let us have a look closely"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'button.addEventListener("click", () => {\n\t//animation\n    button.classList.toggle("bg-wlx-500");\n    span.classList.toggle("translate-x-5");\n    //internal state for animation\n    state = ~state;\n    //send a new state to a server\n    server.kernel.emitt("<Event/>", state ? \'True\' : \'False\')\n})\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The last line is the most important, it uses API from ",(0,s.jsx)(n.a,{href:"/wlx-docs/docs/Reference/Misc/WLJSTransport#%60server%60",children:(0,s.jsx)(n.code,{children:"WLJSTransport"})}),", that exposes ",(0,s.jsx)(n.code,{children:"server"})," object, which has a method for us"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:".emitt(event_uid, data)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then we can capture those events on a server. Let us add it to our ",(0,s.jsx)(n.em,{children:"previous example"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Components/Inputs.wlx"',children:'{ /* highlight-start */ }\nToggle = ImportComponent["Toggle.wlx"];\nsharedState = False;\n{ /* highlight-end */ }\n\nComponent[OptionsPattern[]] := Module[{\n    Button\n},\n    With[{\n\t    { /* highlight-next-line */ }\n        toggle = CreateUUID[]\n    },\n\t\t{ /* highlight-start */ }\n        EventHandler[toggle, Function[state,\n            sharedState = state;   \n        ]];\n        { /* highlight-end */ }\n\n        Button = InputButton[];\n        EventHandler[Button, Function[Null,\n            Print["Pressed!"];\n        ]];\n\n        <div class="flex flex-row gap-x-10">\n            <WLJS>\n                <Button/>\n            </WLJS>\n            { /* highlight-next-line */ }\n            <Toggle Event={toggle} State={sharedState}/>\n        </div>\n    ]\n]\n\nComponent\n'})}),"\n",(0,s.jsxs)(n.p,{children:["As one can see, now we update ",(0,s.jsx)(n.code,{children:"sharedState"}),", which is global across all connections. If one reloads a page, the position of a toggle switch will be preserved."]}),"\n",(0,s.jsx)(n.p,{children:"The desired result should look like this"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(5184).c+"",width:"346",height:"186"})}),"\n",(0,s.jsx)(n.p,{children:"This is a great start, but still haven't tried to change anything on a page!"}),"\n",(0,s.jsx)(n.h2,{id:"call-actions-on-a-page",children:"Call actions on a page"}),"\n",(0,s.jsx)(n.p,{children:"To manipulate DOM elements or call an arbitrary Javascript code from the server, we can use the same Wolfram Language expressions. For example lets attach a call to one of our buttons"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",metastring:'title="Components/Inputs.wlx"',children:'...\n\nButton = InputButton[];\nEventHandler[Button, Function[Null,\n    Print["Pressed!"];\n\t{ /* highlight-next-line */ }\n\tWLJSTransportSend[Alert["Pressed!"], $Client]\n]];\n\n...\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Alert"})," is a built-in function defined in ",(0,s.jsx)(n.a,{href:"https://jerryi.github.io/wljs-docs/docs/interpreter/intro",children:"WLJS Interpreter"}),". A window will pop up on a page, once first button is pressed."]}),"\n",(0,s.jsx)(n.h3,{id:"dom-manipulation",children:"DOM Manipulation"}),"\n",(0,s.jsx)(n.p,{children:"To manipulate DOM we need to write a WL function for it in Javascript. For example, let it be a text field"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<input type="text" id="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>\n'})}),"\n",(0,s.jsx)(n.p,{children:"then using Javascript, we can access this element on a page and change its content"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const element = document.getElementById('text');\ncore.UpdateText = async (args, env) => {\n\telement.value = await interpretate(args[0], env);\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"From server's side we directly call this function as"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"WLJSTransportSend[UpdateText[RandomWord[]], $Client]\n"})}),"\n",(0,s.jsx)(n.p,{children:"Wrapping it all, we can modify our code as follows"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Components/Inputs.wlx"',children:'Toggle = ImportComponent["Toggle.wlx"];\n\nsharedState = False;\n\n{ /* highlight-start */ }\nTextDisplay = With[{},\n    <input type="text" id="text" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>\n    <script type="module">\n        const element = document.getElementById(\'text\');\n        core.UpdateText = async (args, env) => {\n            element.value = await interpretate(args[0], env);\n        }\n    <\/script>\n]\n{ /* highlight-end */ }\n\nComponent[OptionsPattern[]] := Module[{\n    Button\n},\n    With[{\n        toggle = CreateUUID[]\n    },\n\n        EventHandler[toggle, Function[state,\n            sharedState = state;   \n        ]];\n\n        Button = InputButton[];\n        EventHandler[Button, Function[Null,\n            Print["Pressed!"];\n            { /* highlight-next-line */ }\n            WLJSTransportSend[UpdateText[RandomWord[]], $Client];\n        ]];\n\n        <div class="flex flex-row gap-x-10">\n            <WLJS>\n                <Button/>\n            </WLJS>\n            <Toggle Event={toggle} State={sharedState}/>\n            { /* highlight-next-line */ }\n            <TextDisplay/>\n        </div>\n    ]\n]\n\nComponent\n'})}),"\n",(0,s.jsx)(n.p,{children:"The desired result is quite predictable"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(4680).c+"",width:"600",height:"224"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Write building blocks for each section or element of UI and arrange them using solely WLX and Event system. Try to avoid using Javascript outside those components."})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Try ",(0,s.jsx)(n.a,{href:"/wlx-docs/docs/WLX/WebUI%20Library/intro",children:"WebUI"})," framework if you prefer write less Javascript code"]})}),"\n",(0,s.jsx)(n.h2,{id:"dynamic-symbols",children:"Dynamic symbols"}),"\n",(0,s.jsx)(n.p,{children:"This is completely independent and different approach to update data on a page, which is based on Wolfram Language symbols and lexical scoping."}),"\n",(0,s.jsx)(n.p,{children:"The idea arises from a problem of synchronization between WL symbols on browser's and server's sites. By the default an unknown for WLJS Interpreter symbols is requested and later tracked, i.e. all changes of it on a server will be sent to an associated client"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(120).c+"",width:"858",height:"542"})}),"\n",(0,s.jsx)(n.p,{children:"Moreover such symbols has special attribute and can be seen from nested expressions by WL interpreter and on each change the connected branch will be reevaluated on your browser. It allows to improve the performance, since only reevaluation of dependent parts happens with no communication to a Wolfram Kernel at all"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(4764).c+"",width:"946",height:"384"})}),"\n",(0,s.jsx)(n.p,{children:"And lastly, during partial reevaluation involved expressions are executed using different methods, which are highly optimized, i.e."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"core.Expression = async (args, env) => {\n\t//initialization and etc\n\t...\n\t//do some complicated work\n}\n\ncore.Expression.update = async (args, env) => {\n\t...\n\t//do something more simplifed\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["More about an architecture one can read in ",(0,s.jsx)(n.a,{href:"https://jerryi.github.io/wljs-docs/docs/interpreter/Advanced/architecture",children:"this guide"}),"."]})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Not all defined functions in WLJS Interpreter support such methods. Please see the ",(0,s.jsx)(n.a,{href:"https://jerryi.github.io/wljs-docs/docs/frontend/instruction",children:"reference"})," section."]})}),"\n",(0,s.jsxs)(n.p,{children:["Luckily most case scenarios for graphics are covered, especially ",(0,s.jsx)(n.code,{children:"Line"}),", ",(0,s.jsx)(n.code,{children:"Point"})," and other  primitives."]}),"\n",(0,s.jsx)(n.h3,{id:"preparations-1",children:"Preparations"}),"\n",(0,s.jsxs)(n.p,{children:["In order to support this a few tweaks has to be done with ",(0,s.jsx)(n.a,{href:"/wlx-docs/docs/Reference/Misc/WLJSTransport",children:"WLJSTransport"}),". Please modify your server script as follows"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'ws = WebSocketHandler[]\n\n(* configure the handler for WLJS communications *)\nws["MessageHandler", "Evaluate"]  = Function[True] -> WLJSTransportHandler\n\n{ /* highlight-start */ }\n(* symbols tracking *)\nWLJSTransportHandler["AddTracking"] = Function[{symbol, name, cli, callback},\n    Print["Add tracking... for "<>name];\n    Experimental`ValueFunction[Unevaluated[symbol]] = Function[{y,x}, callback[cli, x]];\n, HoldFirst]\n\nWLJSTransportHandler["GetSymbol"] = Function[{expr, client, callback},\n    Print["Evaluating the desired symbol on the Kernel"];\n    callback[expr // ReleaseHold];\n]\n{ /* highlight-end */ }\n'})}),"\n",(0,s.jsx)(n.p,{children:"It stands for resolving requests for such symbols from browser's side and tracking their changes. That's basically all when it comes to setting it up."}),"\n",(0,s.jsx)(n.p,{children:"Let's add a new component to our example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="App.wlx"',children:'Inputs  = ImportComponent["Components/Inputs.wlx"];\n{ /* highlight-next-line */ }\nSymbols = ImportComponent["Components/Symbols.wlx"];\n\nExtensionsJS = (StringJoin["", FileNameToURLPath[#]]) &/@ WLJS`PM`Includes["js"];\nExtensionsStyles = With[{Path = StringJoin["", FileNameToURLPath[#]]},\n  <link rel="stylesheet" href="{Path}"/> \n] &/@ WLJS`PM`Includes["styles"] // ToStringRiffle;\n\n(* /* HTML Page */ *)\n\nApp[request_] := With[{},\n    <html> \n        <head>\n            <title>WLX Template</title>\n            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>  \n            <WLJSHeader List={ExtensionsJS}/> \n            <ExtensionsStyles/>  \n    \t\t<WLJSTransportScript Port={ENV["WSPort"]}/>\n        </head>  \n        <body> \n            <div class="min-h-full">\n                <header class="bg-white shadow">\n                    <div class="flex items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">\n                        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dynamics</h1>\n                    </div>\n                </header>\n                <main>\n                    <div class="flex col mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">\n                        <div class="mx-4 py-3 px-3 col rounded-lg bg-white shadow">\n                            <Inputs Request={request}/>\n                        </div>\n                        <div class="mx-4 py-3 px-3 col rounded-lg bg-white shadow">\n                            { /* highlight-next-line */ }\n                            <Symbols Request={request}/>\n                        </div>\n                    </div>\n                </main>\n            </div>\n        </body>\n    </html>\n];\n\nApp\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now an actual example"}),"\n",(0,s.jsx)(n.h3,{id:"usage-1",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["The binding between Wolfram Kernel symbols and variables located at your browser is done automatically if it is wrapped using ",(0,s.jsx)(n.code,{children:"Offload"})," expression"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Components/Symbols.wlx"',children:'Component[OptionsPattern[]] := Module[{\n    p = {{0,0}},\n    Canvas,\n    task\n},\n    Canvas = Graphics[{\n        Magenta, Point[Offload[p]]\n    },  PlotRange->{{-1,1},{-1,1}}, \n        TransitionDuration->100, \n        TransitionType->"Linear"\n    ];\n\n    task = SetInterval[\n        p = Append[p, Last[p] + 0.1 RandomReal[{-1,1},2]];\n    , 100];\n\n    <WLJS>\n        <Canvas/>\n    </WLJS>\n]\n\nComponent\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Here a typical ",(0,s.jsx)(n.code,{children:"Graphics"})," expression is used, however, a symbols with points inside ",(0,s.jsx)(n.code,{children:"pts"})," is wrapped in ",(0,s.jsx)(n.code,{children:"Offload"}),", that leaves an inner symbol unevaluated. Then every ",(0,s.jsx)(n.code,{children:"100~ms"})," an asynchronous task appends new points to it."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"SetInterval"})," is a shortcut for ",(0,s.jsx)(n.code,{children:"SchelduledTask"})," from ",(0,s.jsx)(n.a,{href:"/wlx-docs/docs/Reference/Misc/Async",children:"Async"})," package."]})}),"\n",(0,s.jsx)(n.p,{children:"The result is following"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(6252).c+"",width:"600",height:"391"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"This canvas and its points are unique for each connected client or window."})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"You should detect a closed connection in order to remove symbols, tasks or other objects which load the main kernel. Please see the next section."})}),"\n",(0,s.jsx)(n.h2,{id:"binding-to-the-connection-state",children:"Binding to the connection state"}),"\n",(0,s.jsxs)(n.p,{children:["In the example above every request causes ",(0,s.jsx)(n.code,{children:"SetInterval"})," to be evaluated, but it is good to have a method to detect if a client closed a window and abort the task or collect garbage."]}),"\n",(0,s.jsx)(n.h3,{id:"preparations-2",children:"Preparations"}),"\n",(0,s.jsx)(n.p,{children:"Modify the main script as follows"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'...\n\n(* Event handling and WLJS communication *)\n<<JerryI`Misc`Events`\n{ /* highlight-next-line */ }\n<<KirillBelov`CSockets`EventsExtension`\n<<JerryI`Misc`WLJS`Transport`\n<<JerryI`Misc`Async`\n\n...\n\n{ /* highlight-next-line */ }\nSocketListen[CSocketOpen[ENV["WAddr"]], wcp@#&, "SocketEventsHandler"->CSocketsClosingHandler]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This will redirect all events regarding the socket state to a special handler function ",(0,s.jsx)(n.code,{children:"CSocketsClosingHandler"}),", which redirects them to ",(0,s.jsx)(n.a,{href:"/wlx-docs/docs/Reference/Misc/Events",children:"Events"})," system."]}),"\n",(0,s.jsxs)(n.p,{children:["Now for each ",(0,s.jsx)(n.a,{href:"/wlx-docs/docs/Reference/Misc/WLJSTransport#%60$Client%60",children:(0,s.jsx)(n.code,{children:"$Client"})})," we can attach an ",(0,s.jsx)(n.a,{href:"/wlx-docs/docs/Reference/Misc/Events#%60EventHandler%60",children:(0,s.jsx)(n.code,{children:"EventHandler"})})," and check if it is alive or not. For the convenience we can do it globally for the whole App. Let us add a few more line"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="App.wlx"',children:'Inputs  = ImportComponent["Components/Inputs.wlx"];\nSymbols = ImportComponent["Components/Symbols.wlx"];\n\nExtensionsJS = (StringJoin["", FileNameToURLPath[#]]) &/@ WLJS`PM`Includes["js"];\nExtensionsStyles = With[{Path = StringJoin["", FileNameToURLPath[#]]},\n  <link rel="stylesheet" href="{Path}"/> \n] &/@ WLJS`PM`Includes["styles"] // ToStringRiffle;\n\n(* /* HTML Page */ *)\n\nApp[request_] := With[{\n\t{ /* highlight-next-line */ }\n    Session = CreateUUID[],\n    { /* highlight-next-line */ }\n    Controls = CreateUUID[]\n},\n\n\t{ /* highlight-start */ }\n    EventHandler[Session, {"Connected" -> Function[Null,\n        Echo["Connected!"];\n        With[{socket = $Client},\n            EventHandler[socket, {"Closed" -> Function[Null,\n                EventFire[Controls, "Destroy", True];\n            ]}];\n        ]\n    ]}];\n    { /* highlight-end */ }\n\n    <html> \n        <head>\n            <title>WLX Template</title>\n            <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>  \n            <WLJSHeader List={ExtensionsJS}/> \n            <ExtensionsStyles/> \n            { /* highlight-next-line */ } \n    \t\t<WLJSTransportScript Port={ENV["WSPort"]} Event={Session}/>\n        </head>  \n        <body> \n            <div class="min-h-full">\n                <header class="bg-white shadow">\n                    <div class="flex items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">\n                        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dynamics</h1>\n                    </div>\n                </header>\n                <main>\n                    <div class="flex col mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">\n                        <div class="mx-4 py-3 px-3 col rounded-lg bg-white shadow">\n                            { /* highlight-next-line */ }\n                            <Inputs Controls={Controls} Request={request}/>\n                        </div>\n                        <div class="mx-4 py-3 px-3 col rounded-lg bg-white shadow">\n                            { /* highlight-next-line */ }\n                            <Symbols Controls={Controls} Request={request}/>\n                        </div>\n                    </div>\n                </main>\n            </div>\n        </body>\n    </html>\n];\n\nApp\n'})}),"\n",(0,s.jsxs)(n.p,{children:["A provided ",(0,s.jsx)(n.code,{children:"Event"})," option value of ",(0,s.jsx)(n.a,{href:"/wlx-docs/docs/Reference/Misc/WLJSTransport#%60WLJSTransportScript%60",children:(0,s.jsx)(n.code,{children:"WLJSTransportScript"})})," fires an event ",(0,s.jsx)(n.code,{children:'"Connected"'}),", where we can capture an identifier of connected client and subscribe for connection state. Once ",(0,s.jsx)(n.code,{children:'"Closed"'})," has been captured, we fire a global ",(0,s.jsx)(n.code,{children:'"Destroy"'})," event on ",(0,s.jsx)(n.code,{children:"Controls"}),". The last one is distributed over all used components using XML attributes as shown above."]}),"\n",(0,s.jsxs)(n.p,{children:["Now it is possible to cancel a running task in ",(0,s.jsx)(n.a,{href:"#Usage",children:"section above"})," by subscribing to ",(0,s.jsx)(n.code,{children:'"Destroy"'})," event"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="Component/Symbols.wlx"',children:'Component[OptionsPattern[]] := Module[{\n    p = {{0.,0.}},\n    Canvas,\n    task,\n    controls = EventClone @ OptionValue["Controls"]\n},\n    EventHandler[controls, {"Destroy" -> Function[Null,\n        Echo["Destroyed!"];\n        TaskRemove[task];\n    ]}];\n\n    Canvas = Graphics[{\n        Magenta, Point[Offload[p]]\n    },  PlotRange->{{-1,1},{-1,1}}, \n        TransitionDuration->100, \n        TransitionType->"Linear"\n    ];\n\n    task = SetInterval[\n        p = Append[p, Last[p] + 0.1 RandomReal[{-1,1},2]];\n    , 100];\n\n    <WLJS>\n        <Canvas/>\n    </WLJS>\n]\n\nComponent\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4764:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/Dynlink.excalidraw-24ef11ece18743e1d5ecb9e42d60f4fe.svg"},5184:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/ScreenRecording2024-02-16at09.59.30-ezgif.com-video-to-gif-converter-918262c4062edc2398e9ca772853fb7f.gif"},4680:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/ScreenRecording2024-02-16at20.59.22-ezgif.com-video-to-gif-converter-cb1f08a40c0d6e9adbd8c361f401e8f7.gif"},6252:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/ScreenRecording2024-02-16at23.18.02-ezgif.com-optimize-0a5708eac8dc664be2c4c3401578a870.gif"},984:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/Screenshot 2024-02-16 at 09.17.33-442cd5cf47092788fd268be97319cb2b.png"},120:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/SymbolsLinking.excalidraw-41912b914f54dcd33e926b43887511d4.svg"},2172:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>o});var s=t(1504);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);