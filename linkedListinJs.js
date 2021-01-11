// Question : Create a Linked list in JavaScript 
// singly linked list

class LinkedList {
	constructor(value){
		this.head = {
			value : value,
			next : null
		}
		this.tail = this.head;  // With one node, the head and the tail is same node
		this.length = 1; 
	}
 /* append(value) to add a new value/Node to the end of the list */
	append(value){
		const newNode = {
			value : value,
			next : null
		}
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++
		return this
	}
 /* prepend(value) to add a new value/Node at the start of the list */
	prepend(value){
		const newNode ={
			value : value,
			next : null
		}
		newNode.next = this.head
		this.head = newNode
		this.length++
		return this
	}
 /* traverse(index) to find a node at a specific index */
	traverse(index){
		let counter = 0;
		let currentNode = this.head
		while(counter !== index){
			currentNode = currentNode.next
			counter++
		}
		return currentNode
	}
 /* insertion(index, value) to insert a value/Node at a specific index */
	insertion(index , value){
		const newNode ={
			value : value,
			next : null
		}

		let findPrevIndex = this.traverse(index-1)
		let temp = findPrevIndex.next
		findPrevIndex.next = newNode;
		newNode.next = temp;
		return this
	}

 /* printList() to print the linked list*/
	printList(){
		let arr = []
		let currentNode = this.head;
		while(currentNode !== null){
			arr.push(currentNode.value)
			currentNode = currentNode.next
		}
		return arr;
	}
}

const myLinkedList = new LinkedList(20) // initial value
myLinkedList.append(30);
myLinkedList.append(50)
myLinkedList.prepend(10);
myLinkedList.insertion(3,40)
myLinkedList.printList()
