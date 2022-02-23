//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
let nums = [2,7,11,15]; //array of integers
let target = 9; //target sum we're looking for
let arr_result = [] //empty array that'll be populated by the indices (index) of the two numbers that add to the target.

//Add the 'nums' and 'target' as parameter arguments.
twoSum(nums, target);

function twoSum(nums, target) {

    //loop through the array
    for(let i = 0; i < nums.length; i++){
    
        //get the current and next item in array list
        let current = nums[i]; //get the current item
        let next = nums[i + 1]; //get the next item
        
        //add the current and next together and add to a variable
        let current_next_sum = (current + next);
        
        //compare the sum to the target, and if it matches, push the indices to the 'arr_result'
        if(current_next_sum == target){
            arr_result.push(i);
            arr_result.push(i + 1);
        }
    }
    console.log(arr_result);
};
