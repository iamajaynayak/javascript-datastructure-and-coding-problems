/* Question : Print fibonacci sequence upto a given index */

// Soultion 1 : Using for loop
function findFibonacciWithFor(index){
	let sum = 0;
	let a = 0;
	let b = 1;
	for(let i=0; i < index; i++){
		console.log(a);
		sum = a + b;
		b = a;
		a = sum;
	}
}

findFibonacciWithFor(8)

// Solution 2 : Using Recursion
let sum = 0;
let a = 0;
let b = 1;

function findFibonacciWithRecursion(index){
	// Base case or Terminating case
	if(index < 1){
		return 
	}
	console.log(a);
	sum = a + b;
	b = a;
	a = sum
	// Recursive Case
	return findFibonacciWithRecursion(index-1)
}

findFibonacciWithRecursion(8)