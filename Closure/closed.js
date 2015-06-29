function closing(){
	var text = "Hello";
	function enclosed(){
		text += "sdf";
		return text;
	}
	return enclosed();
}

//console.log(text); // ReferenceError: text is not defined
console.log(closing()); // Hello
