import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Description from "./Description-Container/Description";
import Image from "./Image-Container/Image";
import axios from "axios";
import { BASE_URL, API_KEY } from "./Constants";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Image data={data} />
      <Description explanation={data.explanation} />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;
