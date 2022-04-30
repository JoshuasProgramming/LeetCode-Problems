/**
 * This isn't a coding question, I'm just experimenting with matrices. 
 * This function will take in a matrix with contains only 0s and 1s, the function will replace every 1 with an X
 * Function will display the column count, row count, amount of X's and matrix size
 * Solution by Joshua Thomas (Joshua's Programming)
*/

const convertOnesToXs = () => {
    
    let columnCount = 0;
    let rowCount = 0;
    let xCount = 0;
    
    for(let i = 0; i < mat.length; i++){
    
        for(let j = 0; j < mat[i].length; j++){
            
            if(mat[i][j] == 1){
                mat[i][j] = "X";
                xCount++
            }

            rowCount++;
        }
    
        console.log(mat[i].join(''));
        columnCount++;
    }
    
    console.log("---------------")
    console.log("Column Count: "+ columnCount);
    console.log("Row Count: " + (rowCount / columnCount));
    console.log("Amount of Xs: " + xCount);
    console.log("Matrix: " + columnCount + "X" + (rowCount / columnCount));
    
}

let mat = [[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]];

convertOnesToXs(mat);
