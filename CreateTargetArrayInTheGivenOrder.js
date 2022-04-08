/**
 * Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.

Example 1:

Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]
Example 2:

Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
Output: [0,1,2,3,4]
Explanation:
nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]
Example 3:

Input: nums = [1], index = [0]
Output: [1]
*/

const createTargetArray = () => {
    //create target array
    let targetArray = [];
    
    //loop for length of nums times
    for(let i = 0; i < nums.length; i++){
        
        //Add position, 'index[i]' add 1 element being 'nums[i]'
        targetArray.splice(index[i], 0, nums[i]);
    }
    
    //console log and return the target array
    console.log(targetArray);
    return targetArray;
}

//create varaible to store array of numbers
let nums = [1,2,3,4,0];

//create variable to store array of index values
let index = [0,1,2,3,0];

//add 'nums' and 'index' as reference/parameter for the 'createTargetArray' function
createTargetArray(nums, index);
