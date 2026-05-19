import React from "react";

export default function Title({ text }) {
    return (
        <div style={{
            margin: "30px 0",
            display: "inline-block",
            width: "fit-content",
            fontFamily: "Gan"
        }}>
            <h2 style={{ margin: "0" }} className="gradient-text">{text}</h2>
            <img style={{ width: "300px", height: "60px" }} src="/images/swirls.png" alt="swirl" />
        </div>
    );
}
