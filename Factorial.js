const factorial = (x) => {
  
    //base case
    if((x == 0) || (x == 1)){
        return 1;
    }
    
    //anything else
    return x * factorial(x - 1);
  
    //3 * (2 * (1))
}

//console log the answer to whatever number we put in the parameter
console.log(factorial(3));
