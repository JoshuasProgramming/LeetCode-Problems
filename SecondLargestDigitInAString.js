/**
 * Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

An alphanumeric string is a string consisting of lowercase English letters and digits.

Example 1:

Input: s = "dfa12321afd"
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.
Example 2:

Input: s = "abc1111"
Output: -1
Explanation: The digits that appear in s are [1]. There is no second largest digit. 
 
Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters and/or digits.
*/

const secondHighest = () => {
    
    //Create array, 'accepted_numbers' for when we check if the 's' character array contains numbers or not
    let accepted_numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    
    //turn the 's' string into a character array
    s = s.split("");
    
    //create a set array, called 'temp'
    let temp = new Set([]);
    
    //loop for (length of 's') times
    for(let i = 0; i < s.length; i++){
        
        //Whenever a item is a number...
        if(accepted_numbers.includes(s[i])){
            
            //...add it to the temp set
            temp.add(s[i]);
        }
    }
    
    //Order the temp set in numerical order, and convert to an array
    temp = Array.from(temp).sort()
    
    //Whenever the length of the temp array is greater than or equal to 2...
    if(temp.length >= 2){
        
        //... get the second item in the array (index 1, as we're using 0-based indexing)
        const [,second] = temp;
        
        //console log the second item (index 1, as we're using 0-based indexing)
        console.log(second);
        
     //Whenever the length of the temp array isn't greater than or equal to 2...
    } else {
        
        //console log -1
        console.log(-1);
        
        //return -1
        return -1;
    }
    
}

//variable to store the string
let s = "abc1111"

//Insert the string, s as reference/parameter for the 'secondHighest' function.
secondHighest(s);
