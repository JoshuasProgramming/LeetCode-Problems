/**
 * Problem
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.
*/

const ReverseWordsInAStringIII = (n) => {
    //The original string of text that was inserted into this function
    let original = n;
    
    //turn original string into an array, where each word is an element
    let firstUpdate = original.split(" ");
    
    //create empty array for which we'll populate later
    let temp = [];
    
    //loop through array with the length of the string array 'firstUpdate', as the MAXIMUM value i will increment to
    
    for(let i = 0; i < firstUpdate.length; i++){
        
        //push each index of the string array into temp storage, but in reversed form
        //e.g: 'hello world it's me' => 
        // ['olleh'] [index: 0]
        // ['olleh', 'dlrow'] [index: 1]
        // ['olleh', 'dlrow', 's'ti] [index: 2]
        // ['olleh', 'dlrow', 's'ti', 'em'] [index: 3]
        
        temp.push(firstUpdate[i].split("").reverse().join(""));
    }
    
    //console log the whole temp array in String form
    console.log(temp.join(" ").toString());
    
    //return the whole temp array in String form
    return temp.join(" ").toString();
}

//used the any string as a parameter for the 'ReverseWordsInAStringIII' function
ReverseWordsInAStringIII("Let's take LeetCode contest");
