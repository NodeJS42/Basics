function closing(){
	var text = "Hello";
	return text;
}

console.log(text); // ReferenceError: text is not defined
console.log(closing()); // Hello
