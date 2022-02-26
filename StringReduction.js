/**
 * Have the function 'StringReduction(str)' take the str parameter
 * being passed and return the smallest number you can get through the
 * following reduction method. The method is: Only the numbers a,b and c 
 * will be given the str and you must take two different adjacent
 * characters and replace it with the third. For example "ac" can be 
 * replaced with "b" but "aa" cannot be replaced with "b" but "aa" cannot
 * be replaced with anything. This method is done repeating until the 
 * string cannot be further reduced, and the length of the resulting 
 * string is to be outputted.
 * 
 * For example: If str is "cab", then "ca" can be reduced to "b" and you
 * get "bb" (you can also reduce it to "cc"). The reduction is done so 
 * the output should be 2. If str is "bcab", "bc" reduces to
 * "a", so you have "aab", then "ab" reduces to "c", and the final string
 * "ac" is reduced to "b" so the output should be 1
*/

const StringReduction = (str) => {
    //Make variable to count the amount of letters
    //that cannot be changes
    let count = 0;

    //loop through the string
    for(let i = 0; i < str.length - 1; i++){
        //Get the current character
        let current = str[i];
        
        //Get the next character
        let next = str[i + 1];
        
        //compare current and next character
        //When two adjaacent characters aren't the same, proceed into if
        //statment
        if(current !== next){
            
            //'ab' => 'c'
            if((current == "a") && (next == "b")){

                //replace the 'ab' string with a 'c' string
                let newStr = str.replace("ab", "c");
                
                //the str has now been updated
                str = newStr
            }
            
            //'bc' => 'a'
            if((current == "b") && (next == "c")){

                //replace the 'ac' string with a 'b' string
                let newStr = str.replace("bc", "a");
                
                //the str has now been updated
                str = newStr
            }
            
            //'ac' => 'b'
            if((current == "a") && (next == "c")){
                //replace the 'ac' string with a 'b' string
                let newStr = str.replace("ac", "b");
                
                //the str has now been updated
                str = newStr
            }
            
            //'ca' => 'b'
            if((current == "c") && (next == "a")){
                //replace the 'ac' string with a 'b' string
                let newStr = str.replace("ca", "b");
                
                //the str has now been updated
                str = newStr
            }
            
            //'cb' => 'a'
            if((current == "c") && (next == "b")){
                //replace the 'ac' string with a 'b' string
                let newStr = str.replace("cb", "a");
                
                //the str has now been updated
                str = newStr
            }
        }
    }

    //Repeat the process all over agin
    //loop through the string
    for(let i = 0; i < str.length - 1; i++){
        //Get the current character
        let current = str[i];
        
        //Get the next character
        let next = str[i + 1];
        
        //compare current and next character
        //When two adjaacent characters aren't the same, proceed into if
        //statment
        if(current !== next){
            
            //'ab' => 'c'
            if((current == "a") && (next == "b")){
                
                //replace the 'ab' string with a 'c' string
                let newStr = str.replace("ab", "c");
                
                //the str has now been updated
                str = newStr
            }
            
            //'bc' => 'a'
            if((current == "b") && (next == "c")){
                //replace the 'ac' string with a 'b' string
                let newStr = str.replace("bc", "a");
                
                //the str has now been updated
                str = newStr
            }
            
            //'ac' => 'b'
            if((current == "a") && (next == "c")){
                //replace the 'ac' string with a 'b' string
                let newStr = str.replace("ac", "b");
                
                //the str has now been updated
                str = newStr
            }
            
            //'ca' => 'b'
            if((current == "c") && (next == "a")){
                //replace the 'ac' string with a 'b' string
                let newStr = str.replace("ca", "b");
                
                //the str has now been updated
                str = newStr
            }
            
            //'cb' => 'a'
            if((current == "c") && (next == "b")){
                //replace the 'ac' string with a 'b' string
                let newStr = str.replace("cb", "a");
                
                //the str has now been updated
                str = newStr
            }
        }
    }

    //loop through the left over string
    for(let i = 0 ; i < str.length; i++){
        
        //count the amount of characters left
        count++;
    }
    
    //console the count as the answer to the problem
    console.log(count);
    
    //return the count as the answer to the problem
    return count;

}

str = "cccc";
StringReduction(str);
