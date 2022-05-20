/**
*let sum=0;
 for(int i=0; i<n; i++)
 for(int j=0; j<n;j++)
 sum++;
return sum

*Rewrite the code to produce the same return value for a given input
value n, but with a constant runtime. Give your revised code and state
the runtime of your revised code in Big-O notation.
*/
const e = (n) => {
    
    //declaring a variable will always be O(1)
    let sum = 0;
    
    //instead of looping we can just multiply the number by itself. This will always result in a value being the exponentation of n
    sum = n * n;
    
    //console.log and retun the 'sum'
    console.log(sum);
    return sum;
}

//insert 'n' as reference/paramter for the e function
let n = 4
e(n);

