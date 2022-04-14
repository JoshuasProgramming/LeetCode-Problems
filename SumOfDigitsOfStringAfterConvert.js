/**
 * You are given a string s consisting of lowercase English letters, and an integer k.

First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26). Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total.

For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:

Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
Transform #2: 17 ➝ 1 + 7 ➝ 8
Return the resulting integer after performing the operations described above.

Example 1:

Input: s = "iiii", k = 1
Output: 36
Explanation: The operations are as follows:
- Convert: "iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
- Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
Thus the resulting integer is 36.
Example 2:

Input: s = "leetcode", k = 2
Output: 6
Explanation: The operations are as follows:
- Convert: "leetcode" ➝ "(12)(5)(5)(20)(3)(15)(4)(5)" ➝ "12552031545" ➝ 12552031545
- Transform #1: 12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33
- Transform #2: 33 ➝ 3 + 3 ➝ 6
Thus the resulting integer is 6.
Example 3:

Input: s = "zbax", k = 2
Output: 8
*/

const getLucky = () => {
    
    //array which will store the results of 'k' transformations
    let sums = [];
    
    /*Convert */
    
    //make an array from a-z
    let alphabet = [null, 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        
    //split s into characters
    s = s.split("");
        
    //add each indexOf into an arr
    let arr = [];
    
    //loop for length of s times
    for(let i = 0; i < s.length; i++){
        
        //get the indexOf s[i] from the array of a-z
        arr.push(alphabet.indexOf(s[i]))
    }
    
    //create a temp arr
    let temp = arr;
    
    //reassign the array, 'arr' to an empty value
    arr = [];
    
    
    //loop for length of 'temp' times
    for(let i = 0; i < temp.length; i++){
        
        //we're adding each digit for every number to its own indiviudal index (e.g: [12, 2, 5, 15] => [1,2,2,5,1,5])
        for(const digit of `${temp[i]}`){
            arr.push(+digit);
        }
    }
    
    /*Transform*/
    
    //loop using a while loop when k > 0
    while(k > 0){
        
        //set the sum of this transformation to 0
        let sum = 0
        
        //loop for length of 'arr' times
        for(let i = 0; i < arr.length; i++){
            
            //make 'sum' the sum of itself and arr[i]          
            sum = sum + arr[i]
        }
        
        //decrement 'k' (The greater 'k' the greater amount of transformations)
        k--;
        
        //push this transformation sum into the 'sums' array
        sums.push(sum);
        
        //when k exists
        if(k){
            //set the 'arr' to empty
            arr = [];
            
            //make the sum an array of characters
            sum = sum.toString().split("");
            
            //loop for length of sum times
            for(let i = 0; i < sum.length; i++){
                
                //convert the sum and add it to the array, 'arr'
                arr.push(parseInt(sum[i]));
            }
            
            //reassign the 'sum' to 0
            sum = 0;
            
        }
    }
    
    //get last array element of 'sums'
    console.log(sums[sums.length - 1]);
    return sums[sums.length - 1];
    
}

//create varaible to store the value of 's' 
let s = "iiii"

//create variable to store the value of 'k'
let k = 1;

//insert the valus of 's' and 'k' as reference/parameter for the 'getLucky' function
getLucky(s,k)
