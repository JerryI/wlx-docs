```mathematica
<<JerryI`Misc`WLJS`Transport`
```

## `WLJSTransportScript`
A helper function to set up a WebSocket connection to a server from a page. It should be placed and executed in the head section of a page
```mathematica
WLJSTransportScript[opts__] __String
```
There are several options
- `"Port" -> _Integer` (*required*) specifies a port of WebSocket server 
- `"Event" -> _String` an string identifier of an arbitrary [`EventObject`](Reference/Misc/Events.md#`EventObject`) on a server. Once connection established it will fire an event with `"Connected"` topic or pattern.

### Example
In the header section of your page, put this line

```jsx
<head>
	...
	<WLJSTransportScript Port={yourPort}/>
</head>
```

## `WLJSTransportHandler`
A handler function for `WebSocketHandler` transport, that evaluates the requests from an WL interpreter running on client's side and provides features of symbols tracking.

```mathematica
WLJSTransportHandler
```
an entry point for evaluation requests, connect it to your chain of handlers as follows
```mathematica
ws = WebSocketHandler[]
ws["MessageHandler", "Evaluate"] = Function[True] -> WLJSTransportHandler
```

### Symbols tracking
To use this feature one need to specify a few more down-values
```mathematica
WLJSTransportHandler["AddTracking"] = Function[{symbol, name, cli, callback},
    Print["Add tracking... for "<>name];
    Experimental`ValueFunction[Unevaluated[symbol]] = Function[{y,x}, callback[cli, x]];
, HoldFirst]

WLJSTransportHandler["GetSymbol"] = Function[{expr, client, callback},
    Print["Evaluating the desired symbol on the Kernel"];
    callback[expr // ReleaseHold];
]
```

After that you can freely use [`Offload`](#`Offload`) to dynamically bind symbols from server to pages.

## `$Client`
A global object, that specifies a connected client

## `WLJSTransportSend`
Submits an arbitrary WL expression to WL interpreter running in a browser using WebSockets
```mathematica
WLJSTransportSend[expr_, client_] _
```
A set of expression possible to be evaluated depends on WLJS Interpreter, its imported libraries and defined function on a page as well.

An identifier of a client can be retrieved  using global symbol `$Client` in the context of fired `"Connected"` (see [`WLJSTransportScript`](#`WLJSTransportScript`) `Event`) event or other events from buttons or other UI elements.

### Example
Once you know a connected client using `$Client` try to evaluate
```mathematica
WLJSTransportSend[Alert["Hello World"], client]
```


## `Offload`
A key-expression with `HoldFirst` attribute, that holds an expression to be interpreted on browser's side
```mathematica
Offload[expr_] _
```
Usually comes handy with automatic symbol binding between server and client, since an unknown symbol for a client is requested from server and then, interpreter subscribes for any changes of it. 

### Example
Prepare your page and server as its shown in guide [dynamics](WLX/dynamics.md), attach symbols tracking as mentioned in [`WLJSTransportHandler`](#`WLJSTransportHandler`) and then

```jsx title="App.wlx"
pts = {{0,0}};
Graph = Graphics[Point[Offload @ pts], PlotRange -> {{-1,1}, {-1,1}}];

task = SessionSubmit[ScheduledTask[pts = Append[pts, Last[pts] + 0.25 RandomReal[{-1,1}, 2]], Quantity[0.3, "Seconds"]]];

<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
    <WLJS><Graph/></WLJS>
</div>
```

:::caution
Created `task` will continue to run in the background. One need to detect closed connection and remove in manually. See tutorials.
:::

## `server`
A global Javascript object that represents server and created by [`WLJSTransportScript`](#`WLJSTransportScript`)
There are several methods available for communication
### `.socket`
A connected [WebSocket object](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

### `.send(message)`
Send a message for evaluation (async)
```js
server.send('Echo["Hi from sockets!"]')
```

### `.emitt(uid, message, topic='Default')`
Emits an event on server's side with a given string identifier of `EventObject`. To capture an event one have to subscribe to it using  

```js
server.emitt('uid', '1+1', 'Topic');
```
and on server's side
```mathematica
EventHandler["uid", {"Topic" -> Function[data,
	Print[data];
]}]
```
or an omni listener
```mathematica
EventHandler["uid", Function[data,
	Print[data];
]]
```

### `.ask(message)`
Asynchronously evaluates a message on a server and returns [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object
```js
const data = await server.ask('RandomReal[{-1,1}, 100]');
const result = await interpretate(data, {});
console.log(result);
```
