// 1. Binary search
function binarySearch(arr, n){
	const newArr = arr.sort((a,b) => a-b)
	let low = 0;
	let high = newArr.length-1;
	while(low <= high){
		let middle = Math.floor((low+high)/2);
		if(newArr[middle] === n){
			return n
		}
		else if(newArr[middle] < n){
			low = middle
		}
		else{
			high = middle
		}
	}
	return false
}

binarySearch([6,5,4,8,1,3,9] , 8)

//2. Linear search

function linearSearch(arr, n){
	const len = arr.length
	for(let i=0; i <= len; i++){
		if(arr[i] === n){
			return n
		}
	}
	return false
}

linearSearch([6,5,4,8,1,3,9] , 8)