// Question : Create a doubly Linked list in JS
class DoublyLinkedList{
	constructor(value){
		this.head ={
			value : value,
			next : null,  // doubly Linked list has 2 pointer next and previous
			prev : null  
		}
		this.tail = this.head;
		this.length = 1;
	}

	/* append(value) to add value/Node to the end of the list*/
	append(value){
		const newNode = {
			value : value,
			next : null,
			prev : null
		}
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++
		return this
	}
	/* prepend(value) to add value/Node at the starting of the List*/
	prepend(value){
		const newNode ={
			value : value,
			next : null,
			prev : null
		}
		newNode.next = this.head
		this.head.prev = newNode
		this.head = newNode
		this.length++
		return this
	}
	/* traverse(index) to find a specific Node by using index number*/
	traverse(index){
		let counter = 0;
		let currentNode = this.head
		while(counter !== index){
			currentNode = currentNode.next;
			counter++
		}
		return currentNode
	}
	/* insertion(index, value) to insert a new Node in between the List*/
	insertion(index , value){
		const newNode = {
			value : value,
			next : null,
			prev : null
		}
		const findPrevIndex = this.traverse(index-1); // index-1 will get us the previous Node of the index
		const temp = findPrevIndex.next; 
		findPrevIndex.next = newNode;
		newNode.prev = findPrevIndex;
		newNode.next = temp;
		temp.prev = newNode;
		this.length++;
		return this
	}
	/* deletion(index) to delete any Node by using index number*/
	deletion(index){
		const findPrevIndex = this.traverse(index-1);
		const deleteNode = findPrevIndex.next;
		findPrevIndex.next = deleteNode.next;
		deleteNode.next.prev = findPrevIndex;
		this.length--;
		return this
	}
	/* this will print the Linked list values inside an array*/
	printList(){
		const arr = [];
		let currentNode = this.head
		while(currentNode !== null){
			arr.push(currentNode.value)
			currentNode = currentNode.next
		}
		return arr
	}
}

const myLinkedList = new DoublyLinkedList(20) // initial node
myLinkedList.append(30); // [20,30]
myLinkedList.prepend(10); // [10,20,30]
myLinkedList.append(50); // [10,20,30,50]
myLinkedList.insertion(2,40); // [10,20,30,40,50]
myLinkedList.deletion(2); // [10,20,40,50]
myLinkedList.printList()	