

/*
var names = ["Sijan", "Ashik", "Tanvir"];
names.push("Manik"); // add last
names.push("Anika");
names.pop();          // remove lase

names.shift()          //first iliment remove
names.unshift("Sagor"); //fist iliment add

//array loop
for (var i = 0; i < 5; i++) {
  document.write(names[i] + "<br>");
}
document.write(names.length + "<br>");
*/
// concat 2 arry add
var country1 = ["Bangladesh", "UK"];
var country2 = ["India", "Pakisthan"];

var country = country1.concat(country2);
document.write(country + "<br>")

//arry loop
var num = [10, 20, 30, 40, 50];
var sum = 0;

for (var i = 0; i < 5; i++) {
    document.write(num[i] + "</br> ");
    sum = sum + num[i];
  }
  document.write("Sum = " + sum + '<br>')


  // Slice
  var names = ["Sijan", "Ashik", "Tanvir"];
  names.splice(2,0,"Anik", "reza"); // 1. aposition of the arry index 2. remove number 3. add iliment
  document.write(names + '<br>');
  names.splice(1,2);
  document.write(names + '<br>');
 
 
  //shorted arry
  var shortedNames = names.sort();
  document.write("<b>Shorted Arry:</b> " +shortedNames + '<br>');

  //Example
  var numbers = [20, 5, 25, 45, 1 ];
  numbers.sort(function(a,b){
    return a-b; // Value Negative or zero hole posilon same thakbe and positive hole valu ager index e chole asbe
  });
  document.write(numbers + '<br>');