import React from 'react';
function Welcome(props:any) {
 const name = props.name;
 const prefix = props.prefix;
 return (
 <span>Hello, {prefix} {name}!</span>// Component will be here
 );
}
export default Welcome;
