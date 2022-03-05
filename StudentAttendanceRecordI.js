/**
 * You are given a string s representing an attendance record for a student where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

'A': Absent.
'L': Late.
'P': Present.
The student is eligible for an attendance award if they meet both of the following criteria:

The student was absent ('A') for strictly fewer than 2 days total.
The student was never late ('L') for 3 or more consecutive days.
Return true if the student is eligible for an attendance award, or false otherwise.

 
Example 1:

Input: s = "PPALLP"
Output: true
Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.
Example 2:

Input: s = "PPALLL"
Output: false
Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.
 

Constraints:

1 <= s.length <= 1000
s[i] is either 'A', 'L', or 'P'.
*/

const checkRecord = () => {
    
    //split the 's' string into an array if individual characters
    s = s.split("");
    
    //create variable to store the amount od absences
    let absentVal = 0;
    
    //create boolean variable to check if the word is 'accepted'
    let accepted = true;
    
    //loop for (length of s) times
    for(let i = 0; i < s.length; i++){
        
        //create variable for the current index
        let current = s[i];
        
        //create variable for the next index
        let next = s[i + 1];
        
        //create variable for the third index
        let third = s[i + 2];
        
        //Whenever the current letter at a specific index is 'A'...
        if(current == 'A'){
            
            //...Increment the value of the 'absentVal' by 1
            absentVal++;
        }
        
        //Whenever the current, next and third character equal to L...
        if((current == 'L') && (next == 'L') && (third == 'L')){
            
            //turn the 'accepted' boolean value to 'false'
            accepted = false;
        }
    }
    
    //Whenever the 'absentVal' is greater than or equal to 2...
    if(absentVal >= 2){
        
        //turn the 'accepted' boolean value to 'false'
        accepted = false;
    }
    
    //console log the 'accepted' boolean value (True/False)
    console.log(accepted);
    
    //return the 'accepted' boolean value (True/False)
    return accepted;
}

//variable to store the string of absent, late, present
let s = "PPALLP";

//insert the 's' as reference/parameter for the 'checkRecord' function
checkRecord(s);
