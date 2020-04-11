
var num1=Math.floor(Math.random() * 6) + 1;
var num2=Math.floor(Math.random() * 6) + 1;
/*
var random1=document.querySelectorAll("img")[0].setAttribute("src","images/dice"+num1+".png");
var random2=document.querySelectorAll("img")[1].setAttribute("src","images/dice"+num2+".png");
*/
//or
var random1=document.querySelector(".img1").setAttribute("src","images/dice"+num1+".png");
var random2=document.querySelector(".img2").setAttribute("src","images/dice"+num2+".png");

if(num1>num2){
    document.querySelector("h1").innerHTML="<h1>player1 Wins</h1>";
}
else if (num1<num2) {
    document.querySelector("h1").innerHTML="<h1>player2 Wins</h1>";
}
else
    document.querySelector("h1").innerHTML="<h1>Draw</h1>";
