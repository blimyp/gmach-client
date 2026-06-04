import React, { useState, useEffect, useRef } from 'react';
import Title from '../components/common/title/title';
import { getImages } from '../constants/galleryImages';
import './gallery.css';
import GalleryCard from './galleryCard';
import NewOrder from './newOrder/newOrder';

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const images = getImages();
    const imageRefs = useRef([]);

    useEffect(() => {
        imageRefs.current = imageRefs.current.slice(0, images.length);
    }, [images.length]);

    return (
        <div className="gallery-page">
            <Title text="גלריית אירועים" />

            <div className="gallery-grid">
                {images.map((item, index) => (
                    <GalleryCard
                        key={index}
                        item={item}
                        index={index}
                        imageRefs={imageRefs}
                        onImageClick={() => setSelectedImage(item.src)}
                    />
                ))}
            </div>
            <NewOrder asFooter={'true'} />

            {selectedImage && (
                <div
                    className="gallery-modal"
                    onClick={() => setSelectedImage(null)}
                >
                    <img
                        src={selectedImage}
                        alt="selected"
                        className="modal-image"
                    />
                </div>
            )}
        </div>
    );
}