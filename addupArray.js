// Proble : FIND IF TWO ELEMENTS OF AN ARRAY ADD UP TO A GIVEN NUMBER

// solution 1 : The Naive approach, time complexity is O(n^2), space complexity is O(1)

function findSum(array, n){
	const leng = array.length;
	for(let i=0; i < leng; i++){
		for(let j= i+1; j < leng; j++){
			if(array[i]+array[j] === n){
				return true
			}
		}
	}
	return false
}

findSum([4,6,1,2,3,10] , 16)

// solution 2: time complexity O(n), space complexity is O(n)
function findSum(array, n){
	const leng = array.length;
	const store = {}
	for(let i=0; i < leng; i++){
		if(store[array[i]]){
				return true
			}
			else{
				store[n - array[i]] = true
			}
	}
	
	return false
}

findSum([4,6,1,2,3,10] , 16)