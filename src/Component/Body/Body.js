import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './Body.css'
import Img1 from './img1.jpg';
import Img2 from './img2.jpg';
import Img3 from './img3.jpg';

const images = [
    { url: Img1 },
    { url: Img2 },
    { url: Img3 },
];

const Slideshow = () => {
    return (
        <div className="Slideshow">
            <SimpleImageSlider
                width={896}
                height={504}
                images={images}
                showBullets={true}
                showNavs={true}
                style={{ display: 'flex', margin: '0 auto', marginTop: '50px' }}
            />
        </div>
    )
}

const Hover = () => {
    return(
        <div className="Hover">
            <span><a>VR</a></span>
            <span>APP</span>
            <span>WEB</span>
        </div>
    )
}

const Description = () => {
    return (
        <div className="Description">
            <img class = "image" src="" alt="미리보기">
            </img>
            
        </div>
    )
}

class Body extends React.Component {
    render() {
        return (
            <div>
                <Slideshow />
                <Hover/>
                <Description/>
            </div>
        );
    }
}

export default Body