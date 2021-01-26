/* Problem : Print all the elements of an array without using any loop
Solution :
*/

function printArrayElement(arr){
	let len = arr.length;
	if (len <= 0) {
		return
	}
	console.log(arr[len-1])
	arr.pop()
	return printArrayElement(arr)
} 

printArrayElement([1,2,3,4,5,6])