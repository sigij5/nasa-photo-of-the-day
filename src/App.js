import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from "./secrets";
import postPage from './components/PostsContainer/postPage'


function App() {
  const [photoObj, setPhotoObj] = useState({})


  useEffect(() => {
    axios.get(`${BASE_URL}apod?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setPhotoObj(res.data)
      })
      .catch(err =>{
        debugger
      })
  }, [])


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <img src={photoObj.url} alt='Orion'/>
      {/* <postPage photoObj={photoObj} /> */}
    </div>
  );
}

export default App;
