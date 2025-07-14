import React from "react";
import "./articleButton.css";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../common/button/button";
import routes from "../../../constants/routes";

export default function ArticleButton() {
    const navigate = useNavigate();
    const handleClick = () => navigate(routes.article);

    return (
        <div className="banner-bar">
            <div className="banner-content">
                <h2 className="slide-right">
                    רוצה להרים בר מתוקים מושקע ומרשים – בלי כאב ראש
                </h2>
                <h2 className="slide-left">
                    למדריך המלא שלב אחרי שלב
                </h2>
                <CustomButton onClick={handleClick} text={"לחץ כאן"} />
            </div>
        </div>
    );
}
