//CSS
import  "./App.css";


//React
import {useState } from 'react';

//Data ou palavras do script data
 import { wordsList } from './data/words';
 
 //Componentes 
 import StartScreen from './componentes/StartScreen';
 import Game from './componentes/Game';
 import GameOver from './componentes/GameOver';

 const Stages = [ // array de objetos para usar dependnendo do estagio do jogo
  {id: 1, name:"start"},
  {id: 2, name:"game"},
  {id: 3, name: "gameover"},
 ]
function App() {
  const [GameStage, setGameStage]= useState([0].name);
  const [words]= useState(wordsList);
  
// começar o jogo
  const StartGame = () => {
    setGameStage(Stages[1].name) // função anonima para iniciar o jogo
  }
  // jogando
  const VerifyLetter = () => {
    setGameStage(Stages[2].name)
  }

  return (
    <div className="App">
        {GameStage === "start" && <StartScreen StartGame={StartGame}/>} {/*quando o esagio do jogo for inicio,chama a devida função */}
        {GameStage === "game" && <Game VerifyLetter={VerifyLetter}/>} {/*quando o esagio do jogo for game,chama a devida função */}
        {GameStage === "gameover" && <GameOver/>} {/*quando o esagio do jogo for gameover,chama a devida função */}
    </div>
  )
}

export default App
