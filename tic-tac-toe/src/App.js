
import { useState } from 'react';

function Square({value}) {
  const [value, setValue] = useState(null);

   function handleClick() {
    setValue="X"
    console.log('clicked!');
  }
  return (
  <button className="square" onClick={handleClick}>{value}</button>
  );
}

export default function Board() {
  return (
  <>
  <div className="row">
   <Square />
   <Square />
   <Square />
   </div>
   <div className="row">
   <Square />
   <Square />
   <Square />
   </div>

   <div className="row">
   <Square />
   <Square />
   <Square />
   </div>
  </>
  )
}
