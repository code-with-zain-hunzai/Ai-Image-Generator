import React from 'react'
import './ImageGenerator.css'
import default_image from '../assets/default_image.svg'
const ImageGenerator = () => {
    return (
        <div className='ai-image-generation'>
            <div className="header">Ai image <span>Genertor</span></div>
            <div className="img-loading">
                <div className="image"><img src={default_image} alt="" /></div>
            </div>
            <div className="search-box">
                <input type="text"
                 className='search-input'
                 placeholder='Describe What you want to see?' />
            <div className='generate-btn'>Generate</div>
            </div>
        </div>
    )
}

export default ImageGenerator
