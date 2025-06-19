import React from 'react';
import CustomButton from '../../common/button/button';
import './welcomeTitle.css';

export default function WelcomeTitle({ bottomRef }) {

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="welcome-container">
            <img
                src="/images/background.JPG"
                alt="Welcome Background"
                className="welcome-image"
            />
            <div className="welcome-text">
                <h1>ברוכים הבאים לגמ"ח</h1>
                <p>יחד נעזור להפוך כל אירוע למיוחד</p>
                <CustomButton onClick={scrollToBottom} text={'מהרו לתפוס תאריך'} />
            </div>
        </div>
    );
}