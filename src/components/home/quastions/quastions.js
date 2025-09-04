import React, { useState } from "react";
import "./quastions.css";
import PulseBox from "../../common/pulseBox";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

const faq = [
    {
        question: "האם הגמח הוא בתשלום?",
        answer: "הגמח הוא בתשלום של 50 ש\"ח לכל הכלים ביחד."
    },
    {
        question: "מתי באים לקחת את הכלים?",
        answer: "יום לפני האירוע או באותו יום, תלוי ממתי הכלים פנויים."
    },
    {
        question: "איך סוחבים את הכלים?",
        answer: "צריך לקחת את הכלים ברכב או בעגלה גדולה"
    },
    {
        question: "מה קורה אם כלי נשבר או נאבד?",
        answer: "במקרה כזה נבקש תשלום סמלי לכיסוי עלות הכלי. עדיף לדווח מראש כדי שנדע להיערך."
    },
    {
        question: "איך מחזירים את הכלים?",
        answer: "יש להחזירם כשהם נקיים יום אחרי האירוע בבוקר בתאום מראש."
    }
];

export default function Quastions() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="quastions-body">
            <PulseBox><p className="gradient-text">כל התשובות מחכות לך כאן!</p></PulseBox>
            <div className="faq-list">
                {faq.map((item, index) => (
                    <div className="faq-item" key={index}>
                        <button className="faq-question" onClick={() => toggle(index)}>
                            <span>{item.question}</span>
                            {openIndex === index ? (
                                <FiMinusCircle size={20} />
                            ) : (
                                <FiPlusCircle size={20} />
                            )}
                        </button>
                        <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
