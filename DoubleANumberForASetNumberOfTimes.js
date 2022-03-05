/**
* Double a number for a set number of times
* Example 1:
* n = 10
  target = 10
  output : [ 20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10240 ]

  Example 2:
  n = 3
  target = 10
  output : [ 6, 12, 24, 48, 96, 192, 384, 768, 1536, 3072 ]
  
  Example 3: 
  n = 8
  target = 15
  output : [ 16,
  32,
  64,
  128,
  256,
  512,
  1024,
  2048,
  4096,
  8192,
  16384,
  32768,
  65536,
  131072,
  262144 ]
  
  Example 4:
  n = 1
  target = 13
  output: [ 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192 ]
*/

const doubleForTargetTimes = (n,target) => {
    
    //array of integers to store the sums for eaach double
    let numbers = [];
    
    //store the inital value of n
    let inital = n;
    
    //base case
    //Whenever target eqauls to 1...
    if((target == 1)){
        
        //console log n, as there's going to be zero iterations where we keep doubling n
        console.log(n);
        
        //return n, as there's going to be zero iterations where we keep doubling n
        return n;
    }
    
    //other case
    //Whenever target is greater than 1...
    if(target > 1){
        
      //loop for (length of target) times
      for(let i = 0; i < target; i++){
          
          //make the n equal n plus n 
          //e.g: n = 10 + 10 (n = 20) => loop again for target times
          n = n + n;
          
          //add/push this value of n into the array where we store all these numbers
          numbers.push(n);
      }
      
      //console log the answer where we show the inital value of n, the target and the 'numbers' list array
      console.log("n:" + inital + " times:" + target ,numbers);
      
      //return the 'numbers'
      return numbers;
    }
}

//Create varaible to store the value of 'n'
let n = 1;

//Create variable to store the 'target' value
let target = 13;

//insert the value of 'n' and the 'target' as reference/parameter for the 'doubleForTargetTimes' function
doubleForTargetTimes(n,target);
