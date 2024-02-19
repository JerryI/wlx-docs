```mathematica
<<JerryI`WLX`Importer`
```

## `ImportComponent`
Is used to import WLX files as Wolfram Expressions

```mathematica
ImportComponent[path_String, opts___] ___
```
an imported file is processed using [[Reference/WLX/WLX#`ProcessString`]]  immediately. The result can be cached and then used without costs of parsing.

### `path`
A universal path resolver is used, it __is indifferent for the way how you write the path to a file in Unix- or Windows-style__.

#### Nested folders
When you import a component inside other component, an automatic guess happens if the given file is located in the same folder or an absolute path is used, i.e.

- Root
	- *Main.wlx*
	- Label
		- *Label.wlx*
		- Components
			- *Someother.wlx*
	
and 

```jsx title="Main.wlx"
...
... = ImportComponent["Label/Label.wlx"]
```

```jsx title="Label/Label.wlx"
...
... = ImportComponent["Components/Someother.wlx"]
```

are valid.

### `opts`
The following options are valid

- `"Localize" -> _Bool` is the same as for [`ProcessString`](Reference/WLX/WLX.md#`ProcessString`). Default value is `True`. 


### Notes on `SetDelayed` and `Set`
Normally once component imported it can be assigned to a symbol. However, `SetDelayed` still imports a component, but keeps an parsed expression unevaluated (`Hold`), i.e.

```jsx
Component := ImportComponent["Component.wlx"];

<Component Option={Whatever}/>
```

where

```jsx title="Component.wlx"
With[{Opt = $Options["Option"]},
	<h1><Opt/></h1>	
]
```

While the typical case for `Set` operator is when a component returns a function, i.e.

```jsx
Component = ImportComponent["Component.wlx"];

<Component Option={Whatever}/>
```

and

```jsx title="Component.wlx"
Component[OptionsPattern[]] := With[{Opt = OptionValue["Option"]},
	<h1><Opt/></h1>	
]

Component
```

## `$Options`
Is a global symbol that provides access to all passed XML attributes to a WLX component

```mathematica
$Options _Association
```

## `$FirstChild`
A global symbol that provides access to the first passed child (as XML children) or an argument (like in normal WL) to a WLX component

```mathematica
$FirstChild _
```

## `$Children`
A global symbol that provides access to all passed children (as XML children) or arguments (like in normal WL) to a WLX component

```mathematica
$Children _List
```

## `CacheControl`
Enables or disables caching for imported components

```mathematica
JerryI`WLX`Importer`Private`CacheControl[interval_String | True | False]
```

The possible values for a time-interval are
- `"Hour"`
- `"Minute"`