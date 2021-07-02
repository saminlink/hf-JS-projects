var scores = [60, 50, 60, 58, 54, 58, 50, 64, 67, 53, 67, 55, 61, 43, 60, 58, 65, 61, 52, 63];

var output;
var highScore = 0;
var i = 0;

while (i < scores.length) {

    output = "Bubble solution #" + i + " scores:" + scores[i];
    if(scores[i] > highScore){
        highScore = scores[i];
    }
    console.log(output);

    i += 1;
}
console.log("bubbleTests = " + scores.length);
console.log("highScore = " + highScore);
