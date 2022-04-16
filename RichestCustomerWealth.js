/**
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.
Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.
Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
 

Constraints:

m == accounts.length
n == accounts[i].length
1 <= m, n <= 50
1 <= accounts[i][j] <= 100
*/

const maximumWealth = () => {
    //create empty array
    let arr = []
    
    //create sum varaible
    let sum = 0;
    
    
    //loop for length of 'accounts' times
    for(let i = 0; i < accounts.length; i++){
        
        //loop for length of 'account[i]' times
        for(let k = 0; k < accounts[i].length; k++){
            
            //add the number of each item to the sum
            sum = sum + accounts[i][k];
        }
        
        //add the sum to the empty array, showing the sum of each array of the 2d array
        arr.push(sum);
        
        //reassign the sum to a value of zero
        sum = 0;
        
    }
    
    //create a varaible called 'highest' and assign zero to it
    let highest = 0;
    
    //loop through the array, 'arr' times
    for(let i = 0; i < arr.length; i++){
        
        //whenever the 'highest' is less than the number at 'arr[i]'...
        if(arr[i] > highest){
            
            //assign the 'arr[i]' to 'highest'
            highest = arr[i];
        }
        
    }
    
    //console log and return the 'highest'
    console.log(highest);
    return highest;
}

//create varaible to store a matrix array
let accounts = [[1,2,3],[3,2,1]];

//insert 'accounts' as reference/parameter for the 'maximumWealth' function
maximumWealth(accounts);
