import React, { useState, useEffect } from 'react';
import './firstSection.css';
import { RxQuote } from "react-icons/rx";
import { TypingText } from './typingText';

export default function FirstSection() {
    const [showSecondText, setShowSecondText] = useState(false);

    useEffect(() => {

        const logoTimer = setTimeout(() => {
            setShowSecondText(true);
        }, 1300);

        return () => {
            clearTimeout(logoTimer);
        };
    }, []);

    return (
        <div className="welcome-container">
            <div className='welcome-body'>
                <div className='welcome-text'>
                    <img src='/images/logo5.png'></img>
                    <TypingText text={"גמ\"ח כלים לבר"} fontSize={40} />
                    {showSecondText && <TypingText text={"עוזרים לכם להפוך כל אירוע למושלם ובלתי נשכח."} />}
                </div>
                <div className='welcome_container_content'>
                    <div className="welcome-text-div">
                        גמ"ח הכלים לבר נולד מתוך רצון לשמח ולהקל בשמחות שלכם.<br />
                        אני מאמינה ששמחה אמיתית מתחילה דווקא בפרטים הקטנים, ושכשיש סדר ורוגע — אפשר ליהנות באמת מהאירוע.<br />
                        הכלים שאני משאילה מאפשרים לכם להתמקד בשמחה עצמה, בלי דאגות מיותרות סביב ההתארגנות.<br />
                        חשוב לי שכל השאלה תיעשה בצורה נעימה, מסודרת ונקייה, עם אחריות ותשומת לב לכל פרט.<br />
                        אני משתדלת להעניק יחס אישי, סבלני ומכבד לכל מי שפונה אליי, וללוות אתכם לאורך הדרך — משלב התכנון ועד אחרי האירוע.<br />
                        המטרה שלי היא להיות חלק קטן מהשמחות שלכם, ולעזור ליצור רגעים טובים שנזכרים בהם לאורך זמן.<br />
                        <div>שנפגש תמיד בשמחות!</div>
                        <img src='/images/logo5.png' />
                    </div>
                    <div className='welcome-image-div'>
                        <img
                            src="/images/gallery6.jpg"
                            alt="Welcome Background"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
