/**
 * You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

Example 1:

Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
Output: 1
Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
Example 2:

Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
Output: 2
Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.
*/

const countMatches = () => {
    
    //create counter
    let counter = 0;
    
    //loop for length of 'items' tines
    for(let i = 0; i < items.length; i++){
        
        
        //increment the counter when the ruleKey and ruleValue equals to a specific value 
        if((ruleKey == "type") && (items[i][0] == ruleValue) ){
            counter++;
        }
        
        //increment the counter when the ruleKey and ruleValue equals to a specific value 
        if((ruleKey == "color") && (items[i][1] == ruleValue) ){
            counter++;
        }
        
        //increment the counter when the ruleKey and ruleValue equals to a specific value 
        if((ruleKey == "name") && (items[i][2] == ruleValue)){
            counter++;
        }
        
    }
    
    //console log and return the 'counter'
    console.log(counter);
    return counter;
}

//variable array to store three different sub-arrays
let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]];

//create variables to store 'ruleKey' and 'ruleValue'
let ruleKey = "color";
let ruleValue = "silver";

//store variables as reference/parameter for the 'countMatches' function
countMatches(items, ruleKey, ruleValue);
