import ImageTextSplit from '../components/home/events/events';
import OurStory from '../components/home/ourStory/ourStory';
import ThankCard from '../components/home/thankCards/thankCard';
import LoanSteps from '../components/home/threeLevels/threeLevels';
import WelcomeTitle from '../components/home/welcomeTitle/welcomeTitle';
import './home.css'
import Quastions from '../components/home/quastions/quastions';
import Details from '../components/home/details/details';
import HoleOverlay from '../components/home/circleHole/circleHole';
import ArticleButton from '../components/home/articleButton/articleButton';





export default function Home() {
    return (
        <div className="homepage-container">
            <img
                src="/images/background.jpg"
                alt="Background"
                className="hole-background-img"
            />

            <div className="content-overlay">
                <WelcomeTitle />
                <div className='grey-container'>
                    <div className="top-container"><ArticleButton /></div>
                    <ImageTextSplit />
                </div>
                <div className='white-bg-container'>
                    <div className='top-layer-container'><OurStory /></div>
                    <div className="top-container"><Quastions /></div>
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
