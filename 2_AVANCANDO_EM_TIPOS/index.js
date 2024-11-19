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
