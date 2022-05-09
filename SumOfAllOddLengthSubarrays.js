/**
Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
Example 3:

Input: arr = [10,11,12]
Output: 66
 
Constraints:

1 <= arr.length <= 100
1 <= arr[i] <= 1000
*/

const sumOddLengthSubarrays = () => {
    //the 'sum' variable will contain the sum of all odd-length subarrays of arr
    let sum = 0;
    
    //the 'list' array will contain each odd-length subarray
    let list = [];
    
    //loop through the array, 'arr' and add each number to the 'list' => This works as, each number has a length of 1, thus it is odd
    for(let i = 0; i < arr.length; i++){
        
        //put numbers into their own array and push
        list.push([arr[i]]);
    }
    
    //whenever the length of the array, 'arr' is odd...
    if((arr.length % 2) == 1){
        
        //loop through the array, 'arr'
        for(let i = 0; i < arr.length; i++){
        
            //whenever the second or third index is 'undefined', don't add anything, just move to the next item in the loop
            if((arr[i + 1] == undefined) || (arr[i + 2] == undefined)){
                continue;
            }
            
            //whenever the second or thrid index isn't 'undefined', add the current, second and thrid item to the array, 'list'
            list.push([arr[i], arr[i +1], arr[i +2]]);
        }
        
        //add the full array to the list when its greater than or equal to 5
        if((arr.length % 2 == 1) && (arr.length >=5)){
            list.push(arr)
        }
    }
    
    //loop through the array, 'list', and also loop through each individual array
    for(let i = 0; i < list.length; i++){
        for(let j = 0; j < list[i].length; j++){
            
            //add the sum of the sum and each indiviudal item throughout the list to the sum
            sum = sum + list[i][j]
        }
    }
    
    //console.log the list and sum
    console.log(list, sum);
    
    // return the sum
    return sum;
}

// variable to store each number in the array, 'arr'
let arr = [1,4,2,5,3];

//insert the array, 'arr' as reference/parameter for the 'sumOddLengthSubarrays' function
sumOddLengthSubarrays(arr);
