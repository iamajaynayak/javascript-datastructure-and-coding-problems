/*
Problem : Given an array, rotate the array to the right by k steps, where k is non-negative.
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Note :- Do it in-place with O(1) extra space
*/

// Solution : 

function rotateArray(arr, k){
	const len = arr.length-1;
	for(let i = len; i > k; i--){
		let temp = arr.pop()
		arr.unshift(temp)
	}
	return arr
}

rotateArray([1,2,3,4,5,6,7] , 3 )  // [5,6,7,1,2,3,4]