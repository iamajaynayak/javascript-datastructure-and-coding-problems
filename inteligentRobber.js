/*
Question :
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed,
the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically 
contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob 
tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
  			 Total amount you can rob = 1 + 3 = 4.

*/

// Solution : // 1. Canot rob adjacent houses , 2. Find maximum amount that can be robbed

function inteligentRobber(houses){
	const len = houses.length;
	let oddHouses = 0 // start from the first house, and skip one house after that
	let evenHouses = 0 // start from second house, and skip by 1
	//Checking odd numbered houses
	for(let i=0; i<len; i=i+2){
		oddHouses += houses[i]
	}
	//checking even numbered houses
	for(let i=1; i<len; i=i+2){
		evenHouses += houses[i]
	}
	// Checking maximum amount
	if(oddHouses > evenHouses){
		return oddHouses
	}else{
		return evenHouses
	}

return null
}

inteligentRobber([10,20,30,40,50,60]) // 120