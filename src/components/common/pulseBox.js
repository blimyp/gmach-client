import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function PulseBox({ children }) {
    const ref = useRef();
    const [pulseKey, setPulseKey] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setPulseKey(prev => prev + 1);
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
                width: "100%",
            }}
        >
            <motion.div
                key={pulseKey}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1, 1.1, 1] }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                }}
                style={{
                    display: "inline-block",
                    transformOrigin: "center",
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
