import ImageTextSplit from '../components/home/events/events';
import OurStory from '../components/home/ourStory/ourStory';
import ThankCard from '../components/home/thankCards/thankCard';
import LoanSteps from '../components/home/threeLevels/threeLevels';
import WelcomeTitle from '../components/home/welcomeTitle/welcomeTitle';
import OrderForm from '../components/home/orderForm/orderForm';
import React, { useRef } from 'react';
import './home.css'
import AxisOrderButton from '../components/home/axisOrderButton/axisOrderButton';





export default function Home() {
    const bottomRef = useRef(null);
    return (
        <div>
            <WelcomeTitle bottomRef={bottomRef} />
            <AxisOrderButton/>
            <ImageTextSplit />
            <OurStory />
            <ThankCard />
            <LoanSteps />
            <div ref={bottomRef}><OrderForm /></div>
        </div>
    );
}
