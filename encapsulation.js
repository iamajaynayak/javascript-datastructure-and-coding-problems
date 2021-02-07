//Problem : Demonstrate Encapsulation / Data hiding in Javascript

// Solution : Javascript does not have the concept of private class, So to achieve data hiding, we can take advantage of closures

function counter(){
	let count = 0
	function counterIncrement(){
		count++
		console.log(count)
	}
	return counterIncrement
}

let callCounter = counter()     // or callCounter()() 
callCounter()



/* here variable 'count' is no longer directly accesable by other functions
we have to call 'counter()' to get the value, otherwise it will give an reference error