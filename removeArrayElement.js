/* Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
important : Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the returned length.
*/

function removeElement(arr){
	for(let i=0; i < arr.length; i++){
		if(arr[i] === arr[i+1]){
			 arr.splice(arr[i],1)
		}
	}
	return arr
}

function checkRepeatElement(arr){
	const len = arr.length
	for(let i=0; i<len; i++){
		removeElement(arr)
	}
	console.log( "New length :"+ arr.length )
	return arr
}

checkRepeatElement([0,0,0,1,1,2,3,4,4,4])