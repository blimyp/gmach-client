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
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
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
