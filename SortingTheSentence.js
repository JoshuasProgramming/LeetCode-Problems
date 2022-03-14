/**
 * A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

Example 1:

Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
Example 2:

Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"
Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.
 
Constraints:

2 <= s.length <= 200
s consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.
The number of words in s is between 1 and 9.
The words in s are separated by a single space.
s contains no leading or trailing spaces.
*/

const sortSentence = () => {
    
    //turn the 's', string into a array of characters
    s = s.split(" ");
    
    
    // console.log(s);
    
    //get length of 's' word array
    let length = s.length;
    
    //create variable to store a number, starting at 1 and counting for length of 's' word array times
    let number = 1;
    
    //create empty array to store final result
    let temp = [];
    
    //loop when the 'number' counter is less than or eqaul to the length of the 's' word array
    while(number <= length){
        
        //loop for (length of 's' times)
        for(let i = 0; i < s.length; i++){
            
            //Whenever the last character of each word element is equal to the 'number' counter...
            if((s[i].charAt(s[i].length - 1)) == number){
                
                //...add that to the 'temp' array and remove the number at the end of the word
                temp.push(s[i].substring(0, s[i].length - 1));
                
                //increment the 'number' counter
                number++;
            }
        }
    }
    
    //console log the 'temp' array after converting the array of words to a string
    console.log(temp.join(' ').toString());
}

//varaible to store the word 
let s = "is2 sentence4 This1 a3";

//insert the 's' as reference/parameter for the 'sortSentence' function.
sortSentence(s);
