import ImageTextSplit from '../components/home/events/events';
import OurStory from '../components/home/ourStory/ourStory';
import ThankCard from '../components/home/thankCards/thankCard';
import LoanSteps from '../components/home/threeLevels/threeLevels';
import WelcomeTitle from '../components/home/welcomeTitle/welcomeTitle';
import './home.css'
import AxisOrderButton from '../components/home/axisOrderButton/axisOrderButton';
import Quastions from '../components/home/quastions/quastions';
import Details from '../components/home/details/details';
import HoleOverlay from '../components/home/circleHole/circleHole';





export default function Home() {
    return (
        <div className="homepage-container">
            <img
                src="/images/background.jpg"
                alt="Background"
                className="hole-background-img"
            />

            <div className="content-overlay">
                <div className='white-bg-container'>
                    <WelcomeTitle />
                    <AxisOrderButton />
                    <ImageTextSplit />
                    <OurStory />
                    <Quastions />
                    <ThankCard />
                </div>
                <HoleOverlay />
                <div className='white-bg-container'>
                    <Details />
                    <LoanSteps />
                </div>
            </div>
        </div>

    );
}
