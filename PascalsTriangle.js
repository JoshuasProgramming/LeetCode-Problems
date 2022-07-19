/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
*/

const generate = () => {
    
    //create an array that will store the other arrays
    let array = [];
    
    //loop for size of numRows and add split/add each iteration to an array
    for(let i = 0; i < numRows; i++){
        
        //each row of pascals trianle uses the 11 power table
        //e.g: row 3 => 11^2 => 121
        array.push(Array.from(String(11**i), Number));
    }
    
    //console.log and return array 
    console.log(array);
    return array;
}

//create variable 'numRows'
let numRows = 5;

//insert 'numRows' as parameter/reference for the 'generate' function
generate(numRows)
