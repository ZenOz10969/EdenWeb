import React from 'react';
import './Gallery.css'; // Import CSS file for styling

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="image-grid">
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
        <img src="image3.jpg" alt="Image 3" />
      </div>
      {/* "See All" button */}
      <button className="see-all-button">See All</button>
    </div>
  );
}

export default Gallery;
