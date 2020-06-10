
import React, {useState} from 'react';


const Photo = props => {
    const { src } = props

    return(
        <img src={src} alt='Orion'/>
    )
}

export default Photo;