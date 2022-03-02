/**
 * Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
*/


const FizzBuzz = () => {
    //create empty array which will store the strings
    let arr = [];
    
    //put a null infront of the array (index 0). This will allow us to do 1-base indexing
    arr.unshift(null);
    
    //loop for n - 1 times
    //e.g: if n equals 5, we'll loop 6 times, ignoring the first time (because there is a null inside of it). As a result, we'll actually be looping 5 times as we start on index 1 also.
    for(let i = 1; i < n + 1; i++){
        
        //answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
        if((i % 3 === 0) && (i % 5 === 0)){
            
            //...push the string 'Fizzbuzz'
            arr.push("FizzBuzz");
            
            //increment i by 1 to avoid the loop from looping through to the other conditions
            //We don't want to output 'FizzBuzz' but also output 'Fizz' and 'Buzz' because the other conditions accept it at that index.
            i++;
            
            //if the output 'fizzbuzz' we don't want the below conditions to output 'fizz' and/or 'buzz'.
            //To solve this, we'll break the for loop when we go through this if statement. 
            //Breaking the loop will send us back to the top of the iteration.
            
            if(i > n){
                break;
            }
        }
        
        //answer[i] == "Fizz" if i is divisible by 3
        if(i % 3 === 0){
            
             //...push the string 'Fizz'
            arr.push("Fizz");
        }
        
        //answer[i] == "Buzz" if i is divisible by 5.
        if(i % 5 === 0){
            
             //...push the string 'Buzz'
            arr.push("Buzz");
        }
        
        //When none of the conditions apply
        if((i % 3 !== 0) && (i % 5 !== 0) ){
            
             //...push the integer into the arr, but convert it into a string
            arr.push(i.toString());
        }

    }
    
    //Don't forget we put the null at index 0.
    //unshift will remove the null
    arr.shift
    
    //console log the final array
    console.log(arr);
    
    //return the final array
    return arr;
}

//n variable will store the number of items in the list
let n = 100;

//add the n variable as a parameter to the 'FizzBuzz' function
FizzBuzz(n);
