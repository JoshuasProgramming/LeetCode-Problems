/**
 * Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
 
Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
Example 2:


Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false
*/

const searchMatrix = () => {
    
    //loop through the main container
    for(let i = 0; i < matrix.length; i++){
        
        //loop through each indiviual container
        for(let k = 0; k < matrix[i].length; k++){

            //whenever the item is equal to target...
            if(matrix[i][k] == target){
                
                //...console.log and return true
                console.log(true);
                return true;
            }
        }
    }
    
    //console.log and return false
    console.log(false);
    return false;

}

//variable to store the 'matrix'
let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];

//variable to store the target
let target = 3;

//insert 'matrix' and 'target' 
searchMatrix(matrix, target);
