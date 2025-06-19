import React from 'react';
import './linkButton.css'

export default function LinkButton({ onClick, text }) {
    return (
        <button onClick={onClick} className={'button'} >
            {text}
        </button>
    );
}