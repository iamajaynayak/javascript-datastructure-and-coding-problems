/* Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note : You must do this in-place without making a copy of the array.
[0,1,0,3,12] --> [1,3,12,0,0]
*/

// Important - 1. Order of the inputs should not change
//			   2. Can not use an another array

function moveZero(arr){
	const leng = arr.length-1;
	let temp;
	for(let i=0; i<leng; i++){
		for(let j=0; j<leng; j++){
			if(arr[j] === 0){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp
			}
		}
	}
	return arr
}

moveZero([0,1,0,3,12]) // [1,3,12,0,0]