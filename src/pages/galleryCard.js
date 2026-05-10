import React, { useEffect } from 'react';
import { getCategoryByValue } from '../constants/standsCategories';
import './galleryCard.css';
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

export default function GalleryCard({ item, index, imageRefs, onImageClick }) {
    const category = getCategoryByValue(item.category);
    console.log(item.category);
    console.log(category);

    useEffect(() => {
        const img = imageRefs.current[index];
        if (!img) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(img);
        return () => observer.disconnect();
    }, [index, imageRefs]);

    return (
        <div className='gallery-item'>
            <div className="gallery-image-wrapper">
                <img
                    ref={el => imageRefs.current[index] = el}
                    src={item.src}
                    alt={`gallery ${index}`}
                    className="gallery-image"
                    onClick={() => onImageClick(item.src)}
                />
            </div>

            <div className="gallery-description-container">
                <p className="gallery-description">{item.description}</p>
                <p>קטגוריה: {category?.text}</p>
                <span className='gallery-image-SKU'>מק"ט {item?.SKU}</span>
                <button className='glass-button' onClick={() => onImageClick(item.src)}>
                    <HiMagnifyingGlassPlus size={20} />
                </button>
            </div>
        </div>
    );
}
