
import React, { useState } from 'react';
import styled from 'styled-components';
// import Image from './photoStyling';

const Image = styled.img`
    display: flex;
    object-fit: fill;

`;

const Photo = props => {
    const { src } = props
    const { alt } = props


    return(
        <Image src={src} alt={alt}/>
    );
}

export default Photo;