import { useGlobalContext } from './context';

const History = () => {
  const { history, goToTurn, move } = useGlobalContext();
  return (
    <div className='game-info'>
      {history.length >= 0 && (
        <ol>
          {history.map((turn, index) => {
            return (
              <li key={index}>
                <a
                  href='#'
                  onClick={() => {
                    goToTurn(index);
                  }}
                  className={index === move ? 'turn active' : 'turn'}
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
