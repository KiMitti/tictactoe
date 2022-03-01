import { useGlobalContext } from './context';
const Square = ({ pos }) => {
  const { handleClick, squares } = useGlobalContext();

  return (
    <button className='square' data-id={pos} onClick={(e) => handleClick(e)}>
      {squares[pos] ? squares[pos] : ''}
    </button>
  );
};

export default Square;
