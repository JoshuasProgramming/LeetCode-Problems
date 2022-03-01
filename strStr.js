/**
 * Problem
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/

const strStr = () => {
    
    //Whenever the 'needle' word is an empty string...
    if(needle.length <= 0){
        
        //...we'll simple console log/return 0
        console.log(0);
        
        //the return will end the program with 0
        return 0;
    }
    
    //create variable to store the index of a particular character in a string. We'll get to this later (LINE 48 [SOLVED])
    indexAt = 0;
    
    //get the first letter/occurance in the 'needle' variable
    let firstOccurance = needle.toString("")[0];
    
    //loop for (length of the 'haystack' string variable) times
    for(let i = 0; i < haystack.length; i++){
        
        //check if the specific letter we're on, for the 'haystack' varaible is the same as the first letter of the 'needle' variable. If so...
        if(haystack[i] == firstOccurance){
            
            //... add the index we're currently on to the 'indexAt' variable
            //IMPORTANT: This will show us the index of the first occurrence of needle in haystack
            indexAt = i;
            
            //console log the index of the first occurrence of needle in haystack 
            console.log(indexAt);
            
            //return the index of the first occurrence of needle in haystack
            
            //the return will end the program with the first occurrence of needle in haystack
            return indexAt;
        }
    }
    
    //if we loop through and never have the character of a specific index for 'haystack' equal to the first letter of 'needle'...
    
    //... console log -1
    console.log(-1);
    
    //return -1
    return -1;
}

//create variable for the 'haystack'. This can be anyword
let haystack = "hello";

//create variable for the 'needle'. This word's first letter could or could not be a character within the 'haystack' varible
let needle = "ll";

//pass the 'haystack' and 'needle' variable as reference to the 'strStr' function
strStr(haystack,needle);
