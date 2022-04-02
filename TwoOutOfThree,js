/**
 * Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. You may return the values in any order.

Example 1:

Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
Explanation: The values that are present in at least two arrays are:
- 3, in all three arrays.
- 2, in nums1 and nums2.
Example 2:

Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
Output: [2,3,1]
Explanation: The values that are present in at least two arrays are:
- 2, in nums2 and nums3.
- 3, in nums1 and nums2.
- 1, in nums1 and nums3.
Example 3:

Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
Output: []
Explanation: No value is present in at least two arrays.
*/

const twoOutOfThree = () => {
    
    //create three sets 
    let num1 = new Set([]);
    let num2 = new Set([]);
    let num3 = new Set([]);
    
    //create set which will contain the final result
    let finalArr = new Set([]);
    
    //add each item from the previous array to the set
    for(let i = 0; i < nums1.length; i++){
        num1.add(nums1[i]);
    }
    
    for(let i = 0; i < nums2.length; i++){
        num2.add(nums2[i]);
    }
    
    for(let i = 0; i < nums3.length; i++){
        num3.add(nums3[i]);
    }
    
    //turn sets into array 
    num1 = Array.from(num1);
    num2 = Array.from(num2);
    num3 = Array.from(num3);
    
    //combine arrays together and sort in numerical order
    let arr = (num1.concat(num2,num3).sort());
    
    //loop through array and check if the current and next are the same
    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        let next = arr[i + 1];
        
        if(current == next){
            finalArr.add(current);
        }
    }
    
    //convert set back to array
    finalArr = Array.from(finalArr);
    
    //console log and return result
    console.log(finalArr);
    return finalArr;
}

//create arrays
let nums1 = [1,2,2];
let nums2 = [4,3,3];
let nums3 = [5];

//insert arrays as reference/parameter for 'twoOutOfThree' function
twoOutOfThree(nums1, nums2, nums3);
