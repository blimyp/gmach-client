import React, { useState } from "react";
import "./circleHole.css";

export default function HoleOverlay({ children }) {
    const [pos, setPos] = useState({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });

    const [active, setActive] = useState(false);

    const handleMouseMove = (e) => {
        setPos({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };

    return (
        <div
            className="hole-body"
            onMouseMove={(e) => {
                handleMouseMove(e);
                if (!active) setActive(true);
            }}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
        >
            {children}
            <div
                className="hole-overlay"
                style={{
                    top: pos.y,
                    left: pos.x,
                }}
            />
        </div>
    );
}
