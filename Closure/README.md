## Closure

A closure wraps up an entire environment, binding necessary variables from other scopes.

You can run [closed.js]() that runs this simple function :
```javascript
function closing(){
	var text = "Hello";
	return text;
}

console.log(text); // ReferenceError: text is not defined
console.log(closing()); // Hello
```

An inner function have access to its parent function variables. For example, if we added an `enclosed()` function to `closing()` and returned it, it would still log "Hello".
```javascript
function closing(){
	var text = "Hello";
	function enclosed(){
		return text;
	}
	return enclosed();
}
```

Of course, you can modify it : ` text += " World!"` run in the `enclosed()` function would log "Hello World!" in the console. **However** if you did not return the `text` variable, those changes would be discarded as you leave the `enclosed()` function scope.

```javascript
function closing(){
	var text = "Hello";
	function enclosed(){
		text += " World!";
	}
	return text; 
}

console.log(closing()); // Hello
```

> A function doesn't have to return in order to be called a closure. **Simply accessing variables outside of your immediate lexical scope creates a closure.**

This excerpt is taken from the excellent explanation you can find on [Stackoverflow](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work) on what a closure **exactly** is. There are several examples on this thread, and it is a **must-read**.
