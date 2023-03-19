import React from 'react';
import logo from './logo.svg';
import './dist/App.css';
import Welcome from './Welcome';
import * as myImportedObject from './Vars'
import fs from "fs";


function App() {
  console.log(myImportedObject.foo);
const  vladislav ="heloo vladislav";
const myChildren = ['shlomi', 'tal', 'vvladislav'];
const someVar = true;


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
        
      </header>
    </div>
  );
}


export default App;
