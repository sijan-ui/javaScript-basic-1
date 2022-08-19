// document.querySelectorAll(".myButton")[0].addEventListener("click", function () {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + "is click";
// });
// document.querySelectorAll(".myButton")[1].addEventListener("click", function () {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + "is click";
// });
// document.querySelectorAll(".myButton")[2].addEventListener("click", function () {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + "is click";
// });

//Shortcut
// for(var i=0; i<3; i++){
//     document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
//         var text = this.innerHTML;
//         document.querySelector("h1").innerHTML = text + "is click";
//     });
// }

//all same class button same function use
var len = document.querySelectorAll(".myButton").length;
for(var i=0; i < len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + "is click";
    });
}
