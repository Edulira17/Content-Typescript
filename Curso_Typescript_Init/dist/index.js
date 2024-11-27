"use strict";
// TIPOS BASICOS
let age = 29;
const firstName = "Eduardo";
const isValid = true;
let idk = 5;
idk = "21";
idk = false;
const ids = [1, 2, 3, 4];
const booleans = [true, false, true];
const names = ["Eduardo", "Kamylle", "Yumi"];
// Tupla -> Obriga a seguir a ordem que foi declarado os tipos
const person = [1, "fd"];
// Lista de tuplas 
const peopel = [
    [1, "jane"],
    [2, "edu"],
    [3, "yumi"]
];
// Intersections
const productId = true;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(direction);
