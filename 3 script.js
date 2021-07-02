var location1 = 4;
var location2 = 5;
var location3 = 6;


var guess;
var guesses = 0;
hits = 0;

var isSunk = false;

while(isSunk == false){
    guess = prompt("enter a number from 0 to 6 :");
    if(guess < 0 || guess > 6){
        prompt("please enter a valid number :");
    }
    else{
        guesses = guesses + 1;

        if(guess == location1 || guess == location2 || guess == location3){
            alert("HIT");
            hits = hits + 1;
            if(hits == 3){
                isSunk = true;
                alert("oohhoo! you just sunk the ship.");
            }
        }
        else{
            alert("MISSED");
        }                
    }
}
document.write(`you took ${guesses} guesses and ${hits} hits and sunk the bettleship.`);