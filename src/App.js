import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from "./secrets";
import Post from './components/PostsContainer/postPage'
import ContainerSection from './components/PostsContainer/postPage'
import styled from 'styled-components'

const MainDiv = styled.div`
  background-color: black;
`

const TitleH1 = styled.h1`
  color: gold;
`



function App() {
  const [nasaData, setNasaData] = useState({})


  useEffect(() => {
    axios.get(`${BASE_URL}apod?api_key=${API_KEY}`)
      .then(res => {
        console.log(res.data)
        setNasaData(res.data)
      })
      .catch(err =>{
        console.log('error')
      })
  }, [])


  return (
    <MainDiv className="App">
      <TitleH1> <span role="img" aria-label='go!'>🚀</span>  NASA Photo Of The Day  <span role="img" aria-label='go!'>🚀</span></TitleH1>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      {/* <img src={photoObj.url} alt='Orion'/> */}
      {/* <Post nasaData={nasaData} /> */}
      <Post nasaData={nasaData} />
      {/* <ContainerSection>
        <Post nasaData={nasaData} />
      </ContainerSection> */}
    </MainDiv>
  );
}

export default App;
