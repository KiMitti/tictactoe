import React from 'react';
import ReactDOM from 'react-dom';
import Game from './App';
import { AppProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Game />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
