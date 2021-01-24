/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 
Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "() [] {}"
Output: true
Example 3:

Input: s = "(]"
Output: false

*/

function matchPatentheses(input){
	const arr = input.split(" ")
	const leng = arr.length-1

	const brackets = ['()' , '{}' , '[]']

	for(let i = leng; i >= 0; i--){
		for(let j=0 ; j<brackets.length; j++){
			if(arr[i] == brackets[j]){
				arr.pop()
			}
		}
	}
	if(arr.length == 0){
		return true
	}else{
		return false
	}
}

matchPatentheses('() []')