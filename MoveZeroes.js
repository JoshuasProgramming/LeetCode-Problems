/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
*/
const moveZeroes = () => {
    
    //variable which has end of the 'nums' array (last pointer)
    let last = nums.length;
    
    //loop through the 'nums' 
    for(let i = 0; i < nums.length; i++){
        
        
        //when an item is 0...
        if(nums[i] == 0){
            
            //remove the 0
            nums.splice(i, 1);
            
            //insert the 0 and the end of the list
            nums.splice(last, 0, 0);
        }
        
    }
    
    //console.log and return the modified 'nums' array
    console.log(nums);
    return nums;
}

//variable to store the numbers in 'nums'
let nums = [0,1,0,3,12];

//insert 'nums' as reference/parameter for the 'moveZeros' function
moveZeroes(nums);
