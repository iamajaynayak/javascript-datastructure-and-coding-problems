// Problem : Count the number of character of a given string to see which character is being used most
// Example : javascript -> j = 1, a = 2, v = 1, s = 1, c = 1, r = 1, i = 1, p = 1, t = 1

function mostUsedChar(input){
	let str = input.toLoweCase().replace(/\s/g,"") //.replaceAll doesnot work in node, works in browser
	const result = {}
	for(let i = 0; i<str.length; i++){
		if(result[str[i]]){
			result[str[i]] += 1
		}
		else{
			result[str[i]] = 1
		}
	}
	return result
}

mostUsedChar("JavaScript is cool")