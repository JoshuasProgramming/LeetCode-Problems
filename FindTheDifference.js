/**
 * You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.

Example 1:

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
Example 2:

Input: s = "", t = "y"
Output: "y"
 
Constraints:

0 <= s.length <= 1000
t.length == s.length + 1
s and t consist of lowercase English letters.
*/

const findTheDifference = () => {
    
    //turn the 's' string into an array of characters
    s = s.split("");
    
    //turn the 't' string into an array of characters
    t = t.split("");
    
    //get the 'difference' by subtracting the 't' character array by the 's' character array
    let difference = t.length - s.length;
    
    //get the full size of the 's' string
    //e.g: 's' = ['a','b','c', 'd'] (s = 4) [i = 4]
    //e.g: 't' = ['a','b','c', 'd', 'e'] (t = 5)
    //e.g: 'difference' = t - 5 [5 - 4 => 1] 
    
    let i = s.length;
    
    //loop for (length of difference) times
    for(let j = 0; j < difference; j++){
        
        //console log whatever value is at the 'i' index of 't'
        //e.g: [i = 4] will give us "e" becuase i is the 4th index 
        console.log(t[i]);
        
        //increment i by 1 for when there are more than 1 numbers
        i++;
    }
    
}

//variable to store the string, 's'
let s = "abcd";

//variable to store the string, 't'
let t = "abcde";

//insert the 's' and 't' as reference/parameter for the 'findTheDifference' function
findTheDifference(s,t);