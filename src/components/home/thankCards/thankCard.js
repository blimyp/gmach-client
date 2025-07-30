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
            <div class="info-section">
                <div class="info-image" >
                    {/* <BiSolidQuoteAltRight size={200} /> */}
                    <img src="/images/info_image.jpg" alt="info" className="info-bar-image" />
                </div>
                <div class="info-text">
                    <TextAnimation>
                        <p>
                            הגמ"ח שלנו אינו רק מקום לקבל בו שירות – הוא בית של נתינה, חמלה ואכפתיות. לאורך השנים, פועל הגמ"ח מתוך תחושת שליחות עמוקה לעזור לכל אדם באשר הוא, מבלי הבדל, ובאהבה גדולה.
                            בימים של קושי ובשעות של מצוקה, עומד הגמ"ח כחומת מגן של תמיכה, נדיבות ואור גדול. אין מדובר רק בחפצים או בציוד – אלא במגע אנושי, בגישה חמה וביחס שמעניק תקווה. כל אדם שפונה אלינו זוכה להקשבה, לכבוד, ולמענה שמותאם לצרכיו מתוך רצון אמיתי להקל ולהועיל.
                            מאחורי הקלעים פועלים אנשים מופלאים – מתנדבים עם לב רחב, שנותנים מזמנם, מכשרונם וממרצם למען טובת הכלל. הם מגיעים מתוך אהבה אמיתית לעשיית חסד, ומביאים עמם רוח של ערבות הדדית ומסירות שאין להן גבול.
                            בין אם מדובר בציוד רפואי, כלי עבודה, בגדים, ריהוט או כל שירות אחר – הכל נעשה בצורה מסודרת, נקייה, מכובדת וראויה. הגמ"ח שלנו שואף לשמור על כבוד האדם, גם ברגעים הקשים ביותר, ולהיות עבורו מקור לעידוד, חיזוק ותקווה.
                            בזכות התמיכה מהקהילה, בזכות האנשים המופלאים שנותנים כתף, ובזכות כל מי שפותח את לבו וידו – ממשיך הגמ"ח להתרחב, לגדול, ולגעת באלפי לבבות.
                            זה לא רק גמ"ח. זו דרך חיים.
                        </p>
                    </TextAnimation>
                </div>
            </div>
        </div>
    );
}

