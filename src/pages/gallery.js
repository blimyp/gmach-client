import React, { useState, useEffect, useRef } from 'react';
import Title from '../components/common/title/title';
import { getImages } from '../constants/galleryImages';
import './gallery.css';
import GalleryCard from './galleryCard';
import NewOrder from './newOrder/newOrder';

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const images = getImages();
    const imageRefs = useRef([]);

    const selectedImage =
        selectedIndex !== null ? images[selectedIndex].src : null;

    const showPrevImage = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const showNextImage = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

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
                        onImageClick={() => setSelectedIndex(index)}
                    />
                ))}
            </div>
            <NewOrder asFooter={'true'} />

            {selectedImage && (
                <div
                    className="gallery-modal"
                    onClick={() => setSelectedIndex(null)}
                >
                    <button className="modal-arrow modal-arrow-right" onClick={showPrevImage}>
                        ❮
                    </button>

                    <img
                        src={selectedImage}
                        alt="selected"
                        className="modal-image"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button className="modal-arrow modal-arrow-left" onClick={showNextImage}>
                        ❯
                    </button>
                </div>
            )}
        </div>
    );
}