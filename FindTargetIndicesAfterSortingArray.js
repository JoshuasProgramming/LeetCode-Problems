/**
 *You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

Example 1:

Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.
Example 2:

Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.
Example 3:

Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4. 
*/

const targetIndices = () => {
    //sort the nums array
    nums = nums.sort();
    
    //create array to store final result of indices where nums[i] equal to target
    let finalArr = [];
    
    //loop through 'nums' array and check whether the target equals the nums[i] value. When it does add it to the 'finalArr' array.
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == target){
            finalArr.push(i);
        }
    }
    
    //console log and return the 'finalArr' array
    console.log(finalArr);
    return finalArr;
}

let nums = [1,2,5,2,3]
let target = 2;
targetIndices(nums, target);
