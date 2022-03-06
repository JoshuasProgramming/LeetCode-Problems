/**
 * Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

Example 1:

Input: n = 27
Output: true
Example 2:

Input: n = 0
Output: false
Example 3:

Input: n = 9
Output: true
 
Constraints:

-231 <= n <= 231 - 1
*/

const isPowerOfThree = () => {
    
    //loop for (31) times
    for(let i = 0; i < 31; i++){
        
        //Whenever 3^i is equal to 'n'...
        if((3 ** i) == n){
            
            //We'll console log 'true'
            console.log(true);
            
            //we'll return 'true'
            return true;
        }
    }
    
    //loop for (31) times 
    for(let i = 31; i > 0; i--){
        
        //Whenever 3^-i is equal to 'n'...
        if((3 ** -i) == n){
            
            //We'll console log 'true'
            console.log(true);
            
            //we'll return 'true'
            return true;
        }
    }
    
    //Whenever 3^i or 3^-i doesn't equal 'n'...
    //We'll console log 'false'
    console.log(false);
    
    //We'll return 'false'
    return false;
}

//variable to store the value of 'n'
let n = 27;

//insert the 'n' value as referecne/parameter for the 'isPowerOfThree' function
isPowerOfThree(n);
