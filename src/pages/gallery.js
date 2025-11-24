import React, { useState, useEffect, useRef } from 'react';
import { getGalleryImagesRequest } from '../api';
import Title from '../components/common/title';
import './gallery.css';
import GalleryCard from './galleryCard';

export const getImages = async () => {
    try {
        const response = await getGalleryImagesRequest();
        return response.data;
    } catch (err) {
        console.error('שגיאה בקבלת תמונות:', err);
        throw err.response?.data || { message: 'שגיאה כללית בשליפת התמונות' };
    }
};

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [images, setImages] = useState([]);

    const imageRefs = useRef([]);

    useEffect(() => {
        imageRefs.current = imageRefs.current.slice(0, images.length);
    }, [images.length]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const data = await getImages();
                setImages(data);
            } catch (error) {
                console.error('שגיאה בטעינת התמונות:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="gallery-page">
            <Title text={"גלריית אירועים"} />

            <div className="gallery-grid">
                {images.map((item, index) => (
                    <GalleryCard
                        item={item}
                        index={index}
                        imageRefs={imageRefs}
                        onImageClick={() => setSelectedImage(item.src)}
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
