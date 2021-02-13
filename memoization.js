// Problem : write a program to add 10 to a number, and cache the value so we don't want our program to take time for same given input
// Solution : 

function memoization(){
  let cache = {} // for caching
  function addto10(n){
    if(n in cache){
      return cache[n]
    }else{
      console.log("memorizes a new value")
      cache[n] = n + 10;
      return cache[n]
    }
  }
  return addto10
}

const memoized = memoization()
memoized(5)
memoized(5)

// the function will only run once if the given input is same
