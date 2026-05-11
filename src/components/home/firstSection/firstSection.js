import React from 'react';
import './firstSection.css';

export default function FirstSection() {
    return (
        <div className="welcome-container">
            <div className='welcome-body'>
                <div className='welcome-text'>
                    <img src='/images/logo5.png' alt='logo'></img>
                    <div className="hero-text">
                        <h1>גמ"ח כלים לבר</h1>
                        <p>עוזרים לכם להפוך כל אירוע למושלם ובלתי נשכח.</p>
                    </div>
                </div>
                <div className='welcome_container_content'>
                    <div className="welcome-text-div">
                        גמ"ח הכלים לבר נולד מתוך רצון לשמח ולהקל בשמחות שלכם.<br />
                        אני מאמינה ששמחה אמיתית מתחילה דווקא בפרטים הקטנים.<br />
                        הכלים שאני משאילה מאפשרים לכם להתמקד בשמחה עצמה, בלי דאגות מיותרות סביב ההתארגנות.<br />
                        חשוב לי שכל השאלה תיעשה בצורה נעימה, מסודרת ונקייה, עם אחריות ותשומת לב לכל פרט.<br />
                        אני משתדלת להעניק יחס אישי, סבלני ומכבד לכל מי שפונה אליי.<br />
                        המטרה שלי היא להיות חלק קטן מהשמחות שלכם, ולעזור ליצור רגעים טובים שנזכרים בהם לאורך זמן.<br />
                        <div>שנפגש תמיד בשמחות!</div>
                        <img src='/images/logo5.png' alt='logo' />
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
