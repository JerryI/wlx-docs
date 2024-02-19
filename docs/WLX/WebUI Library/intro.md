---
title: Guidelines
---

### Store state only on server
It is very hesitating to use pure JS in order to keep the slider's state or switches in the browser, even some logic of your application. However, it leads to some complicated problems to be solved such as *data or state synchronization*, *management of shared states* and etc for which senior React developers got paid. If everything you create does not escape the borders of your [[component]] and Wolfram Language __it will make your life easier__.

The presented framework was designed mostly for a desktop or cloud-based applications with 1-3 users (browsers tabs don't count) and a single instance of Wolfram Kernel running. Storing everything on a server comes with almost zero cost of resources.

:::tip
Even if you have a single button, use [`WebUIEventListener`](Reference/WLX/WebUI.md#`WebUIEventListener`) and handle its action on a server.
:::

### Use Javascript for DOM manipulations only
*or for decorative purposes*

Every action has to be approved by the server's logic. Thinking about it if you were writing a regular desktop application (using QT for example). WebSockets is no longer a bottleneck for a simple UI actions, such as typing or clicking a button.

### Enforce server side-rendering
This is done automatically, since there is no client-side rendering (or hydrator like in React or Angular) tool provided. The general idea is to send a ready-to-go HTML tree including supporting Javascript code via WebSockets, similar to `setInnerHTML` method used on a web. See [`WebUILazyLoad`](Reference/WLX/WebUI.md#`WebUILazyLoad`), [`WebUIContainer`](Reference/WLX/WebUI.md#`WebUIContainer`), [`WebUIRefresh`](Reference/WLX/WebUI.md#`WebUIRefresh`) and etc.

## Preparations
The following libraries are needed for proper functioning of [WebUI](Reference/WLX/WebUI.md) framework

- [WLX](Reference/WLX/WLX.md)
- [Importer](Reference/WLX/Importer.md)
- [WLJS](Reference/WLX/WLJS.md)
- [Events](Reference/Misc/Events.md)
- [Promise](Reference/Misc/Promise.md)
- [WLJSTransport](Reference/Misc/WLJSTransport.md)
- [Async](Reference/Misc/Async.md)

WebUI is a dynamic framework, which demands a live WebSocket connection. Here is a server script with comments, that provides a minimal set of libraries for a working server

```mathematica title="Server.wls"
#!/usr/bin/env wolframscript
(* ::Package:: *)
SetDirectory[If[StringQ[NotebookDirectory[] ], NotebookDirectory[], DirectoryName[$InputFileName] ] ]

Uncompress["1:eJx1T8tuwjAQDBT1wo0/6Ac0vveKKAoNCJoDZ5NugsXGtrwbBf6edawKLlzG+5rxzMfJ/TZvWZbRVKBomkms5wLfBmF1NcR0qN6lL/fbfMC0j4Q18
PM80mkmcDR8TlexK0Ug7SKnAh5f9F0aRoGi8y5wVUp5Zvb0pVTQQ96KTn/qCULtLIPlvHad2kAIt0IN+Imu1uh1fdEtkOq0seoHggVUydForuJgbJsCLgSWTj7r7d/q6gMQGWfT
Lt7KLPp4ZPq3+qz0Iv6Yddcj3gGoDVPG"];

PacletRepositories[{
  Github -> "https://github.com/KirillBelovTest/Objects",
  Github -> "https://github.com/KirillBelovTest/Internal",
  Github -> "https://github.com/JerryI/CSocketListener" -> "dev2024",
  Github -> "https://github.com/KirillBelovTest/TCPServer",
  Github -> "https://github.com/KirillBelovTest/HTTPHandler",
  Github -> "https://github.com/KirillBelovTest/WebSocketHandler",
  Github -> "https://github.com/JerryI/wl-misc" -> "dev",
  Github -> "https://github.com/JerryI/wl-wljs-packages",
  Github -> "https://github.com/JerryI/wl-wlx"
}]

RandomWord[];

(* Here you can configure *)
ENV = <|
    "WSPort"   -> 8011,
    "HTTPPort" -> 8010,
    "Host"     -> "127.0.0.1"
|>

ENV["HAddr"] := StringTemplate["``:``"][ENV["Host"], ENV["HTTPPort"]]
ENV["WAddr"] := StringTemplate["``:``"][ENV["Host"], ENV["WSPort"]]

(* TCP Server *)
<<KirillBelov`Objects`
<<KirillBelov`Internal`
<<KirillBelov`CSockets`
<<KirillBelov`TCPServer`

(* HTTP services *)
<<KirillBelov`HTTPHandler`
<<KirillBelov`HTTPHandler`Extensions`

(* WS services *)
<<KirillBelov`WebSocketHandler`

(* WLX services *)
<<JerryI`WLX`
<<JerryI`WLX`Importer`
<<JerryI`WLX`WLJS`
<<JerryI`WLX`WebUI`

(* Events system and WLJS communication *)
<<JerryI`Misc`Events`
<<KirillBelov`CSockets`EventsExtension`
<<JerryI`Misc`WLJS`Transport`
<<JerryI`Misc`Async`

<<JerryI`WLJSPM`

WLJS`PM`Repositories[{
  Github -> "https://github.com/JerryI/wljs-interpreter" -> "dev"
}]

(* import libs data *)
Map[Function[path,
    Block[{System`$RemotePackageDirectory = FileNameJoin[{"wljs_packages", FileNameSplit[path] // First}]},
        FileNameJoin[{"wljs_packages", path}] // Get // Quiet;
    ];
], WLJS`PM`Includes["kernel"] ];


Print["Staring HTTP server..."];

tcp = TCPServer[];
tcp["CompleteHandler", "HTTP"] = HTTPPacketQ -> HTTPPacketLength;
tcp["MessageHandler", "HTTP"] = HTTPPacketQ -> http;

(* Entry Point for all requests *)
App = ImportComponent["App.wlx"];

http = HTTPHandler[];
http["MessageHandler", "Index"] = AssocMatchQ[<|"Method" -> "GET"|>] -> App

SocketListen[CSocketOpen[ENV["HAddr"]], tcp@#&]

Print["Staring WS/HTTP server..."];

wcp = TCPServer[]
wcp["CompleteHandler", "WebSocket"] = WebSocketPacketQ -> WebSocketPacketLength
wcp["MessageHandler", "WebSocket"]  = WebSocketPacketQ -> ws

(* configure the handler for WLJS communications *)
ws = WebSocketHandler[]
ws["MessageHandler", "Evaluate"]  = Function[True] -> WLJSTransportHandler

SocketListen[CSocketOpen[ENV["WAddr"]], wcp@#&, "SocketEventsHandler"->CSocketsClosingHandler]

StringTemplate["open http://``"][ENV["HAddr"]] // Print;
While[True, Pause[1]];
```

:::warning
This section is still in development. Please see Reference [WebUI](Reference/WLX/WebUI.md)
A couple of examples are available: [TodoList](WLX/examples/todolist.md) and some in the repository folder.
:::