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

You can read [W3School Tutorial](http://www.w3schools.com/js/js_object_prototypes.asp) to learn more about prototypes.

The prototype link is used to retrieve a property value from an object. If your object lacks the property you are looking for, JavaScript will go up in the prototype chain to find it. This is called *delegation*, and you can read more about it on [this blog](https://javascriptweblog.wordpress.com/2010/12/22/delegation-vs-inheritance-in-javascript/).

Prototypes are dynamic (to see the full example read / run band.js `node band.js` ), meaning that if you update a prototype, all objects based on that prototype will be updated.

```javascript
console.log(acdc);
// { vocals: 'Brian Johnson',
//   drums: 'Chris Slade',
//   'lead guitar': 'Angus Young',
//   'rythm guitar': 'Stevie Young',
//   'bass guitar': 'Cliff Williams',
//   nationality: 'Australian' }

var copieur = acdc;

acdc.year = 1973;
console.log(copieur);

// { vocals: 'Brian Johnson',
//   drums: 'Chris Slade',
//   'lead guitar': 'Angus Young',
//   'rythm guitar': 'Stevie Young',
//   'bass guitar': 'Cliff Williams',
//   nationality: 'Australian' ,
//	 year : 1973 }
```

