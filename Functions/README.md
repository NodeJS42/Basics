## Functions

Quoting 'Javascript : The Good Parts' :
> A function encloses a set of statements. Functions are the fundamental modular unit of JavaScript. They are used for code reuse, information hiding, and composition. Functions are used to specify the behavior of objects.
> Functions in JavaScript are objects. Objects are collections of name/value pairs having a hidden link to a [prototype](https://github.com/NodeJS42/Basics/tree/master/Prototypes) object.
> Since functions are objects, they can be used like any other value. Functions can be stored in variables, objects and arrays. Functions can be passed as arguments to function, and functions can be returned from functions. (see [callbacks](https://github.com/NodeJS42/Basics/tree/master/Callbacks) ). Also, since functions are objects, functions can have methods.

There are different functions types.

`function add3(a, b, c) { return a + b + c};` will be executed as the program loads.

On the contrary
`var sum = function add3(a, b, c) { return a + b + c};` will be built **only** when this line of code is reached.

Alternative syntax : `var sum = function(a, b, c) { return a + b + c};` > this is called an *anonymous function*.

A variable holding a function can be passed onto other functions :

```javascript
sum(1, 2 , sum(54,48,87)); // 192 
```
