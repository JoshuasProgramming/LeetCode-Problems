/**
 * You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.
Example 1:


Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.
Example 2:


Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.
 

Constraints:

1 <= n <= 231 - 1
*/

const arrangeCoins = () => {
    
    //n = 5
    //1,2,3,4,5
    // 5-1 [1]
    // 4 - 2 [2] ;)
    // 2 - 3 
    
    //assign n to number
    let number = n;
    
    //create counter to keep track of completed rows
    let counter = 0;
    
    //loop for n times (1-based-index)
    for(let i = 1; i < n; i++){
        
        //assign the sum of number minus i to number
        number = number - i;
        
        //when the number isn't 0...
        if(number >= 0){
            
            //increment the counter
            counter++;
        }
    }
    
    //console.log and return the counter
    console.log(counter);
    return counter;
    
}

//create n and assign the number of coins
let n = 8;

//assign n as parameter/reference for the 'arrangeCoins' function
arrangeCoins(n)
