/** 
 * Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

    Return the quotient after dividing dividend by divisor.

    The integer division should truncate toward zero.
*/

/**
 * Input: dividend = 10, divisor = 3
   Output: 3
*/

/** 
 * 1. 10 - 3 = 7
 * 2. 7 - 4 = 4
 * 3. 4 - 3 = 1
 * 
*/

/** 
 * Input: dividend = 7, divisor = -3
   Output: -2
   
   1. 7 + (-3) = 4 
   2. 4 + (-3) = 1
*/

// p / p
// p / n
// n / n
// n / p

const DivideTwoIntegers = (dividend, divisor) => {  
    //count is the quotient value => 'how many times we've substracted
    let count = 0;
    
    //dividend => p && divisor => p [p / p]
    if((dividend > 0) && (divisor > 0 )){
        for(let i = 0; i < divisor; i++){
            count++;
            dividend = dividend - divisor;
        }
        
        console.log("quotient: " + count);
        console.log("Remainder: " + dividend);
    }
    
    //dividend => p && divisor => n [p / n]
    if((dividend > 0) && (divisor < 0 )){
        for(let i = 0; i > divisor + 1; i--){
            count--;
            dividend = dividend + divisor;
        }
        console.log("quotient: " + count);
        console.log("Remainder: " + dividend);
    }
    
    // dividend => n && divisor => n [n / n]
    if((dividend < 0) && (divisor < 0 )){
        for(let i = 0; i > divisor + 1; i--){
            count--;
            dividend = dividend - divisor;
        }
        console.log("quotient: " + count);
        console.log("Remainder: " + dividend);
    }
    
    // dividend => n && divisor => p [n / p]
    if((dividend < 0) && (divisor > 0 )){
        for(let i = 0; i < divisor - 1; i++){
            count--;
            dividend = dividend + divisor;
        }
        console.log("quotient: " + count);
        console.log("Remainder: " + dividend);
    }

}

//Add the dividend and divisor into seperate variables
let dividend = -7;
let divisor = -3;

//add the dividend and divisor as parameters for DivideTwoIntegers
DivideTwoIntegers(dividend, divisor);
