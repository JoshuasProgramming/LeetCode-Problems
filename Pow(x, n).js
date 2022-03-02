/**
 * Problem
Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:

Input: 2.00000, 10
Output: 1024.00000
Example 2:

Input: 2.10000, 3
Output: 9.26100
Example 3:

Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
Note:

-100.0 < x < 100.0
n is a 32-bit signed integer, within the range [−231, 231 − 1]
*/

const pow = () => {
    //this is going to store a value, and multiply itself n times
    //e.g: 2^5 = 32
    //ans = 2 then => ((((((2)x2)x2)2x)2x)) = 32
    let ans = 1;
    
    //check if the exponent is positive or negative
    //WHEN IT IS NEGATIVE
    if(n < 0){
        
        //make n equal to it's positive equalivent 
        //e.g: -2 => 2
        n = -n
        
        //loop for n times
        for(let i = 0; i = n; i++){
            
            //store x and multiply itself n times
            ans = ans * x;
            
            //on each loop, minus n by 1
            n--;
        }
        
        //because it was initally negative, we're looking for a deciaml/fraction
        //put the 'ans' as the denominator and 1 as the numerator
        
        //console log AND return this ^
        console.log(1 / ans);
        return 1 / ans
    } 
    
    //WHEN IT IS POSITIVE
    
    //loop for n times
    for(let i = 0; i = n; i++){
        
            //store x and multiply itself n times
            ans = ans * x;
            
            //on each loop, minus n by 1
            n--;
    }
    
    //console log AND return ans
    console.log(ans);
    return ans;
}

//create x variable
let x = 2.00000;

//creact exponent variable
let n = 10;

//insert x and n into pow as parameter
pow(x,n);
