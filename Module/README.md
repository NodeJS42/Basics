## Module

“We can use functions and closure to make modules. **A module is a function or object that presents an interface but that hides its state and implementation**.”


“The module pattern takes advantage of function scope and closure to create **relationships** that are **binding** and **private**. Only the method has access to the entity data structure.
The general pattern of a module is a function that defines private variables and functions; creates privileged functions which, through [closure](https://github.com/NodeJS42/Basics/tree/master/Closure), will have access to the private variables and functions; and that returns the privileged functions or stores them in an accessible place.

 Use of the module pattern can eliminate the use of global variables. It promotes information hiding and other **good design practices**. It is very effective in encapsulating applications and other singletons.”*

> Excerpt From: Douglas Crockford. “JavaScript: The Good Parts: The Good Parts.”.

for more on the `import` and `export` [read this blog](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html).
- [ ] Add example code snippets ( @nbeydoon ? )
