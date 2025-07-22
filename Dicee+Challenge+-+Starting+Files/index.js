//randomising image1
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "Dice" + randomNumber1+".png";//dice1.png-dice6.png
var randomImageSource = "images/" +randomDiceImage;//images/dice1.png - images/dice6.png
//changing image source for image 1
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//randomising image2
var randomNumber2 = Math.floor(Math.random() *6)+1;
var randomDiceImage2 = "dice" + randomNumber2 +".png";
var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImageSource2);

//changing image of both the dices
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML =("Player1 Wins! 🥳")
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML =("Player2 Wins! 🥳")
}else{
    document.querySelector("h1").innerHTML =("Draw!")
}