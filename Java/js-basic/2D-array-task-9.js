
function highestRunScorer(playersInfo){
    let hightScore = playersInfo[0][0];
    let hightScorer = playersInfo[0][1];
   // document.write(maxScore);
    for(var x=1; x<playersInfo.length; x++){
        if(hightScorer < playersInfo[x][1]){
           hightScore = playersInfo[x][0];
           hightScorer = playersInfo[x][1];
        }
    }
    return hightScorer;
}

let playersInfo = [
    ["Sijan", 50],
    ["Ratul", 05],
    ["Ashik", 15]
];
let maxScore = highestRunScorer(playersInfo);
document.write(maxScore);