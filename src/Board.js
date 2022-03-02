import Square from './Square';
import { useGlobalContext } from './context';
const Board = () => {
  const { xNext, winner } = useGlobalContext();

  const status = `Next player: ${xNext ? 'X' : 'O'}`;
  const squares = new Array(9).fill(null);

  return (
    <div>
      <div className='status'>
        {(winner === 'draw' && `It's a tie!`) ||
          (winner === 'X' && 'X wins!') ||
          (winner === 'O' && 'O wins!') ||
          status}
      </div>
      <div className='board-row'>
        <Square pos={0} />
        <Square pos={1} />
        <Square pos={2} />
      </div>
      <div className='board-row'>
        <Square pos={3} />
        <Square pos={4} />
        <Square pos={5} />
      </div>
      <div className='board-row'>
        <Square pos={6} />
        <Square pos={7} />
        <Square pos={8} />
      </div>
    </div>
  );
};

export default Board;
