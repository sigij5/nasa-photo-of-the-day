
import React from 'react';
import Photo from './photo'
import Info from './postHeader'



const postPage = props => {
    const { photoObj } = props

    return (
        <div className='post-container'>
            <Photo src={photoObj.url}/>
            <Info photoObj={photoObj}/>
        </div>
    );
};

export default postPage;