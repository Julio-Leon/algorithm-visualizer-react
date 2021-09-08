import './App.css';
import React, { useState, createContext } from 'react';

import Grid from './components/Grid/Grid';

export const AppContext = createContext()

const table = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function App() {

  const [grid, setGrid] = useState(table)

  return (
    <div className="app flex-container">
      <AppContext.Provider value={{
          setGrid,
          grid
      }}>
        <Grid grid={grid} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
