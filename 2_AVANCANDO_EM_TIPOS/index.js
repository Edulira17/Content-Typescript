"use strict";
// 1- Arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = "teste"
const nomes = ["Eduardo", "Kamys", "Aurora"];
nomes.push("Lira");
console.log(nomes);
console.log(nomes[0]);
// nomes.push(3)
// 2- Outra sintaxe array
const nums = [100, 200];
nums.push(300);
console.log(nums);
// nums.push("teste")
console.log(nums[3]);
// 3- Any -> EVITAR O USO !!!
const arr1 = [1, "eduardo", true, { nome: "eduardo lira" }, []];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
//4 - Parâmetros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 6);
// 5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Eduardo"));
// 6 - função anônima
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 - Tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 239, y: 34.2 };
passCoordinates(objCoord);
const pessoaObj = { nome: "Eduardo", surname: "Cunha" };
// 8 - Props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C: " + c);
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// showNumbers(1)
// 9 - Validando argumento opcional 
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Eduardo", "Neto"));
console.log(advancedGreeting("Kamylle"));
// 10 - Union Types
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
// showBalance(true)
const arr2 = [1, true, "3"];
// 11 - Avançando em Union Types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("ADMIN"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("4999");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 20,
    z: 15
};
showCoords(coordObj);
const somePerson = { name: "eduardo", age: 34 };
console.log(somePerson);
// type personType = {
//   age: number
// }
// 14 - Literal type
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
showDirection("center");
// DISPONIVEIS SOMENTE NA VERSAO ES2020
// 15 - Non-null Assertion Operator
const p = document.getElementById("some-p");
console.log(p.innerText);
// 16 - Bigint
let n;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// 17 - Symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
