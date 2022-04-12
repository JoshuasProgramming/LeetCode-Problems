/**
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:

Input: num = 0
Output: 0

Example 3:

Input: num = 25
25 => 2 + 5 => 7
Output: 7

Example 4:

Input: num = 199
1,9,9 => 1 + 9 + 9 => 19 => 1 + 9 => 10 => 1 + 0 => 1 
Output: 1

*/
const addDigits = () => {
    
    //loop until the length of 'num' is equal to 1
    while((num.toString().split("").length > 1)){
        
        //get the length of the 'num'
        num = num.toString().split("");
        
        //create a length counter
        let counter = num.length;
        
        //create a sum variable
        let sum = 0;
        
        //loop for length of 'num' times
        for(let i = 0; i < num.length; i++){
            
            //whenever the 'counter' is greater than zero...
            if(counter > 0){
                
                //increment the sum by the index of 'num'
                sum = sum + parseInt(num[i]);
                
                //decrement the 'counter'
                counter--;
            }
        }
        
        //reassign 'num' with the 'sum'
        num = sum;
    }
    
    //console log and return the 'num' when the 'num' has a length of 1
    console.log(num);
    return num;
}

//create varaible to store the 'num'
let num = 38;

//add 'num' as reference/parameter to the 'addDigits' function.
addDigits(num);
