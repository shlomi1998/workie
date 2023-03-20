import React, { useState } from 'react';
function ShowHover() {
 const [time, setTime] = useState(0);
 function countHobver() {
 setTime(time + 1);
 }
 return (
 <div>
 <h2 onMouseOver={countHobver}>{time}</h2>
 </div>
 );
}
export default ShowHover;