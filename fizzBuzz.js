/* Problem : between 0 to 100,
(i) if a number is multiple of 3, print "fizz".
(ii) if a number is multiple of 5, print "buzz"
(iii) if a number is multiple of both 3 and 5, print "fizzBuzz"
*/
function fizzBuzz(){
	const result = {}
	for(let i=1; i<=100; i++){
		if(i % 3 === 0){
			result[i] = "fizz"
		}else if(i % 5 === 0){
			result[i] = "buzz"
		}

		if(i % 15 === 0){  // if(i%3 === 0 && i%5 === 0)
			result[i] = "fizzBuzz"
		}
	}
	return result
}

fizzBuzz()