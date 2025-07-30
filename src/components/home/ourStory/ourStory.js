import RotateImage from '../../common/rotateImage/rotateimage';
import TextAnimation from '../../common/textAnimation/textAnimation';
import './ourStory.css'

export default function OurStory() {
    return (
        <div className='our-story-body'>
            <div className="our_story_container">
                <div className='icon_container'>
                    <RotateImage src="/favicon.png" alt="תמונה שמסתובבת בגלילה" />
                </div>
                <TextAnimation>
                    <h2 className="text">הגמ"ח לכלי בר מתוקים – הסיפור שלנו</h2>
                    <p className="text">
                        גמ"ח הכלים לאירועים הוקם מתוך שליחות לעזור למשפחות לשמח בשמחותיהן – בלי לשבור קופת חיסכון.
                    </p>
                    <p className="text">
                        בכל אירוע – חתונה, בר מצווה, שבת חתן או מסיבת יום הולדת – נדרשים כלים יפים, עמדות הגשה, כלי זכוכית,
                        מגשים ועוד, שמעניקים לאירוע מראה מכובד ואלגנטי. רכישת כלים כאלו, אפילו לאירוע בודד, עלולה להגיע להוצאות של מאות ואף אלפי שקלים.
                    </p>
                    <p className="text">
                        הגמ"ח שלנו נולד כדי לפתור את זה.
                    </p>
                    <p className="text">
                        אנחנו מציעים השאלה במחיר סימלי של כלים מעוצבים ומוכנים לשימוש – באיכות גבוהה ועם חיוך גדול.
                    </p>
                    <p className="text">
                        משפחות רבות כבר נהנו מאירוע מושלם בלי לחץ כלכלי מיותר.
                    </p>
                    <p className="text">
                        אנחנו כאן בשבילכם – כדי שכל אירוע יהפוך לחוויה בלתי נשכחת :)
                    </p>
                </TextAnimation>
            </div>
        </div>
    );
}
