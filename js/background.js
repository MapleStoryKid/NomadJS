const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const main = document.querySelector("main");

main.style.background = `url(../img/${chosenImage})`;


