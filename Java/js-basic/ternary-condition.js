//tuernary mens 3

var number = Number(prompt("Enter a Number"));
/*
//2 condition
var result = number > 0 ? "positive" : "Negative"
document.write(result);
*/

//3 condition
var result = number>0 ? "Positive" : number<0 ? "Negative" : "Zero"
document.write(result);