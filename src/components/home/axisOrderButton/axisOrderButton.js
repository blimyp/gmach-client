import React from "react";
import "./axisOrderButton.css";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../common/button/button";
import routes from "../../../constants/routes";

export default function AxisOrderButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(routes.article);
    };

    return (
        <div className="banner-bar">
            <div className="banner-content">
                <h2 className="banner-title">רוצה בר מתוקים בלי כאב ראש? למדריך המלא שלב אחרי שלב </h2>
                <CustomButton onClick={handleClick} text={'לחץ כאן'} darkButton={true} />
            </div>
        </div>
    );
}
