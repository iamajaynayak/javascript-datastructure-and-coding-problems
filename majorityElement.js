// Find the majority element in an array [2,2,1,1,1,2,2] || Most occuring element in an array


// This function will find which key has the most occurance 
function findKeyByValue(obj, value){
	return Object.keys(obj).find(key => obj[key] === value)
}


// This function will store every element, and how many time it occured in "obj" 
function findMajor(arr){
	const leng = arr.length
	const obj = {}
	for(let i=0; i<leng; i++){
		if(!obj[arr[i]]){
			obj[arr[i]] = 1
		}else{
			obj[arr[i]] += 1
		}
	}
	let max = Math.max(...Object.values(obj))
	return findKeyByValue(obj, max)
}

findMajor([2,2,1,1,1,2,2]) // returns 2