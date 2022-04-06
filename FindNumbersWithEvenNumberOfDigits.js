/**
 * Given an array nums of integers, return how many of them contain an even number of digits.

Example 1:

Input: nums = [12,345,2,6,7896]
Output: 2
Explanation: 
12 contains 2 digits (even number of digits). 
345 contains 3 digits (odd number of digits). 
2 contains 1 digit (odd number of digits). 
6 contains 1 digit (odd number of digits). 
7896 contains 4 digits (even number of digits). 
Therefore only 12 and 7896 contain an even number of digits.
Example 2:

Input: nums = [555,901,482,1771]
Output: 1 
Explanation: 
Only 1771 contains an even number of digits.
*/

const findNumbers = () => {
    
    //create counter to count the amount of items that have an even amount of digits
    let counter = 0;
    
    //loop through the 'nums' array
    for(let i = 0; i < nums.length; i++){
        
        //convert the integer to a string and get it's length.
        //Whenever item, when divided by 2 gives a remainder of zero, we'll increment the counter by 1.
        if(nums[i].toString().length % 2 == 0){
            counter++;
        }
    }
    
    //console.log and return the counter's final amount.
    console.log(counter);
    return counter;
}

//create variable to store the numbers as 'nums'
let nums = [12,345,2,6,7896];

//add the 'nums' as reference/parameter for the 'findNumbers' function
findNumbers(nums);
