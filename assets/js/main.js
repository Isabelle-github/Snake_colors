
// Erstelle 100 Divs mit Hilfe von Javascript (Loop). 

// Die Farbe jedes Elements sollte in eine andere geändert werden und so für eine halbe Sekunde bleiben, wenn das Element mit dem Mauszeiger getroffen wird.

// Der CSS-Code befindet sich in dem Kommentar.


// getElementById
// addEventListener("mouseover")
// setTimeout
// event.target.style
// for loop um divs zu erstellen
// beim hover soll es keine feste sondern eine zufällige RGB Farbe geben ;-)

let htmlElements = "";
let arrayDivs = [];
for (var i = 0; i < 100; i++) {
    // arrayDivs.push('<div class="item"></div>');
    htmlElements += '<div class="item"></div>';
}
console.log(arrayDivs);
const container = document.getElementById("snakeField");
snakeField.innerHTML = htmlElements;

// arrayDivs.forEach(element => {
//     console.log(element)
// });
let divsList = document.querySelectorAll("div");
let myDiv;
for (i = 0; i < divsList.length; i++) {
    myDiv = divsList[i];
    divsList[i].addEventListener('mouseover', (e) => {
        // console.log(divsList[i])
        console.log(e)
        e.target.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);;
        //myDiv.style.backgroundColor = "red";
        setTimeout(function () {
            e.target.style.backgroundColor = 'lightblue';
        }, 500)
    })
}

