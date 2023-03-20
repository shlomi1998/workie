import React, { useState } from 'react';
function MyDivContainer() {
 const [activeText, setActiveText] = useState('');
 function mouseoverHandler(e:any) {
 setActiveText('active');
 }
 function mouseoutHandler(e:any) {
 setActiveText('');
 }
 return (
 <div
 onMouseOver={mouseoverHandler}
 onMouseOut={mouseoutHandler}
 >
 MyDiv {activeText}
 </div>
 );
}
export default MyDivContainer;