"use strict";
// 1 - Numbers
let x = 10;
console.log(x);
x = 16;
console.log(x);
console.log(typeof x);
const y = 15.5454;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - String
const firstName = "Eduardo";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Lira";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - Boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// Inference e annotation
// Annotation = declaramos o tipo do dado manualmente.
let ann = "teste";
// Inference = o próprio TS identifica qual o tipo daquela variável. Mostra um erro caso tente inserir um valor que nao seja do tipo do dado.
let inf = "Teste";
console.log("testando 3");
