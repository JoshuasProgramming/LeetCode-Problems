/**
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
*/

const missingNumber = () => {
    
    //get length of 'nums'
    let length = nums.length;
    
    //create array, 'arr' with only one item being 0
    let arr = [0];
    
    //loop for length of 'nums' times
    for(let i = 0; i < nums.length; i++){
        
        //whenever the length is greater than -1...
        if(length > -1){
            
            //...add the value that's assigned to 'length' to 'arr'
            arr.push(length);
            
            //decrement the 'length' value
            length--;
        }
    }
    
    //sort the 'arr' in numerical order
    arr = arr.sort();

    //loop for length of 'k' times
    for(let k = 0; k < arr.length; k++){

        //whenever an indiviudal 'k' index from the 'arr' isn't found in the 'nums' array...
        if(!(nums.includes(arr[k]))){
            
            //console log and return the number, 'k' at a specific index of 'arr'.
            console.log(arr[k]);
            return(arr[k]);
        }
    }

}

//create varible to store list of numbers
let nums = [9,6,4,2,3,5,7,0,1];

//insert 'nums' as reference/parameter for the 'missingNumber' function
missingNumber(nums);
