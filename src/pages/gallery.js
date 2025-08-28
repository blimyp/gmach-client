import React, { useState, useEffect, useRef } from 'react';
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
    '/images/gallery8.jpg',
    '/images/gallery9.jpg',
    '/images/gallery10.jpg',
    '/images/gallery11.jpg',
    '/images/gallery12.jpg',
    '/images/gallery13.jpg',
    '/images/gallery14.jpg',
    '/images/gallery15.jpg',
    '/images/gallery16.png',
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const imageRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // כדי שזה יקרה רק פעם אחת
                }
            });
        }, { threshold: 0.1 });

        imageRefs.current.forEach(img => {
            if (img) observer.observe(img);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="gallery-page">
            <h2 className="gallery-title">גלריית האירועים שלנו</h2>

            <div className="gallery-grid">
                {images.map((img, index) => (
                    <div className='image-div' key={index}>
                        <img
                            ref={el => imageRefs.current[index] = el}
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
