/**
 * Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

Example 1:

Input: s = "Hello"
Output: "hello"
Example 2:

Input: s = "here"
Output: "here"
Example 3:

Input: s = "LOVELY"
Output: "lovely"
 

Constraints:

1 <= s.length <= 100
s consists of printable ASCII characters.
*/

const ToLowerCase = (s) => {
    
    //empty array which will store the individual characters in lowercase form later on.
    let newArr = [];
    
    //array, 'arr' will store each individual character of 's' string.
    let arr = s.split("");
    
    //loop through the array, 'arr'
    for(let i = 0; i < arr.length; i++){
        
        //check if the character at index i is an upper case character. When it is...
        if(arr[i] == arr[i].toUpperCase()){ //tpUpperase usually converts an lower case string/character to a upper case. However, we're comparing our index string to our index string if it was converted to uppercase. Thsi will give use a true or false answer, depending on whether or not our index string is upper or lower case.
            
            //push the uppercase character into the 'newArr' array, which we created earlier. 
            //When pushing into 'newArr' we'll convert it from UpperCase to lowerCase
            newArr.push(arr[i].toLowerCase());
            
        //When it isn't...
        } else {
            //push the lowercase character into the 'newArr' array, which we created earlier.
            newArr.push(arr[i]);
        }
        
    }
    
    //console log AND return the 'newArr' array, but in a string form.
    //This means we have to use the 'join()' method to join the characters together, and the 'toString()' method to convert it from array to string.
    console.log(newArr.join('').toString());
}

//variable to store the string
let s = "HELLO";

//inserting the string, 's' as reference/parameter to the 'ToLowercase' function
ToLowerCase(s);
