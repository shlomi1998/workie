import React, { useState } from 'react';
function InputViewer() {
 const [text, setText] = useState('');
 function changeHandler(e:any) {
 setText(e.target.value);
 };
 return (
 <div>
 <span>{text}</span>
 <input onChange={changeHandler} type="text" />
 </div>
 );
}
export default InputViewer;