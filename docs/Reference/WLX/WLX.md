```mathematica
<<JerryI`WLX`
```
## `ProcessString`
Accepts a string with a WLX code and returns held Wolfram Expression

```mathematica
ProcessString[string_String, opts___] _Hold
```
where `opts` are following
- `"Localize" -> _Bool` specifies if lexical scoping of symbols defined inside WLX code fragment is needed (`False` by default) 

## `ToStringRiffle`
Applies `ToString` to each element of a list and concats them with `\n` delimiter

```mathematica
ToStringRiffle[any_ | any_List] _String
```
