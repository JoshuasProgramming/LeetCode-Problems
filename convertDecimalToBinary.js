/**
 * convertDecimalToBinary
 * @param {number} bitSize
 * @param {number} num
 * @return {string} binary
 */
const convertDecimalToBinary = () => {
    
    //empty array to store the bit value
    let arr = [];
    
    //empty array which will store final binary value
    let binary = [];
    
    //get the amount of bits 
    bitSize = (2**(bitSize-1));
    
    //loop for the length of 'bitSize'
    for(let i = 1; i <= bitSize; i = i *2){
        
        //add the square of i to 'arr' (e.g: 1,2,4,8,16,32,64,128)
        arr.push(i);
    }


    //loop for the length of 'arr'
    for(let i = arr.length; i >= 0; i--){
        
        
        //when an item at i is equal to or less than 'num'...
        if(arr[i] <= num){
            
            //console.log the item that was accepted
            console.log(arr[i])
            
            //add 1 to the 'binary' array
            binary.push(1);
            
            //deduct the item that was accepted from 'num'
            num = num - arr[i];
        }
        
        //When an item at i is greater than 'num'...
        else if(arr[i] > num){
            
            //add 0 to the 'binary' array
            binary.push(0);
        }
    }
    
    //console.log and return the full binary value
    console.log(binary.join(''));
    return binary.join('');
}

//variable to store the bitSize
let bitSize = 8;

//variable to store the 'num'/deciaml/integer
let num = 64;

//insert the 'bitSize' and 'num' as reference/parameter for the 'convertDecimalToBinary' function
convertDecimalToBinary(bitSize, num);
