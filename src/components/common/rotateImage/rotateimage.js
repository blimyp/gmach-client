import React, { useRef, useEffect, useState } from 'react';
import './rotateImage.css';

export default function RotateImage({ src, alt }) {
    const imgRef = useRef();
    const [rotation, setRotation] = useState(0);
    const [inView, setInView] = useState(false);
    const lastScrollY = useRef(window.scrollY);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) observer.observe(imgRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {

        const handleScroll = () => {
            console.log('in view?', inView);

            if (!inView) return;

            const currentScrollY = window.scrollY;
            const direction = currentScrollY > lastScrollY.current ? 1 : -1;
            setRotation(prev => prev + direction * 6);
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [inView]);

    return (
        <img
            ref={imgRef}
            src={src}
            alt={alt}
            className="scroll-rotate-image"
            style={{ transform: `rotate(${rotation}deg)`, width: '100%', height: '100%' }}
        />
    );
}
