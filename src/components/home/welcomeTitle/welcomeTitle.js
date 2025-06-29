import React from 'react';
import TextAnimation from '../../common/textAnimation/textAnimation';
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
                <TextAnimation>
                    <h1>ברוכים הבאים לגמ"ח</h1>
                    <p>יחד נעזור להפוך כל אירוע למיוחד</p>
                </TextAnimation>
                {/* <CustomButton onClick={scrollToBottom} text={'מהרו לתפוס תאריך'} /> */}
            </div>
        </div>
    );
}