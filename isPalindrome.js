//Given an integer x, return true if x is palindrome integer.

//An integer is a palindrome when it reads the same backward as forward.

//For example, 121 is a palindrome while 123 is not.


/**
 * Example 1:
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 * Example 2:
 *
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 * Example 3:
 *
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */

/**
 * @param {number} x
 * @return {boolean}
 */

isPalindrome(1367631);

 
function isPalindrome(x){
    
    //get length of the number
    let y = x.toString();
    let length = (y.toString().length);
    
    //find out if x is odd or even
    if( (length % 2) == 0){
        let z = y.toString();
        
        //FOR EVEN NUMBER LENGTHS OF NUMBERS
        
        //create a first half and second half array 
        let first = [];
        let second = [];
        
        //split the array in half
        let divide = (length / 2);
        
        //loop through array
        for(let i = 0; i < length; i++){
            
            //when the number is the first half
            if(i < divide){
                first.push(z[i]);
                
            //when the number is the second half
            } else {
                second.push(z[i]);
            }
        }
        
        console.log(first)
        console.log(second.reverse())
        
        //create a counter variable
        let count = 0;
        
        //loop through the first array
        for(let i = 0; i < first.length; i++){
            
            //compare the currenty index of the first array to the
            //same index of the second index
            if((first[i] == second[i])){
                
                //we'll increment the counter each time the 
                //the condition is true
                count++;
            }
        }
        
        //the number is only a Palindrome if the count is equal
        //to the length of the number (as a string)
        // (e.g: 0110's is a Palindrome if count = 4)
        if(count == first.length){
            //output true
            console.log("TRUE");
            
            //return true
            return true;
            
        } else {
            //output true
            console.log("FALSE");
            
            //return false
            return false;
        }
        
    } else {
        //Odd number
        
        //Create an array
        let arr = [];
        
        //get the length of the number
        let y_odd = x.toString();
        
        //loop through the array, given the length of the number
        for(let i = 0; i < length; i++){
            
            //push (add) the numbers into the 'arr' array
            arr.push(y_odd[i]);
        }
        
        //create a first half, second half and middle empty array
        let first_odd = [];
        let second_odd = [];
        let middle = [];
        
        //add the item's location into the middle array
        middle.push(((length - 1) / 2) + 1);

        //create a variable that'll store the index of the item
        let toFind = (middle - 1);
        
        //split it in half
        //make middle empty
        middle = [];
        
        //add the number into the middle array
        middle.push(arr[toFind]);
        
        //split the array in half
        let length_odd = (arr.toString().length);
        let divide_odd = (length / 2);
        
        //loop through array
        for(let i = 0; i < length; i++){
            
            //add to the first half
            if(i < divide_odd){
                first_odd.push(y_odd[i]);
                
                //add to the second half
            } else {
                second_odd.push(y_odd[i]);
            }
        }
        
        //remove the middle number
        first_odd.pop();
        
        console.log(first_odd)
        console.log(second_odd.reverse())
        
        //create a counter variable
        let count = 0;
        
        //loop through the first array
        for(let i = 0; i < first_odd.length; i++){
            
            //compare the currenty index of the first array to the
            //same index of the second index
            if(first_odd[i] == second_odd[i]){
                
                //we'll increment the counter each time the 
                //the condition is true
                count++;
            }
        }
        
        //the number is only a Palindrome if the count is equal
        //to the length of the number (as a string)
        // (e.g: 0110's is a Palindrome if count = 4)
        if(count == first_odd.length){
            console.log("TRUE");
            return true
        } else {
            console.log("FALSE");
            return false;
        }
    }
}
