//One Dimensional Array
//Create a function called highestScore that
//Receive a 1d array called scores
//return the highest score

function highestScore(scores){
    let max = score[0];
    for(var x=1; x<score.length; x++){
        if(max <score[x]){
            max = score[x];
        }
    }
    return max;
}


let score = [21, 28, 55, 15];
let maxScore = highestScore(score);
document.write(maxScore);