// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, {Category} from "./components/Destructuring";

// 6 - UseState
import State from "./components/State";

// 9 - type
type textOrNull = string | null;

type fixed = "Isso" | "Ou" | "Aquilo";

// 10 - context
interface IAppContext {
  language: string
  framework: string
  projects: number
}


function App() {

  // 1 - variaveis
  const name: string = "Eduardo";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 -  funcoes
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  // 9 - type
  const myText: textOrNull = "Tem um texto aqui"
  let mySecondText: textOrNull = null;

  mySecondText = null

  const testandoFixed: fixed = "Isso"

  // 10 - context
  const contextValue = {
    language: "Javascript",
    framework: "Express",
    projects: 5,
  }

  return (
    <div className="App">
      <h1>React com Typescript</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      {/* 4 - importando componentes */}
      <FirstComponent />
      {/* 5 - desestruturando props */}
      <SecondComponent name="Segundo" />

      <Destructuring
        title="Primeiro post"
        content="algum conteudo..."
        commentQty={4}
        tags={["typescript", "javascript", "css"]}
        category={Category.TS}
      />
      <Destructuring 
        title="Segundo post"
        content="Mais alguma coisa..."
        commentQty={20}
        tags={["html", "python"]}
        category={Category.P}
      />

      {/* 6 - useState */}
      <State />

      {/* 9 - type */}
      {myText && <p>Tem texto na variavel</p>}
      {mySecondText && <p>Tem texto na variavel</p>}
    </div>
  );
}

export default App;
