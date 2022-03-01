import React, { useState } from 'react';
import { useGlobalContext } from './context';

const History = () => {
  const { history, goToTurn, move } = useGlobalContext();
  const targets = [
    `Row 1 Col 1`,
    `Row 1 Col 2`,
    `Row 1 Col 3`,
    `Row 2 Col 1`,
    `Row 2 Col 2`,
    `Row 2 Col 3`,
    `Row 3 Col 1`,
    `Row 3 Col 2`,
    `Row 3 Col 3`,
  ];
  const [historyReverse, setHistoryReverse] = useState(false);
  let mappedHistory = [...history];

  if (historyReverse) {
    mappedHistory = [...history].reverse();
  }
  return (
    <div className='game-info'>
      <button
        className='btn btn-sm btn-orange mb-2'
        onClick={() => setHistoryReverse(!historyReverse)}
      >
        {historyReverse ? `Normal Turn Order` : `Reverse Turn Order`}
      </button>
      {mappedHistory.length >= 0 && (
        <ul>
          {mappedHistory.map((turn, index) => {
            return (
              <li key={index}>
                <a
                  href='#'
                  onClick={() => {
                    goToTurn(turn.move);
                  }}
                  className={index === move ? 'turn active' : 'turn'}
                >
                  {!historyReverse &&
                    (index === 0
                      ? `Go to Beginning`
                      : `Turn number ${index} @ [${targets[turn.target]}]`)}
                  {historyReverse &&
                    (index === mappedHistory.length - 1
                      ? `Go to Beginning`
                      : `Turn number ${turn.move} @ [${targets[turn.target]}]`)}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default History;
