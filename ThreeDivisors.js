/**
 * Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

An integer m is a divisor of n if there exists an integer k such that n = k * m.

Example 1:

Input: n = 2
Output: false
Explantion: 2 has only two divisors: 1 and 2.
Example 2:

Input: n = 4
Output: true
Explantion: 4 has three divisors: 1, 2, and 4.
*/

const isThree = () => {
    
    //create count using the value of 'n'
    let count = n;
    
    //create varaibel to count the amount of divisors
    let divisorCount = 0;
    
    //loop for length of 'n' times
    for(let i = 0; i < n; i++){
        
        //whenever the 'count' divided by the value of n at a particular index has a remainder of zero...
        if(n % count == 0){
            
            //increment the 'divisorCount' by 1 each time
            divisorCount++;
        }
        
        //decrement the 'count'
        count--;
    }
    
    //check if the 'divisorCount' is equal to 3. When it is, just console log and return true
    if(divisorCount == 3){
        console.log(true)
        return true
    }
    
    //whenever the 'divisorCount' isn't 3, just console log and return false.
    console.log(false)
    return false;
}

//create variable to store the value of 2
let n = 2;

//insert 'n' as reference/parameter for the 'n' function.
isThree(n); 
