var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomImageSource2 = "images/dice"+ randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins ! Party 🥳🥳";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins ! Party 🥳🥳";
}
else{
    document.querySelector("h1").innerHTML = " Draw";
<<<<<<< HEAD
}

function refreshPage() {
    window.location.reload();
  } 
=======
}
>>>>>>> 5431683c32dd71a82ece2b6fd1fe0d5de9416905
