// import React from 'react';
// import './thankCard.css';

// const thanksTexts = [
//     {
//         name: "תמי",
//         text: "הגמח הזה פשוט מדהים,\n העלה לנו את הרמה של האירוע,\nכולם התפעלו ממש!\nתודה ענקית!!"
//     },
//     {
//         name: "משפחת גרינברג",
//         text: "אנחנו מאד מעריכים את העבודה שלכם,\nאנחנו מאד מרוצים,\nהבר שלנו יצא מהמם!"
//     },
//     {
//         name: "חיה",
//         text: "לא האמנו כמה זה ישדרג לנו את האירוע,\nהכול היה מסודר, נקי ומרשים!\nתודה רבה מכל הלב!"
//     }
// ];

// export default function ThankCard({ text, title }) {
//     return (
//         <div className="thank-cards-row">
//             {thanksTexts.map((thankData, index) => (
//                 <div className="elegant-card" key={`thank card ${index}`}>
//                     <h2 className="elegant-card-title">{thankData.name}</h2>
//                     <pre className='thank_text'>{thankData.text}</pre>
//                 </div>
//             ))}
//         </div>
//     );
// }
import TextAnimation from "../../common/textAnimation/textAnimation";
import './thankCard.css';

export default function ThankCard({ text, title }) {
    return (
        <div className="info-body">
            <div className="info-section">
                <div className="info-image" >
                    {/* <BiSolidQuoteAltRight size={200} /> */}
                    <img src="/images/info_image.jpg" alt="info" className="info-bar-image" />
                </div>
                <div className="info-text-div">
                    <TextAnimation>
                        <p>
                            "רציתי להודות לכם מכל הלב על העזרה המדהימה שנתתם לי בארגון האירוע שלנו.
                            הכלים שהשאילתם לנו היו נקיים, מסודרים, ובמצב מעולה, וזה חסך לנו המון הוצאות וטרחה.
                            בזכותכם הצלחנו להפיק אירוע מכובד ושמח, וכל האורחים החמיאו על העיצוב והסידור.

                            תבורכו על כל מה שאתם עושים למען הציבור!
                            יישר כוח גדול, ושה׳ ייתן לכם שפע ברכה והצלחה בכל מעשה ידיכם.

                            בתודה והערכה,
                            משפחת כהן"
                        </p>
                    </TextAnimation>
                </div>
            </div>
        </div>
    );
}

