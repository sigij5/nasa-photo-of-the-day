
import React from 'react';
import Photo from './photo'
import Info from './postInfo'
import styled from 'styled-components'

const ContainerSection = styled.section`
    display: flex;
    flex-direction: column;
    /* border: 1px solid silver; */
`;

const PhotoSection = styled.section`
    display: flex;
    flex-direction: column;
    border: 1px solid silver;
    margin: 0% 10%;

`



const Post = props => {
    const { nasaData } = props
    console.log(nasaData)

    return (
        <ContainerSection>
            <PhotoSection>
                <Photo src={nasaData.url} alt={nasaData.title}/>
            </PhotoSection>
            <Info nasaData={nasaData}/>
        </ContainerSection>
    );
};

export default Post;