/**
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 
Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

const canConstruct = () => {
    
    //Whenever the 'magazine' includes the string 'ransomNote'...
    if(magazine.includes(ransomNote)){
        
        //console log true
        console.log(true);
        
        //return true
        return true;
        
    //Whenever the 'magazine' doesn't include the string 'ransomNote'...
    } else {
        
         //console log false
        console.log(false);
        
        //return false
        return false;
    }
}

//variable to store the 'ransomNote' string
let ransomNote = "aa";

//variable to store the 'magazine' string
let magazine = "aab";

//insert the 'ransomNote' and 'magazine' variables as reference/parameter for the 'conConstruct' function
canConstruct(ransomNote, magazine);
