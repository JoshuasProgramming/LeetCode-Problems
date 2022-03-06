/**
 * Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

Example 1:

Input: n = 16
Output: true
Example 2:

Input: n = 5
Output: false
Example 3:

Input: n = 1
Output: true
 

Constraints:

-231 <= n <= 231 - 1
*/


const isPowerOfFour = () => {
    
    //loop for (31) times
    for(let i = 0; i < 31; i++){
        
        //Whenever 4^i is equal to 'n'...
        if((4 ** i) == n){
            
            //We'll console log 'true'
            console.log(true);
            
            //we'll return 'true'
            return true;
        }
    }
    
    //loop for (31) times 
    for(let i = 31; i > 0; i--){
        
        //Whenever 4^-i is equal to 'n'...
        if((4 ** -i) == n){
            
            //We'll console log 'true'
            console.log(true);
            
            //we'll return 'true'
            return true;
        }
    }
    
    //Whenever 4^i or 4^-i doesn't equal 'n'...
    //We'll console log 'false'
    console.log(false);
    
    //We'll return 'false'
    return false;
}


//variable to store the value of 'n'
let n = 16;

//insert the 'n' value as referecne/parameter for the 'isPowerOfFour' function
isPowerOfFour(n);
