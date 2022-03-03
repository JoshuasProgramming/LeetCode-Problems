/**
 * Replace All ?'s to Avoid Consecutive Repeating Characters
 * Given a string s containing only lowercase English letters and the '?' character, convert all the '?' characters into lowercase letters such that the final string does not contain any consecutive repeating characters. You cannot modify the non '?' characters.

It is guaranteed that there are no consecutive repeating characters in the given string except for '?'.

Return the final string after all the conversions (possibly zero) have been made. If there is more than one solution, return any of them. It can be shown that an answer is always possible with the given constraints.

 

Example 1:

Input: s = "?zs"
Output: "azs"
Explanation: There are 25 solutions for this problem. From "azs" to "yzs", all are valid. Only "z" is an invalid modification as the string will consist of consecutive repeating characters in "zzs".
Example 2:

Input: s = "ubv?w"
Output: "ubvaw"
Explanation: There are 24 solutions for this problem. Only "v" and "w" are invalid modifications as the strings will consist of consecutive repeating characters in "ubvvw" and "ubvww".
 

Constraints:

1 <= s.length <= 100
s consist of lowercase English letters and '?'.
*/


const modifyString = () => {
    
    //create an array of letter characters
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    
    //create a counter. We'll use this later
    let count = 0;
    
    //turn the string into an array
    s = s.split("");
    
    //loop for (length of string. 's') times
    for(let i = 0; i < s.length; i++){
        
        //whenever a character from the array/string, 's' isn't a letter...
        if(!(letters.includes(s[i]))){
            
            //increment the counter
            count++;
            
            //loop through the letters array (a-z)
            for(let j = 0; j < letters.length; j++){
                
                //check if the counter is greater that 0
                if(count > 0){

                    //replace the character at this specific index, with the first index letter of 'letters'
                    s.splice(i, 1, letters[j]);
                    
                    //remove the first letter from 'letters' as we've already used it above
                    letters.shift();

                    //decrement the counter so we're at zero
                    count--;
                } 
                
            }
        }
    }
    
    
    //console log the final string (convert the array to a string)
    console.log(s.join('').toString())
}

//create string to contain lowercase characters
let s = "?zs";

//pass the 's' string as reference/parameter to the 'modifyString' function
modifyString(s);
