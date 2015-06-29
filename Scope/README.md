## Scope

### Lexical Scope

`var` is used to denote a variable which is *Lexically Scoped* to the current
function:
```javascript
    function someFunc() {
		      var aVariable;
			      }
```
`aVariable` is lexically scoped within `someFunc`.

### Block scope

`let` & `const` are used to denote variables which are *Block Scoped* to the
current curly braced block:
```javascript
    if (true) {
      let aVariable;
    }
```

`aVariable` is block scoped within the `if`'s curly braces


The javascript runtime follows these steps to assign a variable:

 1. Search within the current scope.
 2. If not found, search in the immediately outer scope.
 3. If found, go to 6.
 4. If not found, repeat 2. Until the Global Scope is reached.
 5. If not found in Global Scope, create it (on window / global objects..
 6. Assign the value.

In this way, it is possible to accidentally define a global variable (step 5..
