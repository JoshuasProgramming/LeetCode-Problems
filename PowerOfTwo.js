/**
 * Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

Example 1:

Input: n = 1
Output: true
Explanation: 2^0 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 2^4 = 16
Example 3:

Input: n = 3
Output: false
 
Constraints:

-2^31 <= n <= 2^31 - 1
*/

const isPowerOfTwo = () => {
    
    //loop for (31) times
    for(let i = 0; i < 31; i++){
        
        //Whenever 2^i is equal to 'n'...
        if((2 ** i) == n){
            
            //We'll console log 'true'
            console.log(true);
            
            //we'll return 'true'
            return true;
        }
    }
    
    //loop for (31) times 
    for(let i = 31; i > 0; i--){
        
        //Whenever 2^-i is equal to 'n'...
        if((2 ** -i) == n){
            
            //We'll console log 'true'
            console.log(true);
            
            //we'll return 'true'
            return true;
        }
    }
    
    //Whenever 2^i or 2^-i doesn't equal 'n'...
    //We'll console log 'false'
    console.log(false);
    
    //We'll return 'false'
    return false;
}


//variable to store the value of 'n'
let n = 16;

//insert the 'n' value as referecne/parameter for the 'isPowerOfTwo' function
isPowerOfTwo(n);
