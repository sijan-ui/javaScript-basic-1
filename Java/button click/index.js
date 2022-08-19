function myMessage(){
    alert("Hello Everyone");
}
function myMessage2(){
    alert("You click paragraph");
}
function myMessage3(){
    var myVeriable = document.querySelector("#buttonPera");
    myVeriable.innerHTML = "You Have Click on button";
}

function myMessage4(){
    var myVar = document.querySelector("#Image");
    myVar.src = "/button click/Capture.PNG";
}


var photos = ["img/1.jpg", "img/2.jpg", "img/3.jpg"]; //image array
var imgTag = document.querySelector("img");

var count = 0;

function next(){
    count++;
    if(count>=photos.length){
        count=0;
        imgTag.src = photos[count];
    }else{
        imgTag.src= photos[count];
    }
    
}

function prev(){
    count--;
    if(count< 0){
        count = photos.length - 1;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}