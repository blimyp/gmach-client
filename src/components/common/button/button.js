import React, { useState } from 'react';
import Spinner from '../spinner/spinner';
import './button.css'

export default function CustomButton({ onClick, text, darkButton = false, type }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async (e) => {
        setIsLoading(true);
        await onClick();
        setIsLoading(false);
    };

    return (
        <button onClick={handleClick} type={type} className={darkButton ? 'dark-button' : 'light-button'} >
            {text}
            {isLoading ? (<Spinner />) : ('')}
        </button>
    );
}