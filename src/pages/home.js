import ImageTextSplit from '../components/home/events/events';
import OurStory from '../components/home/ourStory/ourStory';
import ThankCard from '../components/home/thankCards/thankCard';
import LoanSteps from '../components/home/threeLevels/threeLevels';
import WelcomeTitle from '../components/home/welcomeTitle/welcomeTitle';
import './home.css'
import AxisOrderButton from '../components/home/axisOrderButton/axisOrderButton';





export default function Home() {
    return (
        <div>
            <WelcomeTitle />
            <AxisOrderButton />
            <ImageTextSplit />
            <OurStory />
            <ThankCard />
            <LoanSteps />
        </div>
    );
}
