/**
 * Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

Example 1:

Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.
Example 2:

Input: nums = [7,5,6,8,3]
Output: 1
Explanation:
The smallest number in nums is 3.
The largest number in nums is 8.
The greatest common divisor of 3 and 8 is 1.
Example 3:

Input: nums = [3,3]
Output: 3
Explanation:
The smallest number in nums is 3.
The largest number in nums is 3.
The greatest common divisor of 3 and 3 is 3.
 

Constraints:

2 <= nums.length <= 1000
1 <= nums[i] <= 1000
*/

const findGCD = () => {
    
    //get the smallest number
    let smallestNumber = nums[0];
    
    //get the largest number
    let largestNumber = nums[nums.length - 1];
    
    //create a set
    let commonDivisor = new Set([]);

    //loop for (largestNumber) times
    for(let i = 1; i <= largestNumber; i++){
        
        //whenever the smallestNumber and largestNumber have the same divisor, add it to the 'commonDivissor' set
        if((smallestNumber % i == 0) && (largestNumber % i == 0)){
            commonDivisor.add(i);
        }
    }
    
    //convert the set to an array
    commonDivisor = Array.from(commonDivisor);
    
    //console log and return the last item in the 'commonDivisor' array
    console.log(commonDivisor[commonDivisor.length - 1]);
    return commonDivisor[commonDivisor.length - 1];
}

//store the numbers in 'nums'
let nums = [2,5,6,9,10];

//insert 'nums' as reference/parameter for the 'findGCD' function
findGCD(nums);
