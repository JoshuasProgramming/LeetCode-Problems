/**
 * Problem
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

Example:

Input: "Hello World"
Output: 5
*/


const LengthOfLastWord = () => {
    
    //create counter, which we'll use later get the length of the last word in the sentence
    let counter = 0;
    
    //turn the word which was inserted, into an array, where each word is an element
    //e.g: 'hello world' => ['hello', 'world']
    let wordArray = word.split(" ");

    //get the length of the array, which has each word as an element.
    let wordArrayLength = wordArray.length;
    
    //get the last element/word from the array
    //We'll have to minus the length of the array by 1, becuase when we loop through the 'lastWord' we'll start at '0' and not '1'
    let lastWord = (wordArray[wordArrayLength - 1]);
    
    //loop through from 0 to the length of the 'wordArray', array...
    for(let i = 0; i < lastWord.length; i++){
        
        //...and increment the counter by 1 each time
        counter++
    }
    
    //console log the counter value, showing how many letters are in the last word of the original array
    console.log(counter);
    
    //return the counter value, showing how many letters are in the last word of the original array
    return counter;
}

//create variable with random string inside
let word = "Hello world";

//insert random string variable, 'word' as reference to the 'LengthOfLastWord' function
LengthOfLastWord(word);
