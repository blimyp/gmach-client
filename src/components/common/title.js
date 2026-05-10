import React from "react";

export default function Title({ text }) {
    return (
        <div style={{
            margin: "30px",
            display: "inline-block",
            width: "fit-content"
        }}>
            <h2 style={{ margin: "0" }} className="gradient-text">{text}</h2>
            <img style={{ width: "300px", height: "60px" }} src="/images/swirls.png" />
        </div>
    );
}
