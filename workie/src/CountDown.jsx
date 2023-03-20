import React, { useState } from 'react';
function CountDown(props) {
 const [count, setCount] = useState(props.time);
 function countUp() {
    if (count > 0) {
        setCount(count - 1);
        }
 }
 return (
 <div>
 <h2>{count}</h2>
 <button onClick={countUp}>Clck me</button>
 </div>
 );
}
export default CountDown;
