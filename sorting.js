// Bubble sort

function bubbleSort(arr){
	let leng = arr.length;
	let temp;
	for(let i=0; i<=leng; i++){
		for(let j=0; j<=leng; j++){
			if(arr[j] > arr[j+1]){
				// Swapping values if 2nd value is grater than 1st value
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	return arr
}
bubbleSort([5,6,3,4,7,4,2,1,1,5,4,9])