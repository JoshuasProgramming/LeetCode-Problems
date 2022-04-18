/**
 * A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

You are given an array of strings sentences, where each sentences[i] represents a single sentence.

Return the maximum number of words that appear in a single sentence.

Example 1:

Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
Example 2:

Input: sentences = ["please wait", "continue to fight", "continue to win"]
Output: 3
Explanation: It is possible that multiple sentences contain the same number of words. 
In this example, the second and third sentences (underlined) have the same number of words.
*/

const mostWordsFound = () => {
    
    //create counter and highest varaible
    let counter = 1;
    let highest = 0;
    
    
    //loop through teh sentences
    for(let i = 0; i < sentences.length; i++){
        
        
        //loop through each word in the sentence
        for(let k = 0; k < sentences[i].length; k++){
            
            //when there is a space, it represents a new line/new word
            if(sentences[i][k] == " "){
                
                //increment the counter
                counter++;
            }
        }
        
        
        //if the counter is greater than the previous highest (counter) we'll reassign this current counter to it
        if(counter >= highest){
            highest = counter;
        }
        
        //reassign the counter to 1
        counter = 1;
        
    }
    
    //console log and return the 'highest' once we've loop through ever letter of every words and sentence
    console.log(highest);
    return highest;
}

//store the array of sentences in a variable called 'sentences'
let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

//insert 'sentences' as reference/parameter for the 'mostWordsFound' function
mostWordsFound(sentences);
