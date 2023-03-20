import React, { useState, useEffect } from 'react';
import "./dist/Counter.css"

function Counter() {
 const [count, setCount] = useState(0);
 useEffect(() => { console.log('re-rendered!'); });
 function increaseHandler() { 
 setCount(count + 1);
 }
 function decreaseHandler() {
 setCount(count - 1);
 }
 function restartHandler() {
 setCount(0);
 }
 return (
 <div>
 <button onClick={increaseHandler}>Increase</button>
 <button onClick={decreaseHandler}>Decrease</button>
 <button className='bi' onClick={restartHandler}>Restart</button>
 <div>{count}</div>
 </div>
 );
}
export default Counter;