import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
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
          Learn React
        </a>
        <span>
          Four score and seven years ago our fathers brought forth on this
          continent, a new nation, conceived in Liberty, and dedicated to the
          proposition that all men are created equal. Now we are engaged in a
          great civil war, testing whether that nation, or any nation so
          conceived and so dedicated, can long endure. We are met on a great
          battle-field of that war. We have come to dedicate a portion of that
          field, as a final resting place for those who here gave their lives
          that that nation might live. It is altogether fitting and proper that
          we should do this.
        </span>
      </header>
    </div>
  );
}

export default App;
