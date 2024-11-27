// Funções
const sum: MathFunc = (x: number, y: number):  number => {
  return x + y;
};

sum(2, 4);

const value = sum(2, 4);

const log = (message: string) => {
  console.log(message)
}

// Interface com funções
interface MathFunc {
  (x: number, y: number): number;
}

const sub: MathFunc = (x: number, y: number) => {
  return x - y;
}
