/**
 * Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
***Example: **

Input: 19
Output: true
Explanation: 
1^2 + 9^2 = 82 [split this into 8 and 2]
8^2 + 2^2 = 68 [split this into 6 and 8]
6^2 + 8^2 = 100 [split this into 1, 0 and 0]
1^2 + 0^2 + 0^2 = 1 [True, it's a happy number]
*/

// 19
// 1,9
// 1^2 + 9^2 => ans

// check if ans equals to 1

// if it doesn't, loop again

// if it does end the process

const happy = () => {
    
    //Empty array where we'll put each digit of the number provided
    let newArr = [];
    
    //arr which stores each digit as an array element
    let arr = (n.toString().split(''));
    
    //loop through the 'arr' 
    for(let i = 0 ; i < arr.length; i++){
        
        //push sum of each index of the 'arr' to the power of 2 (sum of the squares)
        newArr.push(parseInt(arr[i]) ** 2);
    }
    
    //return 'n' to 0
    n = 0;
    
    //loop through the 'newArr' 
    for(let i = 0 ; i < newArr.length; i++){
        
        //increment n by each sum of squares
        //e.g: 19 will give us 1^2 + 9^2 => 1 + 81
        //so we'll have:
        //n = n + 1
        //1 = n + 81
        //n = 82
        n = n + newArr[i];
    }

    //console log the value of n
    console.log(n);
    
    //check if n equals to 1
    if(n == 1){
        
        //when n equals to 1
        //output it as such
        console.log(true);
        console.log(start + " is a happy number");
        
        //return the boolean answer
        return true;
    } else {
        //or it loops endlessly in a cycle which does not include 1
        happy(n);
    }
    
}

//create varible for n
let n = 19;

//create variable to keep track of the inital value of n
//as we'll be changing the value of n over time
let start = n;

//send 'n' and 'start' as parameters for the 'happy' function
happy(n,start);
