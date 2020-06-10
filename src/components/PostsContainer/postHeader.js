import React from 'react'


const Info = props => {
    const {photoObj} = props
    console.log(photoObj)
    return(
        <div className='post-info'>
            <div className='photographer-name'>
                <h1>`"{photoObj.title}"`</h1>
                <h2>By: {photoObj.copyright}</h2>
                <p>{photoObj.date}</p>
                <p>{photoObj.explanation}</p>
            </div>
        </div>
    )
};

export default Info;