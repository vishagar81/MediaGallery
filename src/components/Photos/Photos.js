import React from 'react';
import './Photos.css'

// First, we extract images, onHandleSelectImage, and selectedImage from
// props using ES6 destructuring assignment and then render.
const Photos = ({ images, onHandleSelectImage, selectedImage, onHandleSaveImage }) => (
  <div className="image-container">
    <h2> Images </h2>
    <div className="selected-image">
      <div key={selectedImage.id}>
        <h6>{selectedImage.title}</h6>
        <img src={selectedImage.mediaUrl} alt={selectedImage.title} />
        <div className="overlay"></div>
        <div className="button btn-save" onClick={onHandleSaveImage.bind(this, selectedImage)}>
          <a href="#"> Save </a>
        </div>
      </div>
    </div>
    <div className="image-thumbnail">
      {images.map((image, i) => (
        <div key={i} onClick={onHandleSelectImage.bind(this, image)}>
          <img src={image.mediaUrl} alt={image.title} />
        </div>
      ))}
    </div>
  </div>
);

export default Photos;