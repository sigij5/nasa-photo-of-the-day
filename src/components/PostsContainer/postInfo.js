import React from 'react'
import styled from 'styled-components'

const InfoDiv = styled.div`
    background-color: black;
    color: gold;
    padding: 0% 10%;
    line-height: 2rem;

`


const Info = props => {
    const {nasaData} = props
    console.log(nasaData)
    return(
        <InfoDiv className='post-info'>
            <div className='photographer-name'>
                <h1>"{nasaData.title}"</h1>
                <h2>By: {nasaData.copyright}</h2>
                <p>{nasaData.date}</p>
                <p>{nasaData.explanation}</p>
            </div>
        </InfoDiv>
    )
};

export default Info;