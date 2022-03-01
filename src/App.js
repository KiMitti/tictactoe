import './App.css';
import Board from './Board';
import History from './History';
import { useGlobalContext } from './context';

const Game = () => {
  const { resetGame } = useGlobalContext();
  return (
    <div className='game'>
      <div className='game-board'>
        <Board />
        <button className='reset' onClick={resetGame}>
          Restart Game
        </button>
      </div>
      <History />
    </div>
  );
};

export default Game;
