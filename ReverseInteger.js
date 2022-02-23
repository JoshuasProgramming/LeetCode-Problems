//integer
const x = -123;
reverse(x);

function reverse(x){
    //create empty array, that'll store the string version of the number
    const arr = [];
    
    //create variable that'll determine if the number is positive or negative
    let isNegative = 0;
   
   //check if the number is positive or negative
   if(x < 0){
       isNegative = 1;
   } else {
       isNegative = 0;
   }
   
   //turn int into array
   const new_x = x.toString();
  
    //loop through the array of numbers
   for(let i = 0; i < new_x.length; i++){
       //push to array if the number doesn't eqaul to the 0
       if((new_x[i] == 0)) {
           
       } else {
           arr.push(new_x[i]);
       }
       
   }
   //put reversed array into new variable
   const reversed = arr.reverse();
   
   //turn back into string
   const reversed_string = (reversed.join(""));
   
   
   //turn string back into integer
   let reversed_int = 0;
   
   //when negative, replace any existing '-' symbols that was in the loop,
   //and put it at the front of the number.
   if(isNegative == 1){
       let minus = ( "-" + reversed_string.replace(/[^a-zA-Z0-9]/g, ''));
       
       //assign the string to parseInt => turning it into a integer
       reversed_int = parseInt(minus);
   } else {
       
       //assign the string to parseInt => turning it into a integer
       reversed_int = parseInt(reversed_string);
   }
   
   //console the result out
   console.log(reversed_int);
   
   //returnthe result out
   return reversed_int;
}
