// 1- Arrays
let numbers: number[] = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = "teste"
const nomes: string[] = ["Eduardo", "Kamys", "Aurora"];
nomes.push("Lira");
console.log(nomes);
console.log(nomes[0]);
// nomes.push(3)

// 2- Outra sintaxe array
const nums: Array<number> = [100, 200];
nums.push(300);
console.log(nums);
// nums.push("teste")
console.log(nums[3]);

// 3- Any -> EVITAR O USO !!!
const arr1: any = [1, "eduardo", true, { nome: "eduardo lira" }, []];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);

//4 - Parâmetros tipados
function soma(a: number, b: number) {
  console.log(a + b)
}
soma(4, 6)

// 5 - retorno de função
function greeting(name: string): string {
  return `Olá ${name}`
}
console.log(greeting("Eduardo"))

// 6 - função anônima
setTimeout(function() {
  const sallary: number = 1000

  // console.log(parseFloat(sallary))

  // console.log(sallary)
}, 2000)

// 7 - Tipos de objetos
function passCoordinates(coord: {x:number, y: number}){
  console.log("X coordinates: " + coord.x)
  console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 239, y: 34.2}

passCoordinates(objCoord)

const pessoaObj: {nome: string, surname: string} = {nome: "Eduardo", surname: "Cunha"}

// 8 - Props opcionais
function showNumbers(a: number, b: number, c?: number){
  console.log("A: " + a)
  console.log("B: " + b)
  console.log("C: " + c)
}
showNumbers(1, 2, 3)
showNumbers(1, 2) 
// showNumbers(1)

// 9 - Validando argumento opcional 
function advancedGreeting(firstName: string, lastName?: string){
  if(lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`
  }
  return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Eduardo", "Neto"))
console.log(advancedGreeting("Kamylle"))

// 10 - Union Types
function showBalance(balance: number | string) {
  console.log(`O saldo da conta é R$${balance}`)
}
showBalance(100)
showBalance("500")
// showBalance(true)

const arr2: Array<number | string | boolean> = [1, true, "3"]


// 11 - Avançando em Union Types
function showUserRole(role: boolean | string) {
  if(typeof role === "boolean"){
    return "Usuário não aprovado!"
  }

  return`A função do usuário é: ${role}`
}
console.log(showUserRole(false))
console.log(showUserRole("ADMIN"))

// 12 - Type alias
type ID = string | number

function showId(id: ID) {
  console.log(`O ID é: ${id}`)
}

showId(1)
showId("4999")