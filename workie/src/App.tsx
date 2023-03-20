import React from 'react';
import logo from './logo.svg';
import './dist/App.css';
import Welcome from './Welcome';
import * as myImportedObject from './Vars'
import fs from "fs";


import Birthday  from "./Birthday";
import CountButton  from "./CountButton";
import ShowHover from "./ShowHover";
import CountDown from "./CountDown";
import TodayTime  from "./TodayTime";
// import InputViewer from "./InputViewer";
import MyDivContaine from "./MyDivContainer";
import Counter from "./Counter";
import RandomImageCard from "./RandomImageCard"




function App() {
  console.log(myImportedObject.foo);
const  vladislav ="heloo vladislav";
const myChildren = ['shlomi', 'tal', 'vvladislav'];
const someVar = true;
const fathers = ['Avraham', 'Itzhak', 'Yaakov'];
const listItems = fathers.map((father, index) =>
 <li key={index}>
 {father}
 </li>
);
const b=5;
const items = [];
for (let i = 10; i > 0; i--) {
items.push(<li key={i}>{i}</li>);
}
const user = {
  name: 'Ran',
  lastName: 'Bar-Zik',
  city: 'Petah Tiqwa',
  id: '666',
  }

  const User = {
    name: 'Moshe',
    age: 10,
    }
   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
       bla bla
        </a>
        <Welcome/>
        <br></br>
        <p className='Heloo'>{vladislav}</p>
        
        <ul>{myChildren.map(man => <li> {man} </li>)}</ul>

        { someVar === true ? <span>I am TRUE</span> : <span>I am 
        FALSE</span>}

        <ul>{listItems}</ul>
        <ul>{items}</ul>

        <Birthday user={User}/>
        <TodayTime/>
        <Welcome name="Moshe" prefix="Doctor" />
        <CountButton/>
        <ShowHover/>
        <CountDown time="3" />
        
        <MyDivContaine/>


        <RandomImageCard/>
       <Counter/>
       
      </header>
    </div>
  );
}


export default App;
