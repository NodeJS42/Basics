function closing(){
	var text = "Hello";
	function enclosed(){
		return text;
	}
	return enclosed();
}

//console.log(text); // ReferenceError: text is not defined
console.log(closing()); // Hello


