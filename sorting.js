// Bubble sort

function bubbleSort(arr){
	let leng = arr.length;
	let temp;
	for(let i=0; i<leng; i++){
		for(let j=0; j<leng; j++){
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

// Selection sort

function selectionSort(arr){
	let leng = arr.leng;
	let min;
	for(let i = 0; i < leng; i++){
		min = i
		for(let j= i+1; j < leng; j++){
			if(arr[j] < arr[min]){
				min = j
			}
		}
		if(i != min){
			let temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp
		}
	}
	return arr
}

selectionSort([7,4,5,9,8,2,1])
