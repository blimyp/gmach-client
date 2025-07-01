import React, { useEffect, useState } from 'react';
import './animationFromRight.css';

export default function SlideInFromRight({ children, fromRight = true, delay = 500 }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    const directionClass = fromRight ? 'from-right' : 'from-left';

    return (
        <div
            className={`slide-in-container ${directionClass} ${visible ? 'slide-in' : ''}`}
            style={{ transitionDuration: `500ms` }}
        >
            {children}
        </div>
    );
};

// import React, { useEffect, useRef, useState } from 'react';
// import './animationFromRight.css';

// const SlideInFromRight = ({ children, fromRight = true, delay = 0 }) => {
//     const [visible, setVisible] = useState(false);
//     const ref = useRef();

//     useEffect(() => {
//         const element = ref.current;

//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setVisible(entry.isIntersecting);
//             },
//             { threshold: 0.1 }
//         );

//         if (element) observer.observe(element);

//         return () => {
//             if (element) observer.unobserve(element);
//         };
//     }, []);

//     const directionClass = fromRight ? 'from-right' : 'from-left';

//     return (
//         <div
//             ref={ref}
//             className={`slide-in-container ${directionClass} ${visible ? 'slide-in' : ''}`}
//             style={{
//                 transitionDuration: `500ms`,
//                 transitionDelay: `${delay}ms`,
//             }}
//         >
//             {children}
//         </div>
//     );
// };

// export default SlideInFromRight;

