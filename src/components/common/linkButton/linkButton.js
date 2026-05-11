import React from 'react';
import './linkButton.css'

export default function LinkButton({  onClick, text, color, fontSize }) {
    return (
        <button  onClick={onClick} className={'button gold-text-gradient'} style={{ color: color, fontSize: fontSize }}>
            {text}
        </button>
    );
}