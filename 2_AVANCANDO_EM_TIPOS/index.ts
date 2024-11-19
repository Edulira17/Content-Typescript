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
