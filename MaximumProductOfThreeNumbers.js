/**
 * Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:

Input: nums = [1,2,3]
Output: 6
Example 2:

Input: nums = [1,2,3,4]
Output: 24
Example 3:

Input: nums = [-1,-2,-3]
Output: -6
*/


const maximumProduct = () => {
   
   //sort the nums and restore it
   nums = nums.sort((a, b) => a - b);

   //create count 
   let count = 1;
   
   //countdown from 3-to-0
   let countdown = 3;
   
   //loop through the array, 'nums' but backwards
   for(let i = nums.length - 1; i >= 0; i--){
       
       //add the product to 'count'
       count = (count * nums[i]);
       
       //decrement the countdown ... [3-2-1-STOP]
       countdown--;
       
       //When the countdown is 0
       if(countdown == 0){
           
           //leave the for loop completely 
           break;
       }
       
   }
   
   //console log and return the 'count'
   console.log(count);
   return count;
}

//variable to store each integer item
let nums = [1,2,3,4];

//insert 'nums' as reference/parameter for the 'maximumProduct' function
maximumProduct(nums);
