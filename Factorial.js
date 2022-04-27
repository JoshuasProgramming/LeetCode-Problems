const factorial = (x) => {
  
    //base case -> checking if the number is 0 or 1
    if((x == 0) || (x == 1)){
        //whenever it is -> return 1
        return 1;
    }
    
    //anything else -> call the 'factorial' function and insert the inital number minus 1
    return x * factorial(x - 1);
  
    //3 * (2 * (1))
}

//console log the answer to whatever number we put in the parameter
console.log(factorial(3));
