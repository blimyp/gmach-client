import React, { useState, useEffect, useRef } from 'react';
import './gallery.css';
import { IoMdHeartEmpty } from "react-icons/io";


const images = [
    { src: '/images/image1.png', description: 'בר שחור עץ' },
    { src: '/images/image2.png', description: 'נדנדה עץ' },
    { src: '/images/image4.png', description: 'בר שחור עץ' },
    { src: '/images/background.jpg', description: 'בר זהב' },
    { src: '/images/gallery1.jpg', description: 'נדנדה עץ' },
    { src: '/images/gallery2.jpg', description: 'כלי זהב לבר' },
    { src: '/images/gallery3.jpg', description: 'בר זהב' },
    { src: '/images/gallery4.jpg', description: 'מרכזי שולחן זהב' },
    { src: '/images/gallery5.jpg', description: 'בר שחור עץ' },
    { src: '/images/gallery6.jpg', description: 'בר זהב + זכוכיות' },
    { src: '/images/gallery7.jpg', description: 'נדנדה עץ' },
    { src: '/images/gallery8.jpg', description: 'בר שחור עץ' },
    { src: '/images/gallery9.jpg', description: 'כלים שחור עץ לבר' },
    { src: '/images/gallery10.jpg', description: 'כלים שחור עץ לבר' },
    { src: '/images/gallery11.jpg', description: 'כלים שחור עץ לבר' },
    { src: '/images/gallery12.jpg', description: 'בר זהב' },
    { src: '/images/gallery13.jpg', description: 'כלים זהב לבר או למרכז שולחן' },
    { src: '/images/gallery14.jpg', description: 'כלים זהב לבר' },
    { src: '/images/gallery15.jpg', description: 'כלי זהב + זכוכית לבר או למרכז שולחן' },
    { src: '/images/gallery16.png', description: 'בר שחור עץ' },
    { src: '/images/gallery17.png', description: 'בר זהב' },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const imageRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
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
            <h2 className="gradient-text gallery-title">גלריית האירועים שלנו</h2>

            <div className="gallery-grid">
                {images.map((item, index) => (
                    <div className='gallery-item' key={index}>
                        <div className="gallery-image-wrapper">
                            <img
                                ref={el => imageRefs.current[index] = el}
                                src={item.src}
                                alt={`gallery ${index}`}
                                className="gallery-image"
                                onClick={() => setSelectedImage(item.src)}
                            />
                        </div>
                        <div className="gallery-description-container">
                            <p className="gallery-description">{item.description}</p>
                            <button className="gallery-button">
                                <IoMdHeartEmpty size={30} />
                                <span className="tooltip-text">סמן כמועדף</span>
                            </button>
                        </div>
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
