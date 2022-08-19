//A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.
/*
//creating a function
function square(num){
    var result = num * num;
    document.write("Result = " + result + "</br>");
}

//calling a function
square(4);
square(19);
*/

//return function
function square(num){
    var result = num * num;
    return result;
}

//calling a function
document.write(square(5) + "<br>");

var x = square(5);
document.write(x);