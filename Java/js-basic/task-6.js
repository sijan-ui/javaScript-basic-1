// write a program that will print the sum of all the numbers that are divisible by 3 and 5 from 1-100

var i = 1;
var sum = 0;

while (i <= 50) {
  if (i % 3 == 0 && i % 5 == 0) {
    document.write(" " + i);
    sum = sum + i;
  }
  i = i + 1;f
}
document.write("sum = " + sum);
document.write("end");
