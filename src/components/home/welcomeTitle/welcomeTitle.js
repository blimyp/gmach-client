import React from 'react';
import SlideInFromRight from '../../common/animationFromRight/animationFromRight';
import './welcomeTitle.css';


export default function WelcomeTitle() {
    return (
        <div className="welcome-container">
            <img
                src='/images/gallery6.jpg'
                alt="Welcome Background"
                className="welcome-image"
            />
            <div className="welcome-text">
                <SlideInFromRight>
                    <h1>גמ"ח כלים לבר</h1>
                </SlideInFromRight>
                <SlideInFromRight fromRight={false} delay={1000}>
                    <p>עוזרים לכם להפוך כל אירוע למושלם ובלתי נשכח.</p>
                </SlideInFromRight>
            </div>
        </div>
    );
}
