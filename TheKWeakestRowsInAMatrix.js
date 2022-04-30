/**
 * You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

A row i is weaker than a row j if one of the following is true:

The number of soldiers in row i is less than the number of soldiers in row j.
Both rows have the same number of soldiers and i < j.
Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

Example 1:

Input: mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3
Output: [2,0,3]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 2 
- Row 1: 4 
- Row 2: 1 
- Row 3: 2 
- Row 4: 5 
The rows ordered from weakest to strongest are [2,0,3,1,4].
Example 2:

Input: mat = 
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]], 
k = 2
Output: [0,2]
Explanation: 
The number of soldiers in each row is: 
- Row 0: 1 
- Row 1: 4 
- Row 2: 1 
- Row 3: 1 
The rows ordered from weakest to strongest are [0,2,3,1].
*/

const kWeakestRows = () => {
    
    //'count' will count the amount of '1s'
    let count = 0;
    
    //'arr' will contain the the [count & rowNumber]
    let arr = [];
    
    //'finalArr' will contain the indices of the k weakest rows in the matrix ordered from weakest to strongest
    let finalArr = [];
   
    //loop for the length of the matrix (e.g: [[1,0,0,0], [1,1,1,1],[1,0,0,0], [1,0,0,0]] is length of 4)
    for(let i = 0; i < mat.length; i++){
        
        //reassign the 'count' to 0
        count = 0;
        
        //loop for the length of each matrix item (e.g: [1,0,0,0] is a length of 4)
        for(let j = 0; j < mat[i].length; j++){
            
            //when the item is equal to 1 we'll increment the counter
            if(mat[i][j] == 1){
                count++;
            }
        }
        
        //console log the row number, matrix item and 'counter of 1s'
        console.log("Row " + i + ":" , mat[i], count);
        
        //push the 'number of 1s [count]' and 'row index[i]' into the array, 'arr'
        arr.push([count,i]);
    }
    
    //console log the sorted array
    console.log(arr.sort());
    
    //loop for length of 'arr'
    for(let i = 0; i < arr.length; i++){
        
        //when i equals k... console log and return the 'finalArr'
        if(i >= k){
            console.log(finalArr);
            return finalArr;
        }
        
        //whenever i isn't equal to k...
        //loop through the array, 'arr' and push the 1st (0-indexed) item into the 'finalArr'
        for(let k = 1; k < arr[i].length; k++){
            finalArr.push(arr[i][1]);
        }
    }
}

//variable to store the matrix, 'mat'
let mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]];

//variable for 'k'
let k = 3;

//insert the variable 'mat' and 'k' as reference/parameter for the 'kWeakestRows' function
kWeakestRows(mat, k);
