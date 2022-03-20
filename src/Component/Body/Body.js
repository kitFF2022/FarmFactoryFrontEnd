import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import './Body.css'
import Img1 from './img1.jpg';
import Img2 from './img2.jpg';

const images = [
    { url: Img1 },
    { url: Img2 },
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

class Body extends React.Component {
    render() {
        return (
            <Slideshow />
        );
    }
}

export default Body