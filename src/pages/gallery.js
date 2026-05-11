import React, { useState, useEffect, useRef } from 'react';
import Title from '../components/common/title';
import './gallery.css';
import GalleryCard from './galleryCard';

const getImages = () => [
    { category: 4, src: '/images/gallery1.jpg', SKU: 323 },
    { category: 1, src: '/images/gallery2.jpg', SKU: 324 },
    { category: 1, src: '/images/gallery3.jpg', SKU: 325 },
    { category: 1, src: '/images/gallery4.jpg', SKU: 326 },
    { category: 2, src: '/images/gallery5.jpg', SKU: 327 },
    { category: 3, src: '/images/gallery6.jpg', SKU: 328 },
    { category: 4, src: '/images/gallery7.jpg', SKU: 329 },
    { category: 2, src: '/images/gallery8.jpg', SKU: 330 },
    { category: 2, src: '/images/gallery9.jpg', SKU: 331 },
    { category: 2, src: '/images/gallery10.jpg', SKU: 332 },
    { category: 2, src: '/images/gallery11.jpg', SKU: 333 },
    { category: 1, src: '/images/gallery12.jpg', SKU: 334 },
    { category: 1, src: '/images/gallery13.jpg', SKU: 335 },
    { category: 1, src: '/images/gallery14.jpg', SKU: 336 },
    { category: 3, src: '/images/gallery15.jpg', SKU: 337 },
    { category: 2, src: '/images/gallery16.png', SKU: 338 },
    { category: 1, src: '/images/gallery17.png', SKU: 339 },
    { category: 3, src: '/images/gallery18.jpg', SKU: 340 },
    { category: 4, src: '/images/gallery19.png', SKU: 341 },
    { category: 2, src: '/images/gallery20.png', SKU: 342 },
    { category: 4, src: '/images/gallery21.png', SKU: 343 },
    { category: 2, src: '/images/gallery22.png', SKU: 344 },
    { category: 1, src: '/images/gallery23.jpg', SKU: 345 },
    { category: 2, src: '/images/gallery24.jpg', SKU: 346 },
    { category: 2, src: '/images/gallery25.jpg', SKU: 347 },
    { category: 3, src: '/images/gallery26.jpg', SKU: 348 },
    { category: 2, src: '/images/gallery27.jpg', SKU: 349 },
];

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