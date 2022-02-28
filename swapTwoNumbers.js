const swapTwoNumbers = () => {
    //a = 5
    //b = 10
    
    //make b equal to b plus a
    b = b + a; //15
    
    //make a equal to b
    a = b - a //10
    
    //make b equal to b minus a
    b = b - a;
    
    //console log a and b
    console.log(a,b);
    
    //return a and b
    return a,b;
}

let a = 5;
let b = 10;
swapTwoNumbers(a,b);
