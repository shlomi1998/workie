import React from 'react';
function Birthday(props:any) {
 const { age, name } = props.user;
 const phrase = age <= 18 ? 'You are underaged!' : 'You are OK!';
 return (
 <span>Happy Birthday {name}! You are {age} years old!! <span>{phrase}</span></span>


 );
}
export default Birthday;