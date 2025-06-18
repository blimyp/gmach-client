import ImageTextSplit from '../components/home/events';
import OurStory from '../components/home/ourStory';
import ThankCard from '../components/home/thankCard';
import LoanSteps from '../components/home/threeLevels';
import WelcomeTitle from '../components/home/welcomeTitle';
import OrderForm from '../components/orderForm/orderForm';
import React, { useRef } from 'react';
import './home.css'





export default function Home() {
    const bottomRef = useRef(null);
    return (
        <div>
            <WelcomeTitle bottomRef={bottomRef} />
            <ImageTextSplit />
            <OurStory />
            <ThankCard />
            <LoanSteps />
            <div ref={bottomRef}><OrderForm /></div>
        </div>
    );
}
