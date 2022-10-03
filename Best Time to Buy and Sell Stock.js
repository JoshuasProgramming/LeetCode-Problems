/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 
Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

const maxProfit = () => {
    
    //created low and high arrays
    let low = [];
    let high = [];
    
    //loop for prices' length times
    for(let i = 0; i < prices.length; i++){
        
        //setting the current and next price in the list
        let current = prices[i];
        let next = prices[i + 1];
        
        //when the current is greater than the next...
        if((current > next)){
            
            //push the next item to the low list
            low.push(next);
        }
        
        //when the current is lower than the next...
        if((current < next)){
            
            //push the next item to the highest list
            high.push(next);
        }
    }
    
    //sort the low list and get the first item - assign it to the min variable.
    let min = low.sort()[0];
    
    //sort the high list and get the last item by popping it - assign to max variable.
    let max = high.sort().pop();
    
    //assign the sum of max minus min to ans
    let ans = (max - min);
    
    //if the ans is NaN (becuase the max profit is 0)...
    if(Number.isNaN(ans)){
        
        //console.log and return 0
        console.log(0);
        return 0;
    } else {
        
        //console.log and return ans
        console.log(ans);
        return ans;
    }
    
}

//set the array to prices
let prices = [7,1,5,3,6,4];

//assign the prices array to the function, maxProfit
maxProfit(prices)
