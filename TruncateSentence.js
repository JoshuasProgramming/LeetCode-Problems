/** 
 * A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
You are given a sentence s and an integer k. You want to truncate s such that it contains only the first k words. Return s after truncating it.

 

Example 1:

Input: s = "Hello how are you Contestant", k = 4
Output: "Hello how are you"
Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you".
Example 2:

Input: s = "What is the solution to this problem", k = 4
Output: "What is the solution"
Explanation:
The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
The first 4 words are ["What", "is", "the", "solution"].
Hence, you should return "What is the solution".
Example 3:

Input: s = "chopper is not a tanuki", k = 5
Output: "chopper is not a tanuki"
 

Constraints:

1 <= s.length <= 500
k is in the range [1, the number of words in s].
s consist of only lowercase and uppercase English letters and spaces.
The words in s are separated by a single space.
There are no leading or trailing spaces.
*/


const TruncateSentence = () => {
    
    //create empty array for which we will use later, in adding the words which are less than or equal to k
    let newArr = [];
    
    //turn the 's' string into an array
    s = s.split(" ");
    
    //put a null at the first index (index 0)
    //This will allow us to do 1-base indexing
    s.unshift(null);
    
    //loop through the string 's', using 1 as your initial index.
    //Remember, we pushed a null at index 0, so we're actually going to start at index 1 for 1-base indexing.
    for(let i = 1; i < s.length; i++){
        
        //Whenever the index value (i.e: index 1) is else than or equal to the k value (i.e: k = 4) ...
        if(i <= k){
            
            //we'll push the word that is at the current index into the 'newArr' we created earlier.
            newArr.push(s[i]);
        }
    }
    
    //make the 'newArr' array which contains only the words which indicies were less than or equal to k, become a string
    //Done by removing commas (join(''))
    //Done by converting array to string (toString())
    newArr = newArr.join(" ").toString();
    
    //console log the 'newArr' array
    console.log(newArr);
    
    //return the 'newArr' array
    return newArr;
    
}

//create variable to store the string
let s = "Hello how are you Contestant";

//create variable to store the k value. The k value will determine who far we go (in terms of index) until we truncate.
//truncate just means to remove. So we remove all numbers after k.
let k = 4;

//insert s and k as reference/parameter into 'TruncateSentence'
TruncateSentence(s,k)
