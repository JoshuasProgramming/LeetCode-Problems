/**
 * Check If Two String Arrays are Equivalent
 * Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

 

Example 1:

Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.
Example 2:

Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true

Constraints:

1 <= word1.length, word2.length <= 103
1 <= word1[i].length, word2[i].length <= 103
1 <= sum(word1[i].length), sum(word2[i].length) <= 103
word1[i] and word2[i] consist of lowercase letters.
*/

const arrayStringsAreEqual = () => {
    
    //convert the array into a string and assign it to the original variable, 'word1'
    word1 = word1.join('').toString();
    
    //convert the array into a string and assign it to the original variable, 'word2'
    word2 = word2.join('').toString()
    
    //compare bothe 'word1' and 'word2'.
    //Whenever they both equal to the same string...
    if(word1 == word2){
        
        //console log true
        console.log(true);
        
        //return true
        return true;
        
    //whenever they both don't equal the same string...
    } else {
        
        //console log the false
        console.log(false);
        
        //return false
        return false;
    }
}

//assign strings into an array called 'word1'
let word1 = ["abc", "d", "defg"];

//assign strings into another array called 'word2'
let word2 = ["abcddefg"];

//inset 'word1' and 'word2' as reference/parameter for the 'arrayStringsAreEqual' function
arrayStringsAreEqual(word1, word2)
