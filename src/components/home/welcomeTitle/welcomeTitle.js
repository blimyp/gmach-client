import React from 'react';
import SlideInFromRight from '../../common/animationFromRight/animationFromRight';
import './welcomeTitle.css';

export default function WelcomeTitle() {
    return (
        <div className="welcome-container">
            <img
                src="/images/background.JPG"
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
                {/* <CustomButton onClick={scrollToBottom} text={'מהרו לתפוס תאריך'} /> */}
            </div>
        </div>
    );
}