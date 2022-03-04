/**
 * Given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters.

 

Example 1:

Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
Example 2:

Input: s = "Hello"
Output: 1
 

Constraints:

0 <= s.length <= 300
s consists of lowercase and uppercase English letters, digits, or one of the following characters "!@#$%^&*()_+-=',.:".
The only space character in s is ' '.
*/

const countSegments = () => {
    
    //variable to store the amount of segments
    //In simple terms, we're just counting the amount of words 
    let count = 0;
    
    //turn the string into an array, where each word is at a unique index
    s = s.split(" ");
    
    //loop for (length of 's') times
    for(let i = 0; i < s.length; i++){
        
        //increment the counter by 1 each time
        count++
    }
    
    //console log the counter value, which stores the total number of segments in the string
    console.log(count);
    
    //return the counter value, which stores the total number of segments in the string
    return count;
}

//variable which will store the string, 's'
let s = "Hello, my name is John";

//inserting the 's' string as reference/parameter for the 'countSegment' function
countSegments(s);
