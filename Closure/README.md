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
