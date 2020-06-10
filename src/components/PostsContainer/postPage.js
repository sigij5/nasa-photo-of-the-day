
import React from 'react';
import Photo from './photo'
import Info from './postHeader'



const Post = props => {
    const { photoObj } = props
    console.log(photoObj)

    return (
        <div className='post-container'>
            <Photo src={photoObj.url}/>
            <Info photoObj={photoObj}/>
        </div>
    );
};

export default Post;