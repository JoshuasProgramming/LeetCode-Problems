/**
 * Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
Example 3:

Input: nums = [1,2,3]
Output: 0
 
Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100
*/

// [1,2,3,1,1,3] => [[0,3], [0,4], [2, 5], [3,4]] => 4
// [0,1,2,3,4,5]

const numIdenticalPairs = () => {
    
    //create variable that'll allow us to compare each item to what comaes after it.
    let increment = 1;
    
    //'count' is for counting the amount of good pairs from the 'nums' array of integers
    let count = 0;
    
    //loop through each integer item in the 'nums' array.
    //We're doing this for the 'length of the array, 'nums'' times
    for(let i = 0; i < nums.length; i++){
        
        //because we don't want to compare an item to itself, on each loop of an integer, we'll compare it to everything after it, but not before it or itself
        for(let j = increment; j < nums.length; j++){
            
            //compare the integers at j and i to see if they're the same. Whenever they are...
            if(nums[j] == nums[i]){
                
                //...increment the 'count' by 1
                count++
            }
        }

        //increment the 'increment' variable by 1, as this will allow us to start the second for loop at the next item from the current.
        //e.g: [1,2,3] => [[1 == 2 , 1 == 3] || [2 == 3]]
        increment++;
        
    }
    
    //console log and return the 'count'
    console.log(count);
    return count;
}

//create 'nums' array to store integer items
let nums = [1,2,3,1,1,3];

//insert 'nums' as reference/parameter for the 'numIdenticalPairs' function.
numIdenticalPairs(nums)
