import React, { useState, useRef } from 'react';
import './gallery.css';
import GalleryCard from './galleryCard';

export const images = [
    { src: '/images/image1.png', description: 'בר שחור עץ', category: 'BLACK_WOOD' },
    { src: '/images/image2.png', description: 'נדנדה עץ', category: 'BLACK_WOOD' },
    { src: '/images/image4.png', description: 'בר שחור עץ', category: 'BLACK_WOOD' },
    { src: '/images/background.jpg', description: 'בר זהב', category: 'Gold' },
    { src: '/images/gallery1.jpg', description: 'נדנדה עץ', category: 'BLACK_WOOD' },
    { src: '/images/gallery2.jpg', description: 'כלי זהב לבר', category: 'Gold' },
    { src: '/images/gallery3.jpg', description: 'בר זהב', category: 'Gold' },
    { src: '/images/gallery4.jpg', description: 'מרכזי שולחן זהב', category: 'Gold' },
    { src: '/images/gallery5.jpg', description: 'בר שחור עץ', category: 'BLACK_WOOD' },
    { src: '/images/gallery6.jpg', description: 'בר זהב + זכוכיות', category: 'GLASS' },
    { src: '/images/gallery7.jpg', description: 'נדנדה עץ', category: 'BLACK_WOOD' },
    { src: '/images/gallery8.jpg', description: 'בר שחור עץ', category: 'BLACK_WOOD' },
    { src: '/images/gallery9.jpg', description: 'כלים שחור עץ לבר', category: 'BLACK_WOOD' },
    { src: '/images/gallery10.jpg', description: 'כלים שחור עץ לבר', category: 'BLACK_WOOD' },
    { src: '/images/gallery11.jpg', description: 'כלים שחור עץ לבר', category: 'BLACK_WOOD' },
    { src: '/images/gallery12.jpg', description: 'בר זהב', category: 'Gold' },
    { src: '/images/gallery13.jpg', description: 'כלים זהב לבר או למרכז שולחן', category: 'Gold' },
    { src: '/images/gallery14.jpg', description: 'כלים זהב לבר', category: 'Gold' },
    { src: '/images/gallery15.jpg', description: 'כלי זהב + זכוכית לבר או למרכז שולחן', category: 'GLASS' },
    { src: '/images/gallery16.png', description: 'בר שחור עץ', category: 'BLACK_WOOD' },
    { src: '/images/gallery17.png', description: 'בר זהב', category: 'Gold' },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const imageRefs = useRef([]);

    return (
        <div className="gallery-page">
            <h2 className="gradient-text gallery-title">גלריית האירועים שלנו</h2>

            <div className="gallery-grid">
                {images.map((item, index) => (
                    <GalleryCard
                        key={index}
                        item={item}
                        index={index}
                        imageRefs={imageRefs}
                        onImageClick={setSelectedImage}
                    />
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

