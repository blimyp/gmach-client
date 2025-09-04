import React from 'react';
import TextAnimation from '../../common/textAnimation/textAnimation';
import YellowLine from '../../common/yellowLine';
import './events.css';

export default function ImageTextSplit() {
    return (
        <div className='events-background-div'>
            <div className='events-body'>
                <div className="image-text-split">
                    <div className="split-content right">
                        <TextAnimation>
                            <h2 className="split-title gradient-text">היוקרה שבפרטים הקטנים</h2>
                            <YellowLine />
                            <p className="split-description">
                                האירוע שלך מתחיל באווירה – וכל כלי מוסיף לה.
                                עם סטים מהודרים, כוסות זכוכית בעיצוב אלגנטי ומגשים נוצצים –
                                הבר שלך יהפוך לשיחה של הערב.
                            </p>
                        </TextAnimation>
                    </div>
                    <div className="split-image">
                        <img src="/images/image1.png" alt="icon" className="image" />
                    </div>
                </div>

                <div className="image-text-split">
                    <div className="split-image">
                        <img src="/images/image2.png" alt="icon" className="image" />
                    </div>
                    <div className="split-content left">
                        <TextAnimation>
                            <h2 className="split-title gradient-text">כלים שעושים את הרושם</h2>
                            <YellowLine />
                            <p className="split-description">
                                גם באירוע ביתי – מגיע לך סטייל של אולם יוקרה.
                                אנחנו מציעים כלי הגשה בעיצוב קלאסי ונקי,
                                שיהפכו כל עוגה פשוטה למלכה של שולחן.
                            </p>
                        </TextAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
}
