// Problem : Build a Queue

// Solution : Queue can also be build using array, but that lacks performance. So, I'm using Linked list

class Queue{
	constructor(){
		this.first = null,
		this.last = null,
		this.length = 0
	}
	// Look Up/ Accesing the first in value
	peek(){
		return this.first
	}

	// Adding value in FIFO order
	enqueue(value){
		const newNode = {
			value : value,
			next : null
		}
		if(this.length === 0){
			this.first = newNode
			this.last = newNode
		}else{
			this.last.next = newNode;
			this.last = newNode
		}
		this.length++;
		return this
	}

	// Removing the first in value
	dequeue(){
		const holding = this.first
		this.first = this.first.next
		this.length--
		return this
	}
}

const queueCheck = new Queue();
queueCheck.enqueue(10)
queueCheck.enqueue(20)
queueCheck.enqueue(30)
queueCheck.dequeue();
queueCheck.peek()