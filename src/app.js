/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let palos = ["♦", "♥", "♠", "♣️ "];
let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let numeroCarta = document.getElementById("numero");
let palosCarta = document.getElementById("palos");
let palosCarta2 = document.getElementById("palos2");

function generador(palos, numeros) {
  let i = palos[Math.floor(Math.random() * palos.length)];
  let j = numeros[Math.floor(Math.random() * numeros.length)];

  palosCarta.textContent = i;
  palosCarta2.textContent = i;
  numeroCarta.textContent = j;
}
console.log(generador(palos, numeros));
generador(palos, numeros);
