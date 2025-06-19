import React from 'react';
import './events.css';

export default function ImageTextSplit({ text, title, image, reverse }) {
    return (<>
        <div className="image-text-split">

            <div className="split-content">
                <h2 className="split-title">היוקרה שבפרטים הקטנים</h2>
                <p className="split-description">האירוע שלך מתחיל באווירה – וכל כלי מוסיף לה.
                    עם סטים מהודרים, כוסות זכוכית בעיצוב אלגנטי ומגשים נוצצים –
                    הבר שלך יהפוך לשיחה של הערב.</p>
            </div>
            <div className="split-image">
                <img src='/images/image1.png' alt="icon" className="image" />
            </div>
        </div>

        <div className="image-text-split">
            <div className="split-image">
                <img src='/images/image2.png' alt="icon" className="image" />
            </div>
            <div className="split-content">
                <h2 className="split-title">כלים שעושים את הרושם</h2>
                <p className="split-description">גם באירוע ביתי – מגיע לך סטייל של אולם יוקרה.
                    אנחנו מציעים כלי הגשה בעיצוב קלאסי ונקי,
                    שיהפכו כל עוגה פשוטה למלכה של שולחן.</p>
            </div>
        </div></>

    );
}
