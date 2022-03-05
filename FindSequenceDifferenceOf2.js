/**
* Find number sequence up to num with common difference of 2
* Example 1:
  num = 15
  output : [1,2,4,8]
  
  Example 2:
  num = 5
  output : [1,2,4]
  
  Example 3: 
  num = 500
  output: [ 1, 2, 4, 8, 16, 32, 64, 128, 256 ]

*/

const FindSequenceDifferenceOf2 = () => {
    
    //integer array variable to store values of n
    //n will be the sequence
    //e.g: num = 15 => n = [1,2,4,8] becuase that's the sequence right below 15
    let n = [1];
    
    //variable for the index
    let i = 0;
    
    //while the number at a specifc index is less than the num value...
    while(n[i] < num){
        
        //'nVal' (value which we'll put in the 'n' array) equals zero
        nVal = 0;
        
        //loop for (length of n) times
        for(let i = 0; i < n.length; i++){
            
            //'nVal' will equal to itself plus everything else before it
            nVal = nVal + n[i];
        }
        
        //increment the i
        i++
        
        //push the 'nVal' into the n integer array
        n.push(nVal);
    }
    
    //remove first item (it's a duplicate of 1)
    n.shift();
    
    //remove last item (it goes over num)
    n.pop();
    
    //console log the final array of the sequence with common difference of 2
    console.log(n);
    
    //returnthe final array of the sequence with common difference of 2
    return n;
}

//variable to store the number which we're going to go right below of.
let num = 500;

//insert 'num' as reference/parameter for the 'FindSequenceDifferenceOf2' function
FindSequenceDifferenceOf2(num);
