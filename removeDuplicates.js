// Question : Remove duplicate values from an array ~ [1,2,1,3,2,4,3,5]

// Soultion 1:
function removeDuplicate(arr){
  const newArr = [];
  const len = arr.length
  arr.sort()
  let temp;
  for(let i=0; i<len; i++){
    if(arr[i] !== temp){
      newArr.push(arr[i]);
      temp = arr[i]
    }
  }
  return newArr
}

removeDuplicate([1,2,1,3,2,4,3,5])

// Soultion 2 : 
const arr = [1,2,1,3,2,4,3,5]
const len= arr.length;
const newArr= []

for(let i=0;i<len; i++){
  if(newArr.indexOf(arr[i]) === -1){
    newArr.push(arr[i])
  }
}
console.log(newArr)

// Solution 3 : 

const arr = [1,2,1,3,2,4,3,5]
const obj = {}

for(let i of arr){
  obj[i] = true
}
let a= Object.keys(obj)
console.log(a)
