import React from "react";
import "./axisOrderButton.css";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../common/button/button";
import routes from "../../../constants/routes";

export default function AxisOrderButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(routes.axisOrder);
    };

    return (
        <div className="banner-bar">
            <div className="banner-content">
                <h2 className="banner-title">למידע מלא על ההזמנה שלך</h2>
                <CustomButton onClick={handleClick} text={'לחץ כאן'} darkButton={true} />
            </div>
        </div>
    );
}
