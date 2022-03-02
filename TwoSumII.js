/**
 * Problem
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/


const TwoSumII = () => {
    
    //create empty array. We'll store the two indices of the numbers into this array
    let arr_result = [];
    
    //Becasue we don't want the two index values to be zero-based, we'll add a 'null' value to the start of the array 
    numbers.unshift(null);
    
    //loop for 'length of numbers in array (except null)' times
    for(let i = 1; i < numbers.length; i++){
        
        //get the current number in array
        let current = numbers[i];
        
        //get the next number in array
        let next = numbers[i + 1];
        
        //sum both, the current and next number
        let current_next_sum = (current + next);
        
        //compare the sum of both current and next, to the target value
        if(current_next_sum == target){
            
            //if the sum of both current and next equals to the target then...
            
            //push the current index into the empty array we made earlier
            arr_result.push(i);
            
            //push the next index into the empty array we made earlier
            arr_result.push(i + 1);
        }
    }
    
    //console log the final array. containing the two indices that add to the 'target'
    console.log(arr_result);
    
    //console log the final array. containing the two indices that add to the 'target'
    return arr_result;
    
}

//create variable of type 'number array' for the numbers to be stored inside of
let numbers = [2,7,11,15];

//create variable to store the sum target we want to find
let target = 9;


//insert the numbers array and the target as reference for the 'twoSumII' function
TwoSumII(numbers, target)
