import { useGlobalContext } from './context';

const History = () => {
  const { history, goToTurn, move } = useGlobalContext();
  const targets = [
    `Row 1 Col 1`,
    `Row 1 Col 2`,
    `Row 1 Col 3`,
    `Row 2 Col 1`,
    `Row 2 Col 2`,
    `Row 2 Col 2`,
    `Row 3 Col 1`,
    `Row 3 Col 2`,
    `Row 3 Col 3`,
  ];

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
                  {index === 0
                    ? `Go to Beginning`
                    : `Turn number ${index} @ [${targets[turn.target]}]`}
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
