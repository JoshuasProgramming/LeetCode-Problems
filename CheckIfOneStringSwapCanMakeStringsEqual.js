/**
 * Check if One String Swap Can Make Strings Equal
 * You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

Example 1:

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".
Example 2:

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.
Example 3:

Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.
 

Constraints:

1 <= s1.length, s2.length <= 100
s1.length == s2.length
s1 and s2 consist of only lowercase English letters.
*/

const areAlmostEqual = () => {
    
    //reverse the 's1' string
    let s1Reverse = (s1.split("").reverse().join("").toString(""));
    
    //reverse the 's2' string
    let s2Reverse = (s2.split("").reverse().join("").toString(""));
    
    //compare each both strings 
    //Whenever the reversed string is equal to the other string (non-reversed)...
    if((s1Reverse == s2) || (s2Reverse == s1)){
        
        //console log true
        console.log(true);
        
    //Whenever the reversed string isn't equal to the other string (non-reversed)...
    } else {
        
        //console log false
        console.log(false)
    }
}

//create variable to store the first string
let s1 = "bank";

//create variable to store the second string
let s2 = "knab";

//insert both 's1' and 's2' as reference/parameter for the 'areAlmostEqual'
areAlmostEqual(s1,s2)
