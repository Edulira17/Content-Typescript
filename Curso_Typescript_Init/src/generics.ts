const returnValue = <T, X, Z>(value: T) => value;

const message = returnValue<string, boolean, number>("Hello world");
const count = returnValue<number, boolean, string>(5);




function getFirtsValueFromArray<Type>(array: Type[]) {
  return array[0]
}

const firstValueFromStringArray = getFirtsValueFromArray<string>(["1", "2"])
const firstValueFromNumberArray = getFirtsValueFromArray<number>([10, 20])

// Promises
const returnPromises = async (): Promise<string> => {
  return "4"
}

// Generics com classes
class GenericNumber<T> {
  zeroValue: T;
  sum: (x: T, y: T) => T;
    
  constructor(zeroValue: T, sum: (x: T, y: T) => T){
    this.zeroValue = zeroValue;
    this.sum = sum
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
  return x + y
})