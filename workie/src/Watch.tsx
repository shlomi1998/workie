import React from 'react';
function Watch(props:any) {
 const date = new Date(props.milliseconds)
 const options = { weekday: 'long', hour: 'numeric', minute:
'numeric', second: 'numeric' };
 const time = date.toLocaleDateString()
 return (
 <span>{time}</span>
 );
}
export default Watch;