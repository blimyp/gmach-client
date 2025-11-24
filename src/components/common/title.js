import React from "react";
import YellowLine from "./yellowLine";

export default function Title({ text }) {
    return (
        <div style={{
            margin: "30px",
            display: "inline-block",
            width: "fit-content"
        }}>
            <h2 style={{ margin: "0" }} className="gradient-text">{text}</h2>
            <YellowLine />
        </div>
    );
}
