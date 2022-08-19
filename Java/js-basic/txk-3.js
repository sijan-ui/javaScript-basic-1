
var num1 = prompt("Enter the first number: ");
var num2 = prompt("Enter the Secound number: ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

sum = num1 + num2;
sub = num1 - num2;
mul = num1 * num2;
dev = num1/ num2;
rem = num1 % num2;

document.write("Addition: " + sum + "</br>");
document.write("Subtraction: " + sub + "</br>");
document.write("Multification: " + mul + "</br>");
document.write("Deveation: " + dev + "</br>");
document.write("Reminder: " + rem + "</br>");
