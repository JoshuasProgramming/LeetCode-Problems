/**
 * Given an integer num, return a string of its base 7 representation.

Example 1:

Input: num = 100
Output: "202"
Example 2:

Input: num = -7
Output: "-10"
*/

const convertToBase7 = () => {
    
    //empty array
    let arr = [];
    
    /* For positive numbers */
    while(num > 0){
        
        //push the remainder of 'num divided by 7' into 'arr' & reassign the quotient (whole number) from 'num divided by 7' in 'num'
        arr.push(num % 7);
        
        //use 'Math.floor' to ALWAYS round down 
        num = Math.floor(num / 7);
    }
    
    /* For negative numbers*/
    if(num < 0){
        
        //convert negative number to positive
        num = num - (num + num);
        
        while(num > 0){
            
            //push the remainder of 'num divided by 7' into 'arr' & reassign the quotient (whole number) from 'num divided by 7' in 'num'
            arr.push(num % 7)
            
            //use 'Math.floor' to ALWAYS round down 
            num = Math.floor(num / 7)
        }
        
    }
    
    //console log and return the array, 'arr' but as a string
    console.log(arr.reverse().join(''));
    return arr.reverse().join('');
}

//create 'num' variable to store a value
let num = 100;

//insert the 'num' as reference/parametr for the 'convertToBase7' function
convertToBase7(num);
