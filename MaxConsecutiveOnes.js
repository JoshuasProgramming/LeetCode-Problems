/**
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/

const findMaxConsecutiveOnes = () => {
    //create variable to count the amout of consecutive ones
    //we'll start out at 0, and increment each time we hit a one
    //Whenever we hit a zero, we'll reset this counter
    let consecutiveOnes = 0;
    
    //empty array, which will store all the previous counts of 'consecutiveOnes' before we hit a zero, or at the end of the 'nums'.
    let consecutives = [];
    
    //loop through for (length of 'nums') times
    for(let i = 0; i < nums.length; i++){
        
        //Whenever a specific index of 'nums' contains a '1'...
        if(nums[i] == 1){
            
            //increment the 'consecutiveOnes' variable by 1
            consecutiveOnes++;
        }
        
        //Whenever a specific index of 'nums' doesn't contain a '1'...
        else if(nums[i] !== 1){
            
            //push the counter of 'consecutiveOnes' into the 'consecutives' array
            consecutives.push(consecutiveOnes);
            
            //turn the 'consecutiveOnes' back to zero
            consecutiveOnes = 0;
        }
        
        //Whenever we get to the end of the array, but haven't got a zero
        if(i == nums.length - 1){
            
            //push the counter of 'consecutiveOnes' into the 'consecutives' array
            consecutives.push(consecutiveOnes);
        }
    }
    
    //console log the highest 'consecutiveOnes' value
    //by sorting the 'consecutive' array, and using the 'pop' method, (which will get the last item in the list, the highest).
    console.log(consecutives.sort().pop());
    
    //return the highest 'consecutiveOnes' value
    //by sorting the 'consecutive' array, and using the 'pop' method, (which will get the last item in the list, the highest).
    return consecutives.sort().pop();
}

//variable to store the binary array nums
let nums = [1,0,1,1,0,1];

//inserting the 'nums' varaible as reference/parameter for the 'findMaxConsecutiveOnes' function
findMaxConsecutiveOnes(nums)
