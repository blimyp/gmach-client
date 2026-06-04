import ThankCard from '../components/home/thankCards/thankCard';
import LoanSteps from '../components/home/threeLevels/threeLevels';
import FirstSection from '../components/home/firstSection/firstSection';
import './home.css';
import Quastions from '../components/home/quastions/quastions';
import Details from '../components/home/details/details';
import HoleOverlay from '../components/home/circleHole/circleHole';
import ArticleButton from '../components/home/articleButton/articleButton';
import SomeGalleryPictures from '../components/home/someGalleryPictures/someGalleryPictures';
import OrdersDatesCalender from '../components/home/calender/calender';
import CirclePopup from '../components/circlePopup/circlePopup';

export default function Home() {
    return (
        <div className="homepage-container">
            <img
                src="/images/background.jpg"
                alt="Background"
                className="hole-background-img"
            />

            <div className="content-overlay">
                <FirstSection />
                <div className='white-bg-container'>
                    <SomeGalleryPictures />
                    <Quastions />
                    <ArticleButton />
                    <ThankCard />
                </div>
                <HoleOverlay />
                <div className='white-bg-container'>
                    <OrdersDatesCalender />
                    <Details />
                    <LoanSteps />
                </div>
            </div>

            <CirclePopup />
        </div>
    );
}
