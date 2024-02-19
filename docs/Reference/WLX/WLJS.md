```mathematica
<<JerryI`WLX`WLJS`
```

## `WLJSHeader`
A helper function to add javascript modules to the head of a page
```mathematica
WLJSHeader[opts__] _String
```
where a single option is accepted
- `"List"` a list of `urls` to Javascript files

### Example
Put this line in your head section on a page

```jsx
ExtensionsJS = {
	"url_to_js.js",
	"url_to_js.js"
};

<head>
	...
	<WLJSHeader List={ExtensionsJS}/>
<head>
```


## `WLJS`
A function to embed Wolfram Language code on a static page. It also creates a corresponding `div` element on a page, where it is placed for a graphical or text output. Once loaded it starts local WL interpreter running in the browser
```mathematica
WLJS[expr_] _String
```
an `expr` can be anything interpretable by [WLJS Interpreter](https://jerryi.github.io/wljs-docs/docs/interpreter/intro) and its libraries.

### Example
Prepare your server as its shown in a guide [interpeter](WLX/interpeter.md) and

```jsx
P = Plot[Sin[x], {x, -2Pi, 2Pi}];

<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
    <WLJS><P/></WLJS>
</div>
```


