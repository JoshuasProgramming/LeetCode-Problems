/**
 * We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.

Example 1:

Input: word = "USA"
Output: true
Example 2:

Input: word = "FlaG"
Output: false
 

Constraints:

1 <= word.length <= 100
word consists of lowercase and uppercase English letters.
*/

const detectCapitalUse = () => {
    
    let counter = 0;
    
    /*All letters are capitalised */
    word = word.split("");
    let capitalisedWord = word.length;
    
    for(let i = 0; i < word.length; i++){
        if(word[i] == word[i].toUpperCase()){
            capitalisedWord--;
        }
    }
    
    if(capitalisedWord == 0){
        counter++;
    }
    
    
    /*All letters aren't capitalised */
    let nonCapitalisedWord = word.length;
    
    for(let i = 0; i < word.length; i++){
        if(word[i] == word[i].toLowerCase()){
            nonCapitalisedWord--;
        }
    }
    
    if(nonCapitalisedWord == 0){
        counter++;
    }
        
        
    /* Only the first letter is capitalised */
    let first = 0;
    let rest = 0;
    
    if(word[0] == word[0].toUpperCase()){
        
        first++;
        
        for(let i = 1; i < word.length; i++){
            
            if(word[i] == word[i].toLowerCase()){
                rest++;
            }
        }
    }
    
    if((first == 1) && (rest == (word.length - first))){
        counter++;
    }
    
    
    /* Check if the counter is only 1*/
    if(counter == 1){
        console.log(true);
        return true;
    }
    
    console.log(false);
    return false;
}

let word = "USA";
detectCapitalUse(word);
