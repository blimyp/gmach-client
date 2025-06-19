import React, { useEffect, useRef, useState } from 'react';
import './threeLevels.css';

export default function LoanSteps() {
    const steps = [
        {
            icon: '/images/mail.png',
            title: 'מזמינים באתר',
            description: 'ממלאים את טופס ההשלמה כאן באתר עם כל הפרטים הרלוונטיים',
        },
        {
            icon: '/images/phone.png',
            title: 'ממתינים לטלפון',
            description: 'יש לחכות לטלפון שהכלים נשמרו לכם לתאריך שבחרתם (זה יכול לקחת כמה ימים)',
        },
        {
            icon: '/images/car.png',
            title: 'באים לקחת',
            description: 'מגיעים ביום של האירוע בשעות בוקר - צהריים לקחת את הכלים עם רכב או עם עגלה גדולה',
        },
    ];

    const containerRef = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="loan-steps-container" ref={containerRef}>
            {steps.map((step, index) => (
                <div
                    className={`step ${visible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${index * 0.3}s` }}
                    key={index}
                >
                    <div className='circle-icon'>
                        <img src={step.icon} alt={step.title} className="step-icon" />
                    </div>
                    <h4 className="step-title">{step.title}</h4>
                    <p className="step-description">{step.description}</p>
                    {index < steps.length - 1 && <div className="arrow">←</div>}
                </div>
            ))}
        </div>
    );
}
