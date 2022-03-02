import './App.css';
import Board from './Board';
import History from './History';
import { useGlobalContext } from './context';

const Game = () => {
  const { resetGame } = useGlobalContext();
  return (
    <div className='game container pt-3'>
      <div className='row'>
        <div className='game-board col-sm-auto'>
          <Board />
          <button className='btn btn-orange reset mt-3' onClick={resetGame}>
            Restart Game
          </button>
        </div>
        <History />
      </div>
    </div>
  );
};

export default Game;
