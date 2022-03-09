/**
 * There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

Example 1:

Input: moves = "UD"
Output: true
Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
Example 2:

Input: moves = "LL"
Output: false
Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.
 
Constraints:

1 <= moves.length <= 2 * 104
moves only contains the characters 'U', 'D', 'L' and 'R'.
*/

const judgeCircle = () => {
    //turn the 'moves' string into an array of characters
    moves = moves.split("");
    
    //resemble the x and y axis with an array
    //[0,0] => x = 0 (LEFT & RIGHT), y = 0 (UP & DOWN)
    let start = [0,0];
    
    //loop through for (length of 'moves') times
    for(let i = 0; i < moves.length; i++){
        
        //When a character is a 'U'...
        if(moves[i] == "U"){
            //.. We'll increment the y-axis by 1
            start[1]++;
        }
        
        //When a character is a 'D'...
        if(moves[i] == "D"){
            //.. We'll decrement the y-axis by 1
            start[1]--;
        }
        
        //When a character is a 'R'...
        if(moves[i] == "R"){
            //.. We'll increment the x-axis by 1
            start[0]++;
        }
        
        //When a character is a 'L'...
        if(moves[i] == "L"){
            //.. We'll decrement the x-axis by 1
            start[0]--;
        }
    }
    
    //console log the array [x,y]
    console.log(start);
    
    
    //Whenever the x-axis and y-axis equals to 0...
    if((start[0] == 0) && (start[1] == 0)){
        
        //...console log 'true'
        console.log(true);
        
        //...return true
        return true;
    } 
    
    //Whenever the x-axis and y-axis doesn't equal to 0...
    else if(start !== [0,0]){
        
        //...console log 'false'
        console.log(false);
        
        //...return 'false'
        return false;
    }
}

//string to contain the 'moves' => U = UP | D = DOWN | L = LEFT | R = RIGHT
let moves = "UD";

//insert the 'moves' string variable as reference/parameter for the judgeCircle' function
judgeCircle(moves);
