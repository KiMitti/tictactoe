import React, { useState, useContext, useEffect, createContext } from 'react';

const initialState = {
  xNext: true,
  winner: null,
  squares: Array(9).fill(null),
  move: 0,
  history: [{ move: 0, squares: Array(9).fill(null), xNext: true }],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  //reset game
  const resetGame = () => {
    setState(initialState);
  };

  //when someone clicks a square
  const handleClick = (e) => {
    const target = e.target.dataset.id;
    //then check to see if there is a winner
    const newSquares = state.squares.slice();
    //if it hasn't been clicked before assign it a value and no winner
    if (!state.squares[target] && !state.winner) {
      //check to see if we're playing from a history state
      let newHistory = [...state.history];

      console.log(`move: ${state.move} < history: ${state.history.length}`);
      if (state.move < state.history.length - 1) {
        const slice = state.history[state.move].move + 1;
        newHistory = state.history.slice(0, slice);
      }

      let player;
      state.xNext ? (player = 'X') : (player = 'O');
      newSquares[target] = player;
      setState({
        ...state,
        xNext: !state.xNext,
        squares: newSquares,
        move: state.move + 1,
        history: newHistory,
      });
    }
  };

  useEffect(() => {
    //after each move we record it and then calculate a winner
    //if we went back in time, don't record that
    if (state.history.length <= state.move) {
      recordMove();
    }
    checkWinner();
  }, [state.squares]);

  const checkWinner = () => {
    //winning lines
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
    //check for draw
    if (state.move >= 9) {
      setState((prevState) => {
        return { ...prevState, winner: 'draw' };
      });
    }
    const newSquares = state.squares;
    //If not, check for winner
    lines.map((line) => {
      const [a, b, c] = line;
      if (newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]) {
        setState((prevState) => {
          return { ...prevState, winner: newSquares[a] };
        });
      }
    });
  };

  //keep a record
  const recordMove = () => {
    console.log('history', state.history);

    setState((prevState) => {
      return {
        ...prevState,
        history: state.history.concat({
          squares: state.squares,
          xNext: state.xNext,
          move: state.move,
        }),
      };
    });
  };

  //go to move
  const goToTurn = (index) => {
    const newSquares = state.history[index].squares;
    const newMove = state.history[index].move;
    const newTurn = state.history[index].xNext;
    console.log(newSquares);
    setState({
      ...state,
      squares: newSquares,
      move: newMove,
      xNext: newTurn,
    });
  };

  return (
    <AppContext.Provider value={{ ...state, handleClick, resetGame, goToTurn }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
