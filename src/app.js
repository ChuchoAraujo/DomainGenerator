/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  //step 1 - pegar arreglos
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  //step 2 - Crear variable donde se agregaran las combinaciones
  let domainComplete = [];

  // step 3 - Crear ciclo
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        console.log("test", noun[k]); // step 4 - agregar combinaciones a la variable vacia
        domainComplete.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }

  // step 5 -retornar
  console.log(domainComplete);
};
