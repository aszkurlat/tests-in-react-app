import React from "react";
import "./App.css";
import Greetings from "./components/Greetings";
import Async from "./components/Async";

function App() {
  return (
    <div className="App">
      <Greetings />
      <Async />
      {/* <header className="App-header">
        <img className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello User
        </a>
      </header> */}
    </div>
  );
}

export default App;
