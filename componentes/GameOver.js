import "./GameOver.css";

const GameOver = ({Retry}) => {
  return (
    <div>
    <h1 className="Over">Game Over</h1>
    <button onClick={Retry}>Resetar  o jogo </button>
  </div>
  )
}

export default GameOver