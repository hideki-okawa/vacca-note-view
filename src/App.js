import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

import axios from "axios";

function App() {
  const [comment, setComment] = useState("");

  useEffect(() => {
    let api = "http://localhost:8080/";
    const fetchData = async () => {
      const response = await axios(api);
      console.log(response)
      setComment(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {comment}
        </a>
      </header>
    </div>
  );
}

export default App;
