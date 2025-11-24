import React, { useState } from "react";
import "./quastions.css";
import PulseBox from "../../common/pulseBox";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { PiHandCoins } from "react-icons/pi";
import { IoCartOutline } from "react-icons/io5";
import { BsCalendarDate } from "react-icons/bs";
import Title from "../../common/title";




const faq = [
    {
        question: "האם הגמח הוא בתשלום?",
        answer: "הגמח הוא בתשלום של 50 ש\"ח לכל הכלים ביחד.",
        icon: < PiHandCoins size={25} color={'var(--blue)'} />,
    },
    {
        question: "מתי באים לקחת את הכלים?",
        answer: "יום לפני האירוע או באותו יום, תלוי ממתי הכלים פנויים.",
        icon: < BsCalendarDate size={22} color={'var(--blue)'} />,
    },
    {
        question: "איך סוחבים את הכלים?",
        answer: "צריך לקחת את הכלים ברכב או בעגלה גדולה",
        icon: < IoCartOutline size={25} color={'var(--blue)'} />,
    },
    {
        question: "מה קורה אם כלי נשבר או נאבד?",
        answer: "במקרה כזה נבקש תשלום סמלי לכיסוי עלות הכלי. עדיף לדווח מראש כדי שנדע להיערך.",
        icon: <div style={{ display: 'flex', justifyContent: 'center' }}><img alt="broken" src="images/broken.png" style={{ width: '80%' }} /></div>,
    },
    {
        question: "איך מחזירים את הכלים?",
        answer: "יש להחזירם כשהם נקיים יום אחרי האירוע בבוקר בתאום מראש.",
        icon: <div style={{ display: 'flex', justifyContent: 'center' }}><img alt="clean" src="images/clean.png" style={{ width: '100%' }} /></div>,
    }
];

export default function Quastions() {

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="quastions-body">
            {/* <PulseBox><p className="gradient-text">כל התשובות מחכות לך כאן!</p></PulseBox> */}
            <Title text={"כל התשובות מחכות לך כאן!"} />
            <div className="faq-list">
                {faq.map((item, index) => (
                    <div className="faq-item" key={index}>
                        <button className="faq-question" onClick={() => toggle(index)}>
                            <div className="faq-row">
                                <span className="questio-icon">{item.icon}</span>
                                {item.question}
                            </div>
                            {openIndex === index ? (<FiMinusCircle size={20} />) : (<FiPlusCircle size={20} />)}
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
