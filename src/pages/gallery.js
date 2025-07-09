import React, { useState } from 'react';
import './gallery.css';

const images = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image4.png',
    '/images/background.jpg',
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.jpg',
    '/images/gallery7.jpg',
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="gallery-page">
            <h2 className="gallery-title">גלריית האירועים שלנו</h2>

            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div className='image-div'>
                        <img
                            key={index}
                            src={img}
                            alt={`gallery ${index}`}
                            className="gallery-image"
                            onClick={() => setSelectedImage(img)}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="selected" className="modal-image" />
                </div>
            )}
        </div>
    );
}
