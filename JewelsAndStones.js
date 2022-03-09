/**
 * You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0
 
Constraints:

1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
*/

const numJewelsInStones = () => {
    
    //Turn the 'stone' string into an array of characters
    stones = stones.split("");
    
    //Turn the 'jewels' string into an array of characters
    jewels = jewels.split("");
    
    //counter for the amount of 'jewels' in the 'stone'
    let count = 0;
    
    //loop for (length of 'jewels') times
    for(let i = 0; i < jewels.length; i++){
        
        //loop for (length of 'stones') times
        for(let j = 0; j < stones.length; j++){
            
            //Whenever a jewel from 'jewels' is equal to a stone in 'stones'...
            if(jewels[i] == stones[j]){
                
                //increment the 'count' by 1
                count++;
            }
        }
    }
    
    //console log the 'count'
    console.log(count);
    
    //return the 'count'
    return count;
}

//store the 'jewels' in a string variable
let jewels = "z";

//store the 'stones' in a string variable
let stones = "ZZ";

//insert the 'jewels' and 'stones' variables as reference/parameter for the 'numJewelsInStones' function.
numJewelsInStones(jewels, stones);
