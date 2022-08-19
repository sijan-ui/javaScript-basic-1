var num = prompt("Enter the number: ");


if (num > 100 || num <0)
document.write("Invalid Mark's");
else if(num >= 80 && num <= 100)
document.write("A+");
else if(num >= 70 && num <=79)
document.write("A");
else if(num >= 60 && num <= 69)
document.write("A-");
else if(num >= 50 && num <= 59)
document.write("B");
else if(num >= 40 && num <= 49)
document.write("C");
else if(num >= 33 && num <= 40)
document.write("D");
else
document.write("F");