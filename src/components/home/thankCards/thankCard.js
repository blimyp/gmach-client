import React from 'react';
import './thankCard.css';

const thanksTexts = [
    {
        name: "שרה",
        text: "הגמח הזה פשוט מדהים,\n העלה לנו את הרמה של האירוע,\nכולם התפעלו ממש!\nתודה ענקית!!"
    },
    {
        name: "משפחת חנון",
        text: "אנחנו מאד מעריכים את העבודה שלכם,\nאנחנו מאד מרוצים,\nהבר שלנו יצא מהמם!"
    },
    {
        name: "גולדי",
        text: "לא האמנו כמה זה ישדרג לנו את האירוע,\nהכול היה מסודר, נקי ומרשים!\nתודה רבה מכל הלב!"
    }
];

export default function ThankCard({ text, title }) {
    return (
        <div className="thank-cards-row">
            {thanksTexts.map((thankData, index) => (
                <div className="elegant-card" key={`thank card ${index}`}>
                    <h2 className="elegant-card-title">{thankData.name}</h2>
                    <pre className='thank_text'>{thankData.text}</pre>
                </div>
            ))}
        </div>
    );
}