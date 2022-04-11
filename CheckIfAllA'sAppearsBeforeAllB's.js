/**
 * Given a string s consisting of only the characters 'a' and 'b', return true if every 'a' appears before every 'b' in the string. Otherwise, return false.

Example 1:

Input: s = "aaabbb"
Output: true
Explanation:
The 'a's are at indices 0, 1, and 2, while the 'b's are at indices 3, 4, and 5.
Hence, every 'a' appears before every 'b' and we return true.
Example 2:

Input: s = "abab"
Output: false
Explanation:
There is an 'a' at index 2 and a 'b' at index 1.
Hence, not every 'a' appears before every 'b' and we return false.
Example 3:

Input: s = "bbb"
Output: true
Explanation:
There are no 'a's, hence, every 'a' appears before every 'b' and we return true.
*/

const checkString = () => {
    //create boolean variable
    let checker = true;
    
    //split 's' into a array of characters
    s = s.split("");
    
    //loop through the whole 's' array
    for(let i = 0; i < s.length; i++){
        
        //check if there is an 'a' after 'b'
        if((s[i] == 'b') && (s[i + 1] == 'a')){
            
            //turn the 'checker' variable to false
            checker = false;
        }
    }
    
    //console log the boolean value of 'checker'
    console.log(checker);
    
    //return the boolean value of 'checker'
    return checker;
}

let s = "bbb";
checkString();
