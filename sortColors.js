/**
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2.
*/

const sortColors = () => {
    
    let numOf0s = 0;
    let numOf1s = 0;
    let numOf2s = 0;
    
    let finalArr = [];
    
    for(let i = 0; i < nums.length; i++){
        
        let current = nums[i];
        
        switch (current){
            case current = 0:
                numOf0s++;
                break;
            case current = 1:
                numOf1s++;
                break;
            case current = 2:
                numOf2s++;
                break;
        }
    }
    
    for(let i = 0; i < nums.length; i++){
        
        if(numOf0s >= 1){
            finalArr.push(0);
            numOf0s--;
            continue;
        } 
        
        if(numOf1s >= 1){
            finalArr.push(1);
            numOf1s--;
            continue;
        } 
        
        if(numOf2s >= 1){
            finalArr.push(2);
            numOf2s--;
            continue;
        } 
        
        
    }
    
    console.log(finalArr);
    
}

let nums = [2,0,2,1,1,0];
sortColors()
