import React from 'react';
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
                <button onClick={scrollToBottom} className={'scroll-button'}/* style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}*/>
                    מהרו לתפוס תאריך
                </button>
            </div>
        </div>
    );
}