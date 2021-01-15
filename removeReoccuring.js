// Question : Remove reoccuring numbers from an array [1,2,1,6,6,4,3,5,4,9,6,8,4,4,3,1]

function removeReoccuring(arr){
	const length = arr.length;
	const result = new Set()
	// Set() is a data structure for storing group of unorderd unique elements
	for(let i=0; i < length; i++){
		result.add(arr[i])
	}
	return result
}

removeReoccuring([1,2,1,6,6,4,3,5,4,9,6,8,4,4,3,1])