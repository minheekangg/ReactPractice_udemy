import React from 'react';
import './imageList.css'
import ImageCard from './imageCard'


const ImageList = props => {
    const images = props.images.map(i=> {
         return <ImageCard image={i} key={i.id}/>
    })
    return <div className="image-list">
        {images}
    </div>
}

export default ImageList;