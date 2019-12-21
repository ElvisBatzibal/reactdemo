import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWord from './Views/Hello';
import HelloMessage from './Views/HelloMessage';
import Name from './Views/ConstElement'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Demo begin react <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo React
        </a>
      </header>
      <HelloWord></HelloWord>
      <HelloMessage name="Elvis"/>
      <Name lastname="Batzibal"  />

    </div>
  );
}

export default App;
