import React, { useState } from 'react';
import Spinner from '../spinner/spinner';
import './button.css'
import { FaArrowLeftLong } from "react-icons/fa6";

export default function CustomButton({ onClick, text, darkButton = false, type }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async (e) => {
        setIsLoading(true);
        await onClick();
        setIsLoading(false);
    };

    return (
        <button onClick={handleClick} type={type} className={darkButton ? 'dark-button' : 'light-button'} >
            {text}<div className='arrow-div'><FaArrowLeftLong/></div>
            {isLoading ? (<Spinner />) : ('')}
        </button>
    );
}