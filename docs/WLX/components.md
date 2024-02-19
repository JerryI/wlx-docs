---
sidebar_position: 4
---
# Components



In general it is not opinionated on how you organize your components as files or as functions. This sub-package is optional and represents only one of the possible ways.

---

One of the key features is idea of reusable components borrowed from React. There is an in-build structure to embed other WLX scripts into the each other as Wolfram Language expressions

```mathematica
<<JerryI`WLX`Importer
```

Then you can import other `wlx` scripts as components into your other scripts, which becomes basically a crafted WL function in the end.

Another benefit is to join the data representation template, controllers and other logic into a single component. It does not necessarily mean a single file, but a folder as well.

## Passing named XML attributes
Let us start from the example. We have a component, that makes italic labels

```jsx title="label.wlx"
Text = $Options["Text"];

<i>
	<TextString>
		<Text/>
	</TextString>
</i>
```

Then, one can import it in some other `.wlx` file
```jsx
Label := ImportComponent["label.wlx"]

<body>
	<Label Text={"Hello World"}/>
</body>
```

:::tip
The difference between `Set` and `SetDelayed` is the same as in Wolfram Language. If imported component has to generate something with passed arguments - use `SetDelayed`, if it generates the result immediately __or other function__ - use `Set`. 
:::

It looks similar to what we had in [Basics / Options](WLX/basics.md#Options).

This is done in a way, that feels like a regular XML attribute. Or one can pass any valid Wolfram Expression as well

```jsx
Label := ImportComponent["label.wlx"]

<body>
	<Label Text={Now}/>
</body>
```

:::tip
Do not be afraid to import many nested components, since the result of `ImportComponent` is parsed once into a regular Wolfram Expression and stored in cache. See [Caching](#Caching)
:::

## Passing children as down-values
To construct a component that uses a normal tags with possibly nested structure - use `SetDelayed` on `ImportComponent`. See an example

```jsx title="label.wlx"
<i>
	<TextString>
		<$Children/>
	</TextString>
</i>
```

Then modify the main script as

```jsx
Label := ImportComponent["label.wlx"]

<body>
	<Label>
		<Now/>
	</Label>
</body>
```

Now `Label` works like a regular symbol with down-values, i.e. one can also do that

```mathematica
Label[Now]
```

There are a few predefined keywords to have an access to the child elements
### `$FirstChild`
Gets __the first__ passed argument

### `$Children`
Gets __all passed arguments (-child elements) as a list__

### `$Options`
Get all options passed to a component


## Component with internal state
Quite often one might find useful to keep the whole logic within a single component. Needless to say to store an internal state this construction comes handy

```jsx title="Component.wlx"
(*/* !!! Will be executed once and stored */*)

State = False;

Component[OptionsPattern[]] := With[{Mutator = OptionsValue["Mutator"]},
	(*/* !!! Will be executed each time you call */*)
	
	State = Mutator[State];
	(*/* so something with a given parameters and etc... */*)

	<h1>
		<State/>
	</h1>								   
]

Options[Component] = {"Mutator" -> Identity}

Component (*/* exported */*)
```

Here the last line returns our generated function. In the main file we can import it once using basic `Set` expression, i.e.

```jsx
MyComponent = ImportComponent["Component.wlx"];

mutate[state_] := !state;

...
requestHandler[__] := With[{},
	<body>
		<MyComponent Mutator={mutate}/>
	</body>
];

...
```

It comes handy, when you need to generate multiple responses for incoming requests and share the internal state of a single component between.

### Export multiple entities
It is also absolute valid to return more than a single symbol like if it was a notebook's cell

```jsx title="Component.wlx"
State = ...

Component[OptionsPattern[]] := ...
Script = ...
Whatever = ...

...

{Component, Script, Whatever} (*/* exported */*)
```

```jsx
{MyComponent, MyScript, MyWhatever} = ImportComponent["Component.wlx"];
```

*technically speaking we still got a single symbol in return, which is called `List` ;) *

:::tip
Use it if you have controllers, views or Javascript code which has to be imported as a separate symbols
:::


### Context manipulation
When designing a package or paclet or just for local context isolation, all Wolfram Language built-in tools are valid to use here as well

```mathematica title="Main.wl"
Begin["MyContext`"]

Component = ImportComponent["Compoment.wlx"]

End[]

MyContext`Component
```

All rules are applied and variables generated in `Component` will be in the given context.

## Scoping
__By the default it parses a script with `Localize` option__ (see [scoping](WLX/scoping.md)), but one the importing function accepts this option pattern as well, so you can override it 

```jsx
Label := ImportComponent["label.wlx", "Localize"->False]
```

:::warning
This is not recommended, since it will leak into the global scope
:::

## Caching
For the development / prototyping the caching is disabled. To improve the performance and lower the load for IO operations on a disk for many nested component - use global settings

```mathematica
JerryI`WLX`Importer`CacheControl[True]
```

or specify the time-interval

```mathematica
JerryI`WLX`Importer`Private`CacheControl["Minute"]
JerryI`WLX`Importer`Private`CacheControl["Hour"]
```

## Path resolution

### UNIX / WIN / WEB
To overcome an issue with different path representation implementations, a universal platform-dependent converter is used. Therefore `ImportComponent` __is indifferent for the way how you write the path to a file__.

### Nested folders
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
