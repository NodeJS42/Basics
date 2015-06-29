## Prototypes

All objects created from object literals are linked to `Object.prototype`. An object literal is simply composed of a pair of curly braces surrounding a pairing `name : value` such as :
```javascript
var acdc = {
		"lead guitar" : "Angus Young"
	,	"rythm guitar" : "Stevie Young"
	,	vocals : "Brian Johnson"
	,	drums : "Chris Slade"
	,	"bass guitar" : "Cliff Williams"
	}
```

> Note that you can use any string as the property name (even ''), and that the quotes around the name are optional if you choose a *legal* Javascript name (for more on that : http://www.codelifter.com/main/tips/tip_020.shtml ).

Objects are **never copied**, they are passed by *reference*. 
