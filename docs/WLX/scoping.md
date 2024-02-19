---
sidebar_position: 3
---
# Scoping


As a precursor to the ideas of [components](WLX/components.md) is automatic scoping. Anything declared within the `.wlx` script can be wrapped into a `Module` automatically. You can control this behavior using option

```mathematica
ProcessString[codeString, "Localize"->True]
```

```jsx title="codeString"
Word = RandomWord[];
<Word/>
```

__`Word` is unique every-time__, when a string processor called.

## Garbage collection
Unfortunately there is no clear way of purging the symbols created by `Module`, therefore they are collected into a symbol

```mathematica
JerryI`WLX`Private`garbageCollection
```

It is up to the user when and how clear them. 

:::warning
There is no built-in method to purge unused symbols  automatically, since symbols might be needed for the current connection or session, which 100% depends on your application.
:::

The best option would be to have a certain even, that ends the "session" on which your code is subscribed. Then once it happens, on can purge all created symbols at once using pure function

```mathematica
Function[Null, 
	ClearAll[Word];
]
```