import React from "react";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import "./details.css";
import Title from "../../common/title";

const details = [
    {
        icon: <FaMapMarkerAlt />,
        text: "אלעד | בן עוזיאל 26"
    },
    {
        icon: <FaPhone />,
        text: "053-4199441",
    },
    {
        icon: <BiLogoGmail />,
        text: "bar0534199441@gmail.com",
    },
    {
        icon: <FaClock />,
        text: "23:00–18:00",
    },
];

export default function Details() {
    return (
        <div className="details-wrapper">
            {/* צד ימין - פרטי ההתקשרות */}
            <div className="details-body">
                <Title text={"פרטי התקשרות:"} />
                <div className="details-container">
                    {details.map((item, index) => (
                        <div className="detail-item" key={index}>
                            <span className="detail-icon">{item.icon}</span>
                            <span className="detail-text">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* צד שמאל - מפה */}
            <div className="map-container">
                <iframe
                    title="google-map"
                    src="https://www.google.com/maps?q=אלעד,בן%20עוזיאל%2026&output=embed"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}
