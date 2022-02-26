/** 
 * Have the function 'Consecutive(arr)' take the array of integers 
 * stored in arr and return the minimum number of integers needed to 
 * make the contents of arr. Consecutive from the lowest number to the
 * highest number. For example: if arr constains [4,8,6] then the
 * output should be 2 because two numbers need to be added to the
 * array (5 and 7) to make it a consecutive array of numbers from
 * 4 to 8. Negative numbers may be entered as parameters and no array 
 * will have less than 2 elements
 * 
*/

const consecutive = (arr) => {
    //We're trying to sort an array here as [5,10,15]
    //will work without sorting, but [-2,10,4] won't.
    let sorted_arr = arr.sort((a,b) => a-b);

    //Gives the space between items (in amount of commas)
    let arr_gaps = (arr.length) - 1; 
    
    //temp storage
    let temp = [];
    
    //minimum number of integer score
    let score = 0; 
    
    //loop through the array (arr)
    for(let i = 0; i < arr_gaps; i++){
        //add first item in temp storage
        temp.push(arr[i]);
        
        //compare temp storage to next item
        //get the distance between the temp and next
        //item
        let current = (Math.abs(sorted_arr[i] - sorted_arr[i + 1])) - 1;
        score = current + score;
        
        //store the next item in the temp
        temp = [];
        
        //Repeat the loop until the gap value has been reached
    }
    //console log the socre
    console.log(score);
    
    //return the score
    return score;
} 

//create an array with numbers inside
let arr = [4, 8, 6]; 

//put the 'arr' as an parameter for the 'consecutive'
consecutive(arr);
