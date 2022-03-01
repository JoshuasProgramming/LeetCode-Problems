/**
 * Problem
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/

const MergeSortedArray = () => {
    
    //create empty array, 'arr' which will store the final array of the 'MergeSortedArray'
    let mergedNew = [];
    
    //counter for to count all numbers greater than 0 in the first array
    let count1 = 0;
    
    //counter for to count all numbers greater than 0 in the second array
    let count2 = 0;
    
    
    //loop through the first array
    for(let i = 0; i < n1.length; i++){
        
        //whenever an integer isn't equal to 0...
        if(n1[i] !== 0){
            
            //...increment the first counter by 1
            count1++;
        }
    }
    
    //loop through the second array
    for(let i = 0; i < n2.length; i++){
        
        //whenever an integer isn't equal to 0...
        if(n2[i] !== 0){
            
            //...increment the second counter by 1
            count2++;
        }
    }
    
    //merge both, the first and second array together
    //IMPORTANT: We're going to still have zeros in the merged array so, this needs to be fixed
    let merged = n1.concat(n2);
    
    //loop through the 'merged' array
    for(let i = 0; i < merged.length; i++){
        
        //whenever an integer isn't a zero...
        if(merged[i] > 0){
            
            //...push the integer into the 'mergedNew' array (as we said on line 53 that we'll have to somehow remove the zeros from the merged array [SOLVED])
            //IMPORTANT: 'mergedNew is not sorted, so we'll have to implement a sorting method
            mergedNew.push(merged[i]);
        }
        
    }
    
    //console log the original array of the first, with it's counter, 'count1' 
    console.log("n1: " + n1 + " (" + count1 + ") => length (m)");
    
    //console log the original array of the second, with it's counter, 'count2' 
    console.log("n2: " + n2 + " (" + count2 + ") => length (n)");
    
    //console log the 'mergedNew' array with a sorting method (as we said on line 63 that we'll have to implement a sorting method [SOLVED])
    console.log(mergedNew.sort());
    
    //return the 'mergedNew' array with a sorting method 
    return mergedNew.sort();
}

//create variable with integers inside of array (first)
let n1 = [1,2,3,0,0,0];

//create variable with integers inside of array (second)
let n2 = [2,5,6];

//pass the first and second varaibles as reference in the 'MergeSortedArray' function
MergeSortedArray(n1, n2);
