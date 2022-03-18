/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
 

Constraints:

0 <= s.length <= 100
0 <= t.length <= 104
s and t consist only of lowercase English letters.
*/

const isSubsequence = () => {
    
    //split 's' string into an array of characters
    s = s.split("");
    
    //split 't' string into an array of characters
    t = t.split("");
    
    //create variable for the index counter
    let index = 0;
    
    //create empty array
    let temp = [];
    
    //loop through t
    for(let i = 0; i < t.length; i++){
        
        //loop through s
        for(let j = 0; j < s.length; j++){
            
            //Whenever a specific character at 't' equals to a index of 's'...
            if(t[i] == s[index]){
                
                //...push the value of t[i] into the empty array
                temp.push(t[i]);
                
                //increment the 'index' counter
                index++;
            }
        }
    }
    
    //check if the temp in 'string' form is equal to the 's' in string form. Whenever it is...
    if(temp.join('').toString() == s.join('').toString()){
        //...console log true
        console.log(true);
        
        //...return true
        return true;
        
    } // Whenever they aren't the same...
    
    //console log 'false'
    console.log(false);
    
    //return false
    return false;
}

//create varaible to store the string value of 's'
let s = "abc"

//create varaible to store the string value of 't'
let t = "ahbgdc"

//insert 's' and 't' as reference/parameter for the 'isSubsequence' function
isSubsequence(s,t);
