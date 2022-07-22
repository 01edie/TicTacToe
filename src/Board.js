import React, { useState } from 'react';
import Square from './Square';

const Board = ({ history, setHistory, mem, setMem }) => {
  const [status, setStatus] = useState('Next player: X');

  const [turn, setTurn] = useState(0);

  const reset = () => {
    setMem(Array(9).fill(null));
    setHistory([]);
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const markSquare = (data, turn) => {


    let newArr = [...mem];
    let winner = calculateWinner(mem);

    if(!winner){
      if (mem[data] === null) {
        newArr[data] = (turn === 0) ? 'X' : 'O';
        console.log(newArr);
        setTurn((turn === 0) ? 1 : 0);
        setMem(newArr);
  
        setStatus((turn === 0) ? 'Next player: O' : 'Next player: X');
        setHistory([...history, newArr]);
      }
    }

    winner = calculateWinner(newArr);
    console.log(winner);
    console.log(Boolean(winner));
    if (winner) {
      setStatus(`player ${winner} wins`);
    }

  }


  return (
    <div className='game-board'>

      <div className="status">📑 {status}</div>
      <div className="board-row">
        <Square data={0} setSquare={markSquare} mem={mem} turn={turn}></Square>
        <Square data={1} setSquare={markSquare} mem={mem} turn={turn}></Square>
        <Square data={2} setSquare={markSquare} mem={mem} turn={turn}></Square>
      </div>
      <div className="board-row">
        <Square data={3} setSquare={markSquare} mem={mem} turn={turn}></Square>
        <Square data={4} setSquare={markSquare} mem={mem} turn={turn}></Square>
        <Square data={5} setSquare={markSquare} mem={mem} turn={turn}></Square>
      </div>
      <div className="board-row">
        <Square data={6} setSquare={markSquare} mem={mem} turn={turn}></Square>
        <Square data={7} setSquare={markSquare} mem={mem} turn={turn}></Square>
        <Square data={8} setSquare={markSquare} mem={mem} turn={turn}></Square>
      </div>
      <button className="btn-reset" onClick={reset}>Reset</button>
    </div>
  )
}

export default Board