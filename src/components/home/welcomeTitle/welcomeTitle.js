import React, { useEffect, useState } from 'react';
import SlideInFromRight from '../../common/animationFromRight/animationFromRight';
import './welcomeTitle.css';

const images = [
    '/images/background.JPG',
    '/images/image4.png',
    '/images/gallery6.jpg',
];

export default function WelcomeTitle() {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // כל 2 שניות

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="welcome-container">
            <img
                src={images[imageIndex]}
                alt="Welcome Background"
                className="welcome-image"
            />
            <div className="welcome-text">
                <SlideInFromRight>
                    <h1>גמ"ח כלים לבר</h1>
                </SlideInFromRight>
                <SlideInFromRight fromRight={false} delay={1000}>
                    <p>יחד נעזור להפוך כל אירוע למיוחד</p>
                </SlideInFromRight>
                <SlideInFromRight delay={1500}>
                    <p>עם מגוון עשיר של ציוד – כדי שלא תצטרכו להתפשר על כלום</p>
                </SlideInFromRight>
            </div>
        </div>
    );
}
