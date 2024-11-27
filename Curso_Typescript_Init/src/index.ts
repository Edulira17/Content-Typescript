// TIPOS BASICOS
let age: number = 29;
const firstName: string = "Eduardo";
const isValid: boolean = true;
let idk: any = 5;

idk = "21";
idk = false;

const ids: number[] = [1, 2, 3, 4];
const booleans: boolean[] = [true, false, true];
const names: string[] = ["Eduardo", "Kamylle", "Yumi"];

// Tupla -> Obriga a seguir a ordem que foi declarado os tipos
const person: [number, string] = [1, "fd"];

// Lista de tuplas
const peopel: [number, string][] = [
  [1, "jane"],
  [2, "edu"],
  [3, "yumi"],
];

// Intersections
const productId: number | string | boolean = true;

// Enum
enum Direction {
  Up = 1,
  Down = 2,
  Left = "Esquerda",
}

const direction = Direction.Up;
console.log(direction);

// Type Assertions
const productName: any = "boné";

// let itemId = productName as string;
let itemId = <string>productName
