import React, { useState, useEffect } from "react";
import './App.css';
import Header from "~/components/uiParts/header/index.js";

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
      <Header />
    </div>
  );
}

export default App;
