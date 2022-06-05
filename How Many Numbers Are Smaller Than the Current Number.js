/**
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

Example 1:

Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
Example 2:

Input: nums = [6,5,4,8]
Output: [2,1,0,3]
Example 3:

Input: nums = [7,7,7,7]
Output: [0,0,0,0]
*/

const smallerNumbersThanCurrent = () => {
    
    //arr to store the output
    let finalArr = [];
    
    //counter variable to store the amount of numbers less than a particular number
    let counter = 0
    
    //loop through main array of numbers
    for(let i = 0; i < nums.length; i++){
        
        //get each number item and loop through the rest of the array list
        for(let k = 0; k < nums.length; k++){
            
            //check if the number we're currently at is greater than the next number in the loop 
            if(nums[i] > nums[k]){
                
                //if so increment the counter by 1
                counter++
            }
        }
        
        //add the counter to the finalArr
        finalArr.push(counter)
        
        //reassign the counter to 0
        counter = 0;
    }
    
    //console.log and return the finalArr
    console.log(finalArr);
    return finalArr;
}

//variable to store the nums
let nums = [8,1,2,2,3];

//insert 'nums' as reference/parameter for the 'smallerNumbersThanCurrent' function
smallerNumbersThanCurrent(nums)
