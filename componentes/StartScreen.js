import './StartScreen.css'

function StartScreen({ StartGame }) {
  return (
    <div className="start">
      <h1>Secret word</h1>
      <p>Clique no botão abaixo para começar</p>
      <button onClick={StartGame}>Começar o jogo</button>
    </div>
  );
}

export default StartScreen;