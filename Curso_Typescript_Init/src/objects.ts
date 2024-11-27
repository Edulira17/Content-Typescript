// Type = objeto
type Order = {
  productId: string
  price: number
}

type User = {
  firstName: string
  age: number
  email: string
  password?: string
  orders: Order[]
  register(): string
}

const user: User = {
  firstName: "Eduardo",
  age: 20,
  email: "edu@do.com",
  password: "234",
  orders: [{productId: "2112", price: 200}],
  register() {
    return "asds"
  }
}

const printLog = (message: string) => {}

printLog(user.password!)

// Unions
type Author = {
  books: string[]
}

const author: Author & User = {
  age: 2,
  books: ["elden"],
  email: "author@gmail.com",
  firstName: "eduardo",
  orders: [],
  register() {
    return "ass"
  }
}

// Interfaces
// readonly = apenas para leitura
interface UserInterface {
  firstName: string
  email: string
  login(): string
}

const emailUser: UserInterface = {
  email: "felipe@gmail.com",
  firstName: "felipe",
  login(){
    return "s"
  }
}

interface AuthorInterface {
  books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
  email: "author@gmail.com",
  firstName: "Author",
  books: [],
  login(){
    return "ssds"
  }
}

type Grade = number | string
const grade: Grade = 1