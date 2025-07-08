import React, { useRef, useEffect, useState } from 'react';
import './textAnimation.css';

export default function TextAnimation({ children }) {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false); // מחוץ לפריים? החזר את האנימציה למצב התחלתי
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`fading-text ${isVisible ? 'visible' : ''}`}
        >
            {children}
        </div>
    );
}

