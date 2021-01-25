/* Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3x.

 Example 1:
Input: n = 27
Output: true

Example 2:
Input: n = 0
Output: false
*/

function powerOfThree(num){
	for(let i=1; i<=num; i++){
		//Checking if 3^x === num, if found return true
		if(3**i === num){
			return true
		}
		// improvements if 3^x > num then return false as the value of 3^x can not be greater than num
		else if(3**i > num){
			return false
		}
	}
	// If not found return false
	return false
}

powerOfThree(27) // true
