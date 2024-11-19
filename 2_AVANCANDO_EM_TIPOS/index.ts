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