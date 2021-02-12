// Problem : write a program to add 10 to a number, and cache the value so we don't want our program to take time for same given input
// Solution : 

const cache = {}  // for caching

function add10(n){
	if(n in cache){
		return cache[n]
	}else{
		console.og("checking no of time function runs")
		cache[n] = 10 + n
		return cache[n]
	}
}

add10(5)
add10(5)
add10(5)

// the function will only run once if the given input is same