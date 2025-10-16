import React, { useState, useEffect } from 'react';
import './firstSection.css';
import { TypingText } from './typingText';
// import LoadingLogo from './loadingLogo';

export default function FirstSection() {
    // const [showWelcome, setShowWelcome] = useState(true);
    // const [showFirstText, setShowFirstText] = useState(true);
    const [showSecondText, setShowSecondText] = useState(false);
    // const [opacityLogo, setOpacityLogo] = useState(false);

    useEffect(() => {
        // const textTimer = setTimeout(() => {
        //     setShowFirstText(true);
        //     setOpacityLogo(true);
        // }, 1);

        const logoTimer = setTimeout(() => {
            // setShowWelcome(false);
            setShowSecondText(true);
        }, 1300);

        return () => {
            // clearTimeout(textTimer);
            clearTimeout(logoTimer);
        };
    }, []);

    return (
        <div className="welcome-container">
            <div className="welcome-text-div">
                <TypingText text={"גמ\"ח כלים לבר"} />
                {showSecondText && <TypingText text={"עוזרים לכם להפוך כל אירוע למושלם ובלתי נשכח."} />}
            </div>
            {/* {showWelcome && (
                <div className={`welcome-overlay ${opacityLogo ? 'fade-out' : ''}`}>
                    <LoadingLogo />
                </div>
            )} */}

            <img
                src="/images/gallery6.jpg"
                alt="Welcome Background"
                className="welcome-image"
            />
        </div>
    );
}
