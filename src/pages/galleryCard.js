import React, { useState, useEffect, useContext } from 'react';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { PiCaretCircleDown } from "react-icons/pi";
import { toggleLike } from '../api';
import { getCategoryByValue } from '../constants/standsCategories';
import { AuthContext } from '../contexts/authContext';
import './galleryCard.css';

export default function GalleryCard({ item, index, imageRefs, onImageClick }) {
    const { user } = useContext(AuthContext);
    const [showInfo, setShowInfo] = useState(false);
    const [liked, setLiked] = useState(item.likedBy.includes(user._id));
    const category = getCategoryByValue(item.category);


    const handleToggleLike = async () => {
        try {
            await toggleLike(item._id, user._id, !liked);
            setLiked(prevLiked => {
                return !prevLiked;
            });
        } catch (error) {
            console.error("Error toggling like:", error);
        }
    };

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
                {/* כפתור מועדף מעל התמונה בצד שמאל עליון */}
                <button
                    className="gallery-button favorite-button"
                    onClick={handleToggleLike}
                >
                    {liked ? <IoMdHeart size={30} /> : <IoMdHeartEmpty size={30} />}
                    <span className="tooltip-text">
                        {liked ? "הסר מהמועדפים" : "סמן כמועדף"}
                    </span>
                </button>
            </div>

            <div className="gallery-description-container">
                <div className="info-button-wrapper">
                    <div className="gallery-item-info-row">
                        <p className="gallery-description">{item.description}</p>
                        {/* כפתור מידע נוסף */}
                        <button
                            className="info-button"
                            onClick={() => setShowInfo(prev => !prev)}
                        >
                            <PiCaretCircleDown size={30} />
                            <span className="tooltip-text">מידע נוסף</span>
                        </button>
                    </div>
                    {/* הטקסט של הקטגוריה עכשיו מתחת לכפתור ולתיאור */}
                    <div className={`info-text ${showInfo ? 'open' : ''}`}>
                        <p>קטגוריה: {category.text}</p>
                        <div className="extra-info">
                            <IoMdHeart size={20} style={{ marginRight: '5px', color: 'red' }} />
                            <span>{item.likedBy.length} אנשים בחרו במוצר הזה</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
