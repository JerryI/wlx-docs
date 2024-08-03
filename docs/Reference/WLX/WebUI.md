```mathematica
<<JerryI`WLX`WebUI`
```

## `WebUIInitializationScript`
A helper script, that provides all necessary Javascript code for framework support

```jsx
WebUIInitializationScript _String
```

It must be embedded into the head section of your main page template.

## `WebUIFetch`
Makes an asynchronous request for Wolfram Expression evaluation to a web-page via WebSockets 

```mathematica
WebUIFetch[expr_, client_:$Client, opts___] _Promise
```

the following options are accepted
- `"Format" -> _`
	- `"JSON"` a regular JS representation of any object will be imported as `List` of rules in WL
	- `"RawJSON"` the same as above, but as nested association
	- `"ExpressionJSON"` imports JS objects as Wolfram Expressions
	- `"Raw"` imports result as a string


## `WebUIEventListener`
Attach an event listener on a page to DOM element and directs events to a given [`EventObject`](Reference/Misc/Events.md#`EventObject`) (represented as a string)

```mathematica
WebUIEventListener[opts__] _String
```

The following options must be provided
- `"Id" -> _String` an `id` of DOM element
- `"Type" -> "click"` type of DOM event (usually `click`, `input`, `change`, `blur`, `focus` ...)
- `"Event" -> _String` a identifier of [`EventObject`](Reference/Misc/Events.md#`EventObject`) on a server
- `"Pattern" -> "Default"` a pattern for event handling
- `"Property" -> "value"` what property value will be send to an event object

### Example
On any page of your application

```jsx
EventHandler["button", Print];

<div>
	<button id="btn" type="button">Click Me!</button>
	<WebUIEventListener Id={"btn"} Event={"button"} />
</div>
```


## `WebUIKeyListener`
Listens keys pressed (user's keyboard) on a page and sends them to a server

```mathematica
WebUIKeyListener[opts__] _String
```

The following options should be provided
- `"Event" -> _String` a __bidirectional events channel__ (see later)
- `"Pattern" -> "Pressed"` a pattern name used for pressed keys codes

### Start / stop listening
Use an __event-channel__ provided with `Event` option to

```mathematica
EventFire[_String, "Start", <|"Client" -> _|>]
```

to start listening or

```mathematica
EventFire[_String, "Stop", <|"Client" -> _|>]
```

to stop it.

### Pressed keys
Using the same events channel we can listen all key-codes

```mathematica
EventHandler[_String, {"Pressed" -> Print}];
```

:::note
There is no need in cloning event object, since patterns does not intersect.
:::


## `WebUIOnLoad`
A component, that fires an event when page was loaded and executed till the place, __where it is placed in DOM tree__

:::tip
use it to capture connected [`$Client`](Reference/Misc/WLJSTransport.md#`$Client`) and subscribe for necessary events such as closing the connection and others...
:::

```mathematica
WebUIOnLoad[opts__] _String
```

The following options should be provided
- `"Event"` a string representation of [`EventObject`](Reference/Misc/Events.md#`EventObject`) which will be fired once page loaded
- `"Pattern" -> "Default"` a pattern for event 

### Example
Once page is loaded a message in the console should appear

```jsx
EventHandler["ev", Function[Null, Print["Loaded!"]]];

...
<WebUIOnLoad Event={"ev"}/>
```


## `WebUIJSBind`
Attach Javascript code on a page as an [`EventHandler`](Reference/Misc/Events.md#`EventHandler`) to a given event-object represented as string

```mathematica
WebUIJSBind[Script__String, opts___] _String
```

where `Script` is sequence or a single string with Javascript code. The following options are accepted
- `"ScriptTag" -> True` tells if Javascript code needs to be wrapped using `<script>` HTML tag
- `"Event" -> _String` an identifier event-object on a server

`Script` can be separated into two sections
```jsx
<WebUIJSBind Event={"ev"}>
	//will be executed once
	const doc = document.body;
	
	//binding to event patterns
	this.on('Pattern 1', async (data) => {
		const assoc = await interpretate(data, {hold:true});
		const payload = await interpretate(assoc.Payload, {});
		alert(payload);
	});
