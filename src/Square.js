import { useGlobalContext } from './context';
const Square = ({ pos }) => {
  const { handleClick, squares, winLine } = useGlobalContext();

  const squareClass = () => {
    let color = '';
    let highlight = '';
    if (winLine) {
      const [a, b, c] = winLine;
      if (a === pos || b === pos || c === pos) {
        highlight = 'highlight';
      }
    }
    //color the token
    if (squares[pos] === 'O') color = 'ocolor';
    return `square ${color} ${highlight}`;
  };
  return (
    <button
      className={squareClass()}
      data-id={pos}
      onClick={(e) => handleClick(e)}
    >
      {squares[pos] ? squares[pos] : ''}
    </button>
  );
};

export default Square;
