import React from "react";
import "./article.css";
import { IoColorWand } from "react-icons/io5";
import { RiCake3Line } from "react-icons/ri";
import { MdOutlineVideoStable } from "react-icons/md";
import { BsBox } from "react-icons/bs";
import { LuCakeSlice } from "react-icons/lu";
import { GiCloverSpiked } from "react-icons/gi";
import { SlLike } from "react-icons/sl";
import { SlBubble } from "react-icons/sl";

export default function Article() {
    return (
        <div className="article-body">
            <div className="article-container">
                <h1>פשוט מאוד לעצב בר – שלבים לעיצוב בר מתוקים מושלם</h1>

                <p>
                    בר מתוקים הוא אחד מהאלמנטים שהכי תופסים את העין באירוע. זה לא חייב להיות יקר,
                    מסובך או מקצועי – עם כמה שלבים פשוטים וציוד נכון מהגמ"ח, את יכולה לעצב בר יפהפה
                    ומרשים בעצמך.
                </p>

                <div className="article-step">
                    <div className="step-content">
                        <h2>בחרי צבעים או נושא</h2>
                        <p className="article-p">
                            הצעד הראשון הוא לבחור <strong>סגנון עיצוב</strong> – צבע מרכזי או נושא (כמו "זהב ולבן",
                            "פרחים", "כחול לתינוק", "שבת חתן"). זה יעזור לך לבחור כלים מתאימים ולקבוע אווירה.
                        </p>
                    </div>
                    <div className="timeline-indicator"><IoColorWand size={25} color={'var(--dark-red)'} /></div>
                </div>

                <div className="article-step">
                    <div className="step-content">
                        <h2>בחרי שולחן או פינה נוחה</h2>
                        <p className="article-p">
                            בחרי שולחן פנוי (רצוי צמוד לקיר) או קונסולה יפה, שיכולה לשמש כבסיס לבר. שימי לב
                            שיהיה נגיש אבל לא יפריע למעבר.
                        </p>
                    </div>
                    <div className="timeline-indicator" ><RiCake3Line size={25} color={'var(--dark-red)'} /></div>
                </div>

                <div className="article-step">
                    <div className="step-content">
                        <h2>פרסי מפה יפה</h2>
                        <p className="article-p">
                            מפה פשוטה בגוון אחיד (לבן, שמנת, או לפי הצבעים שבחרת) יוצרת בסיס נקי. אפשר להוסיף
                            ראנר או קישוט עדין במרכז.
                        </p>
                    </div>
                    <div className="timeline-indicator"><MdOutlineVideoStable size={30} color={'var(--dark-red)'} /></div>
                </div>

                <div className="article-step">
                    <div className="step-content">
                        <h2>הוסיפי גבהים</h2>
                        <p className="article-p">
                            סוד חשוב בעיצוב הוא לשלב <strong>כלים בגבהים שונים</strong>: מעמדים לעוגות, קופסאות שקופות,
                            מגשים מדורגים. כך נוצר מראה "עשיר" ולא שטוח.
                        </p>
                    </div>
                    <div className="timeline-indicator"><BsBox size={30} color={'var(--dark-red)'} /></div>
                </div>

                <div className="article-step">
                    <div className="step-content">
                        <h2>סדרי עוגות בצורה חכמה</h2>
                        <p className="article-p">
                            - באמצע: עוגה מרכזית או קישוט גדול<br />
                            - בצדדים: סוכריות, עוגיות, פירות חתוכים או מאפים<br />
                            - מקפידים על סימטריה אבל לא נוקשות
                        </p>
                    </div>
                    <div className="timeline-indicator"><LuCakeSlice size={30} color={'var(--dark-red)'} /></div>
                </div>

                <div className="article-step">
                    <div className="step-content">
                        <h2>הוסיפי טאץ' אישי</h2>
                        <p className="article-p">
                            שלט עם שם החוגג/ת, פרחים קטנים או נרות, כלים בצורת לב/כוכב.
                        </p>
                    </div>
                    <div className="timeline-indicator" ><GiCloverSpiked size={25} color={'var(--dark-red)'} /></div>
                </div>

                <div className="article-step">
                    <div className="step-content">
                        <h2>בדקי הכל מראש</h2>
                        <p className="article-p">
                            עשו "חזרה גנרלית" בבית: פרסי את הכל, צלמי, ותראי מה חסר או עמוס. אפשר לבקש גם
                            המלצה מהגמ"ח!
                        </p>
                    </div>
                    <div className="timeline-indicator" ><SlLike size={25} color={'var(--dark-red)'} /></div>
                </div>

                <div className="article-step">
                    <div className="step-content">
                        <h3>לסיכום:</h3>
                        <p className="article-p">
                            לא צריך תקציב גבוה או ניסיון בעיצוב – עם קצת תכנון וגישה לכלים מתאימים –
                            את יכולה ליצור בר מתוקים שכולם יצלמו!<br />
                            הציוד שזמין בגמ"ח שלנו יעזור לך ליצור עיצוב ברמה גבוהה – בקלות ובשמחה.
                        </p>
                    </div>
                    <div className="timeline-indicator" ><SlBubble size={25} color={'var(--dark-red)'} /></div>
                </div>
            </div>
        </div>
    );
}
