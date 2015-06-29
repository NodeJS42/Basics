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

aVariable is block scoped within the `if`'s curly braces


