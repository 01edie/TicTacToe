import './App.css';
import Board from './Board';
import React, { useState } from 'react';
import History from './History';

function App() {
  const [mem, setMem] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([]);
  function travel(item){
    setMem(item);
  }
  return (
    <div className="game">
      <div className="game-board-0">
        <Board history={history} setHistory={setHistory} mem={mem} setMem={setMem} />
      </div>
      {(history.length>0)?<History travel={travel} history={history}></History>:null}
    </div>
  );
}

export default App;
