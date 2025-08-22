import React from "react";
import "./someGalleryPictures.css";
import CustomButton from "../../common/button/button";
import { useNavigate } from "react-router-dom";
import routes from '../../../constants/routes';



export default function SomeGalleryPictures({ images }) {
    const imagesList = [
        "/images/background.jpg",
        "/images/image4.png",
        "/images/Gallery6.jpg",
    ];

    const descriptionsList = [
        "כלים זהב",
        "כלים שחור ועץ",
        "זכוכיות",
    ];

    const imgs = images && images.length ? images.slice(0, 3) : imagesList;

    const navigate = useNavigate();

    return (
        <div className="img-body">
            <div className="image-grid">
                {imgs.map((src, i) => (
                    <div className="image-container" key={i}>
                        <div className="flip-card-inner">
                            <div className="flip-card-back">
                                {descriptionsList[i]}
                            </div>
                            <div className="flip-card-front">
                                <img src={src} alt={`image-${i}`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <PulseBox><p className="gradient-text">לצפייה באירועים קודמים:</p></PulseBox> */}
            <div className="button-div">
                <CustomButton text={'לצפייה באירועים קודמים'} onClick={() => { navigate(routes.gallery) }} darkButton={'true'} />
            </div>
        </div>
    );
}
