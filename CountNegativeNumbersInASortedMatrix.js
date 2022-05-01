/**
 * Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.
Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0
 
Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100
*/

const countNegatives = () => {
    
    //counter to count the amount negative number
    let negativeCounter = 0;
    
    
    //loop through the grid, and get each array item
    for(let i = 0; i < grid.length;i++){
        
        //loop through each item in each array item
        for(let j = 0; j < grid[i].length; j++){
            
            //when a number is negative, increment the 'negativeCounter'
            if(grid[i][j] < 0){
                negativeCounter++;
            }
        }
    }
    
    //console.log and return the 'negativeCounter'
    console.log(negativeCounter);
    return negativeCounter;
}

//store the matrix in a 'grid' varaible
let grid =  [[1,2,-3],[4,5,-6],[7,8,-9]];

//insert the 'grid' as reference/parameter for the 'countNegatives' function
countNegatives(grid);
