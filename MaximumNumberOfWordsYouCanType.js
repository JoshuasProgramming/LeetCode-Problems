/**
 * There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.

Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.

Example 1:

Input: text = "hello world", brokenLetters = "ad"
Output: 1
Explanation: We cannot type "world" because the 'd' key is broken.
Example 2:

Input: text = "leet code", brokenLetters = "lt"
Output: 1
Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.
Example 3:

Input: text = "leet code", brokenLetters = "e"
Output: 0
Explanation: We cannot type either word because the 'e' key is broken.
*/

const canBeTypedWords = () => {

    //split broken letters into different characters
    brokenLetters = brokenLetters.split("");
    
    //split text into an array which contains a word per element
    text = text.split(" ");
    
    //store the length of the 'text' in a variable that'll determine the amount of words that are typed in on a keyboard
    let NumberOfWordsThatAreFullyTyped = text.length;
    
    //loop for the length of text times
    for(let i = 0; i < text.length; i++){
        
        //created boolean variable 
        let active = true;
        
        //loop for the length of brokenLetters times
        for(let k = 0; k < brokenLetters.length; k++){
            
            //check if a broken letter in inside of the 'text' 
            if((text[i].includes(brokenLetters[k])) && (active == true)) {
                
                //whenever it is we'll decrement the mount of words that are typed in on a keyboard
                NumberOfWordsThatAreFullyTyped--;
                
                //make 'active' false;
                active = false;
            }
        }
    }
    
    //console log and return the 'NumberOfWordsThatAreFullyTyped'
    console.log(NumberOfWordsThatAreFullyTyped);
    return NumberOfWordsThatAreFullyTyped;
}

//create variable to store the text
let text = "leet code";

//create variable to store the broken letters
let brokenLetters = "e";

//insert the 'text' and 'brokenLetters' as reference/parameter for the 'canBeTypedWords' function
canBeTypedWords(text, brokenLetters);
