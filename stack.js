// Problem : Build a stack data structure

// Solution : With Linked List

class Stack{
	constructor(){
		this.top = null,
		this.bottom = null,
		this.length = 0
	}
	// Peek -> To get the top value
	peek(){
		return this.top.value
	}
	// Push -> To add new value at the top
	push(value){
		const newNode = {
			value : value,
			next : null
		}
		if(this.length === 0){
			this.top = newNode
			this.bottom = newNode
		}else{
			const holding = this.top
			this.top = newNode
			this.top.next = holding
		}
		this.length++
		return this
	}
	// Pop -> To remove the top value
	pop(){
		const delItem = this.top;
		this.top = this.top.next;
		this.length--;
		return this
	}
}

const stackCall = new Stack();
stackCall.push(10)
stackCall.push(20)
stackCall.push(30)
stackCall.pop()
stackCall.peek()


//Solution : with Array

class Stack{
	constructor(){
	this.arr = []
	}
	//Look up
	peek(){
	return this.arr[this.arr.length-1]
	}
	//Insertion
	push(value){
	return this.arr.push(value)
	}
	//Deletion
	pop(){
	return this.arr.pop()
	}
}

const stackCall = new Stack()
stackCall.push(10)
stackCall.push(20)
stackCall.push(30)
stackCall.pop()
stackCall.peek()
