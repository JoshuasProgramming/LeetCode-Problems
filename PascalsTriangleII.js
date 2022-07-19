/**
 * Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
*/

const getRow = () => {

    //variable to store the number on each row
    let sum = 0;
    
    //loop for size of 'rowIndex'
    for(let i = 0; i <= rowIndex; i++){
        
        //the total of 11^i is added to the 'sum'
        sum = 11 ** i;
    }
    
    //split the number into an array of digits and assign to sum
    sum = Array.from(String(sum), Number);
    
    //console.log and return the sum
    console.log(sum);
    return sum;
    
}

//create variable to store 'rowIndex'
let rowIndex = 3;

//Assign the 'rowindex' to the function 'getRow'
getRow(rowIndex);
