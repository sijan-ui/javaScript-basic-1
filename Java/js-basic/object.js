//How to create an object
//how to prin the valu of an object
//adding a constructor
//adding a function inside a conostructor

var student1 = {   //studen1 is a object
    name: "Sijan",
    age: 26,
    cgpa: 2.98,


}
document.write(student1.cgpa + '<br>');

//constructor
function Student(name,age,cgpa){ //constructor r function name first ta capital hbe
this.name = name;
this.age = age;
this.cgpa = cgpa;
//function inside conostructor
this.display = function(){
    document.write(this.name + ' ');
    document.write(this.age + ' ');
    document.write(this.cgpa);
}
}
var studen2 = new Student("Ashik",22,2.68);
var studen3 = new Student("Sopnil",25,2.58);
var studen4 = new Student("Ratul",24,3.68);
studen2.display();
