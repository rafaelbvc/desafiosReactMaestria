import "./GameOver.css";

const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>Fim do jogo!</h1>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  );
};

export default GameOver;
