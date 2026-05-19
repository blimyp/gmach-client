import { useState } from "react";
import Title from "../../common/title";
import "./thankCard.css";

const thanksTexts = [
    {
        name: "תמי",
        text: `הגמח הזה פשוט מדהים,
העלה לנו את הרמה של האירוע,
כולם התפעלו ממש!
תודה ענקית!!`
    },
    {
        name: "משפחת גרינברג",
        text: `אנחנו מאד מעריכים את העבודה שלכם,
אנחנו מאד מרוצים,
הבר שלנו יצא מהמם!`
    },
    {
        name: "חיה",
        text: `לא האמנו כמה זה ישדרג לנו את האירוע,
הכול היה מסודר, נקי ומרשים!
חייבת גם לציין לטובה את המענה לטלפון בכל שעה אפשרית,
תודה רבה מכל הלב!`
    },
    {
        name: "ציפי קליין",
        text: `אין לנו מילים להודות,
    הכול הגיע בזמן, והיה אסתטי, מסודר ומכובד,
    השירות ג"כ היה מצוין, והעצות איך לסדר את הבר עזרו לנו מאד,
    והתגובות באירוע היו מדהימות!`
    },
    {
        name: "רות",
        text: `שירות פשוט מיוחד.
    הרגשנו שיש על מי לסמוך מהרגע הראשון,
    והתוצאה יצאה הרבה מעבר למה שציפינו.`
    },
    {
        name: "משפחת מאור",
        text: `כבר בתחילת האירוע כולם ניגשו לשאול מאיפה הבר,
    הכול היה נקי, מושקע ומסודר בצורה מקצועית.
    תודה רבה על ההשקעה והיחס הנעים!`
    }
];

export default function ThankCard() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("right");

    const nextSlide = () => {
        setDirection("right");

        setCurrentIndex((prev) =>
            prev === thanksTexts.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setDirection("left");

        setCurrentIndex((prev) =>
            prev === 0 ? thanksTexts.length - 1 : prev - 1
        );
    };

    return (
        <div className="info-body">
            <Title text={"לקוחות מרוצים"} />

            <div className="info-section">
                <div className="info-image">
                    <img
                        src="/images/info_image.jpg"
                        alt="info"
                        className="info-bar-image"
                    />
                </div>

                <div className="info-text-div">
                    <div
                        key={currentIndex}
                        className={`slide-animation ${direction}`}
                    >
                        <div>
                            <p>{thanksTexts[currentIndex].text}</p>
                            <h3>{thanksTexts[currentIndex].name}</h3>
                        </div>
                    </div>
                    <div className="arrows">
                        <button onClick={prevSlide}><p className="gold-text-gradient">→</p></button>
                        <div className="dots">
                            {thanksTexts.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${currentIndex === index ? "active" : ""
                                        }`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                        <button onClick={nextSlide}><p className="gold-text-gradient">←</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
}