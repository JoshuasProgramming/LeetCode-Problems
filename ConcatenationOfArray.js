/**
 * Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]
*/


const getConcatenation = () => {
    
    //create a variable that will store the concatenated value of 'nums' and 'nums'
    
    //We're using the spread operator (e.g: [...nums]) to duplicate the 'nums' array
    let ans = nums.concat([...nums]);
    
    //console log and return the 'ans'
    console.log(ans);
    return ans;
}

//create a variable to store the values in 'nums'
let nums = [1,2,1];

//insert the 'nums' and reference/parameter for the 'getConcatenation' function.
getConcatenation(nums)
