// Constructor function example

// Constructor consstructs a new function every time it is called

function counter(){
	let count = 0;
	this.incrementCounter = function(){
		count++;
		console.log(count)
	}

	this.decrementCounter =function(){
		count--;
		console.log(count)
	}
}

let counting = new counter;
counting.incrementCounter()
counting.incrementCounter()
counting.incrementCounter()
counting.decrementCounter()