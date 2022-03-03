/**
 * Determine if String Halves Are Alike
 * You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

 

Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
 

Constraints:

2 <= s.length <= 1000
s.length is even.
s consists of uppercase and lowercase letters.
*/


const halvesAreAlike  = () => {
    
    //create variable array which will contain every possible vowel (lowerCase and upperCase)
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    
    
    //if the string, 's' is even
    //REMEMBER: we are given a string 's' of even length, so it needs to be even
    if(s.length % 2 == 0){
        
        //turn string 's' into an array where each individual character is an index
        s = s.split("");
        
        //split the array,/string 's' in half
        const half = Math.ceil(s.length / 2);    
        
        //put the first half into the 'a' variable
        let a = s.splice(0, half);
        
        //put the second half into the 'b' variable
        let b = s.splice(-half);
        
        //create a counter for a. This will allow use to check the amount of vowels, a has in comparison to b
        aCount = 0;
        
        //create a counter for b. This will allow use to check the amount of vowels, b has in comparison to a
        bCount = 0;
        
        //loop through for (length of a) times
        for(let i = 0; i < a.length; i++){
            
            //whenever the a character from 'a' is also in the 'vowels' array...
            if(vowels.includes(a[i])){
                
                //...increment the 'aCount' by 1
                aCount++;
            }
        }
        
        //loop through for (length of b) times
        for(let i = 0; i < b.length; i++){
            
            //whenever the a character from 'b' is also in the 'vowels' array...
            if(vowels.includes(b[i])){
                
                //...increment the 'bCount' by 1
                bCount++;
            }
        }
        
        //compare the values of 'aCount' and 'bCount'
        //Whenever they equal the same...
        if(aCount == bCount){
            
            //console log a boolean true
            console.log(true);
            
            //return a boolean true
            return true;
            
        //Whenever they don't equal the same...
        } else {
            
            //console log a boolean false
            console.log(false);
            
            //return a boolean false
            return false;
        }
        
    //if the string 's' isn't even
    } else {
        
        //console log an error, saying that the string's length needs to be even
        console.log("String needs to be of even length");
        
        //return an error, saying that the string's length needs to be even
        return "String needs to be of even length";
    }
}

//create variable to store the string
let s = "book";

//insert the string, 's' as reference/parameter for the 'halvesAreAlike' function
halvesAreAlike(s);
