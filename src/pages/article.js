import React from "react";
import "./article.css";
import { IoColorWand } from "react-icons/io5";
import { RiCake3Line } from "react-icons/ri";
import { MdOutlineVideoStable } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { LuCakeSlice } from "react-icons/lu";
import { GiCloverSpiked } from "react-icons/gi";
import { SlLike } from "react-icons/sl";
import YellowLine from "../components/common/yellowLine";

export default function Article() {

    const steps = [
        {
            title: "בחרי צבעים או נושא",
            text: `הצעד הראשון הוא לבחור סגנון עיצוב – צבע מרכזי או נושא
            (כמו "זהב ולבן", "פרחים", "כחול לתינוק", "שבת חתן").
            זה יעזור לך לבחור כלים מתאימים ולקבוע אווירה.`,
            icon: <IoColorWand size={25} color={'white'} />
        },
        {
            title: "בחרי שולחן או פינה נוחה",
            text: `בחרי שולחן פנוי (רצוי צמוד לקיר) או קונסולה יפה,
            שיכולה לשמש כבסיס לבר. שימי לב שיהיה נגיש אבל לא יפריע למעבר.`,
            icon: <RiCake3Line size={25} color={'white'} />
        },
        {
            title: "פרסי מפה יפה",
            text: `מפה פשוטה בגוון אחיד (לבן, שמנת, או לפי הצבעים שבחרת)
            יוצרת בסיס נקי. אפשר להוסיף ראנר או קישוט עדין במרכז.`,
            icon: <MdOutlineVideoStable size={30} color={'white'} />
        },
        {
            title: "הוסיפי גבהים",
            text: `סוד חשוב בעיצוב הוא לשלב כלים בגבהים שונים:
            מעמדים לעוגות, קופסאות שקופות, מגשים מדורגים.
            כך נוצר מראה "עשיר" ולא שטוח.`,
            icon: <BsBox size={30} color={'white'} />
        },
        {
            title: "סדרי עוגות בצורה חכמה",
            text: `- באמצע: עוגה מרכזית או קישוט גדול
- בצדדים: סוכריות, עוגיות, פירות חתוכים או מאפים
- מקפידים על סימטריה אבל לא נוקשות`,
            icon: <LuCakeSlice size={30} color={'white'} />
        },
        {
            title: "הוסיפי טאץ' אישי",
            text: `שלט עם שם החוגג/ת, פרחים קטנים או נרות,
            כלים בצורת כוכב.`,
            icon: <GiCloverSpiked size={25} color={'white'} />
        },
        {
            title: "בדקי הכל מראש",
            text: `עשו "חזרה גנרלית" בבית:
            פרסי את הכל, צלמי, ותראי מה חסר או עמוס.
            אפשר לבקש גם המלצה מהגמ"ח!`,
            icon: <SlLike size={25} color={'white'} />
        }
    ];

    return (
        <div className="article-body">
            <div className="article-container">

                <h1>פשוט מאוד לעצב בר – שלבים לעיצוב בר מתוקים מושלם</h1>

                <YellowLine />

                <p className="article-explanation">
                    בר מתוקים הוא אחד מהאלמנטים שהכי תופסים את העין באירוע.
                    זה לא חייב להיות יקר, מסובך או מקצועי –
                    עם כמה שלבים פשוטים וציוד נכון מהגמ"ח,
                    את יכולה לעצב בר יפהפה ומרשים בעצמך.
                </p>

                {
                    steps.map((step, index) => (
                        <div
                            key={index}
                            className={`article-step ${index % 2 === 1 ? 'even' : ''}`}
                        >

                            <div className="step-content">
                                <h2>{step.title}</h2>

                                <p className="article-p" style={{ whiteSpace: 'pre-line' }}>
                                    {step.text}
                                </p>
                            </div>

                            <div className="timeline-indicator-container">
                                <div className="timeline-indicator">
                                    {step.icon}
                                </div>
                            </div>

                        </div>
                    ))
                }

                <h2 className="total-text">לסיכום:</h2>

                <p className="total-text">
                    לא צריך תקציב גבוה או ניסיון בעיצוב –
                    עם קצת תכנון וגישה לכלים מתאימים –
                    את יכולה ליצור בר מתוקים שכולם יצלמו!
                    <br />
                    הציוד שזמין בגמ"ח שלנו יעזור לך ליצור עיצוב ברמה גבוהה –
                    בקלות ובשמחה.
                </p>

            </div>
        </div>
    );
}