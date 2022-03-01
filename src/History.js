import { useGlobalContext } from './context';

const History = () => {
  const { history, goToTurn } = useGlobalContext();
  return (
    <div className='game-info'>
      {history.length >= 0 && (
        <ol>
          {history.map((_, index) => {
            return (
              <li key={index}>
                <a
                  href='#'
                  onClick={() => {
                    goToTurn(index);
                  }}
                >
                  {index === 0 ? `Go to Beginning` : `Turn number ${index}`}
                </a>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};
export default History;
