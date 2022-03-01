/**
 * Problem
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
*/

const RemoveDuplicatesFromSortedArray = (arr) => {
    
    //Create a set data structure, which we use later, in removing duplicates
    //REMEMBER: A set data structure by default will not allow any duplicates to enter.
    let removeDuplicates = new Set([]);
    
    //loop through the array, 'arr'
    for(let i = 0; i < arr.length; i++){
        
        //add each element from the array, 'arr' into the 'removeDuplicates' set data structure
        removeDuplicates.add(arr[i]);
    }
    
    //console log the set with zero duplicates
    console.log(removeDuplicates);
    
    //get length of set 
    //console log the size of the set 
    console.log(removeDuplicates.size);
    
    //return the size of the set 
    return removeDuplicates.size;
}

//create sorted array with random numbers inside (This works for unsorted arrays too)
let arr = [0,0,1,1,1,2,2,3,3,4];

//pass the array, 'arr' as reference to the 'RemoveDuplicatesFromSortedArray' function
RemoveDuplicatesFromSortedArray(arr);