</WebUIJSBind>
```

Then once fired __a `"Client"` socket must be provided as a key of association expression__, i.e.
```mathematica
EventFire["ev", "Pattern 1", <|"Client"->$Client, "Payload" -> "Hello World!"|>]
```

*Payload field is only for illustrative purpose, in principle an entire association arrives to WLJS Interpreter*


## `WebUILazyLoad`
A container that holds an arbitrary expression, and loads / updates it on a page with provided arguments dynamically when a corresponding event has been fired

```mathematica
WebUILazyLoad[content_, opts__] _String
```

The following options should be provided
- `"Event" -> _String` an identifier of object on a server
- `"Tag" -> "div"`
- `"Class" -> ""`

*This component leaves an empty `Tag` container in the DOM tree, where it is placed*

```jsx
<WebUILazyLoad Event={"event"}>
	<h1>Hello World!</h1>
</WebUILazyLoad>
```

__A component has `HoldFirst` attribute__.

### Accepted commands
Each command should be send as a pattern in [`EventFire`](Reference/Misc/Events.md#`EventFire`) with an association in `data` field
#### `"Load"`
__Evaluates and loads (or updates)__ `content` to a page (where this component is places)

```mathematica
EventFire[event_String, "Load", a_Association]
```

where `a` __must contain `"Client"` key with a destination socket object__, the rest is up to a user. There is a way on providing data from event to a `content` expression using `WebUILazyLoadDataProvided` symbol

```jsx
<WebUILazyLoad Event={"ev"}>
	<SomeOtherComponent Data={WebUILazyLoadDataProvided}/>
</WebUILazyLoad>
```

and

```mathematica
a = <|"Client" -> $Client, "Field1" -> ..., "Field2" -> ..., ...|>
```


#### `"Remove"`
Deletes content from the page

#### `"Hide"`
Appends `hidden` class to a component

#### `"Show"`
Removes `hidden` class from a component


## `WebUIContainer`
A variety of [`WebUIOnLoad`](#`WebUIOnLoad`) component for forming lists with multiple items

```mathematica
WebUIContainer[content_, opts__] _String
```

where `content` should have a special structure like a template with a key-symbol `WebUIContainerChild`, where all children will be inserted

```jsx
<WebUIContainer Event={"controller"}>
	<ul>
	    <WebUIContainerChild/>
	</ul>
</WebUIContainer>
```

### Append command
There is only a single command pattern used

```mathematica
EventFire["controller", "Append", <|"Client"->$Client, "Data"->any_String|>]
```

where `"Data"` contains new child to be placed where `WebUIContainerChild` is located in DOM tree.

## `WebUIRefresh`
A refreshable container

```mathematica
WebUIRefresh[content__, opts__] _String
```

__A component has `HoldAll` attribute__.

It immediately renders `content` field into DOM (server-side render), but later refresh it's parent DOM element using new data provided via event. For example

```jsx
<WebUIRefresh Event={"event"}>
	<TextString>
		<Now/>
	</TextString>
</WebUIRefresh>
```

### Accepted commands
All commands are written as patterns in [`EventFire`](Reference/Misc/Events.md#`EventFire`)
#### `"Refresh"`
Forces a container to reevaluate the content and update its DOM
```mathematica
EventFire["event", "Refresh", <|"Client"->$Client|>]
```

#### `"Clear"`
Removes inner content of a container from a page

#### `"Hide"`
Adds `hidden` class

#### `"Show"`
Removes `hidden` class


## `WebUISubmit`
Submits an expression to be evaluated on WLJS Interpreter (browser's side) aka [`WLJSTransportSend`](Reference/Misc/WLJSTransport.md#`WLJSTransportSend`)

```mathematica
WebUISubmit[expr_, client_:$Client] _$Failure | Null
```


## `WebUIClose`
Closes window by given `socket`

```mathematica
WebUIClose[socket_:$Client]
```


## `WebUILocation`
Changes a url or opens a new window

```mathematica
WebUILocation[url_String, client_:$Client, opts___]
```

The following options are supported
- `"Target"` specifies where to open a `url`. To open in a new window use `_` or `Blank[]` value.

