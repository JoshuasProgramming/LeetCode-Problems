/**
 * Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:

Input: words = ["omk"]
Output: []
Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
 

Constraints:

1 <= words.length <= 20
1 <= words[i].length <= 100
words[i] consists of English letters (both lowercase and uppercase). 
*/
const findWords = () => {
    
    //create character array to store all individual characters of the specific string
    //e.g: "qwertyuiop" => ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i','o', 'p'];
    let row1 = ("qwertyuiop".split(""));
    
    //create character array to store all individual characters of the specific string
    //e.g: "asdfghjkl" => ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k','l'];
    let row2 = ("asdfghjkl".split(""));
    
    //create character array to store all individual characters of the specific string
    //e.g: "zxcvbnm" => ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
    let row3 = ("zxcvbnm".split(""));
    
    //create empty array, which will store all the words that are 'accepted'
    //'Accepted' being any word which only contains letters from one word
    let accepted = [];
    
    //loop for (length of words) times
    //e.g: if 'words' == "Hello I'm Programming", we'll loop 3 times because there are 3 words.
    for(let j = 0; j < words.length; j++){
    
        //on each index increment (j), we're going to grab a word from a specific index of the 'words' array, and split it into sepretae characters
        //e.g: "Hello" => ['H', 'e', 'l', 'l', o]
        let word = (words[j].split(""));
        
        //create variable for how many times each character of the 'word'variable is in 'row1Count'
        let row1Count = 0;
        
        //create variable for how many times each character of the 'word'variable is in 'row2Count'
        let row2Count = 0;
        
        //create variable for how many times each character of the 'word'variable is in 'row3Count'
        let row3Count = 0;
        
        
        //On each word, loop for (length of word) times
        //e.g: "Hello" => ['H', 'e', 'l', 'l', o] loop 5 times
        for(let i = 0; i < word.length; i++){
            
            //Whenever a letter is from 'row1'...
            if(row1.includes(word[i])){
                
                //increment 'row1Count' by 1
                row1Count++;
            }
            
            //Whenever a letter is from 'row2'...
            if(row2.includes(word[i])){
                
                //increment 'row2Count' by 1
                row2Count++;
            }
            
            //Whenever a letter is from 'row3'...
            if(row3.includes(word[i])){
                
                //increment 'row3Count' by 1
                row3Count++;
            }
        }
        
        //console log each row and its count per word
        console.log(row1Count, row2Count, row3Count);
        
        //Whenever the 'row1Count' value is the only value greater than 0...
        if((row1Count > 0) && (row2Count == 0) && (row3Count == 0)){
            
            //...Turn the word back into a string and
            //push the word into the accepted array
            accepted.push(word.join('').toString());
        }
        
        //Whenever the 'row2Count' value is the only value greater than 0...
        if((row2Count > 0) && (row1Count == 0) && (row3Count == 0)){
            
            //...Turn the word back into a string and
            //push the word into the accepted array
            accepted.push(word.join('').toString());
        }
        
        //Whenever the 'row2Count' value is the only value greater than 0...
        if((row3Count > 0) && (row2Count == 0) && (row1Count == 0)){
            
            
            //...Turn the word back into a string and
            //push the word into the accepted array
            accepted.push(word.join('').toString());
        }
    }
    
    //console log the 'accepted' list 
    console.log(accepted);
    
    //return the 'accepted' list
    return accepted; 
}

//crete variable to store sentence
let words = ["Hello","Alaska","Dad","Peace"];

//insert the 'words' as reference/perameter to the 'findWords' function
findWords(words);
