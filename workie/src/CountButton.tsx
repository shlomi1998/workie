import React, { useState } from 'react';
function CountButton() {

 const [count, setCount] = useState(0);
 function countUp() {
    
 setCount(count + 1);
 }
 return (
 <div>
 <h2>{count}</h2>
 <button onClick={countUp}>Clck me</button>
 </div>
 );
}
export default CountButton;