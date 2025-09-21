import { useEffect, useState } from "react";
import CustomButton from "../common/button/button";
import "./circlePopup.css";

export default function CirclePopup({ onClose }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 5000);
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 300);
    };

    return (
        <div className={`popup-overlay ${visible ? "visible" : ""}`}>
            <div className={`popup-circle ${visible ? "visible" : ""}`}>
                <h2 className="gradient-text">ברוכים הבאים!</h2>
                <p className="gradient-text">
                    האתר שלנו נמצא כרגע בתהליך בנייה, ותוכן חדש יתווסף ממש בקרוב
                </p>
                <CustomButton onClick={handleClose} text={"הבנתי"} />
            </div>
        </div>
    );
}
