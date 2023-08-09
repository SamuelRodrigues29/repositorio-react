import "./Game.css";

const Game = ({VerifyLetter}) => {
  return (
    <div className="Game">
      <h1>Game</h1>
      <button onClick={VerifyLetter}>Finalizar o jogo </button>
    </div>
  )
}

export default Game