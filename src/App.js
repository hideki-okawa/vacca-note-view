import React, { useState, useEffect } from "react";
import './App.css';

import axios from "axios";

const App = () => {
  const [comment, setComment] = useState("");

  useEffect(() => {
    let api = process.env.REACT_APP_SERVER_API;
    const fetchData = async () => {
      console.log(api)
      const response = await axios(api);
      console.log(response)
      setComment(response.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
