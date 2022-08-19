function addStyle(){
    var myVer = document.querySelector("#PeraStyle");
   // myVer.style.fontSize = "50px"; //single style add

    myVer.classList.add("pera-style");
}
function removeStyle(){
    var myVer = document.querySelector("#PeraStyle");
    myVer.classList.remove("pera-style");
}

//add lisrener 
var click = document.querySelector("#click");
click.addEventListener("click", () => {
    alert("VAlO");
});

//hover
var myVar = document.querySelector("#hover");
myVar.addEventListener("mouseover", () => {
    myVar.classList.add("love");
});
myVar.addEventListener("mouseout", () => {
    myVar.classList.remove("love");
});