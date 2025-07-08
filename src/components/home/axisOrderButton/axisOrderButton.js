import React, { useRef, useEffect, useState } from "react";
import "./axisOrderButton.css";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../common/button/button";
import routes from "../../../constants/routes";

export default function AxisOrderButton() {
    const navigate = useNavigate();
    const buttonRef = useRef();
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        navigate(routes.article);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                    // איפוס האנימציה כדי לאפשר חזרה עליה
                    setTimeout(() => setAnimate(false), 1000); // זמן קצת יותר ארוך מאורך האנימציה
                }
            },
            { threshold: 0.3 }
        );

        if (buttonRef.current) {
            observer.observe(buttonRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="banner-bar">
            <div className="banner-content">
                <h2 className="banner-title">
                    רוצה בר מתוקים בלי כאב ראש? למדריך המלא שלב אחרי שלב
                </h2>
                <div
                    ref={buttonRef}
                    className={animate ? "bounce-animation" : ""}
                >
                    <CustomButton onClick={handleClick} text={"לחץ כאן"} darkButton={true} />
                </div>
            </div>
        </div>
    );
}
