import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import myVar from './Vars';

function App() {
  console.log(myVar);

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
      </header>
    </div>
  );
}

export default App;
