import React, { useRef, useEffect, useState } from 'react';
import './shrinkOnScrollImage.css';

export default function ShrinkOnScrollImage({ src, alt }) {
    const ref = useRef();
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

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <img
            ref={ref}
            src={src}
            alt={alt}
            className={`shrink-image ${visible ? 'visible' : ''}`}
        />
    );
}
