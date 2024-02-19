"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[6204],{5808:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=t(7624),s=t(2172);const i={sidebar_position:4},r="Todo list",a={id:"WLX/examples/todolist",title:"Todo list",description:"An example of dynamic multi-user application built using most features of WebUI framework and Events system",source:"@site/docs/WLX/examples/todolist.md",sourceDirName:"WLX/examples",slug:"/WLX/examples/todolist",permalink:"/wlx-docs/docs/WLX/examples/todolist",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1708366829,formattedLastUpdatedAt:"Feb 19, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Asteroids",permalink:"/wlx-docs/docs/WLX/examples/asteroids"},next:{title:"Guidelines",permalink:"/wlx-docs/docs/WLX/WebUI Library/intro"}},l={},d=[{value:"Approach 1",id:"approach-1",level:2},{value:"Approach 2",id:"approach-2",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"todo-list",children:"Todo list"}),"\n",(0,o.jsxs)(n.p,{children:["An example of ",(0,o.jsx)(n.strong,{children:"dynamic multi-user application"})," built using most features of ",(0,o.jsx)(n.a,{href:"/wlx-docs/docs/Reference/WLX/WebUI",children:"WebUI"})," framework and ",(0,o.jsx)(n.a,{href:"/wlx-docs/docs/Reference/Misc/Events",children:"Events"})," system"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(1968).c+"",width:"600",height:"281"})}),"\n",(0,o.jsx)(n.p,{children:"There are two versions of this implementation"}),"\n",(0,o.jsx)(n.h2,{id:"approach-1",children:"Approach 1"}),"\n",(0,o.jsx)(n.p,{children:"To run this demo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/JerryI/wl-wlx\ncd wl-wlx\nwolframscript -f Examples/WebUITodo/Server.wls\n"})}),"\n",(0,o.jsxs)(n.p,{children:["All notes are stored a basic association with two fields inside ",(0,o.jsx)(n.code,{children:"Checked"})," and ",(0,o.jsx)(n.code,{children:"Content"}),". This is how an instance of ",(0,o.jsx)(n.code,{children:"App"})," looks like"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'App[OptionsPattern[]] := With[{\n    controls = CreateUUID[],\n    listController = CreateUUID[]\n},\nModule[{\n    typed = ""\n},\n\n    EventHandler[controls, {\n        "Loaded" -> Function[Null,\n            attachListeners[$Client, controls]\n        ],\n\n        "New" -> Function[Null,\n            With[{uid = CreateUUID[]},\n                NotesDatabase[uid] = <|"Content" -> typed, "Checked" -> False|>;\n                typed = "";\n                EventFire[AppState, RecordChange[], Null];\n            ];\n        ],\n\n        "Type" -> Function[data,\n            Echo[data];\n            typed = data;\n        ]\n    }];\n\n\n    <div class="flex items-center justify-center font-medium">\n    \t<div class="flex flex-grow items-center justify-center h-full text-gray-600 bg-gray-100">\n    \t\t<div class="max-w-full p-8 bg-white rounded-lg shadow-lg w-96">\n                <Header/>\n                <WebUIRefresh Event={controls}>\n                    <NotesList Database={NotesDatabase} OnUpdate={updateNote}/>\n                </WebUIRefresh>\n                <AddButton Event={controls}/>\n            </div>\n            <WebUIOnLoad Event={controls} Pattern={"Loaded"}/>\n        </div>\n    </div>\n] ]\n\nApp\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For each request, an app instance is generated. Of course control buttons are scoped within the instance. First thing that happens - a static view of ",(0,o.jsx)(n.code,{children:"NoteList"})," is rendered on a server inside a refreshable component ",(0,o.jsx)(n.a,{href:"/wlx-docs/docs/Reference/WLX/WebUI#%60WebUIRefresh%60",children:(0,o.jsx)(n.code,{children:"WebUIRefresh"})}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Then once a connection is established using ",(0,o.jsx)(n.code,{children:"WebUIOnLoad"})," an instance subscribes for  local events"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'"New"'})," when a ",(0,o.jsx)(n.code,{children:"+"})," button was clicked"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'"Type"'})," stands for typing listeners, that reads text user typed in a field for a new note and stores in locally to be used once ",(0,o.jsx)(n.code,{children:'"New"'})," is fired"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["A refreshing of notes list is done externally using ",(0,o.jsx)(n.code,{children:"controls"})," symbol, which points outside the App instance to a global event. Once user clicks on checkbox in ",(0,o.jsx)(n.code,{children:"NotesList"})," component it redirects its actions to ",(0,o.jsx)(n.code,{children:"updateNote"})," function"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:'updateNote[uid_String, state_String, client_] := With[{},\n    NotesDatabase[uid, "Checked"] = (state === "true");\n    EventFire[AppState, RecordChange[], client];\n]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["which preform changes in the database and fires global event to force all connected clients to refresh a ",(0,o.jsx)(n.code,{children:"NotesList"})," component."]}),"\n",(0,o.jsx)(n.h2,{id:"approach-2",children:"Approach 2"}),"\n",(0,o.jsx)(n.p,{children:"To run this demo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/JerryI/wl-wlx\ncd wl-wlx\nwolframscript -f Examples/WebUITodoV2/Server.wls\n"})}),"\n",(0,o.jsx)(n.p,{children:"The major difference will be, that now we tried to threat notes as individual objects with individual view components. The benefits of it, that we do not have to worry about on how we shown and update their states, once something changes. We render an component, that comes with its listeners, controls and make an individual binding to a client."}),"\n",(0,o.jsxs)(n.p,{children:["Now we need mutable objects (achieved using ",(0,o.jsx)(n.a,{href:"https://resources.wolframcloud.com/PacletRepository/resources/KirillBelov/Objects/version/1.0.2/",children:"Objects library"})," written by ",(0,o.jsx)(n.a,{href:"https://github.com/KirillBelovTest",children:"Kirill Belov"}),")"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:'init[n_] := With[{uid = CreateUUID[]}, n["Hash"] = uid; n];\nCreateType[Note, init, {"Content"->"", "Checked"->False}];\n\nNote /: EventHandler[n_Note, rest__] := EventHandler[n["Hash"], rest];\nNote /: EventFire[n_Note, rest__] := EventFire[n["Hash"], rest];\nNote /: EventClone[n_Note] := EventClone[n["Hash"]];\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Here we also extend ",(0,o.jsx)(n.a,{href:"/wlx-docs/docs/Event%20system/basics",children:"Events system"})," to make possible to subscribe for any changes on a given Note object."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Each note is a live widget"}),", then we need write a component for it including all logic and controllers as well as method for destroying"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",metastring:'title="Item.wlx"',children:'\nNote         = $Options["Note"];\nUId          = Note["Hash"];\n\nremoveButton = CreateUUID[];\n\nControls    = $Options["Controls"];\n\nClient      = $Options["Client"];\nController  = CreateUUID[];\n\nclonedEvent = EventClone[Note];\n\ndetector = EventClone[Client];\nEventHandler[detector, {"Closed" -> Function[Null, destoryWidget]}];\n\ndestoryWidget := With[{},\n   Echo["Item >> Item.wlx >> destroyed!"];\n   EventRemove[detector];\n   EventRemove[clonedEvent];\n   EventRemove[Controller];\n];\n\n(* /* States changes */ *)\nEventHandler[clonedEvent, {\n   "Checked" -> Function[data,\n      With[{client = Client},\n        If[data["Client"] === client, Return[]]; \n        EventFire[Controller, "SetState", Join[data, <|"Client" -> client|> ]];\n      ]\n   ],\n\n   "Destroy" -> Function[data,\n        EventFire[Controller, "Remove", <|"Client" -> Client|>];\n    ]\n}];\n\n(* /* Listening actions from widget */ *)\nEventHandler[EventClone @ Controller, {\n    "Checked" -> Function[state,\n        With[{n = Note},\n            n["Checked"] = state === "true";\n        ];\n        EventFire[Note, "Checked", <|"Client" -> Client, "Data" -> (state === "true")|>];\n    ],\n\n    "Destroy" -> Function[Null,\n        Echo["Remove!"];\n        EventFire[Note, "Destroy", <|"Client" -> Client|>];\n    ]\n}];\n\n(* /* a hack for HTML to display correctly checked state */ *)\nInputChecked = If[Note["Checked"],\n\t\t\t\t\t\t\t\t<input class="hidden" type="checkbox" id="{UId}" checked="true"/>\n\t\t\t\t\t\t\t,\n\t\t\t\t\t\t\t\t<input class="hidden" type="checkbox" id="{UId}"/>\n\t\t\t\t];\n\nContent      = Note["Content"];\n\n<div>\n    <InputChecked/>\n    <label class="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100" for="{UId}">\n        <span class="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">\n            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">\n                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />\n            </svg>\n        </span>\n        <span class="ml-4 text-sm"><Content/></span>\n        <svg id="{removeButton}" class="ml-auto rotate-45 w-5 h-5 text-gray-400 fill-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">\n            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />\n        </svg>\n    </label>\n    \n    \n    <WebUIEventListener Event={Controller} Pattern={"Destroy"} Id={removeButton}/>       \n    <WebUIEventListener Event={Controller} Type={"change"} Property={"checked"} Pattern={"Checked"} Id={UId}/>\n    <WebUIJSBind Event={Controller}>\n        const el = document.getElementById(\'<UId/>\');\n        this.on(\'SetState\', async (data) => {\n            const assoc = await interpretate(data, {hold:true});\n            const state = await interpretate(assoc.Data, {});\n            console.log(state);\n            el.checked = state;\n        })\n\n        this.on(\'Remove\', () => {\n            console.warn(\'Destroy!\');\n            el.parentNode.remove();\n        })\n    </WebUIJSBind>     \n</div>\n'})}),"\n",(0,o.jsx)(n.p,{children:"As one can see this widget"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["represents an ",(0,o.jsx)(n.code,{children:"Note[]"}),", but can also mutate it"]}),"\n",(0,o.jsxs)(n.li,{children:["listens its UI elements (",(0,o.jsx)(n.code,{children:"Controller"}),") and broadcast changes to subscriber of ",(0,o.jsx)(n.code,{children:"Note[]"})," object"]}),"\n",(0,o.jsxs)(n.li,{children:["updates view of ",(0,o.jsx)(n.code,{children:"Note[]"})," based on ",(0,o.jsx)(n.code,{children:"clonedEvent"}),", which is a copy of event-object assigned to a given ",(0,o.jsx)(n.code,{children:"Note[]"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Here is is quite common to clone events, in order not to interfere with other widgets, which are associated with the same note."}),"\n",(0,o.jsxs)(n.p,{children:["To display a list of notes, one could use ",(0,o.jsx)(n.a,{href:"/wlx-docs/docs/Reference/WLX/WebUI#%60WebUILazyLoad%60",children:(0,o.jsx)(n.code,{children:"WebUILazyLoad"})})," and ",(0,o.jsx)(n.a,{href:"/wlx-docs/docs/Reference/WLX/WebUI#%60WebUIContainer%60",children:(0,o.jsx)(n.code,{children:"WebUIContainer"})})," with ",(0,o.jsx)(n.code,{children:"Append"})," feature to dynamically add a new note without redrawing all previous (saves a lot of resources)"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'    <WebUIContainer Event={controller}>\n      <div class="mt-0 shrink-0 gap-y-1 flex flex-col">\n          <WebUILazyLoad Event={LazyLoad}>\n            <NotesList/>\n          </WebUILazyLoad>\n          <WebUIContainerChild/> \n          <WebUIOnLoad Event={controls} Pattern={"Load"}/>\n      </div>  \n    </WebUIContainer>\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Here ",(0,o.jsx)(n.code,{children:"WebUILazyLoad"})," is only used to display notes, which were already in a database on the moment when a user opened a new page"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:'NotesList := \n  With[{client = $Client},\n    Table[Item["Note"->note, "Client"->client, "Controls"->controls], {note, ReleaseHold[Database]} ] // Flatten // ToStringRiffle\n  ]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["while ",(0,o.jsx)(n.code,{children:"WebUIContainerChild"})," is going to host all new notes added when a page has been loaded already like it is done in this line"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-mathematica",children:'EventHandler[clonedAppEvents, {\n  "Append" -> Function[note,\n    EventFire[controller, "Append", <|"Client"->client, "Data" -> Item["Note"->note, "Client"->client, "Controls"->controls] |> ];\n  ]\n}];\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In principle, one could get rid of ",(0,o.jsx)(n.code,{children:"WebUILazyLoad"})," and render previous notes on a server, but then an ",(0,o.jsx)(n.code,{children:"Client"})," object must be provided. So a widget would need to subscribe for a new connection using ",(0,o.jsx)(n.a,{href:"/wlx-docs/docs/Reference/WLX/WebUI#%60WebUIOnLoad%60",children:(0,o.jsx)(n.code,{children:"WebUIOnLoad"})})," for example, instead of having this object already when loaded using ",(0,o.jsx)(n.a,{href:"/wlx-docs/docs/Reference/WLX/WebUI#%60WebUILazyLoad%60",children:(0,o.jsx)(n.code,{children:"WebUILazyLoad"})})," and then add all listeners"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:'    <WebUIContainer Event={controller}>\n      <div class="mt-0 shrink-0 gap-y-1 flex flex-col">\n          <NotesListModified/>\n          <WebUIContainerChild/> \n          <WebUIOnLoad Event={controls} Pattern={"Load"}/>\n      </div>  \n    </WebUIContainer>\n'})}),"\n",(0,o.jsx)(n.p,{children:"But this would need to add some extra lines to a widget component to consider this case"})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1968:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/Carrots-ezgif.com-video-to-gif-converter-95aa419d0f9fcb11e73ad88338775e5a.gif"},2172:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var o=t(1504);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);