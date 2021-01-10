// Question : create a function and pass 2 array and check if 2nd array values are square of 1st array values
// For example : 
// [1,2,3] [1,4,9] => true
// [2,1,1] [1,4,1] => true as order doesn't matter
// [0,1] [5,6] => false

//creating function to accept 2 arrays
function same(arr1, arr2) {
  if(arr1.length !== arr2.length ){
    // checking if both array has the same length
    return false
  }else if(arr1.length=== 0 && arr2.length=== 0){
    // checking if both arrays are empty 
    return false
  }else if( typeof(arr1) !== "object"
   && typeof(arr2) !== "object"){
    // accepting only array, since array is object in javascript -> typeof(arr) = 'object'
    return false
  }
  else{
     const newArr1 = arr1.sort((a,b) => a-b)
     const newArr2 = arr2.sort((a,b) => a-b)  
     // sorting both arrays, since user can pass values randomly || not sorted way
     for(let i=0; i<=newArr1.length-1;i++){
       for(let j=0;j<=newArr2.length-1; j++){
          if(newArr1[i]**2 !== newArr2[j]){
            // Making the array1 values to square and then comparing it to array2
            // if array1**2 !== array2 -> return false
            return false
          }else{
            // else return true
            return true
          }
       }
     }
  }
  
 return "check the input again"
}

same([2,3] , [4,9])  // ----> true