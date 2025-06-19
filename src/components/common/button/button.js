import React, { useState } from 'react';
import Spinner from '../spinner/spinner';
import './button.css'

export default function CustomButton({ onClick, text, darkButton = false }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async (e) => {
        setIsLoading(true);
        await onClick();
        setIsLoading(false);
    };

    return (
        <button onClick={handleClick} className={darkButton ? 'dark-button' : 'light-button'} >
            {text}
            {isLoading ? (<Spinner />) : ('')}
        </button>
    );
}