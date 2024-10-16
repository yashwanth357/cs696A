
import { useState } from 'react';

function Square({value , onSquareClick}) {
  <button className="square" onClick={onSquareClick}>

  {value}</button>;
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";

    setSquares(nextSquares);
  }


  return (
  <>
  <div className="row">
  <Square value={squares[0]} onSquareClick={handleClick(0)} />
        <Square value={squares[1]} onSquareClick={handleClick}/>
        <Square value={squares[2]} onSquareClick={handleClick}/>
   </div>
   <div className="row">
   <Square  value={squares[3]} onSquareClick={handleClick}/>
   <Square  value={squares[4]} onSquareClick={handleClick}/>
   <Square  value={squares[5]} onSquareClick={handleClick}/>
   
   </div>

   <div className="row">
    <Square  value={squares[6]} onSquareClick={handleClick}/>
    <Square  value={squares[7]} onSquareClick={handleClick}/>
    <Square  value={squares[8]} onSquareClick={handleClick}/> 
   </div>
  </>
  )
}
