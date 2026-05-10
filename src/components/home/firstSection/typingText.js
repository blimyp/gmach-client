import React from "react";
import "./typingText.css";

export function TypingText({ text, fontSize }) {
  return (
    <div className="typing-container">
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{ animationDelay: `${index * 0.05}s`, fontSize: fontSize }}
          className="fade-in-char"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
