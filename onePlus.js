/* Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

function onePlus(arr){
	const len = arr.length
	const result = []
	for(let i=0; i<len;i++){
		if(i !== len-1){
			result.push(arr[i])
		}else if(i === len-1){
			let temp = arr[i]+1
			result.push(temp)
		}
	}
	return result
}

onePlus([1,2,3,4,5,6]) // [1,2,3,4,5,7]